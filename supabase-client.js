/**
 * supabase-client.js
 *
 * Initializes the Supabase browser client.
 *
 * SETUP REQUIRED:
 *   Replace both placeholder values below with your Supabase project credentials.
 *   Find them at: Supabase Dashboard → Project Settings → API
 *
 *   SUPABASE_URL      — your project URL, e.g. https://abcxyzabc.supabase.co
 *   SUPABASE_ANON_KEY — your anon/public key, starts with eyJhbGci...
 *
 * Both values are safe to include in browser code.
 * Row Level Security on the database enforces data access rules.
 * Never put the service_role key in this file.
 */

const SUPABASE_URL      = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

if (
  SUPABASE_URL      === 'YOUR_SUPABASE_URL' ||
  SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY'
) {
  console.warn(
    '[CTB] supabase-client.js: Credentials not configured. ' +
    'Replace SUPABASE_URL and SUPABASE_ANON_KEY with your project values.'
  );
}

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
