
import { Building2, Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    role: "CTO",
    company: "TechCorp Solutions",
    content:
      "Their expertise in cloud migration saved us months of development time and significantly reduced our infrastructure costs. Outstanding service!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "VP of Engineering",
    company: "InnovateLabs",
    content:
      "The team's deep understanding of modern architecture patterns helped us build a scalable platform that handles millions of users seamlessly.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Amanda Foster",
    role: "Head of Digital",
    company: "GlobalTech Inc",
    content:
      "From concept to deployment, they delivered exceptional results. Their agile approach and technical expertise exceeded our expectations.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-6 right-6 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-foreground tracking-wide leading-relaxed">"{testimonial.content}"</blockquote>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Building2 className="w-3 h-3" />
                        <span>{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
