import Image from "next/image";

const projects = [
  {
    title: "Lumina Cosmetics",
    category: "Brand Identity",
    image:
      "https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg",
    tags: ["Branding", "Packaging", "Web"],
  },
  {
    title: "Nebula Tech",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/3778776/pexels-photo-3778776.jpeg",
    tags: ["React", "UI/UX", "Motion"],
  },
  {
    title: "Evergreen Magazine",
    category: "Editorial Design",
    image:
      "https://images.pexels.com/photos/28374850/pexels-photo-28374850.jpeg",
    tags: ["Print", "Layout", "Illustration"],
  },
  {
    title: "Vertex Fitness",
    category: "Campaign",
    image:
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    tags: ["Marketing", "Photo", "Video"],
  },
  {
    title: "Bloom Organic",
    category: "Packaging Design",
    image:
      "https://images.pexels.com/photos/9059563/pexels-photo-9059563.jpeg",
    tags: ["Packaging", "Branding", "Print"],
  },
  {
    title: "Arctic Studio",
    category: "Web Design",
    image:
      "https://images.pexels.com/photos/33987617/pexels-photo-33987617.jpeg",
    tags: ["Design", "Development", "Branding"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
            Selected projects we&apos;re proud of.
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Each project is a partnership. Here&apos;s a glimpse of what
            we&apos;ve created together with our clients.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold text-indigo-600 tracking-wide uppercase mb-1">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
