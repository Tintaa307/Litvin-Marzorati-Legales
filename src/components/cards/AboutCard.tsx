import type React from "react"
import Image from "next/image"

interface AboutCardProps {
  title: string
  text: string
  image: string
  index: number
}

const AboutCard: React.FC<AboutCardProps> = ({ title, text, image }) => {
  return (
    <div className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} icon`}
            width={24}
            height={24}
            className="text-orange-500"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-orange-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
        </div>
      </div>

      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

export default AboutCard
