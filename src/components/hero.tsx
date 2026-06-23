import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg noise-overlay">
      {/* Background accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(2,132,199,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl py-32">
        <div className="max-w-5xl">
          {/* Label */}
          <div className="animate-fade-up animate-fade-up-1 mb-6 flex items-center gap-3">
            <span className="accent-line" />
            <span className="section-label">
              {"// AI-NATIVE ENGINEERING GOVERNANCE"}
            </span>
          </div>

          {/* H1 */}
          <h1
            className="animate-fade-up animate-fade-up-2 text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-[#f5f5f5] mb-6"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Building software got easy.
            <br />
            <span className="text-sky-400">Trusting what you built</span> didn&apos;t.
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up animate-fade-up-3 text-lg text-[#a3a3a3] leading-relaxed mb-4 max-w-2xl"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Datastunt Labs is an AI-Native Engineering Governance firm. We help organizations build, operate, and scale software safely in the age of AI — where speed is no longer the hard part, but knowing whether your systems can survive growth is.
          </p>

          {/* Body */}
          <p
            className="animate-fade-up animate-fade-up-4 text-base text-[#525252] mb-10"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            The question used to be &ldquo;can we build this?&rdquo; Now it&apos;s &ldquo;can we trust what we&apos;ve built?&rdquo;
          </p>

          {/* CTAs */}
          <div className="animate-fade-up animate-fade-up-5 flex flex-wrap items-center gap-4 mb-12">
            <Link href="/contact">
              <button className="btn-accent">
                Book an AI Build Readiness Audit™
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/what-we-do">
              <button className="btn-ghost">
                See What We Do
              </button>
            </Link>
          </div>

          {/* Social proof */}
          <p
            className="animate-fade-up animate-fade-up-5 text-sm text-[#525252]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Trusted by seed-to-Series A teams building production AI systems.
          </p>
        </div>
      </div>
    </section>
  )
}
