import Link from "next/link";

const footerLinks = {
  Services: ["Brand Identity", "Web Development", "Motion Design", "UI/UX Design", "Digital Marketing"],
  Company: ["About Us", "Careers", "Blog", "Press Kit"],
  Support: ["FAQ", "Privacy Policy", "Terms of Service", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <span className="text-lg font-bold text-white">Canvas</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              A full-service creative agency crafting bold digital experiences
              that move brands forward.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-indigo-600 hover:text-white transition-all text-xs font-medium"
                >
                  {social.slice(0, 1)}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Canvas Agency. All rights reserved.</p>
          <p className="text-zinc-500">
            Crafted with passion in San Francisco.
          </p>
        </div>
      </div>
    </footer>
  );
}
