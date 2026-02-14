import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Zap, Award } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Manuais em PDF",
    description:
      "Esqueça os vídeos longos e aborrecidos. Receba manuais completos e detalhados para estudar ao seu ritmo, onde e quando quiser.",
  },
  {
    icon: Zap,
    title: "Apoio Individual",
    description:
      "Não está sozinho. Tenha acesso direto ao seu formador para tirar dúvidas e receber feedback personalizado durante todo o curso.",
  },
  {
    icon: Award,
    title: "Certificação DGERT",
    description:
      "Formação certificada que conta para as 40 horas anuais obrigatórias e valoriza o seu currículo no mercado de trabalho.",
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
            Método FOKUS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aprende. Aplica. Evolui.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não desperdiçamos o teu tempo. A nossa metodologia foi desenhada para quem quer resultados rápidos e tangíveis.
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
