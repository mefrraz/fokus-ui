import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2" data-testid="link-logo">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <rect
              x="2"
              y="2"
              width="28"
              height="28"
              rx="6"
              className="stroke-current"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M10 12h12M10 16h8M10 20h10"
              className="stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-bold text-foreground tracking-tight">
            FOKUS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#sobre"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-about"
          >
            Sobre
          </a>
          <a
            href="#metodologia"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-methodology"
          >
            Metodologia
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-contact"
          >
            Contacto
          </a>
        </nav>

        <Button data-testid="button-cta-header">
          Começar Agora
        </Button>
      </div>
    </motion.header>
  );
}
