import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
    }

    const { data: feedback, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return NextResponse.json(feedback || []);
  } catch (error: any) {
    console.error("Supabase GET Error:", error);
    return NextResponse.json({ 
      error: "Failed to fetch feedback", 
      message: error.message || "Unknown error" 
    }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
    }

    const body = await req.json();
    
    const feedbackData = {
      client_name: body.client_name,
      project_name: body.project_name,
      rating: body.rating,
      comment: body.comment,
      status: 'pending'
    };

    const { data, error } = await supabase
      .from('feedback')
      .insert([feedbackData])
      .select();

    if (error) throw error;
    return NextResponse.json(data ? data[0] : {});
  } catch (error: any) {
    console.error("Supabase POST Error:", error);
    return NextResponse.json({ 
      error: "Failed to submit feedback", 
      message: error.message || "Unknown error" 
    }, { status: 500 });
  }
}
