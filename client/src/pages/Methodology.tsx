import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileText, Users, Award, CheckCircle2, ArrowRight, Zap, Target, BookOpen } from "lucide-react";

export default function Methodology() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero / Sobre a FOKUS Section */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
                        <motion.circle cx="100" cy="100" r="300" stroke="currentColor" className="text-primary/20" strokeWidth="1" initial={{ scale: 0.8 }} animate={{ scale: 1.2 }} transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }} />
                        <motion.circle cx="1100" cy="500" r="400" stroke="currentColor" className="text-primary/20" strokeWidth="1" initial={{ scale: 1 }} animate={{ scale: 0.9 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground rounded-full">
                                Sobre a FOKUS
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Formação Sem <span className="text-primary">Ruído</span>.
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                A FOKUS nasceu de uma necessidade clara: profissionais ocupados não têm tempo a perder.
                                Criámos uma entidade formadora que elimina o supérfluo e entrega competências reais.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Objetividade</p>
                                        <p className="text-sm text-muted-foreground">Conteúdo direto ao ponto</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Eficiência</p>
                                        <p className="text-sm text-muted-foreground">Aprenda em metade do tempo</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] w-full hidden md:block"
                        >
                            {/* Abstract Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-50" />

                            {/* Floating Card 1: Certificate */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-10 bg-card p-4 rounded-2xl shadow-lg border border-border flex items-center gap-3 z-20"
                            >
                                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Certificado DGERT</p>
                                    <p className="text-xs text-muted-foreground">Reconhecido</p>
                                </div>
                            </motion.div>

                            {/* Floating Card 2: Efficiency */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 left-10 bg-card p-4 rounded-2xl shadow-lg border border-border flex items-center gap-3 z-20"
                            >
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Aprendizagem Rápida</p>
                                    <p className="text-xs text-muted-foreground">Sem enrolação</p>
                                </div>
                            </motion.div>

                            {/* Floating Card 3: Manuals (Center) */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card p-8 rounded-3xl shadow-xl border border-primary/20 text-center z-30 min-w-[200px]"
                            >
                                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                                    <FileText className="w-10 h-10" />
                                </div>
                                <p className="font-bold text-xl mb-1">Manuais Técnicos</p>
                                <p className="text-sm text-muted-foreground">Passo-a-passo detalhado</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What is the Methodology? */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">O Que é a Metodologia FOKUS?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A nossa metodologia baseia-se no princípio do <strong className="text-foreground">"Active Reading & Doing"</strong>.
                            Em vez de assistir passivamente a vídeos, você interage ativamente com o conteúdo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-background p-8 rounded-3xl border border-border hover:border-primary/50 transition-colors shadow-sm">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                                <BookOpen className="w-7 h-7 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">1. Manuais Técnicos</h3>
                            <p className="text-muted-foreground">
                                Documentação estruturada, limpa e pesquisável. Nada de "encher chouriços". Apenas a informação técnica que precisa.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-3xl border border-border hover:border-primary/50 transition-colors shadow-sm">
                            <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-7 h-7 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">2. Validação Contínua</h3>
                            <p className="text-muted-foreground">
                                Quizzes curtos e frequentes para garantir que consolidou o conhecimento antes de avançar.
                            </p>
                        </div>
                        <div className="bg-background p-8 rounded-3xl border border-border hover:border-primary/50 transition-colors shadow-sm">
                            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                                <Users className="w-7 h-7 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">3. Apoio Humano</h3>
                            <p className="text-muted-foreground">
                                Dúvidas? O formador responde. Não usamos bots para suporte pedagógico. O feedback é real e personalizado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Examples */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Exemplos Práticos</h2>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Example 1: Traditional */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden group hover:border-red-200 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <FileText className="w-32 h-32" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                                    <span className="font-bold text-xl">A</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground">O Método Tradicional</h3>
                                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                    "Para aprender a fazer uma tabela dinâmica no Excel, assista a este vídeo de 45 minutos onde o formador fala sobre a história das folhas de cálculo nos primeiros 10 minutos."
                                </p>
                                <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
                                    <div className="p-1 bg-red-100 rounded-full mt-0.5">
                                        <ArrowRight className="w-3 h-3 text-red-600 rotate-45" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-red-700 text-sm">Resultado</p>
                                        <p className="text-red-600 text-sm">45 min perdidos, baixa retenção.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Example 2: FOKUS */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-card border-2 border-primary/10 rounded-3xl p-8 relative overflow-hidden group hover:border-primary/30 transition-colors shadow-lg shadow-primary/5"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Zap className="w-32 h-32 text-primary" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                                    <span className="font-bold text-xl">B</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground">O Método FOKUS</h3>
                                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                    "Manual Página 12: Passo-a-passo com prints para criar Tabela Dinâmica. Tempo de leitura: 3 minutos. Exercício prático imediato."
                                </p>
                                <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl flex items-start gap-3">
                                    <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                                        <CheckCircle2 className="w-3 h-3 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-primary text-sm">Resultado</p>
                                        <p className="text-primary/80 text-sm">5 min investidos, competência adquirida.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary text-primary-foreground text-center relative overflow-hidden">
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
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold mb-6">Pronto para aprender de verdade?</h2>
                    <p className="text-lg text-primary-foreground/80 mb-8">
                        Junte-se aos profissionais que escolheram a eficiência.
                    </p>
                    <Link href="/cursos">
                        <Button size="lg" variant="secondary" className="px-8 bg-white text-primary hover:bg-white/90">
                            Ver Catálogo de Cursos
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
