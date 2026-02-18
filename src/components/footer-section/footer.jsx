import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Our Team", href: "/team" },
  { label: "Career",   href: "/career" },
]

const SOCIAL_LINKS = [
  { icon: Facebook,  href: "#", label: "Facebook" },
  { icon: Twitter,   href: "#", label: "Twitter" },
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

const CONTACT_ITEMS = [
  { icon: MapPin, text: "CureZip Pharma Private Limited, Gurugram, Haryana, India" },
  { icon: Phone,  text: "+91-9431943147" },
  { icon: Mail,   text: "contactus@curezip.in" },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1 flex flex-col">
            <div className="relative h-12 w-36 mb-5">
              <Image
                src="/Curezip-logo.png"
                alt="CureZip Pharma"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              Making world-class affordable medicines accessible to everyone.{" "}
              <span className="font-medium text-slate-700">Caring Beyond Healthcare.</span>
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:border-[#0B5ED7] hover:text-[#0B5ED7] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-500 hover:text-[#0B5ED7] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="h-4 w-4 text-[#0B5ED7] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-500 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-5">Newsletter</h3>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              Stay updated with our latest products and news.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus-visible:ring-[#0B5ED7] text-sm"
              />
              <Button className="bg-[#0B5ED7] hover:bg-[#0846a5] text-white text-sm font-semibold rounded-xl w-full">
                Subscribe
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} CureZip Pharma Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy",   href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Sitemap",          href: "/sitemap" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="text-xs text-slate-400 hover:text-[#0B5ED7] transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
