import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Cultivating the best environment for your community...</h2>
          <p className="mt-4 text-white/70">We obsess over latency, durability, and seamless tooling so your players can focus on building, battling, and belonging. The future of sandbox servers needs roots and rockets—we bring both.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-64 md:h-80 rounded-[24px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-[conic-gradient(at_30%_30%,rgba(119,221,119,0.12),transparent_30%,rgba(119,221,119,0.1))]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
        </motion.div>
      </div>
    </section>
  )
}

export default About
