import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultTab?: "login" | "register";
}

export default function AuthModal({
    isOpen,
    onClose,
    defaultTab = "login",
}: AuthModalProps) {
    const [activeTab, setActiveTab] = useState<string>(defaultTab);
    const { login, register } = useAuth();
    const [, setLocation] = useLocation();
    const { toast } = useToast();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        const success = await login(email, password);
        setIsLoading(false);

        if (success) {
            toast({ title: "Login realizado com sucesso!" });
            onClose();
            setLocation("/area-aluno");
        } else {
            toast({ title: "Erro no login", description: "Credenciais inválidas.", variant: "destructive" });
        }
    };

    const handleRegister = async () => {
        setIsLoading(true);
        const success = await register({ email, name, password });
        setIsLoading(false);

        if (success) {
            toast({ title: "Conta criada!", description: "Bem-vindo ao Fokus." });
            onClose();
            setLocation("/area-aluno");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[400px] bg-white/90 backdrop-blur-xl border-white/20">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold text-primary">
                        {activeTab === "login" ? "Bem-vindo de volta" : "Criar Conta"}
                    </DialogTitle>
                </DialogHeader>

                <Tabs
                    defaultValue={defaultTab}
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full mt-4"
                >
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="login">Entrar</TabsTrigger>
                        <TabsTrigger value="register">Criar Conta</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="aluno@fokus.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button className="w-full mt-4" size="lg" onClick={handleLogin} disabled={isLoading}>
                            {isLoading ? "Entrando..." : "Entrar"}
                        </Button>
                        <div className="text-center text-sm text-muted-foreground mt-2">
                            <p>Teste: aluno@fokus.com / 123</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="register" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome Completo</Label>
                            <Input
                                id="name"
                                placeholder="João Silva"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="register-email">Email</Label>
                            <Input
                                id="register-email"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="register-password">Senha</Label>
                            <Input
                                id="register-password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button className="w-full mt-4" size="lg" onClick={handleRegister} disabled={isLoading}>
                            {isLoading ? "Criando..." : "Criar Conta"}
                        </Button>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}
