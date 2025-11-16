export default function Faculty() {
  const items = [
    { name: "Dr. R. Sharma", subject: "Physics", about: "10+ years experience in JEE/NEET Physics" },
    { name: "Ms. P. Mehta", subject: "Chemistry", about: "Expert in Organic & Physical Chemistry" },
    { name: "Mr. A. Jain", subject: "Mathematics", about: "IIT alumnus with focus on problem solving" },
    { name: "Ms. S. Gupta", subject: "Biology", about: "NEET specialist with proven results" },
  ];

  return (
    <section id="faculty" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Our Faculty</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-center">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-100 to-white grid place-content-center text-blue-700 text-3xl font-bold">👩‍🏫</div>
              <h3 className="mt-3 font-semibold text-slate-900">{t.name}</h3>
              <p className="text-slate-600">{t.subject}</p>
              <p className="text-slate-600 text-sm mt-1">{t.about}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
