import { useState, useEffect } from "react";
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
  FileText,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCourseBySlug } from "@shared/courses";
import { getRandomTestimonials, Testimonial } from "@/data/testimonials";
import { useCart } from "@/context/CartContext";



export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    setTestimonials(getRandomTestimonials(3));
  }, []);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <motion.circle cx="100" cy="100" r="300" stroke="currentColor" className="text-primary/20" strokeWidth="1" initial={{ scale: 0.8 }} animate={{ scale: 1.2 }} transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }} />
            <motion.circle cx="1100" cy="500" r="400" stroke="currentColor" className="text-primary/20" strokeWidth="1" initial={{ scale: 1 }} animate={{ scale: 0.9 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <Link href="/cursos">
                <span className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 text-sm cursor-pointer transition-colors font-medium">
                  <ArrowLeft size={16} />
                  Voltar ao Catálogo
                </span>
              </Link>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                  {course.categoria}
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-yellow-500/10 text-yellow-600 rounded-full border border-yellow-500/20">
                  <Award size={14} /> Certificado DGERT
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground"
              >
                {course.titulo}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground leading-relaxed mb-8"
              >
                {course.descricaoCompleta}
              </motion.p>

              <div className="flex flex-wrap gap-6 text-foreground/80">
                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-border/50">
                  <Clock size={20} className="text-primary" />
                  <span className="font-medium">{course.duracao}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-border/50">
                  <BarChart3 size={20} className="text-primary" />
                  <span className="font-medium">{course.nivel}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-border/50">
                  <Star size={20} className="text-primary fill-primary" />
                  <span className="font-medium">{course.rating}/5.0</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-[2rem] p-8 border border-border shadow-xl shadow-primary/5 sticky top-28"
              >
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-5xl font-bold text-foreground">{course.preco}€</span>
                  <span className="text-muted-foreground mb-2 font-medium">pagamento único</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-foreground/80">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-green-600" />
                    </div>
                    <span className="font-medium">Certificado DGERT Incluído</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users size={14} className="text-primary" />
                    </div>
                    <span className="font-medium">Apoio Individual do Formador</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={14} className="text-primary" />
                    </div>
                    <span className="font-medium">Acesso Vitalício sem Prazos</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground/80">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen size={14} className="text-primary" />
                    </div>
                    <span className="font-medium">Manuais PDF e Exercícios</span>
                  </li>
                </ul>

                <Button
                  size="lg"
                  className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                  data-testid="button-enroll"
                  onClick={() => addToCart({ id: course.id, title: course.titulo, price: course.preco })}
                >
                  Adicionar ao Carrinho
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-center text-muted-foreground text-sm mt-6 flex items-center justify-center gap-2">
                  <CheckCircle2 size={14} className="text-green-600" />
                  Garantia de Satisfação de 15 dias
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10 opacity-0" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <motion.circle cx="100" cy="500" r="200" stroke="currentColor" className="text-primary/10" strokeWidth="1" initial={{ scale: 0.8 }} animate={{ scale: 1.2 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} />
            <motion.circle cx="1100" cy="100" r="300" stroke="currentColor" className="text-primary/10" strokeWidth="1" initial={{ scale: 1 }} animate={{ scale: 0.9 }} transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }} />
            <motion.rect x="500" y="50" width="100" height="100" rx="30" stroke="currentColor" className="text-primary/10" strokeWidth="1" animate={{ rotate: 180 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
          >
            O Que Vai Aprender
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {course.objetivos.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                </div>
                <p className="text-foreground font-medium">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <motion.circle cx="1100" cy="100" r="250" stroke="currentColor" className="text-primary/10" strokeWidth="1" initial={{ scale: 0.8 }} animate={{ scale: 1.1 }} transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }} />
            <motion.circle cx="50" cy="500" r="150" stroke="currentColor" className="text-primary/10" strokeWidth="1" initial={{ scale: 1 }} animate={{ scale: 0.9 }} transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }} />
            <motion.rect x="200" y="100" width="150" height="150" rx="40" stroke="currentColor" className="text-primary/5" strokeWidth="2" animate={{ rotate: -90 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
          >
            Para Quem é Este Curso?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Empreendedores */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-[2rem] p-8 border border-border hover:border-orange-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-orange-600 transition-colors">Empreendedores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Que necessitam de dominar novas ferramentas para gerir e escalar os seus próprios negócios com autonomia.
              </p>
            </motion.div>

            {/* Card 2: Estudantes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-[2rem] p-8 border border-border hover:border-purple-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-purple-600 transition-colors">Estudantes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Que querem complementar a formação académica com competências práticas altamente valorizadas.
              </p>
            </motion.div>

            {/* Card 3: Profissionais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-[2rem] p-8 border border-border hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-blue-600 transition-colors">Profissionais Ativos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Que procuram atualizar as suas competências técnicas e acelerar a progressão na carreira.
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      <section className="py-20 bg-background border-y border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <motion.rect x="1000" y="50" width="200" height="200" rx="40" stroke="currentColor" className="text-primary/5" strokeWidth="2" animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} />
            <motion.circle cx="100" cy="300" r="100" stroke="currentColor" className="text-primary/10" strokeWidth="1" initial={{ scale: 0.9 }} animate={{ scale: 1.1 }} transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }} />
            <motion.rect x="50" y="50" width="120" height="120" rx="30" stroke="currentColor" className="text-primary/5" strokeWidth="1" animate={{ rotate: 45 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Quem Ensina</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Equipa Certificada FOKUS</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Os nossos cursos são desenvolvidos por uma equipa de formadores certificados e experientes no mercado de trabalho.
                Não vendemos "truques", ensinamos competências reais validadas pela DGERT.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm font-medium bg-primary/5 px-4 py-2 rounded-full text-primary">
                  <Award size={16} />
                  <span>Entidade Certificada DGERT</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium bg-primary/5 px-4 py-2 rounded-full text-primary">
                  <Users size={16} />
                  <span>+150 Manuais Criados</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[300px] bg-muted rounded-3xl overflow-hidden"
            >
              {/* Placeholder for Team Image - using a gradient/pattern for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Award className="w-24 h-24 text-primary/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <motion.path d="M0,100 Q600,200 1200,100" stroke="currentColor" className="text-primary/5" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5, ease: "easeInOut" }} />
            <motion.circle cx="600" cy="500" r="300" stroke="currentColor" className="text-primary/5" strokeWidth="1" initial={{ scale: 0.8 }} animate={{ scale: 1.2 }} transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }} />
            <motion.rect x="900" y="200" width="180" height="180" rx="50" stroke="currentColor" className="text-primary/5" strokeWidth="1" animate={{ rotate: -45 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
          >
            O Que Dizem os Nossos Alunos
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-[2rem] p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className={`fill-current ${j >= Math.floor(test.rating) && test.rating % 1 !== 0 ? "opacity-50 text-primary/50" : j >= test.rating ? "text-primary/20 fill-primary/20" : "text-primary fill-primary"}`}
                    />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-8 leading-relaxed text-lg">"{test.texto}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {test.nome.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{test.nome}</p>
                    <p className="text-sm text-muted-foreground">{test.cargo}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
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
            className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Junte-se aos profissionais que já escolheram investir no seu desenvolvimento com certificação DGERT.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-10 h-14 text-lg rounded-xl shadow-xl shadow-black/10"
              data-testid="button-enroll-final"
              onClick={() => addToCart({ id: course.id, title: course.titulo, price: course.preco })}
            >
              Adicionar ao Carrinho por {course.preco}€
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-primary-foreground/60 text-sm">
              Ainda com dúvidas? <a href="mailto:admin@fokus.pt" className="text-white underline hover:text-white/80 transition-colors">Fale connosco</a>
            </p>
          </div>
        </div>
      </section>



      <Footer />

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-xl border-t border-border md:hidden z-50">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Total</p>
            <p className="text-xl font-bold text-primary">{course.preco}€</p>
          </div>
          <Button
            size="lg"
            className="flex-1 shadow-lg shadow-primary/20"
            onClick={() => addToCart({ id: course.id, title: course.titulo, price: course.preco })}
          >
            Comprar Agora
          </Button>
        </div>
      </div>
    </div>
  );
}

