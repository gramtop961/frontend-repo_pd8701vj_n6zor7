import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Why from './components/Why'
import Results from './components/Results'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Facilities from './components/Facilities'
import Faculty from './components/Faculty'
import Admission from './components/Admission'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-slate-800">
      {/* SEO Headings for search intent */}
      <h1 className="sr-only">Motion Education – Banswara | Best Coaching in Banswara for JEE and NEET</h1>
      <p className="sr-only">JEE Coaching Banswara, NEET Coaching Banswara, Best Coaching Institute in Banswara Rajasthan</p>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Why />
        <Results />
        <Gallery />
        <Testimonials />
        <Facilities />
        <Faculty />
        <Admission />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App