import { MonitorSmartphone, Library, NotebookPen, UserRoundCheck, HelpCircle } from "lucide-react";

const items = [
  { title: "Smart Classrooms", icon: MonitorSmartphone },
  { title: "Library", icon: Library },
  { title: "Study Material", icon: NotebookPen },
  { title: "Personal Mentorship", icon: UserRoundCheck },
  { title: "Doubt Solving", icon: HelpCircle },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Facilities</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map(({ title, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-blue-600/10 text-blue-700 grid place-content-center mb-3">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
