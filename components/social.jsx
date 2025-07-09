import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Mail, MessageCircle } from "lucide-react"

const Social = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/8967shruti",
      color: "hover:text-gray-800 hover:bg-gray-100",
      bgColor: "bg-gray-50",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/shrutigupta82/",
      color: "hover:text-blue-600 hover:bg-blue-50",
      bgColor: "bg-blue-50",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://x.com/shrutigupta200",
      color: "hover:text-sky-500 hover:bg-sky-50",
      bgColor: "bg-sky-50",
    },
  ]

  return (
    <section className="w-full max-w-4xl px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Let's Connect! 🤝</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about tech!
        </p>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100 text-gray-600 text-2xl lg:text-3xl transition-all duration-300 hover:scale-110 hover:shadow-2xl ${social.color}`}
            aria-label={`Connect with me on ${social.name}`}
          >
            {social.icon}

            {/* Tooltip */}
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {social.name}
            </span>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
          </a>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
          {/* Email Button */}
          <a
            href="mailto:your.email@example.com" // Replace with your actual email
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Send me an Email
          </a>

          {/* Alternative Contact */}
          <div className="flex items-center gap-2 text-gray-600">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">or reach out on any platform above</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-gray-100">
          <p className="text-gray-700 font-medium mb-2">🚀 Open to Opportunities</p>
          <p className="text-gray-600 text-sm">
            Currently looking for internships and entry-level positions in Full Stack Development
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default Social
