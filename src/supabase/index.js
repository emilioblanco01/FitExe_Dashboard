
import { createClient } from '@supabase/supabase-js'

/**
 * @description Supabase client with the url and key from the .env file
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_APIKEY_SUPABASE;
export const supabase = createClient(supabaseUrl, supabaseKey);
