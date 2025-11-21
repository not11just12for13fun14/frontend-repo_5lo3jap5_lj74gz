function Footer() {
  return (
    <footer className="pt-10 pb-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-white/80">
          <div>
            <h4 className="text-white font-semibold mb-3">Faunanode</h4>
            <p className="text-sm text-white/60">Premium game server hosting with a nature-tech soul.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Socials</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Discord</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-white/60 text-sm">Faunanode © 2024</div>
      </div>
    </footer>
  )
}

export default Footer
