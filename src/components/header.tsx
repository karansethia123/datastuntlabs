import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu, ChevronDown } from "lucide-react"

const solutions = [
  { label: "AI Build Readiness Audit™", href: "/what-we-do#audit" },
  { label: "AI Engineering Copilot™", href: "/what-we-do#copilot" },
  { label: "AI Development Operating System™", href: "/what-we-do#operating-system" },
  { label: "DAIRS™ Framework", href: "/what-we-do#dairs" },
]

export function Header() {
  return (
    <header className="backdrop-blur-md sticky top-0 z-50 h-[64px] border-b border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,10,0.85)]">
      <div className="container mx-auto px-6 h-full max-w-7xl">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              width={160}
              height={40}
              src="/headerlogowhite.png"
              alt="DataStunt Labs"
              className="h-8 w-auto"
            />
          </Link>

          {/* Mobile — Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="lg:hidden text-[#f5f5f5] hover:bg-[rgba(255,255,255,0.06)]"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#0f0f0f] border-l border-[rgba(255,255,255,0.08)] text-[#f5f5f5]">
              <SheetTitle className="hidden">Navigation</SheetTitle>
              <div className="w-full pt-8 flex flex-col gap-2">
                <Accordion type="single" collapsible>
                  <AccordionItem value="services" className="border-b border-[rgba(255,255,255,0.08)]">
                    <AccordionTrigger
                      className="text-sm font-semibold text-[#f5f5f5] hover:text-sky-400 hover:no-underline py-3"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      What We Do
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-1 pb-3">
                      {solutions.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="py-2 px-3 text-sm text-[#a3a3a3] hover:text-sky-400 hover:bg-[rgba(2,132,199,0.08)] rounded-md transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Separator className="bg-[rgba(255,255,255,0.08)] my-1" />

                <Link
                  href="/industries"
                  className="py-2.5 px-1 text-sm font-medium text-[#f5f5f5] hover:text-sky-400 transition-colors"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Industries
                </Link>
                <Link
                  href="/about"
                  className="py-2.5 px-1 text-sm font-medium text-[#f5f5f5] hover:text-sky-400 transition-colors"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  About
                </Link>

                <div className="mt-4">
                  <Link href="/contact" className="w-full">
                    <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md cursor-pointer">
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Solutions dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center gap-1 text-sm font-medium text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors cursor-pointer outline-none"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  What We Do
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-60 bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-lg shadow-xl shadow-black/50 p-1"
                align="start"
                sideOffset={8}
              >
                <DropdownMenuGroup>
                  {solutions.map((s, i) => (
                    <div key={s.href}>
                      <DropdownMenuItem asChild className="rounded-md focus:bg-[rgba(2,132,199,0.12)] focus:text-sky-400 cursor-pointer">
                        <Link
                          href={s.href}
                          className="text-sm text-[#d4d4d4] hover:text-sky-400 px-3 py-2.5 w-full"
                          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                        >
                          {s.label}
                        </Link>
                      </DropdownMenuItem>
                      {i < solutions.length - 1 && (
                        <DropdownMenuSeparator className="bg-[rgba(255,255,255,0.06)] my-0.5" />
                      )}
                    </div>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/industries"
              className="text-sm font-medium text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Industries
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              About
            </Link>

            <Link href="/contact">
              <Button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md cursor-pointer transition-colors shadow-md hover:shadow-sky-900/40">
                Get In Touch
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
