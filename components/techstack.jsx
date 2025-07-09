import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaDocker,
} from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiNextdotjs } from "react-icons/si"

const TechStack = () => {
  const techIcons = [
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5", category: "Frontend" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3", category: "Frontend" },
    { icon: <FaJsSquare className="text-yellow-400" />, name: "JavaScript", category: "Language" },
    { icon: <FaReact className="text-cyan-400" />, name: "React", category: "Frontend" },
    { icon: <SiNextdotjs className="text-gray-800" />, name: "Next.js", category: "Framework" },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js", category: "Backend" },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS", category: "Styling" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB", category: "Database" },
    { icon: <FaGitAlt className="text-red-500" />, name: "Git", category: "Tools" },
    { icon: <FaGithub className="text-gray-800" />, name: "GitHub", category: "Tools" },
    { icon: <FaPython className="text-yellow-500" />, name: "Python", category: "Language" },
    { icon: <FaJava className="text-orange-500" />, name: "Java", category: "Language" },
    { icon: <FaDocker className="text-blue-500" />, name: "Docker", category: "DevOps" },
  ]

  return (
    <section className="w-full max-w-6xl px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">🚀 My Tech Stack</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8">
        {techIcons.map((tech, i) => (
          <div key={i} className="group relative">
            {/* Main Tech Card */}
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100">
              {/* Icon */}
              <div className="text-5xl lg:text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>

              {/* Tech Name */}
              <h3 className="text-sm lg:text-base font-semibold text-gray-800 text-center leading-tight">
                {tech.name}
              </h3>

              {/* Category Badge */}
              <span className="mt-2 px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.category}
              </span>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-wrap gap-3 justify-center">
          {["Frontend", "Backend", "Database", "DevOps", "Languages", "Tools"].map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
