import { createClient } from '@supabase/supabase-js';
import { env } from '~configs/config'

const supabase = createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_KEY
)

export {
    supabase
}