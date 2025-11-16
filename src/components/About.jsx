export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About Motion Education – Banswara</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Motion Education Banswara is a trusted coaching institute dedicated to guiding students of Classes 6–12, JEE (Main+Advanced), NEET, and various competitive exams. With experienced faculty, a structured curriculum, and a results-focused approach, we nurture strong fundamentals and exam excellence.
            </p>
            <p className="mt-3 text-slate-700">
              Our mission is to empower students through concept clarity, regular practice, and personalized mentorship. We value integrity, hard work, and student-centric learning.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img className="rounded-lg shadow ring-1 ring-slate-200 object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=1740&auto=format&fit=crop" alt="Institute building"/>
            <img className="rounded-lg shadow ring-1 ring-slate-200 object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1740&auto=format&fit=crop" alt="Classroom"/>
            <img className="rounded-lg shadow ring-1 ring-slate-200 object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1740&auto=format&fit=crop" alt="Library"/>
            <img className="rounded-lg shadow ring-1 ring-slate-200 object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1740&auto=format&fit=crop" alt="Students"/>
          </div>
        </div>
      </div>
    </section>
  );
}
