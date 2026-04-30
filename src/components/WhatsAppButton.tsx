"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919443713950?text=Hello%20Aethel%20Solutions,%20I'm%20interested%20in%20scaling%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group animate-pulse hover:animate-none"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-sm font-semibold whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
