export default function FeeTable() {
  const rows = [
    { course: "Class 9", fee: "₹35,000", duration: "1 Year" },
    { course: "Class 10", fee: "₹40,000", duration: "1 Year" },
    { course: "Class 11 JEE/NEET", fee: "₹70,000", duration: "1 Year" },
    { course: "Class 12 JEE/NEET", fee: "₹75,000", duration: "1 Year" },
    { course: "Dropper (JEE/NEET)", fee: "₹80,000", duration: "1 Year" },
  ];

  return (
    <section id="fees" className="py-16 sm:py-20 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Fee Structure</h2>
        <p className="text-center text-slate-600 mt-2">Indicative fees. Contact office for latest offers and scholarships.</p>
        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 bg-white rounded-xl overflow-hidden shadow">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Course</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Fee</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((r) => (
                <tr key={r.course}>
                  <td className="px-6 py-4 text-slate-900 font-medium">{r.course}</td>
                  <td className="px-6 py-4 text-slate-700">{r.fee}</td>
                  <td className="px-6 py-4 text-slate-700">{r.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
