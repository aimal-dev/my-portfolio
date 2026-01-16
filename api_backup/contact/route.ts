import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Get current DB
    const { data: dbData, error: dbError } = await supabaseAdmin
      .from('settings')
      .select('content')
      .eq('id', 'main_config')
      .single();

    if (dbError) throw dbError;

    const db = dbData.content;
    if (!db.messages) db.messages = [];

    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    db.messages.push(newMessage);

    // Save back
    const { error: saveError } = await supabaseAdmin
      .from('settings')
      .upsert({ id: 'main_config', content: db }, { onConflict: 'id' });

    if (saveError) throw saveError;

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('API Contact Error:', message);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
