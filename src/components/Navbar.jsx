import { Menu, Phone, FileDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#why", label: "Why Us" },
    { href: "#results", label: "Results" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faculty", label: "Faculty" },
    { href: "#admission", label: "Admission" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded bg-blue-600 text-white grid place-content-center font-bold">M</div>
          <div>
            <p className="text-slate-900 font-semibold leading-tight">Motion Education</p>
            <p className="text-xs text-slate-500 -mt-1">Banswara, Rajasthan</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-700 hover:text-blue-700 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#admission" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">Enroll Now</a>
          <a href="tel:+910000000000" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"><Phone className="h-4 w-4"/>Call Us</a>
          <a href="#brochure" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"><FileDown className="h-4 w-4"/>Brochure</a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-md border border-slate-300 text-slate-700">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-3 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-700 hover:text-blue-700">
                {item.label}
              </a>
            ))}
            <a href="#admission" className="col-span-2 inline-flex justify-center px-4 py-2 rounded-md bg-blue-600 text-white">Enroll Now</a>
          </nav>
        </div>
      )}
    </header>
  );
}
