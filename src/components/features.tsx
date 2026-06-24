"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScanEye, Brain, FileCog, TrendingUp } from "lucide-react"
import { BorderTrail } from "./ui/border-trail"

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }


const features = [
  {
    title: "Knowledge & Decision Intelligence",
    description: "Turn data into insights with AI-driven analysis and decision support.",
    icon: <Brain className="size-5" />,
  },
  {
    title: "Document & Process Automation",
    description: "Automate documents, workflows, and approvals end to end.",
    icon: <FileCog className="size-5" />,
  },
  {
    title: "Revenue & Growth Automation",
    description: "Optimize sales, marketing, and customer engagement with AI.",
    icon: <TrendingUp className="size-5" />,
  },
  {
    title: "Visual & Computer Vision Systems",
    description: "Extract intelligence from images and video at scale.",
    icon: <ScanEye className="size-5" />,
  },
]

  return (
    <section id="features" className="w-full py-20 container mx-auto">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground"
            variant="secondary"
          >
            What We Do
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Studio Building Blocks
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            These are execution primitives, not standalone SaaS tools.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2"
        >

          {features.map((feature, i) => (
            <motion.div key={i} variants={item} className="relative">
              <Card className="h-full relative overflow-hidden card-glass backdrop-blur">
                <BorderTrail
                  style={{
                    boxShadow:
                      '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                  }}
                  size={100}
                />

                <CardContent className="px-6 py-3 flex flex-col h-full relative">
                  <div className="size-10 rounded-full bg-secondary flex items-center justify-center text-accent mb-4 border border-border">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features

