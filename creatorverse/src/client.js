import { createClient } from '@supabase/supabase-js'

const URL = 'https://csjqzknktiobftcwuqnn.supabase.co'
const API_KEY = 'sb_publishable_QSITYs5W_zewxDTXoB20Rw_lqH4gLT8'

export const supabase = createClient(URL, API_KEY)
