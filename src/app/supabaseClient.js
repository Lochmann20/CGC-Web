
// src/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and anon key
const supabaseUrl = 'https://ujwvsfwvpqnwmozubigr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqd3ZzZnd2cHFud21venViaWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMTU1NzUsImV4cCI6MjAyNDc5MTU3NX0.YxIBPPOx9aRt8_EiQpCyH_MH1dHvCM83z3i7dtWyfGY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;


  