import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-zinc-950 text-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Philip</h3>
            <p className="text-white/60">
              Full-stack developer building beautiful, performant web
              experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/project"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="block text-white/60 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-white/60 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Ayomide-Philip"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://x.com/areo_ayomi70157"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/ayomide.philip.1379/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://wa.me/2349168115525"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Philip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
