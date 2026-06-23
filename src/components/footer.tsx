import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#0a0a0a] py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              width={160}
              height={40}
              src="/headerlogowhite.png"
              alt="DataStunt Labs"
              className="h-8 w-auto"
            />
            <p className="text-[#737373] text-sm leading-relaxed max-w-xs">
              AI-Native Engineering Governance. Helping organizations build, operate, and scale software safely in the age of AI.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="section-label mb-4"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: "What We Do", href: "/what-we-do" },
                { label: "DAIRS™ Framework", href: "/what-we-do#dairs" },
                { label: "About", href: "/about" },
                { label: "Book an Audit", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#737373] hover:text-[#f5f5f5] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="section-label mb-4"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/datastunt-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#737373] hover:text-[#f5f5f5] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@datastunt.com"
                  className="text-sm text-[#737373] hover:text-sky-400 transition-colors"
                >
                  nihit@datastunt.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.08)] pt-8">
          <p className="text-[#737373] text-xs" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            © 2026 DataStunt Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
