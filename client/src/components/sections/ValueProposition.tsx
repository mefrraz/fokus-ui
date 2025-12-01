import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Zap, Award } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description:
      "Metodologia orientada para a aplicação prática. Cada módulo é desenhado para gerar impacto imediato no seu desempenho profissional.",
  },
  {
    icon: Zap,
    title: "Aprendizagem Acelerada",
    description:
      "Conteúdo condensado e estruturado para maximizar a retenção. Aprenda em semanas o que outros demoram meses a dominar.",
  },
  {
    icon: Award,
    title: "Certificação Premium",
    description:
      "Credenciais reconhecidas pelo mercado. A nossa certificação abre portas e valida as suas competências junto de empregadores.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ValueProposition() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            Porquê a FOKUS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Uma abordagem diferente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinamos rigor académico com relevância prática para criar 
            experiências de aprendizagem transformadoras.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-8 h-full border border-border hover-elevate transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
