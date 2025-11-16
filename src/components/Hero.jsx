import { Phone, FileDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="pt-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 mb-4">Best Coaching in Banswara</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Motion Education – Banswara
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Best Coaching for Class 9 to 12, JEE, NEET, Pre-Foundation & Competitive Exams
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#admission" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700">Enroll Now</a>
            <a href="tel:+910000000000" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"><Phone className="h-5 w-5"/>Call Us</a>
            <a href="#brochure" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"><FileDown className="h-5 w-5"/>Download Brochure</a>
          </div>
          <p className="mt-3 text-sm text-slate-500">JEE Coaching Banswara • NEET Coaching Banswara • Pre-Foundation</p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-slate-200">
            <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc3Jvb218ZW58MHwwfHx8MTc2MzMxMTA3M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Classroom" className="w-full h-full object-cover"/>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block w-40 h-40 bg-blue-100 rounded-2xl -z-10"/>
        </div>
      </div>
    </section>
  );
}
