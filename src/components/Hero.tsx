import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-zinc-50"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />

      {/* Decorative blob */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-100/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              Now accepting new projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900">
              We craft bold{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                digital experiences
              </span>{" "}
              that move brands forward.
            </h1>

            <p className="text-lg lg:text-xl text-zinc-600 max-w-lg leading-relaxed">
              Canvas is a full-service creative agency. We blend strategy,
              design, and technology to build brands that stand out and connect
              deeply.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-500 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Start a Project
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border-2 border-zinc-200 px-8 py-3.5 text-base font-semibold text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 transition-all"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 lg:gap-12 pt-4">
              <div>
                <p className="text-3xl font-bold text-zinc-900">120+</p>
                <p className="text-sm text-zinc-500">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900">45+</p>
                <p className="text-sm text-zinc-500">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900">8+</p>
                <p className="text-sm text-zinc-500">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1512850183-6d7990f42385?w=800&auto=format&fit=crop&q=80"
                alt="Creative agency workspace"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                ✦
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900">
                  Award Winning
                </p>
                <p className="text-xs text-zinc-500">Awwwards 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
