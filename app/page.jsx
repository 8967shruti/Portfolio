"use client"

import { TypingAnimation } from "@/components/magicui/typing-animation"
import Image from "next/image"
import Techstack from "../components/techstack"
import Social from "../components/social"
import Projects from "@/components/Projects"
import { Download, GraduationCap, MapPin, Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/mode-toggle"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-1000">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Animated Profile Image */}
            <div className="relative mx-auto mb-8 h-48 w-48 lg:h-56 lg:w-56 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-1 ">
                <div className="h-full w-full rounded-full bg-white dark:bg-black p-2">
                  <div className="relative h-full w-full rounded-full overflow-hidden">
                    <Image
                      src="/images/image.jpg"
                      alt="Shruti Gupta - Fullstack Developer"
                      width={300}
                      height={300}
                      className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Glow overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 animate-bounce">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
            </div>

            {/* Welcome Text with Glow */}
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 dark:from-white dark:via-purple-700 dark:to-cyan-500 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h1>

            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-700 dark:text-gray-600 lg:text-3xl animate-fade-in">
                Hey! 👋
              </h2>
              <div className="text-3xl font-bold lg:text-4xl">
                <TypingAnimation className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                 Shruti Here!
                </TypingAnimation>
              </div>
            </div>

            {/* Animated Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 px-8 py-3 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 animate-glow"
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              View My Resume
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </a>
          </div>
        </section>

        {/* About Me Section */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold lg:text-4xl bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="group relative rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-8 shadow-2xl lg:p-12 hover:border-purple-500/50 transition-all duration-500">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 lg:text-xl">
                <p className="animate-slide-up">
                  Hi! I'm <span className="font-bold text-purple-600 dark:text-purple-400 glow-text">Shruti Gupta</span>
                  , an aspiring
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400"> Fullstack Developer</span>{" "}
                  passionate about building seamless, user-friendly web applications.
                </p>

                <p className="animate-slide-up animation-delay-200">
                  I'm currently pursuing my{" "}
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    B.Tech in Computer Science
                  </span>{" "}
                  at
                  <span className="font-medium text-blue-600 dark:text-blue-400"> NSHM Knowledge Campus, Durgapur</span>
                  , and I'm always eager to learn and grow in the tech world.
                </p>

                <p className="animate-slide-up animation-delay-400">
                  I love working on projects. Right now, I'm exploring{" "}
                  <span className="font-bold text-blue-600 dark:text-blue-400 glow-text">TypeScript</span> and diving
                  deeper into{" "}
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 glow-text">System Design</span>.
                </p>

                <p className="animate-slide-up animation-delay-600">
                  In my free time, I enjoy writing tech blogs, exploring UI design, and experimenting with emerging
                  <span className="font-bold text-purple-600 dark:text-purple-400 glow-text"> AI tools</span> that
                  enhance developer productivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold lg:text-4xl bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Education
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* BTech Card */}
              <div className="group relative rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-8 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-purple-500/50 animate-float">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-purple-500/20 p-3 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">BTech CSE</h3>
                </div>

                <div className="space-y-3">
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    🎓 NSHM Knowledge Campus, Durgapur
                  </p>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Durgapur, West Bengal, India</span>
                  </div>
                </div>
              </div>

              {/* Higher Secondary Card */}
              <div className="group relative rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 p-8 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 animate-float animation-delay-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-cyan-500/20 p-3 group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <GraduationCap className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Higher Secondary</h3>
                </div>

                <div className="space-y-3">
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Nepali Para Hindi High School
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Durgapur, West Bengal, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <main className="px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
            <Projects />
            <Techstack />
            <Social />
          </div>
        </main>
      </div>
    </div>
  )
}
