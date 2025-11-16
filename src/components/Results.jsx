export default function Results() {
  const toppers = [
    { name: "Student A", exam: "JEE Advanced", score: "AIR 1xx" },
    { name: "Student B", exam: "NEET", score: "6xx/720" },
    { name: "Student C", exam: "Boards", score: "96%" },
  ];

  return (
    <section id="results" className="py-16 sm:py-20 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Results & Achievements</h2>
        <p className="mt-2 text-center text-slate-600">Celebrating student success and consistency.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((t) => (
            <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-100 to-white grid place-content-center text-blue-700 text-3xl font-bold">🎓</div>
              <h3 className="mt-4 font-semibold text-slate-900">{t.name}</h3>
              <p className="text-slate-600">{t.exam}</p>
              <p className="text-blue-700 font-medium">{t.score}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900">Previous Year Highlights</h3>
          <ul className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-slate-700 list-disc list-inside">
            <li>Multiple selections in JEE Main & Advanced</li>
            <li>Excellent NEET scores with top ranks</li>
            <li>Board toppers with 95%+</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
