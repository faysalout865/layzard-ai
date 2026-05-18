import { getAccessToken } from './supabase';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

/**
 * Core fetcher — automatically attaches the Supabase Bearer token.
 * Has a 180-second timeout to handle long AI generation requests.
 */
async function apiFetch(path, options = {}) {
  const token = await getAccessToken();

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  // Long timeout for AI generation (can take 60-120 seconds)
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 300_000); // 5 minutes

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: res.statusText }));
      const errorMessage = err.message || err.error || 'API Error';
      throw Object.assign(new Error(errorMessage), { status: res.status, data: err });
    }

    return res.json();
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      throw new Error('Request timed out after 3 minutes. The AI is taking too long — try a simpler prompt.');
    }
    if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
      throw new Error('Cannot reach the server. Make sure the backend is running on http://localhost:8000');
    }
    throw err;
  }
}


// ─── Auth ────────────────────────────────────────────────────────────────────

export const apiAuth = {
  /** Sync the logged-in user with the Laravel DB */
  sync: () => apiFetch('/v1/auth/sync', { method: 'POST' }),

  /** Get current user profile from backend */
  me: () => apiFetch('/v1/auth/me'),
};

// ─── Projects ────────────────────────────────────────────────────────────────

export const apiProjects = {
  getProjects:    ()          => apiFetch('/v1/projects'),
  getProject:     (id)        => apiFetch(`/v1/projects/${id}`),
  createProject:  (data)      => apiFetch('/v1/projects', { method: 'POST', body: JSON.stringify(data) }),
  updateProject:  (id, data)  => apiFetch(`/v1/projects/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteProject:  (id)        => apiFetch(`/v1/projects/${id}`, { method: 'DELETE' }),
  getVersions:    (id)        => apiFetch(`/v1/projects/${id}/versions`),
  getMessages:    (id)        => apiFetch(`/v1/projects/${id}/messages`),
  saveMessages:   (id, msgs)  => apiFetch(`/v1/projects/${id}/messages`, {
    method: 'POST',
    body: JSON.stringify({ messages: msgs }),
  }),
};

// ─── Generation ──────────────────────────────────────────────────────────────

export const apiGenerate = {
  /**
   * First generation from a text prompt.
   * Returns { html, template, project_id, version_id, fields, credits_left }
   */
  generate: (prompt, projectId = null) =>
    apiFetch('/v1/generate', {
      method: 'POST',
      body: JSON.stringify({ prompt, project_id: projectId }),
    }),

  /**
   * Iterate on an existing page.
   * Returns { html, template, project_id, version_id, fields, changed, credits_left }
   */
  iterate: (projectId, versionId, changes) =>
    apiFetch('/v1/iterate', {
      method: 'POST',
      body: JSON.stringify({ project_id: projectId, version_id: versionId, changes }),
    }),
};

// ─── Code Generation (full single-file HTML) ─────────────────────────────────

export const apiCodeGenerate = {
  generate: (prompt, projectId = null) =>
    apiFetch('/v1/code-generate', {
      method: 'POST',
      body: JSON.stringify({ prompt, project_id: projectId }),
    }),

  iterate: (projectId, versionId, changes) =>
    apiFetch('/v1/code-iterate', {
      method: 'POST',
      body: JSON.stringify({ project_id: projectId, version_id: versionId, changes }),
    }),
};

// ─── Credits ─────────────────────────────────────────────────────────────────

export const apiCredits = {
  getCredits: () => apiFetch('/v1/credits'),
};

// ─── Templates ───────────────────────────────────────────────────────────────

export const apiTemplates = {
  getTemplates: () => apiFetch('/v1/templates'),
};

// ─── Health ──────────────────────────────────────────────────────────────────

export const apiHealth = {
  check: () => apiFetch('/health'),
};

// ─── Subscriptions ───────────────────────────────────────────────────────────

export const apiSubscription = {
  purchase: (planId, isYearly) =>
    apiFetch('/v1/subscription/purchase', {
      method: 'POST',
      body: JSON.stringify({ plan_id: planId, is_yearly: isYearly }),
    }),
};
