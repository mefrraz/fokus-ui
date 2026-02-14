import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, CreditCard, Unlock, Award, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Escolha o Curso",
        description: "Explore o nosso catálogo e encontre a formação ideal para a sua carreira.",
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        icon: CreditCard,
        title: "Pagamento Seguro",
        description: "Utilize MB Way, Multibanco ou Cartão. Processo 100% seguro e imediato.",
        color: "bg-green-500/10 text-green-500",
    },
    {
        icon: Unlock,
        title: "Acesso Imediato",
        description: "Receba um email com as suas credenciais de acesso à nossa plataforma Moodle e comece logo a estudar.",
        color: "bg-purple-500/10 text-purple-500",
    },
    {
        icon: Award,
        title: "Certificação",
        description: "Complete o curso ao seu ritmo e receba o seu certificado DGERT válido.",
        color: "bg-yellow-500/10 text-yellow-500",
    },
];

export default function HowItWorks() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
                        <motion.rect x="100" y="100" width="100" height="100" rx="20" stroke="currentColor" className="text-primary/20" strokeWidth="2" initial={{ rotate: 0 }} animate={{ rotate: 90 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                        <motion.circle cx="1000" cy="400" r="150" stroke="currentColor" className="text-primary/20" strokeWidth="2" initial={{ scale: 0.9 }} animate={{ scale: 1.1 }} transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }} />
                    </svg>
                </div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground rounded-full">
                            Guia Rápido
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Como <span className="text-primary">Funciona</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Simples, rápido e transparente. Em menos de 5 minutos pode começar a investir no seu futuro.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-40">
                    <svg className="w-full h-full" viewBox="0 0 1200 1200" fill="none">
                        <motion.circle cx="100" cy="200" r="150" stroke="currentColor" className="text-primary/10" strokeWidth="1" initial={{ scale: 0.8 }} animate={{ scale: 1.2 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} />
                        <motion.rect x="1000" y="400" width="150" height="150" rx="30" stroke="currentColor" className="text-primary/10" strokeWidth="1" animate={{ rotate: 180 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} />
                        <motion.path d="M0,600 Q600,800 1200,600" stroke="currentColor" className="text-primary/5" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 8, ease: "easeInOut" }} />
                        <motion.circle cx="1100" cy="900" r="200" stroke="currentColor" className="text-primary/10" strokeWidth="1" initial={{ scale: 1 }} animate={{ scale: 0.9 }} transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }} />
                        <motion.rect x="50" y="1000" width="100" height="100" rx="20" stroke="currentColor" className="text-primary/5" strokeWidth="2" animate={{ rotate: -45 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
                    </svg>
                </div>
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    {/* Central Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 md:gap-24 items-center mb-24 last:mb-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Side */}
                            <div className={`flex-1 text-center ${index % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Center Marker */}
                            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center font-bold text-primary shadow-lg text-lg">
                                {index + 1}
                            </div>

                            {/* Visual Side */}
                            <div className={`flex-1 flex justify-center ${index % 2 === 1 ? "md:justify-end" : "md:justify-start"}`}>
                                <div className={`w-40 h-40 rounded-[2rem] ${step.color} flex items-center justify-center shadow-sm border-4 border-background ring-1 ring-border/50`}>
                                    <step.icon className="w-16 h-16" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

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
                    <h2 className="text-3xl font-bold mb-6">Ficou com dúvidas?</h2>
                    <p className="text-lg text-primary-foreground/80 mb-8">
                        A nossa equipa de suporte está disponível para ajudar em qualquer etapa do processo.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/cursos">
                            <Button size="lg" variant="secondary" className="px-8 bg-white text-primary hover:bg-white/90">
                                Começar Agora
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/contactos">
                            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                                Contactar Suporte
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
