import React, { useEffect, useState } from 'react';
import { DashboardV2 } from '../components/dashboard/DashboardV2';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { apiAuth } from '../lib/api';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On mount: check current session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) {
        navigate('/');
        return;
      }
      setUser(session.user);
      // Sync user with backend (fire & forget)
      apiAuth.sync().catch(console.warn);
      setLoading(false);
    });

    // Listen for auth state changes (e.g. token refresh, sign-out)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/');
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-white/60 text-sm">Loading your workspace…</p>
        </div>
      </div>
    );
  }

  return <DashboardV2 onLogout={handleLogout} user={user} />;
};

export default DashboardPage;
