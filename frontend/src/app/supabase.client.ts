import { createClient } from '@supabase/supabase-js';
import { environment } from './enviorments/enviorment';

export const supabase = createClient(
  environment.supabase.url,
  environment.supabase.anonKey
);
