import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kmouhmywtoumbpwyirci.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imttb3VobXl3dG91bWJwd3lpcmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwODkxNzksImV4cCI6MjAxMzY2NTE3OX0.j7PTzj5RuYMU1fwizn8GP_NpQtEil7vhEEgpmOaGudk'

const supabase = createClient(supabaseUrl, supabaseKey)

export const getRooms = async () => await supabase.from('rooms').select('*')

export const createRoom = async (label) =>
  await supabase.from('rooms').insert([{ label }]).select('*')
