export default function Admission() {
  const steps = [
    { title: "Fill Registration Form", desc: "Submit basic details online or at the office." },
    { title: "Counselling & Batch Selection", desc: "Choose your course and suitable batch timing." },
    { title: "Fee Payment", desc: "Pay online/offline. Scholarships available." },
    { title: "Start Classes", desc: "Get study material and join regular sessions." },
  ];

  return (
    <section id="admission" className="py-16 sm:py-20 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Admission Process</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-blue-600 text-white grid place-content-center font-semibold">{i+1}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#" className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Online Registration</a>
          <a href="#" className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">Download Offline Form</a>
        </div>
      </div>
    </section>
  );
}
