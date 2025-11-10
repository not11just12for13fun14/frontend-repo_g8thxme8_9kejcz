import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white selection:bg-emerald-300/40 selection:text-emerald-900">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-emerald-400/20 ring-1 ring-emerald-300/30 flex items-center justify-center">
                <span className="text-emerald-300 font-bold">S3</span>
              </div>
              <span className="text-sm font-medium text-emerald-200">GovSecurity360</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-200">
              <a href="#product" className="hover:text-white transition-colors">Product</a>
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
              <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-500 px-3 py-1.5 font-medium text-neutral-900 hover:bg-emerald-400 transition-colors">
                Get Demo
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative pt-24 md:pt-28 overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Subtle gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl py-24 md:py-36">
            <p className="text-emerald-300/90 font-semibold tracking-wide">S3 | Simple, Seamless, Secure</p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Activating Intelligent GRC into Action
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-200/90 leading-relaxed">
              Our vision is to empower organizations to harness the full potential of the GRC principle, delivered with simplicity, efficiency, reduced technical debt, and cost avoidance — by providing an adaptive intelligence core to every federal mission. We aim to help transform how agencies anticipate, assess, and address enterprise-wide risks through mature modular integration, AI-powered risk management that blends qualitative and quantitative insights to drive mission resilience, operational excellence, and strategic advantage.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#product" className="inline-flex items-center rounded-md bg-white/90 text-neutral-900 px-5 py-2.5 font-medium hover:bg-white transition-colors">
                Explore Product
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md border border-emerald-400/40 text-emerald-200 px-5 py-2.5 font-medium hover:bg-emerald-400/10 transition-colors">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="product" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">GovSecurity360</h2>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                We believe a GRC platform should serve as the brain of a security program, providing real-time, comprehensive insight into enterprise and cybersecurity risks across the organization.
              </p>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                GovSecurity360 is purpose-built for the federal government. It’s an experience-driven, mission-ready, government-grade GRC solution, fully OSCAL-enabled and powered by AI-enhanced intelligence.
              </p>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                GovSecurity360 helps agencies reduce compliance timelines, accelerate assessments, and move beyond static reporting to enable proactive, real-time risk governance. It places intelligent, actionable GRC directly into the hands of agency leaders, security executives, and operators to truly achieve Continuous Diagnostics Mitigation (CDM).
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <ul className="space-y-4 text-sm text-neutral-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>OSCAL-enabled, government-grade assurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>AI-enhanced risk insights combining qualitative and quantitative signals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Modular integration to reduce technical debt and cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Real-time, actionable GRC for mission resilience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold">About Us</h2>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              GovSecurity360 is powered by a team of former government operators and industry executives who have held the very roles we will help transform.
            </p>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              From former CIO, CISO, CAIO, CPO and CTO to seasoned Governance, Risk Management, and Compliance (GRC) and Cyber Operations Manager, our founders bring decades of federal mission expertise, security operations mastery and compliance strategy know-how that will change how organizations fully utilize a GRC tool.
            </p>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-emerald-300">Founder Names and Advisory Board Members</h3>
              <p className="mt-2 text-neutral-300">(No titles or background info listed)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold">Contact Us</h2>
            <p className="mt-4 text-neutral-300">Reach out to us at <a href="mailto:info@govsecurity360.com" className="text-emerald-300 underline hover:text-emerald-200">info@govsecurity360.com</a></p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:info@govsecurity360.com" className="inline-flex items-center rounded-md bg-emerald-500 px-5 py-2.5 font-medium text-neutral-900 hover:bg-emerald-400 transition-colors">Get Demo</a>
              <a href="#home" className="inline-flex items-center rounded-md border border-white/10 px-5 py-2.5 hover:bg-white/5 transition-colors">Back to top</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between text-xs text-neutral-400">
          <span>© {new Date().getFullYear()} GovSecurity360. All rights reserved.</span>
          <div className="hidden sm:flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            <span>Simple • Seamless • Secure</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
