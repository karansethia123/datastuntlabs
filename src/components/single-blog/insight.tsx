import { Blog } from "../../../types"
import { ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { getBlogImages } from "@/data/api"

type Props = {
  index: number,
  blog: Blog
}

const Insight = async ({ blog, index }: Props) => {

  const image = await getBlogImages(blog.featured_media)

  return (
    <Card
      key={blog.id}
      className={`group relative hover:shadow-2xl transition-all duration-300 py-0 border border-gray-600 overflow-hidden ${index === 3 || index === 6 ? "md:col-span-2" : ""}`}
    >
      <div className="absolute overflow-hidden rounded-t-lg size-full inset-0">
          <Image width="100" height="100" alt={blog.title.rendered} className="size-full rounded-md" src={image.guid.rendered} />
      </div>
      <div className="absolute inset-0 z-10 bg-black/70" />
      <CardContent className="p-6 z-20 flex flex-col h-full justify-end">
        <div className="space-y-2">
          <h3
            className={`font-bold font-header text-gray-300 group-hover:text-blue-200 transition-colors`}
          >
            {blog.title.rendered}
          </h3>
          <p className={`text-gray-400 leading-relaxed text-sm font-content`}>
            {blog.excerpt.rendered.replace(/<[^>]+>/g, "")}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Nihit Saxena</span>
              </div>
            </div>
            <a href={blog.link} target="_blank">
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-700">
                Read More
                <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Insight
