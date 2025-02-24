import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-samarkan font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-4xl px-4">Chitra Lekha</h3>
            </Link>
            <p className="mt-2 opacity-70">
              AI-powered image captioning built with deep learning.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link href="https://github.com/team-semantix/chitra-lekha" className="opacity-60 hover:opacity-100">
                GitHub
              </Link>
            </div>
            <div>
              <Link href="mailto:contact@chitralekha.ai" className="opacity-60 hover:opacity-100">
                Email Us
              </Link>
            </div>
            <div>
              <Link href="https://linkedin.com/sammyyakk" className="opacity-60 hover:opacity-100">
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web (Coming Soon)
              </Link>
            </div>
            <div>
              <Link href="/api" className="opacity-60 hover:opacity-100">
                API Access
              </Link>
            </div>
            <div>
              <Link href="https://github.com/sammyyakk/chitra-lekha" className="opacity-60 hover:opacity-100">
                GitHub Repo
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Resources</h3>
            <div>
              <Link href="/docs" className="opacity-60 hover:opacity-100">
                Documentation
              </Link>
            </div>
            <Link href="#features" className="opacity-60 hover:opacity-100">
                Features
              </Link>
            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
            <div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Community</h3>
            <div>
              <Link href="https://discord.gg/chitra-lekha" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>
            <div>
              <Link href="https://twitter.com/chitra_lekha_ai" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div>
            <div>
              <Link href="https://instagram.com/chitra_lekha" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="text-center">
          <h3>
            &copy; 2025 Built with ❤️ by{" "}
            <Link
              target="_blank"
              href="https://github.com/sammyyakk"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Samyak Jain
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
