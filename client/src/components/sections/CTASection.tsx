import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-full h-full opacity-10"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="150"
            className="stroke-white"
            strokeWidth="1"
            fill="none"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.circle
            cx="1100"
            cy="300"
            r="200"
            className="stroke-white"
            strokeWidth="1"
            fill="none"
            initial={{ scale: 1 }}
            animate={{ scale: 0.9 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.rect
            x="500"
            y="50"
            width="80"
            height="80"
            rx="16"
            className="stroke-white"
            strokeWidth="1"
            fill="none"
            initial={{ rotate: 0 }}
            animate={{ rotate: 45 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Pronto para transformar
            <br />
            a sua carreira?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Junte-se a milhares de profissionais que já escolheram investir no 
            seu desenvolvimento. O próximo passo está a um clique de distância.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            variant="secondary"
            className="px-8 bg-white text-primary hover:bg-white/90"
            data-testid="button-cta-main"
          >
            Começar Agora
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            data-testid="button-cta-contact"
          >
            <Mail className="mr-2 w-4 h-4" />
            Fale Connosco
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-primary-foreground/60"
        >
          Sem compromisso. Consulta gratuita disponível.
        </motion.p>
      </div>
    </section>
  );
}
