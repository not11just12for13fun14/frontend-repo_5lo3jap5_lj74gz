import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, GaugeCircle, Zap } from 'lucide-react'

function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[240px]">
          <Bento className="md:row-span-2" icon={<ShieldCheck className="h-7 w-7 text-emerald-300" />} title="99.99% Uptime">
            Roots-deep reliability with redundant networking and automated failover.
          </Bento>
          <Bento icon={<Cpu className="h-7 w-7 text-emerald-300" />} title="Single-Core Powerhouse">
            Ryzen 9 clocks with tuned kernel profiles for peak tick performance.
          </Bento>
          <Bento icon={<GaugeCircle className="h-7 w-7 text-emerald-300" />} title="1Gbps Uplink">
            Low jitter, premium routes, and DDoS filtering.
          </Bento>
          <Bento icon={<Zap className="h-7 w-7 text-emerald-300" />} title="Instant Setup">
            Provisioned in seconds with sane defaults.
          </Bento>
        </div>
      </div>
    </section>
  )
}

function Bento({ className = '', icon, title, children }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={`group relative rounded-[22px] p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(119,221,119,0.06)] ${className}`}
    >
      <div className="absolute inset-0 rounded-[22px] pointer-events-none bg-[radial-gradient(300px_200px_at_0%_0%,rgba(119,221,119,0.10),transparent_60%)]" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-[14px] bg-emerald-400/20 flex items-center justify-center ring-1 ring-emerald-300/40">
            {icon}
          </div>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
        <p className="mt-3 text-white/70">{children}</p>
      </div>
    </motion.div>
  )
}

export default Features
