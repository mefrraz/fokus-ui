import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import AuthModal from "./AuthModal";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import CartSidebar from "./CartSidebar";

interface HeaderProps {
  simple?: boolean;
}

export default function Header({ simple = false }: HeaderProps) {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "register">("login");
  const { user } = useAuth();
  const { items, setIsOpen } = useCart();

  const handleStudentAreaClick = () => {
    if (user) {
      setLocation("/area-aluno");
    } else {
      setAuthTab("login");
      setAuthOpen(true);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
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
          </Link>

          {!simple && (
            <nav className="hidden md:flex items-center gap-10">
              <Link href="/">
                <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
              </Link>
              <Link href="/metodologia">
                <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </a>
              </Link>
              <Link href="/contactos">
                <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </Link>
              <Link href="/faq">
                <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </Link>
              <Link href="/como-funciona">
                <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </Link>
            </nav>
          )}

          <div className="flex items-center gap-3">
            {!simple && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:flex relative"
                  data-testid="button-cart"
                  onClick={() => setIsOpen(true)}
                >
                  <ShoppingCart size={20} />
                  {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {items.length}
                    </span>
                  )}
                </Button>

                <Button
                  variant="outline"
                  onClick={handleStudentAreaClick}
                  data-testid="button-student-area"
                  className="hidden md:flex gap-2"
                >
                  <User size={18} />
                  Área do Aluno
                </Button>

                <Link href="/cursos">
                  <Button data-testid="button-cta-header">
                    Cursos
                  </Button>
                </Link>

                <button
                  className="md:hidden p-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  data-testid="button-mobile-menu"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </>
            )}
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 backdrop-blur-xl border-t border-white/20"
          >
            <nav className="flex flex-col p-4 gap-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <a className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${location === "/" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}>
                  Início
                </a>
              </Link>
              <Link href="/metodologia" onClick={() => setMobileMenuOpen(false)}>
                <a className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${location === "/metodologia" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}>
                  Sobre
                </a>
              </Link>
              <Link href="/contactos" onClick={() => setMobileMenuOpen(false)}>
                <a className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${location === "/contactos" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}>
                  Contacto
                </a>
              </Link>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>
                <a className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${location === "/faq" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}>
                  FAQ
                </a>
              </Link>
              <Link href="/como-funciona" onClick={() => setMobileMenuOpen(false)}>
                <a className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${location === "/como-funciona" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}>
                  Como Funciona
                </a>
              </Link>
              <div className="h-px bg-border my-2" />
              <Link href="/cursos" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full justify-start" variant="ghost">
                  Cursos
                </Button>
              </Link>
              <Button
                className="w-full justify-start gap-2"
                variant="outline"
                onClick={handleStudentAreaClick}
              >
                <User size={18} />
                Área do Aluno
              </Button>
            </nav>
          </motion.div>
        )}
      </motion.header>

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        defaultTab={authTab}
        key={authTab}
      />
      <CartSidebar />
    </>
  );
}
