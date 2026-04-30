import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface text-gray-400 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="text-xl font-bold tracking-wider text-white">
              AETHEL<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Engineering premium digital systems that drive growth and maximize client conversion worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-accent transition-colors">High-Performance Websites</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Business Automation</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Digital Growth Optimization</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Custom Web Applications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/work" className="hover:text-accent transition-colors">Our Work</Link></li>
              <li><Link href="#pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link href="#process" className="hover:text-accent transition-colors">Process</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: hello@aethelsolutions.com</li>
              <li>WhatsApp: +91 944 371 3950</li>
              <li>Location: Global (India + International)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p>&copy; {currentYear} Aethel Solutions. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
