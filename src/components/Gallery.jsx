export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551590192-8070a16d9f67?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1740&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Gallery</h2>
        <p className="mt-2 text-center text-slate-600">Classrooms, events, tests and award ceremonies.</p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <img key={i} src={src} alt="Motion Education Banswara" className="rounded-lg object-cover aspect-[4/3] w-full ring-1 ring-slate-200" />
          ))}
        </div>
      </div>
    </section>
  );
}
