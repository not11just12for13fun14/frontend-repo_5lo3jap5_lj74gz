import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1712]/80 via-[#0f1712]/90 to-[#1a2e22]/95" />
      </div>

      {/* Decorative nature grid */}
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(120,255,167,0.2),transparent_40%),radial-gradient(600px_circle_at_100%_100%,rgba(120,255,167,0.15),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(119,221,119,0.25)]"
        >
          Faunanode: The Ecosystem of Performance.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
        >
          Premium hosting for Minecraft & Hytale. Built for speed, rooted in reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex items-center justify-center"
        >
          <a
            href="#discord"
            className="group inline-flex items-center gap-3 rounded-[16px] bg-emerald-400/90 px-6 py-4 font-semibold text-emerald-950 shadow-[0_0_35px_rgba(119,221,119,0.45)] transition hover:bg-emerald-400"
          >
            <DiscordIcon className="h-5 w-5" />
            Get Ready for Launch — Join Discord
            <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function DiscordIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.369A18.094 18.094 0 0 0 16.558 3c-.2.36-.43.85-.59 1.234a16.326 16.326 0 0 0-3.936 0A8.26 8.26 0 0 0 11.442 3c-1.36.197-2.68.548-3.76 1.039C3.724 6.548 3 10.084 3 13.516c1.24 1.698 3.62 2.86 3.62 2.86.3-.415.57-.858.8-1.324-1.05-.39-1.96-1.086-2.52-1.93.21.15.44.284.69.403 1.73.817 3.68 1.275 5.66 1.275s3.93-.458 5.66-1.276c.25-.118.48-.252.69-.402-.56.843-1.47 1.538-2.52 1.928.23.467.5.91.8 1.324 0 0 2.38-1.161 3.62-2.86 0-3.432-.724-6.968-3.125-9.147ZM9.9 13.1c-.62 0-1.12-.6-1.12-1.34 0-.739.5-1.339 1.12-1.339.62 0 1.12.6 1.12 1.34 0 .739-.5 1.339-1.12 1.339Zm4.2 0c-.62 0-1.12-.6-1.12-1.34 0-.739.5-1.339 1.12-1.339.62 0 1.12.6 1.12 1.34 0 .739-.5 1.339-1.12 1.339Z" />
    </svg>
  )
}

export default Hero
