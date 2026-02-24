import { createClient } from '@supabase/supabase-js';

// NOTE: In a real environment, these would come from process.env
// For this demo, we will check if they exist, otherwise fallback to mock mode in the API service.
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;
