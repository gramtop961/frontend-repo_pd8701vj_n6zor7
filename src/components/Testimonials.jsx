export default function Testimonials() {
  const items = [
    { name: "Rahul Sharma", text: "Excellent faculty and very supportive environment. My concepts became crystal clear." },
    { name: "Priya Patel", text: "Weekly tests and doubt sessions helped me track my progress. Highly recommended!" },
    { name: "Aman Verma", text: "Best coaching in Banswara for NEET and JEE. Study material is top-notch." },
    { name: "Sneha Gupta", text: "Small batches and personal attention made a big difference to my scores." },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">What Students Say</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-5xl">“”</div>
              <p className="text-slate-700">{t.text}</p>
              <p className="mt-3 font-semibold text-slate-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
