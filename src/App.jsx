import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top Nav - ultra simple */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold">S3</span>
            <span className="font-medium tracking-tight">GovSecurity360</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#product" className="hover:text-emerald-700 transition-colors">Product</a>
            <a href="#about" className="hover:text-emerald-700 transition-colors">About Us</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-500 transition-colors">Get Demo</a>
          </nav>
        </div>
      </header>

      {/* Hero - light, airy, centered copy + compact 3D on the side */}
      <section id="home" className="relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(90%_60%_at_50%_0%,rgba(16,185,129,0.10),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center py-16 md:py-24">
            <div>
              <p className="text-emerald-700 font-semibold">S3 | Simple, Seamless, Secure</p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
                Activating Intelligent GRC into Action
              </h1>
              <p className="mt-6 text-neutral-700 leading-relaxed">
                Our vision is to empower organizations to harness the full potential of the GRC principle, delivered with simplicity, efficiency, reduced technical debt, and cost avoidance—by providing an adaptive intelligence core to every federal mission. We help agencies anticipate, assess, and address enterprise-wide risks through modular integration and AI-powered risk management that blends qualitative and quantitative insights.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#product" className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2.5 font-medium hover:border-emerald-500 hover:text-emerald-700 transition-colors">Explore Product</a>
                <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 font-medium text-white hover:bg-emerald-500 transition-colors">Request Demo</a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] bg-white">
                <div className="h-[380px] sm:h-[460px]">
                  <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 hidden sm:block rounded-xl bg-white border border-neutral-200 shadow px-4 py-2 text-sm">
                <span className="text-emerald-700 font-medium">Security-first</span>
                <span className="mx-2 text-neutral-300">•</span>
                <span className="text-neutral-600">Minimal • Modern • Federal-ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product - concise bullets, light cards */}
      <section id="product" className="border-t border-neutral-200/70 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">GovSecurity360</h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                We believe a GRC platform should serve as the brain of a security program, providing real-time, comprehensive insight into enterprise and cybersecurity risks across the organization.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Purpose-built for the federal government: experience-driven, mission-ready, government-grade, fully OSCAL-enabled and powered by AI-enhanced intelligence.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Reduce compliance timelines, accelerate assessments, and move beyond static reporting to enable proactive, real-time risk governance—advancing Continuous Diagnostics and Mitigation (CDM).
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'OSCAL-enabled, government-grade assurance',
                'AI-enhanced risk insights (qualitative + quantitative)',
                'Modular integration to reduce technical debt and cost',
                'Real-time, actionable GRC for mission resilience',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                    <p className="text-sm text-neutral-800 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About Us</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              GovSecurity360 is powered by a team of former government operators and industry executives who have held the very roles we will help transform.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              From former CIO, CISO, CAIO, CPO and CTO to seasoned Governance, Risk Management, and Compliance (GRC) and Cyber Operations Manager, our founders bring decades of federal mission expertise, security operations mastery and compliance strategy know-how that will change how organizations fully utilize a GRC tool.
            </p>
            <div className="mt-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="text-base font-medium text-emerald-700">Founder Names and Advisory Board Members</h3>
              <p className="mt-2 text-sm text-neutral-600">(No titles or background info listed)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact Us</h2>
            <p className="mt-4 text-neutral-700">
              Reach out to us at <a className="text-emerald-700 underline underline-offset-4 decoration-emerald-300 hover:text-emerald-800" href="mailto:info@govsecurity360.com">info@govsecurity360.com</a>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:info@govsecurity360.com" className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 font-medium text-white hover:bg-emerald-500 transition-colors">Get Demo</a>
              <a href="#home" className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2.5 font-medium hover:border-emerald-500 hover:text-emerald-700 transition-colors">Back to top</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200/70 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-xs text-neutral-600">
          <span>© {new Date().getFullYear()} GovSecurity360</span>
          <span className="text-neutral-500">Simple • Seamless • Secure</span>
        </div>
      </footer>
    </div>
  )
}

export default App
