import { supabaseAdmin } from './supabase';
import fs from 'fs/promises';
import path from 'path';

export async function syncToSupabase() {
  try {
    const DB_PATH = path.join(process.cwd(), 'src', 'data', 'db.json');
    const fileData = await fs.readFile(DB_PATH, 'utf-8');
    const dbContent = JSON.parse(fileData);

    // This will work if you have a table named 'portfolio' with a JSONB column 'data' and an 'id' column
    // For now, let's just make sure the user knows they need the table
    const { error } = await supabaseAdmin
      .from('settings')
      .upsert({ id: 'main_config', content: dbContent }, { onConflict: 'id' });

    if (error) {
      console.error("Supabase sync error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Migration error:", errorMessage);
    return { success: false, error: errorMessage };
  }
}
