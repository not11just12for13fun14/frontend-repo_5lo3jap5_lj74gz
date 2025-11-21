import { motion } from 'framer-motion'

function Focus() {
  return (
    <section id="focus" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(500px_300px_at_20%_0%,rgba(119,221,119,0.10),transparent_60%),radial-gradient(500px_300px_at_80%_100%,rgba(119,221,119,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Optimized specifically for the block-building giants.</h2>
          <p className="mt-3 text-white/70">Minecraft and Hytale, tuned like a race car and rooted like an ancient tree.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard accent="emerald">
            <h3 className="text-2xl font-semibold text-white">Minecraft</h3>
            <p className="mt-2 text-white/70">Low-latency networking, optimized JVM flags, blazing single-core performance, and auto-backups.</p>
          </GlassCard>
          <GlassCard accent="cyan">
            <h3 className="text-2xl font-semibold text-white">Hytale</h3>
            <p className="mt-2 text-white/70">Ready for the next-gen sandbox with tuned containers, high I/O storage, and resilient orchestration.</p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

function GlassCard({ children, accent = 'emerald' }) {
  const ringColor = accent === 'emerald' ? 'ring-emerald-300/40' : 'ring-cyan-300/40'
  const glow = accent === 'emerald' ? 'shadow-[0_0_40px_rgba(119,221,119,0.20)]' : 'shadow-[0_0_40px_rgba(34,211,238,0.20)]'
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative overflow-hidden rounded-[22px] bg-white/5 backdrop-blur-xl border border-white/10 ${glow} ring-1 ${ringColor} p-6`}
    >
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-white/5" />
      {children}
    </motion.div>
  )
}

export default Focus
