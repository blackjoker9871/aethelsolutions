import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import LeadForm from "@/components/LeadForm";
import StandardContactForm from "@/components/StandardContactForm";
import TechStack from "@/components/TechStack";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Aethel Solutions | High-Performance Websites & Automation",
  description: "We build high-performance websites and systems that help businesses attract, convert, and grow globally.",
};

// This caches the page for 60 seconds but updates it in the background
// This makes navigation feel instantaneous (Full ISR)
export const revalidate = 60;

export default async function Home() {
  // Fetch approved testimonials on the server
  let approvedTestimonials = [];
  try {
    const { data } = await supabase
      .from('feedback')
      .select('*')
      .eq('status', 'approved')
      .order('created_at', { ascending: false });
    approvedTestimonials = data || [];
  } catch (error) {
    console.error("Server-side fetch error:", error);
  }

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <LeadForm />
      <TechStack />
      <Services />
      <Portfolio />
      <Process />
      <Trust initialTestimonials={approvedTestimonials} />
      <Pricing />
      <WhyChooseUs />
      <FAQ />
      <StandardContactForm />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
