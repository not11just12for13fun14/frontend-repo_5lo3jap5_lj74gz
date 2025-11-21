import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Focus from './components/Focus'
import Features from './components/Features'
import About from './components/About'
import DiscordPromo from './components/DiscordPromo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0f1712] text-white">
      {/* Forest gradient background with subtle motifs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(119,221,119,0.07),transparent_60%),radial-gradient(800px_400px_at_90%_90%,rgba(119,221,119,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1712] via-[#112017] to-[#1a2e22]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'g\' x1=\'0\' y1=\'0\' x2=\'1\' y2=\'1\'%3E%3Cstop stop-color=\'%2377DD77\' stop-opacity=\'0.3\'/%3E%3Cstop offset=\'1\' stop-color=\'%230f1712\' stop-opacity=\'0\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=\'M0 80 C40 70, 60 40, 80 0 S120 70, 160 80 S120 120, 80 160 S40 90, 0 80\' fill=\'none\' stroke=\'url(%23g)\' stroke-width=\'2\' stroke-linecap=\'round\'/%3E%3C/svg%3E')]" />
      </div>

      <Navbar />
      <main className="pt-24">
        <Hero />
        <Focus />
        <Features />
        <About />
        <DiscordPromo />
        <Footer />
      </main>
    </div>
  )
}

export default App
