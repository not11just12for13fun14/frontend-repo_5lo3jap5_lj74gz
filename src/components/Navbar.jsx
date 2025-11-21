import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Why Faunanode', href: '#focus' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Discord', href: '#discord' },
  ]

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl transition-all ${scrolled ? 'drop-shadow-[0_10px_30px_rgba(119,221,119,0.15)]' : ''}`}>
      <div className="relative rounded-[18px] border border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="absolute inset-0 rounded-[18px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        <nav className="relative flex items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-[12px] bg-gradient-to-br from-emerald-400/90 to-emerald-500 shadow-[0_0_25px_rgba(119,221,119,0.55)]" />
            <span className="text-white font-semibold tracking-wide">Faunanode</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors text-sm">
                {item.label}
              </a>
            ))}
            <a href="#discord" className="inline-flex items-center gap-2 bg-emerald-400/90 hover:bg-emerald-400 text-emerald-950 font-semibold px-4 py-2 rounded-[14px] transition-colors shadow-[0_0_20px_rgba(119,221,119,0.35)]">
              <DiscordIcon className="h-4 w-4" />
              Join Discord
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 p-2 rounded-[12px] hover:bg-white/10">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/90 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#discord" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-emerald-400/90 hover:bg-emerald-400 text-emerald-950 font-semibold px-4 py-2 rounded-[14px] transition-colors shadow-[0_0_20px_rgba(119,221,119,0.35)]">
              <DiscordIcon className="h-4 w-4" />
              Join Discord
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

function DiscordIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.369A18.094 18.094 0 0 0 16.558 3c-.2.36-.43.85-.59 1.234a16.326 16.326 0 0 0-3.936 0A8.26 8.26 0 0 0 11.442 3c-1.36.197-2.68.548-3.76 1.039C3.724 6.548 3 10.084 3 13.516c1.24 1.698 3.62 2.86 3.62 2.86.3-.415.57-.858.8-1.324-1.05-.39-1.96-1.086-2.52-1.93.21.15.44.284.69.403 1.73.817 3.68 1.275 5.66 1.275s3.93-.458 5.66-1.276c.25-.118.48-.252.69-.402-.56.843-1.47 1.538-2.52 1.928.23.467.5.91.8 1.324 0 0 2.38-1.161 3.62-2.86 0-3.432-.724-6.968-3.125-9.147ZM9.9 13.1c-.62 0-1.12-.6-1.12-1.34 0-.739.5-1.339 1.12-1.339.62 0 1.12.6 1.12 1.34 0 .739-.5 1.339-1.12 1.339Zm4.2 0c-.62 0-1.12-.6-1.12-1.34 0-.739.5-1.339 1.12-1.339.62 0 1.12.6 1.12 1.34 0 .739-.5 1.339-1.12 1.339Z" />
    </svg>
  )
}

export default Navbar
