import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Award, BookOpen, CreditCard } from "lucide-react";

const faqs = [
    {
        category: "Geral",
        icon: HelpCircle,
        questions: [
            {
                q: "O que é a FOKUS?",
                a: "A FOKUS é uma entidade formadora certificada pela DGERT, especializada em formação profissional prática e eficiente. Focamo-nos em manuais técnicos de alta qualidade e exercícios práticos, eliminando vídeos longos e desnecessários."
            },
            {
                q: "Os cursos são totalmente online?",
                a: "Sim, todos os nossos cursos são 100% online e assíncronos. Isto significa que pode estudar ao seu ritmo, onde e quando quiser, sem horários fixos."
            },
            {
                q: "Tenho apoio do formador?",
                a: "Sim! Apesar de ser um estudo autónomo, tem acesso direto ao formador através da plataforma para tirar dúvidas e receber feedback nos exercícios práticos."
            }
        ]
    },
    {
        category: "Certificação",
        icon: Award,
        questions: [
            {
                q: "Os certificados são válidos?",
                a: "Sim. Sendo a FOKUS uma entidade certificada pela DGERT, os nossos certificados são reconhecidos oficialmente em Portugal e válidos para as 40 horas anuais de formação obrigatória."
            },
            {
                q: "Como recebo o certificado?",
                a: "Após concluir todos os módulos e passar na avaliação final com sucesso, o certificado é gerado automaticamente e fica disponível para download na sua Área de Aluno."
            },
            {
                q: "O certificado tem custos adicionais?",
                a: "Não. O valor do curso já inclui a emissão do certificado digital."
            }
        ]
    },
    {
        category: "Metodologia",
        icon: BookOpen,
        questions: [
            {
                q: "Porquê manuais em vez de vídeos?",
                a: "Acreditamos na eficiência. A leitura é, em média, 3x mais rápida do que assistir a um vídeo para obter a mesma informação técnica. Além disso, os manuais são mais fáceis de consultar posteriormente."
            },
            {
                q: "Como funcionam as avaliações?",
                a: "Existem quizzes ao longo dos módulos para validar conhecimentos e um trabalho ou teste final. A avaliação é contínua e prática."
            }
        ]
    },
    {
        category: "Pagamentos e Acesso",
        icon: CreditCard,
        questions: [
            {
                q: "Quais são os métodos de pagamento?",
                a: "Aceitamos Multibanco, MB WAY e Cartão de Crédito. O acesso é libertado imediatamente após a confirmação do pagamento."
            },
            {
                q: "Por quanto tempo tenho acesso ao curso?",
                a: "O acesso à plataforma é válido por 12 meses após a compra. No entanto, pode descarregar os manuais em PDF e ficar com eles para sempre."
            },
            {
                q: "Passam fatura?",
                a: "Sim, emitimos fatura com contribuinte para todas as compras. Pode inserir os dados de faturação no momento do checkout."
            }
        ]
    }
];

export default function FAQ() {
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
                            Suporte
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Perguntas <span className="text-primary">Frequentes</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Reunimos as respostas às dúvidas mais comuns dos nossos alunos para que possa focar-se no que importa: aprender.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-3xl mx-auto px-6">
                    {faqs.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="mb-16 last:mb-0"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <category.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {category.questions.map((item, qIdx) => (
                                    <AccordionItem
                                        key={qIdx}
                                        value={`${idx}-${qIdx}`}
                                        className="border border-border rounded-2xl px-6 bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300"
                                    >
                                        <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6 [&[data-state=open]]:text-primary transition-colors">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
