import { motion } from 'framer-motion'

function DiscordPromo() {
  return (
    <section id="discord" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[22px] p-8 md:p-10 bg-gradient-to-r from-emerald-300 to-emerald-400 text-emerald-950"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_200px_at_0%_0%,rgba(255,255,255,0.35),transparent_60%)]" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Join the Ecosystem</h3>
              <p className="mt-1 md:mt-2 text-emerald-950/80">Exclusive discounts and launch promotions await in our Discord.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-[14px] bg-white px-5 py-3 font-semibold text-[#0f1712] hover:bg-white/90 transition">
              <DiscordIcon className="h-5 w-5" />
              Join Discord
            </a>
          </div>
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

export default DiscordPromo
