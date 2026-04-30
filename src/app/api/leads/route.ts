import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
    }

    const { data: leads, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    return NextResponse.json(leads || []);
  } catch (error: any) {
    console.error("Supabase GET Error:", error);
    return NextResponse.json({ 
      error: "Failed to fetch leads", 
      message: error.message || "Unknown error" 
    }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
    }

    const newLead = await req.json();
    
    const leadData = {
      name: newLead.name,
      email: newLead.email,
      phone: newLead.phone,
      message: newLead.message,
      company: newLead.company || "Direct Individual",
      status: "New",
      date: new Date().toISOString().split("T")[0],
    };

    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select();

    if (error) throw error;
    
    return NextResponse.json(data ? data[0] : {});
  } catch (error: any) {
    console.error("Supabase POST Error:", error);
    return NextResponse.json({ 
      error: "Failed to save lead", 
      message: error.message || "Unknown error" 
    }, { status: 500 });
  }
}
