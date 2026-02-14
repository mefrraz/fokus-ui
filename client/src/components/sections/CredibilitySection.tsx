import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  icon?: boolean;
}

const stats: Stat[] = [
  { value: "300+", label: "Profissionais Impactados" },
  { value: "4.9", label: "Classificação Média", icon: true },
  { value: "45+", label: "Cursos DGERT" },
  { value: "150+", label: "Manuais Técnicos" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function CredibilitySection() {
  return (
    <section id="metodologia" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
            Mentalidade FOKUS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados que falam por si
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma metodologia testada e validada com centenas de profissionais.
            Não vendemos cursos, entregamos competências reais.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center flex flex-col items-center"
            >
              <div className="relative inline-block mb-2">
                <motion.div
                  className="flex items-center justify-center gap-2 text-4xl md:text-5xl font-bold text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {stat.value}
                  {stat.icon && <Star className="w-8 h-8 md:w-10 md:h-10 fill-primary" />}
                </motion.div>
                <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl -z-10" />
              </div>
              <span className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
          <div className="relative bg-card border border-border rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Metodologia Validada
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  O nosso modelo pedagógico é certificado pela DGERT e focado na
                  autonomia do aluno. Manuais desenvolvidos por especialistas para
                  garantir uma aprendizagem eficaz sem perda de tempo.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-muted"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-primary"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 0.96 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{
                        rotate: -90,
                        transformOrigin: "center",
                      }}
                    />
                    <text
                      x="50"
                      y="50"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-foreground text-lg font-bold"
                    >
                      98%
                    </text>
                    <text
                      x="50"
                      y="65"
                      textAnchor="middle"
                      className="fill-muted-foreground text-[8px]"
                    >
                      satisfação
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
