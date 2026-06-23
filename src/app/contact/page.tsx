import Image from "next/image"
import { Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with our team",
}

const ContactPage = () => {
  return (
    <main>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Left: Heading + Form */}
          <div>
            <p className="text-sm font-medium text-sky-400">Get in Touch</p>
            <h1 className="mt-2 text-pretty text-3xl font-semibold leading-tight md:text-4xl">
              Let&apos;s Chat, Reach Out to Us
            </h1>
            <p className="mt-3 max-w-prose text-sm text-zinc-300 md:text-base">
              Have questions or feedback? We&apos;re here to help. Send us a message and we&apos;ll respond within 24
              hours.
            </p>

            <Separator className="my-6 bg-zinc-800" />

            <ContactForm />
          </div>

          {/* Right: Image + Contact info cards */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              <Image
                src="https://i6geujgmiz.ufs.sh/f/8OZHJ5DczC5XUNoWOd48KPkp3GLXm1g6FcxilYZ0Bn2eo8Va"
                alt="Person using a phone, contact illustration"
                width={1200}
                height={1000}
                className="h-auto w-full aspect-[5/3] object-cover"
                priority
              />
            </div>

            <div className="grid gap-4">
              <Card className="border-zinc-800 bg-zinc-900 text-white gap-3 py-3">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                  <div className="rounded-lg bg-sky-500/10 p-2 text-sky-400" aria-hidden="true">
                    <Mail className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:support@example.com"
                    className="text-pretty text-sm text-sky-400 underline-offset-4 hover:underline"
                  >
                    nihit@datastunt.com
                  </a>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage;
