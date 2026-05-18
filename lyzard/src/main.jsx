import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import { supabase } from './lib/supabase'

import React from 'react';
import { LanguageProvider } from './lib/LanguageContext';

function AuthHandler({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if we have a session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup' || location.pathname.includes('access_token') || location.pathname.includes('type=')) {
          navigate('/dashboard', { replace: true });
        }
      } else if (location.pathname.includes('access_token') || location.pathname.includes('type=')) {
         // It's an auth callback but no session found (or parsing hasn't finished).
         // Actually supabase parses it quickly. If no session, go to login.
         navigate('/login', { replace: true });
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup' || location.pathname.includes('access_token') || location.pathname.includes('type=')) {
          navigate('/dashboard', { replace: true });
        }
      } else {
        if (location.pathname === '/dashboard') {
          navigate('/login', { replace: true });
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, location.pathname]);

  // If the path starts with access_token or type=recovery etc, show loading
  if (location.pathname.includes('access_token') || location.pathname.includes('type=')) {
    return <div className="min-h-screen flex items-center justify-center bg-background"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>;
  }

  return children;
}

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <HashRouter>
      <AuthHandler>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </AuthHandler>
    </HashRouter>
  </LanguageProvider>
);
