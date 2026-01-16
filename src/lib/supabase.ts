import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Helper to create client safely
const createSafeClient = (url?: string, key?: string) => {
  if (!url || !key) return undefined;
  try {
    return createClient(url, key);
  } catch (e) {
    console.warn('Supabase client failed to initialize', e);
    return undefined;
  }
};

// Client for public/client-side use
export const supabase = createSafeClient(supabaseUrl, supabaseAnonKey);

// Client for admin/server-side use (bypasses RLS)
// Cast to any to avoid strict type checks in other files assuming it's always defined
export const supabaseAdmin = createSafeClient(supabaseUrl, supabaseServiceKey) as any;
