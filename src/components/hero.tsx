import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg noise-overlay">
      {/* Background accent glow — very subtle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(57,255,20,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl py-32">
        <div className="max-w-4xl">
          {/* Label */}
          <div
            className="animate-fade-up animate-fade-up-1 mb-6 flex items-center gap-3"
          >
            <span className="accent-line" />
            <span className="section-label">
              {"// AI PRODUCT EXECUTION"}
            </span>
          </div>

          {/* H1 */}
          <h1
            className="animate-fade-up animate-fade-up-2 text-[clamp(3rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight text-[#f5f5f5] mb-6 flex flex-wrap items-center gap-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            <span>We Ship AI Products.</span>{" "}
            <span className="text-sky-400">Fast.</span>
            <Image
              src="/herotext.webp"
              alt="AI Products Fast"
              width={600}
              height={120}
              unoptimized
              className="h-[1em] w-auto"
            />
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up animate-fade-up-3 text-xl text-[#737373] leading-relaxed mb-4 max-w-2xl"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            DataStunt Labs is an external AI execution team for startups and enterprises.
            You bring the roadmap — we architect, build, and deploy.
          </p>

          {/* Body */}
          <p
            className="animate-fade-up animate-fade-up-4 text-base text-[#525252] mb-10"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            From concept to production-ready in a matter of days.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up animate-fade-up-5 flex flex-wrap items-center gap-4 mb-12">
            <Link href="/contact">
              <button className="btn-accent">
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <a href="#how-it-works">
              <button className="btn-ghost">
                See How It Works
              </button>
            </a>
          </div>

          {/* Social proof */}
          <p
            className="animate-fade-up animate-fade-up-5 text-sm text-[#525252]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Trusted by scratch to Series A teams building in production.
          </p>
        </div>
      </div>
    </section>
  )
}
