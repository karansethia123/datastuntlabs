"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"
import { addContactDetails } from "@/data/api"

const ContactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(80),
  company: z.string().max(120, "Company name is too long").optional().or(z.literal("")),
  email: z.email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
})

export type ContactValues = z.infer<typeof ContactSchema>

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export default function ContactForm() {
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const form = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      message: "",
    },
    mode: "onTouched",
  })

  async function onSubmit(values: ContactValues) {
    setSubmitting(true)
    setError(null)

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS environment variables are not configured")
      }

      const templateParams = {
        to_email: "datastunt.dev@gmail.com",
        fullName: values.fullName,
        company: values.company || "—",
        email: values.email,
        message: values.message,
      }

      // Send to Firebase + email in parallel
      await Promise.all([
        addContactDetails(values),
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          { publicKey: EMAILJS_PUBLIC_KEY }
        ),
      ])

      setSubmitted(true)
      form.reset()
    } catch (err) {
      console.error("[contact] submit failed", err)
      setError("Something went wrong. Please try again or email us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-center" role="status" aria-live="polite">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" aria-hidden="true" />
        <h2 className="mt-3 text-lg font-semibold">Form submitted</h2>
        <p className="mt-1 text-sm text-muted-foreground">We&apos;ll connect with you soon.</p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="space-y-4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Inc."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="How can we help?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}

        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">We respect your privacy. We&rsquo;ll never share your info.</p>
          <Button type="submit" disabled={submitting} className="btn-accent">
            {submitting ? "Sending..." : "Send message"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
