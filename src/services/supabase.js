import { createClient } from "@supabase/supabase-js"

export const supabaseUrl = "https://cmnqsdvwrsffjainyrnl.supabase.co"
const supabaseKey = "sb_publishable_QOrKohqFh_O0RFqoU9UnHQ_mbmCNnn3"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
