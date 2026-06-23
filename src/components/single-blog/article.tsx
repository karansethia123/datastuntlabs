import { ArrowRight } from "lucide-react"
import { Blog } from "../../../types"
import { getBlogImages } from "@/data/api"
import Image from "next/image"

type Props = {
  index: number,
  article: Blog
}

const Article = async({ article, index }: Props) => {

  const image = await getBlogImages(article.featured_media)

  const gradients = [
    "from-purple-500/30 via-pink-500/30 to-red-500/30",
    "from-blue-500/30 via-cyan-500/30 to-teal-500/30",
    "from-green-500/30 via-emerald-500/30 to-lime-500/30",
    "from-orange-500/30 via-yellow-500/30 to-amber-500/30",
  ]
  const borderGradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-yellow-500",
  ]

  return (
    <div
      key={article.id}
      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
    >
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[index % 4]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
        </div>
      </div>

      {/* Geometric Shape */}
      <div className="absolute top-6 left-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div
          className={`w-8 h-8 bg-gradient-to-r ${borderGradients[index % 4]} rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-700`}
        ></div>
      </div>

      {/* Card Content Container with animated height */}
      <div className="relative z-10 p-6 transition-all duration-500 group-hover:pb-4">
        {/* Image Container */}
        <div className="relative mb-4 rounded-xl overflow-hidden">
          <Image
            width="200"
            height="200"
            src={image.guid.rendered}
            alt={article.title.rendered}
            className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`px-3 py-1 bg-gradient-to-r ${borderGradients[index % 4]} text-white text-xs font-semibold rounded-full shadow-lg`}
            >
              Articles
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 line-clamp-2">
            {article.title.rendered}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{article.excerpt.rendered.replace(/<[^>]+>/g, "")}</p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-800">
            <div className="flex items-center space-x-2">
              <span>Nihit Saxena</span>
              <span>•</span>
            </div>
            <span>{article.date}</span>
          </div>

          {/* CTA Button Container with animated height */}
          <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 group-hover:max-h-20 group-hover:pt-4">
            <a href={article.link} target="_blank">
              <button
                className={`w-full bg-gradient-to-r cursor-pointer ${borderGradients[index % 4]} text-white py-2 px-4 rounded-lg font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-200 hover:shadow-lg flex items-center justify-center space-x-2`}
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>
    </div>
  )
}

export default Article
