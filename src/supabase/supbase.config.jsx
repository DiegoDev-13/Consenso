import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
const supabasekey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabasekey)