import Image from "next/image"
import { ExternalLink, Code } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "InvestEzy",
      description:
        "A smart investment portfolio manager focused on making stock investing accessible to beginners in the Indian market.",
      technologies: ["Next.js", "Tailwind CSS", "Flask", "TensorFlow", "LSTM Model", "yfinance"],
      image: "/images/invest.png",
      liveUrl: "https://investezy.vercel.app/",
      category: "FinTech",
      status: "Live",
    },
    {
      id: 2,
      title: "VidhikGuru",
      description:
        "VidhikGuru makes learning the Indian Constitution easy and engaging with 3D visuals, AI assistance, and gamified modules.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB Atlas", "Langchain", "Gemini", "GSAP", "Civic"],
      image: "/images/VidhikGuru.png",
      liveUrl: "https://vidhik-guru.vercel.app/",
      category: "EdTech",
      status: "Live",
    },
  ]

  return (
    <section className="w-full max-w-6xl px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A showcase of my recent work and the technologies I've used to build them
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } flex flex-col lg:flex lg:items-center lg:gap-12`}
          >
            {/* Project Image */}
            <div className="relative lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                <div className="aspect-video relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Floating Status Badge */}
              <div className="absolute -top-3 -right-3 z-10">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  {project.status}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="space-y-6">
                {/* Category & Title */}
                <div>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Project
                  </a>

                  {/* Optional: Add GitHub link if available */}
                  {/* <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
                  >
                    <Code className="w-4 h-4" />
                    View Code
                  </a> */}
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-3xl blur-3xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-600 mb-6">Interested in seeing more of my work?</p>
        <a
          href="https://github.com/8967shruti" // Replace with your GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Code className="w-5 h-5" />
          View All Projects on GitHub
        </a>
      </div>
    </section>
  )
}
