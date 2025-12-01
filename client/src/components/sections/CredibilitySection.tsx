import { motion } from "framer-motion";

const stats = [
  { value: "2.500+", label: "Profissionais Formados" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "45+", label: "Cursos Disponíveis" },
  { value: "12", label: "Anos de Experiência" },
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
            Credibilidade
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Números que inspiram confiança
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A nossa trajetória fala por si. Resultados consistentes construídos 
            ao longo de mais de uma década de dedicação à excelência.
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
              className="text-center"
            >
              <div className="relative inline-block">
                <motion.span
                  className="text-4xl md:text-5xl font-bold text-primary block mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.span>
                <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl -z-10" />
              </div>
              <span className="text-sm md:text-base text-muted-foreground">
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
                  O nosso modelo pedagógico é baseado em evidência científica e 
                  validado por especialistas em educação corporativa. Cada curso 
                  passa por um rigoroso processo de desenvolvimento e atualização contínua.
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
                      whileInView={{ pathLength: 0.98 }}
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
