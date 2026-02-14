import { useAuth } from "@/context/AuthContext";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, BookOpen, Star, Trophy, Clock, PlayCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StudentArea() {
    const { user, logout } = useAuth();
    const [, setLocation] = useLocation();

    useEffect(() => {
        if (!user) {
            setLocation("/");
        }
    }, [user, setLocation]);

    if (!user) return null;

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            <Header />

            {/* Animated Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute top-20 right-[-10%] w-[600px] h-[600px] rounded-full border border-primary/10 opacity-40 blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -45, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full border border-primary/10 opacity-40 blur-3xl"
                />
            </div>

            <div className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto space-y-12">
                    {/* Welcome Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2"
                            >
                                Área do Aluno
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-muted-foreground"
                            >
                                Bem-vindo de volta, <span className="text-primary font-semibold">{user.name}</span>
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-3"
                        >
                            <Button variant="outline" className="rounded-xl" onClick={() => { logout(); setLocation("/"); }}>
                                <LogOut className="mr-2 h-4 w-4" />
                                Sair
                            </Button>
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card className="bg-white/50 backdrop-blur-xl border-white/20 h-full hover:shadow-lg transition-all duration-300">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">Meus Dados</CardTitle>
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-foreground mb-1">{user.name}</div>
                                    <p className="text-xs text-muted-foreground">{user.email}</p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Card className="bg-white/50 backdrop-blur-xl border-white/20 h-full hover:shadow-lg transition-all duration-300">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">Cursos Adquiridos</CardTitle>
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <BookOpen className="w-4 h-4 text-primary" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold text-primary">{user.purchases.length}</div>
                                    <p className="text-xs text-muted-foreground mt-1">Cursos na sua biblioteca</p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Card className="bg-white/50 backdrop-blur-xl border-white/20 h-full hover:shadow-lg transition-all duration-300">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">Avaliações Feitas</CardTitle>
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Star className="w-4 h-4 text-primary" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold text-primary">{user.feedback.length}</div>
                                    <p className="text-xs text-muted-foreground mt-1">Obrigado pelo seu feedback!</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* My Courses Section */}
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-2xl font-bold text-foreground flex items-center gap-2"
                        >
                            <BookOpen className="h-6 w-6 text-primary" />
                            Meus Cursos
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {user.purchases.length > 0 ? (
                                user.purchases.map((purchase: any, index: number) => (
                                    <motion.div
                                        key={purchase.courseId}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                    >
                                        <Card className="group overflow-hidden border-white/20 bg-white/60 backdrop-blur-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                            <div className="h-32 bg-gradient-to-br from-primary/80 to-primary relative overflow-hidden">
                                                <div className="absolute inset-0 opacity-20">
                                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                                                    </svg>
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
                                                </div>
                                            </div>
                                            <CardContent className="p-6">
                                                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">{purchase.title}</h3>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                                                    <Clock className="w-4 h-4" />
                                                    <span>Adquirido em {new Date(purchase.date).toLocaleDateString('pt-PT')}</span>
                                                </div>
                                                <Button className="w-full rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                                    Aceder ao Conteúdo
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="col-span-full py-12 text-center bg-white/30 backdrop-blur-md rounded-3xl border border-dashed border-muted-foreground/20"
                                >
                                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                        <BookOpen className="w-8 h-8 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-lg font-medium text-foreground mb-2">Ainda não tens cursos</h3>
                                    <p className="text-muted-foreground mb-6">Explora o nosso catálogo e começa a aprender hoje mesmo.</p>
                                    <Button onClick={() => setLocation("/cursos")}>
                                        Ver Cursos Disponíveis
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Feedback Section */}
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-2xl font-bold text-foreground flex items-center gap-2"
                        >
                            <Trophy className="h-6 w-6 text-primary" />
                            Meu Feedback
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {user.feedback.length > 0 ? (
                                user.feedback.map((item: any, index: number) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.9 + index * 0.1 }}
                                    >
                                        <Card className="bg-white/50 backdrop-blur-xl border-white/20 hover:bg-white/80 transition-colors">
                                            <CardHeader className="pb-2">
                                                <div className="flex justify-between items-start">
                                                    <CardTitle className="text-base font-medium">Curso #{item.courseId}</CardTitle>
                                                    <div className="flex gap-0.5">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`h-4 w-4 ${i < item.rating ? "fill-primary text-primary" : "text-muted/30"}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground italic">"{item.comment}"</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))
                            ) : (
                                <p className="text-muted-foreground col-span-full text-center py-8">
                                    Ainda não enviaste nenhum feedback. Completa um curso para partilhares a tua opinião!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
