import { ShieldCheck, BookOpenCheck, Users2, Award } from "lucide-react";

const features = [
  { title: "Experienced Faculty", desc: "Qualified mentors with years of teaching expertise.", icon: Users2 },
  { title: "Weekly Tests & Doubts", desc: "Regular assessment with dedicated doubt-solving sessions.", icon: BookOpenCheck },
  { title: "Top Results", desc: "Consistent selections in JEE & NEET with strong board results.", icon: Award },
  { title: "Small Batch Size", desc: "Personal attention for every student.", icon: ShieldCheck },
  { title: "Best Study Material", desc: "Curated notes, question banks and assignments.", icon: ShieldCheck },
];

export default function Why() {
  return (
    <section id="why" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Why Choose Us</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-700 grid place-content-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="text-slate-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
