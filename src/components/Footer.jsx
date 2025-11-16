export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded bg-blue-600 text-white grid place-content-center font-bold">M</div>
            <p className="font-semibold">Motion Education – Banswara</p>
          </div>
          <p className="mt-3 text-sm text-slate-400">Best Coaching in Banswara for Classes 6–12, JEE, NEET & Competitive Exams.</p>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="#courses" className="hover:text-white">Courses</a></li>
            <li><a href="#results" className="hover:text-white">Results</a></li>
            <li><a href="#admission" className="hover:text-white">Admission</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Social</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>
        <div className="text-sm text-slate-400">
          <p>Phone: +91 00000 00000</p>
          <p>Email: info@motionbanswara.in</p>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Motion Education Banswara. Made for Motion Education Banswara.
      </div>
    </footer>
  );
}
