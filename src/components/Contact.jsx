import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Location & Contact</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-blue-700 mt-0.5"/>Banswara, Rajasthan</li>
              <li className="flex items-start gap-3"><Phone className="h-5 w-5 text-blue-700 mt-0.5"/><a href="tel:+910000000000">+91 00000 00000</a></li>
              <li className="flex items-start gap-3"><Mail className="h-5 w-5 text-blue-700 mt-0.5"/><a href="mailto:info@motionbanswara.in">info@motionbanswara.in</a></li>
              <li className="flex items-start gap-3"><MessageCircle className="h-5 w-5 text-green-600 mt-0.5"/><a href="https://wa.me/910000000000" target="_blank" rel="noreferrer">WhatsApp Us</a></li>
            </ul>
            <div className="mt-6">
              <a href="tel:+910000000000" className="inline-block px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Call Now</a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow ring-1 ring-slate-200">
            <iframe title="Motion Education Banswara Map" src="https://www.google.com/maps?q=Banswara%2C%20Rajasthan&output=embed" className="w-full h-[320px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
      </div>
    </section>
  );
}
