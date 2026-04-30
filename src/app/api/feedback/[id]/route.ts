import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status } = await req.json();

    const { data, error } = await supabase
      .from('feedback')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;
    return NextResponse.json(data ? data[0] : {});
  } catch (error) {
    return NextResponse.json({ error: "Failed to update feedback" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { error } = await supabase
      .from('feedback')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return NextResponse.json({ message: "Feedback deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete feedback" }, { status: 500 });
  }
}
