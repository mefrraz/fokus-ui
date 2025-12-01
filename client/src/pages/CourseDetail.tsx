import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import {
  Clock,
  BarChart3,
  Users,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCourseBySlug } from "@shared/courses";

function ModuleAccordion({
  modulo,
  index,
  isOpen,
  onToggle,
}: {
  modulo: { titulo: string; licoes: { titulo: string; duracao: string }[] };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-6 text-left"
        data-testid={`accordion-module-${index}`}
      >
        <div>
          <span className="text-sm text-muted-foreground">Módulo {index + 1}</span>
          <h3 className="text-lg font-semibold text-foreground mt-1">{modulo.titulo}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="text-muted-foreground" />
        ) : (
          <ChevronDown className="text-muted-foreground" />
        )}
      </button>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 pb-6 space-y-3"
        >
          {modulo.licoes.map((licao, j) => (
            <div
              key={j}
              className="flex justify-between items-center py-2 text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <PlayCircle size={16} className="text-primary" /> {licao.titulo}
              </span>
              <span className="text-sm">{licao.duracao}</span>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");
  const [openModules, setOpenModules] = useState<number[]>([0]);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Curso não encontrado</h1>
          <Link href="/cursos">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar ao Catálogo
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const toggleModule = (index: number) => {
    setOpenModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
            <motion.circle
              cx="100"
              cy="200"
              r="150"
              stroke="white"
              strokeWidth="1"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.circle
              cx="700"
              cy="100"
              r="100"
              stroke="white"
              strokeWidth="1"
              initial={{ scale: 1 }}
              animate={{ scale: 0.8 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 text-white">
              <Link href="/cursos">
                <span className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm cursor-pointer transition-colors">
                  <ArrowLeft size={16} />
                  Voltar ao Catálogo
                </span>
              </Link>

              <div className="text-white/60 text-sm mb-4">
                Início / Cursos / {course.categoria} / {course.titulo}
              </div>

              <span className="inline-block bg-white/20 backdrop-blur-xl px-4 py-1.5 rounded-full text-sm font-medium">
                {course.categoria}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
                {course.titulo}
              </h1>

              <p className="text-xl text-white/80 mt-4 leading-relaxed">
                {course.descricaoCompleta}
              </p>

              <div className="flex flex-wrap gap-6 mt-8 text-white/90">
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>{course.duracao}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 size={20} />
                  <span>{course.nivel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>{course.alunos} alunos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={20} className="fill-white" />
                  <span>{course.rating}/5.0</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 sticky top-28">
                <div className="text-white">
                  <span className="text-5xl font-bold">{course.preco}€</span>
                  <span className="text-white/60 ml-2">pagamento único</span>
                </div>

                <ul className="mt-6 space-y-3 text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-white" /> Acesso Vitalício
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-white" /> Certificado Reconhecido
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-white" /> Suporte Permanente
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-white" /> Atualizações Gratuitas
                  </li>
                </ul>

                <Button
                  size="lg"
                  className="w-full mt-8 bg-white text-primary hover:bg-white/90"
                  data-testid="button-enroll"
                >
                  Inscrever-me Agora
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full mt-4 border-white/30 text-white hover:bg-white/10"
                  data-testid="button-more-info"
                >
                  Saber Mais
                </Button>

                <p className="text-center text-white/60 text-sm mt-6">
                  Garantia de 30 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-10"
          >
            O Que Vai Aprender
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {course.objetivos.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={22} />
                <p className="text-muted-foreground">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-10"
          >
            Programa do Curso
          </motion.h2>

          <div className="space-y-4">
            {course.modulos.map((modulo, i) => (
              <ModuleAccordion
                key={i}
                modulo={modulo}
                index={i}
                isOpen={openModules.includes(i)}
                onToggle={() => toggleModule(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-10"
          >
            O Seu Instrutor
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary/70 rounded-3xl aspect-square flex items-center justify-center"
            >
              <div className="text-6xl text-white/30 font-bold">
                {course.instrutor.nome.split(" ").map((n) => n[0]).join("")}
              </div>
            </motion.div>

            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-foreground">
                {course.instrutor.nome}
              </h3>
              <p className="text-primary font-medium mt-2">{course.instrutor.cargo}</p>

              <p className="text-muted-foreground mt-6 leading-relaxed">
                {course.instrutor.bio}
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {course.instrutor.experiencia}+
                  </div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {course.instrutor.alunosTreinados.toLocaleString()}+
                  </div>
                  <div className="text-sm text-muted-foreground">Alunos Treinados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {course.instrutor.avaliacao}
                  </div>
                  <div className="text-sm text-muted-foreground">Avaliação Média</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {course.testemunhos.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-10"
            >
              O Que Dizem os Alunos
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {course.testemunhos.map((test, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-white/30"
                >
                  <div className="flex gap-1 text-primary">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={18} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-4 italic">"{test.texto}"</p>
                  <div className="mt-6">
                    <p className="font-semibold text-foreground">{test.nome}</p>
                    <p className="text-sm text-muted-foreground">{test.cargo}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {course.faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-10"
            >
              Perguntas Frequentes
            </motion.h2>

            <div className="space-y-4">
              {course.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex justify-between items-center p-6 text-left"
                    data-testid={`accordion-faq-${i}`}
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.pergunta}
                    </h3>
                    {openFaqs.includes(i) ? (
                      <ChevronUp className="text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="text-muted-foreground flex-shrink-0" />
                    )}
                  </button>

                  {openFaqs.includes(i) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-muted-foreground">{faq.resposta}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 300" fill="none">
            <motion.circle
              cx="100"
              cy="150"
              r="120"
              stroke="white"
              strokeWidth="1"
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.rect
              x="600"
              y="100"
              width="100"
              height="100"
              rx="20"
              stroke="white"
              strokeWidth="1"
              animate={{ rotate: [0, 45, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
          >
            Pronto para Dominar {course.titulo.split(" ").slice(0, 3).join(" ")}?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            Junte-se aos {course.alunos}+ profissionais que já escolheram investir no seu desenvolvimento.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-10"
              data-testid="button-enroll-final"
            >
              Inscrever-me Agora por {course.preco}€
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
