import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Mensagem enviada!",
                description: "Entraremos em contacto consigo em breve.",
            });
            // Reset form would go here
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-48 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
                        <motion.circle cx="100" cy="100" r="300" stroke="currentColor" className="text-primary/20" strokeWidth="1" initial={{ scale: 0.8 }} animate={{ scale: 1.2 }} transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }} />
                        <motion.circle cx="1100" cy="500" r="400" stroke="currentColor" className="text-primary/20" strokeWidth="1" initial={{ scale: 1 }} animate={{ scale: 0.9 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} />
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground rounded-full">
                            Contacto
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Fale <span className="text-primary">Connosco</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Estamos aqui para ajudar. Tem dúvidas sobre os cursos ou a metodologia?
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-40">
                    <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                        <motion.circle cx="100" cy="100" r="100" stroke="currentColor" className="text-primary/10" strokeWidth="1" initial={{ scale: 0.8 }} animate={{ scale: 1.2 }} transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }} />
                        <motion.rect x="1000" y="50" width="120" height="120" rx="30" stroke="currentColor" className="text-primary/10" strokeWidth="1" animate={{ rotate: 90 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
                        <motion.circle cx="1100" cy="600" r="200" stroke="currentColor" className="text-primary/5" strokeWidth="1" initial={{ scale: 1 }} animate={{ scale: 0.9 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }} />
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-8">Canais Diretos</h2>
                            <div className="space-y-6">
                                <div className="group bg-card border border-border p-6 rounded-3xl hover:border-primary/50 transition-colors shadow-sm flex items-start gap-6">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email</h3>
                                        <p className="text-muted-foreground mb-2 text-sm">Para questões gerais e suporte.</p>
                                        <a href="mailto:geral@fokus.pt" className="text-primary font-medium hover:underline text-lg">geral@fokus.pt</a>
                                    </div>
                                </div>

                                <div className="group bg-card border border-border p-6 rounded-3xl hover:border-primary/50 transition-colors shadow-sm flex items-start gap-6">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Telefone</h3>
                                        <p className="text-muted-foreground mb-2 text-sm">Segunda a Sexta, 9h - 18h.</p>
                                        <div className="space-y-1">
                                            <a href="tel:+351222222222" className="block text-primary font-medium hover:underline">+351 222 222 222</a>
                                            <a href="tel:+351911111111" className="block text-primary font-medium hover:underline">+351 911 111 111</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="group bg-card border border-border p-6 rounded-3xl hover:border-primary/50 transition-colors shadow-sm flex items-start gap-6">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Escritório</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            Av. da Boavista, 1234<br />
                                            4100-111 Porto, Portugal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-card border border-border rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-primary/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <h2 className="text-2xl font-bold mb-2 relative z-10">Envie uma mensagem</h2>
                            <p className="text-muted-foreground mb-8 relative z-10">Preencha o formulário abaixo e responderemos em breve.</p>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium ml-1">Nome</label>
                                        <Input id="name" placeholder="Seu nome" required className="rounded-xl h-12 bg-background/50" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                                        <Input id="email" type="email" placeholder="seu@email.com" required className="rounded-xl h-12 bg-background/50" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium ml-1">Assunto</label>
                                    <Input id="subject" placeholder="Sobre o que quer falar?" required className="rounded-xl h-12 bg-background/50" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium ml-1">Mensagem</label>
                                    <Textarea id="message" placeholder="Escreva a sua mensagem aqui..." className="min-h-[150px] rounded-xl bg-background/50 resize-none" required />
                                </div>
                                <Button type="submit" className="w-full h-12 rounded-xl text-base" disabled={isSubmitting}>
                                    {isSubmitting ? "A enviar..." : (
                                        <>
                                            Enviar Mensagem
                                            <Send className="ml-2 w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
