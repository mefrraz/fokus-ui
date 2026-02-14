import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.circle
          cx="150"
          cy="200"
          r="80"
          className="stroke-primary/10"
          strokeWidth="1"
          fill="none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="1050"
          cy="150"
          r="120"
          className="stroke-primary/8"
          strokeWidth="1"
          fill="none"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.1, opacity: 0.8 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        <motion.circle
          cx="200"
          cy="600"
          r="60"
          className="fill-primary/5"
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="1000"
          cy="550"
          r="100"
          className="stroke-primary/6"
          strokeWidth="1"
          fill="none"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.rect
          x="300"
          y="100"
          width="40"
          height="40"
          rx="8"
          className="stroke-primary/10"
          strokeWidth="1"
          fill="none"
          initial={{ rotate: 0, opacity: 0.3 }}
          animate={{ rotate: 45, opacity: 0.6 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.rect
          x="900"
          y="350"
          width="60"
          height="60"
          rx="12"
          className="fill-primary/3"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M100 400 Q 200 350, 300 400 T 500 400"
          className="stroke-primary/8"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M700 250 Q 800 200, 900 250 T 1100 250"
          className="stroke-primary/6"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx={400 + i * 100}
            cy={500 + (i % 2) * 50}
            r="4"
            className="fill-primary/20"
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1.2 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.3,
            }}
          />
        ))}
        <motion.line
          x1="50"
          y1="300"
          x2="150"
          y2="350"
          className="stroke-primary/10"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="1050"
          y1="400"
          x2="1150"
          y2="450"
          className="stroke-primary/10"
          strokeWidth="1"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            Formação Premium
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6"
        >
          Elimina o ruído.
          <br />
          <span className="text-primary">Foca-te na tua carreira.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Formação direta, prática e certificada DGERT. Sem vídeos intermináveis,
          apenas o conhecimento essencial para evoluíres profissionalmente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/cursos">
            <Button size="lg" className="px-8" data-testid="button-cta-hero">
              Explorar Cursos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/metodologia">
            <Button variant="outline" size="lg" data-testid="button-secondary-hero">
              Saber Mais
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>+2.500 Alunos Certificados</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Apoio Individual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Certificado DGERT</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
