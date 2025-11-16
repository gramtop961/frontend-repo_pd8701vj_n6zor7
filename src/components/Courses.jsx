import { GraduationCap, FlaskConical, Atom, School, BookOpen, Medal, Layers3, Sparkles } from "lucide-react";

const items = [
  { title: "Class 9 Coaching", icon: School },
  { title: "Class 10 Coaching", icon: BookOpen },
  { title: "Class 11 (Science/Maths/Bio)", icon: GraduationCap },
  { title: "Class 12 (Science/Maths/Bio)", icon: GraduationCap },
  { title: "JEE (Main + Advanced) Coaching", icon: Atom },
  { title: "NEET Coaching", icon: FlaskConical },
  { title: "Pre-Foundation (6th–8th)", icon: Layers3 },
  { title: "Competitive Exams (Optional)", icon: Sparkles },
];

export default function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-20 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Courses Offered</h2>
        <p className="mt-2 text-center text-slate-600">Structured programs with concept-building, tests, and mentorship.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, icon: Icon }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-700 grid place-content-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900 leading-snug">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
