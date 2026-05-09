import Image from "next/image";

const testimonials = [
  {
    quote:
      "Canvas transformed our brand from the ground up. The team's creativity and attention to detail exceeded every expectation. Our website traffic has doubled since launch.",
    name: "Sarah Chen",
    role: "CEO, Lumina Cosmetics",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Working with Canvas was an absolute pleasure. They took our vague ideas and turned them into a stunning, functional reality. Truly world-class talent.",
    name: "Marcus Rivera",
    role: "Founder, Nebula Tech",
    avatar:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The motion graphics Canvas created for our launch campaign were nothing short of spectacular. Our engagement rates skyrocketed. Can't recommend them enough.",
    name: "Emily Takeda",
    role: "CMO, Evergreen Media",
    avatar:
      "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=150&auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
            What our clients say.
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            We measure our success by the success of our clients.
            Here&apos;s what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="relative p-8 rounded-2xl border border-zinc-100 bg-white hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-50/30 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-4xl leading-none text-indigo-200 font-serif mb-4">
                &ldquo;
              </div>

              <p className="text-zinc-600 leading-relaxed mb-8">
                {item.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-zinc-100">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-zinc-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
