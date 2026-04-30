import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const TESTIMONIALS_FILE = path.join(process.cwd(), "testimonials.json");

// Initial dummy data to keep the site looking good
const initialData = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "CTO, Nexus Corp",
    content: "The performance shift was immediate. Our LCP scores dropped by 60%, and lead conversion skyrocketed within the first week of deployment.",
    avatar: "AR",
    verified: true,
    approved: true,
    stars: 5,
    date: "2024-04-30"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Founder, Zenith AI",
    content: "Aethel didn't just build a website; they built a revenue engine. The automation workflows have saved us 20+ hours of manual data entry every week.",
    avatar: "SC",
    verified: true,
    approved: true,
    stars: 5,
    date: "2024-04-28"
  }
];

if (!fs.existsSync(TESTIMONIALS_FILE)) {
  fs.writeFileSync(TESTIMONIALS_FILE, JSON.stringify(initialData, null, 2));
}

export async function GET() {
  try {
    const data = fs.readFileSync(TESTIMONIALS_FILE, "utf-8");
    const testimonials = JSON.parse(data);
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json({ error: "Failed to read testimonials" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const newEntry = await req.json();
    const data = fs.readFileSync(TESTIMONIALS_FILE, "utf-8");
    const testimonials = JSON.parse(data);
    
    const entryWithId = {
      ...newEntry,
      id: Date.now(),
      approved: false, // Must be approved by admin
      verified: false,
      date: new Date().toISOString().split("T")[0],
      avatar: newEntry.name.substring(0, 2).toUpperCase()
    };

    testimonials.push(entryWithId);
    fs.writeFileSync(TESTIMONIALS_FILE, JSON.stringify(testimonials, null, 2));
    
    return NextResponse.json(entryWithId);
  } catch (error) {
    return NextResponse.json({ error: "Failed to save feedback" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const { id, approved, verified } = await req.json();
    const data = fs.readFileSync(TESTIMONIALS_FILE, "utf-8");
    let testimonials = JSON.parse(data);
    
    testimonials = testimonials.map((t: any) => 
      t.id === id ? { ...t, approved: approved !== undefined ? approved : t.approved, verified: verified !== undefined ? verified : t.verified } : t
    );

    fs.writeFileSync(TESTIMONIALS_FILE, JSON.stringify(testimonials, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const data = fs.readFileSync(TESTIMONIALS_FILE, "utf-8");
    let testimonials = JSON.parse(data);
    
    testimonials = testimonials.filter((t: any) => t.id !== id);

    fs.writeFileSync(TESTIMONIALS_FILE, JSON.stringify(testimonials, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
