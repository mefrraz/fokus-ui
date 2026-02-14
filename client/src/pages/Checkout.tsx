import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CreditCard, Smartphone, Building2, CheckCircle2, ShieldCheck, Star } from "lucide-react";

export default function Checkout() {
    const { items, total, clearCart } = useCart();
    const { user, isLoading: authLoading } = useAuth();
    const [, setLocation] = useLocation();
    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("mbway");

    // Form state
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        nif: "",
        address: "",
        city: "",
        zip: "",
    });

    useEffect(() => {
        if (authLoading) return;

        if (!user) {
            setLocation("/");
            toast({
                title: "Login necessário",
                description: "Faça login para finalizar a compra.",
                variant: "destructive",
            });
        } else if (items.length === 0 && !isSuccess) {
            setLocation("/cursos");
            toast({
                title: "Carrinho vazio",
                description: "Adicione cursos antes de finalizar a compra.",
            });
        }
    }, [user, items, setLocation, toast, authLoading, isSuccess]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsLoading(false);
        setIsSuccess(true);
        clearCart();
        toast({
            title: "Compra realizada com sucesso!",
            description: "Os cursos foram adicionados à sua conta.",
        });
    };

    if (authLoading) return null;
    if (!user || (items.length === 0 && !isSuccess)) return null;

    return (
        <div className="min-h-screen bg-background">
            <Header simple />

            <div className="pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Progress Indicator */}
                    <div className="flex items-center justify-center gap-4 mb-12 text-sm font-medium text-muted-foreground">
                        <div className={`flex items-center gap-2 ${isSuccess ? "text-primary" : "text-primary"}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${isSuccess ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"}`}>
                                {isSuccess ? <CheckCircle2 className="w-4 h-4" /> : "1"}
                            </span>
                            <span>Carrinho</span>
                        </div>
                        <div className={`w-12 h-px ${isSuccess ? "bg-primary" : "bg-border"}`} />
                        <div className={`flex items-center gap-2 ${isSuccess ? "text-primary" : "text-primary"}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${isSuccess ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground"}`}>
                                {isSuccess ? <CheckCircle2 className="w-4 h-4" /> : "2"}
                            </span>
                            <span>Finalizar Compra</span>
                        </div>
                        <div className={`w-12 h-px ${isSuccess ? "bg-primary" : "bg-border"}`} />
                        <div className={`flex items-center gap-2 ${isSuccess ? "text-primary" : "opacity-50"}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${isSuccess ? "bg-primary text-primary-foreground" : "bg-border"}`}>3</span>
                            <span>Confirmação</span>
                        </div>
                    </div>

                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-md mx-auto text-center py-12"
                        >
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Pagamento Confirmado!</h2>
                            <p className="text-muted-foreground mb-8">
                                Obrigado pela sua compra. Estamos a redirecionar-te para a Área de Aluno...
                            </p>
                            <Button onClick={() => setLocation("/area-aluno")} className="w-full">
                                Ir para Área de Aluno agora
                            </Button>
                        </motion.div>
                    ) : (
                        <>
                            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center md:text-left">
                                Finalizar Compra
                            </h1>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                {/* Left Column: Billing Details */}
                                <div className="lg:col-span-2 space-y-8">
                                    <Card className="border-border/50 bg-white/50 backdrop-blur-xl">
                                        <CardHeader>
                                            <CardTitle>Dados de Faturação</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="name">Nome Completo</Label>
                                                        <Input
                                                            id="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="email">Email</Label>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="nif">NIF (Opcional)</Label>
                                                    <Input
                                                        id="nif"
                                                        placeholder="123456789"
                                                        value={formData.nif}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="address">Morada</Label>
                                                    <Input
                                                        id="address"
                                                        placeholder="Rua Exemplo, 123"
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="city">Cidade</Label>
                                                        <Input
                                                            id="city"
                                                            value={formData.city}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="zip">Código Postal</Label>
                                                        <Input
                                                            id="zip"
                                                            placeholder="1000-000"
                                                            value={formData.zip}
                                                            onChange={handleInputChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-border/50 bg-white/50 backdrop-blur-xl">
                                        <CardHeader>
                                            <CardTitle>Método de Pagamento</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <RadioGroup
                                                defaultValue="mbway"
                                                value={paymentMethod}
                                                onValueChange={setPaymentMethod}
                                                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                            >
                                                <div>
                                                    <RadioGroupItem value="mbway" id="mbway" className="peer sr-only" />
                                                    <Label
                                                        htmlFor="mbway"
                                                        className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 [&:has([data-state=checked])]:border-primary cursor-pointer transition-all h-full"
                                                    >
                                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                                            <Smartphone className="h-5 w-5 text-primary" />
                                                        </div>
                                                        <span className="font-semibold text-primary">MB Way</span>
                                                    </Label>
                                                </div>
                                                <div>
                                                    <RadioGroupItem value="multibanco" id="multibanco" className="peer sr-only" />
                                                    <Label
                                                        htmlFor="multibanco"
                                                        className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 [&:has([data-state=checked])]:border-primary cursor-pointer transition-all h-full"
                                                    >
                                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                                            <Building2 className="h-5 w-5 text-primary" />
                                                        </div>
                                                        <span className="font-semibold text-primary">Multibanco</span>
                                                    </Label>
                                                </div>
                                                <div>
                                                    <RadioGroupItem value="card" id="card" className="peer sr-only" />
                                                    <Label
                                                        htmlFor="card"
                                                        className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 [&:has([data-state=checked])]:border-primary cursor-pointer transition-all h-full"
                                                    >
                                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                                            <CreditCard className="h-5 w-5 text-primary" />
                                                        </div>
                                                        <span className="font-semibold text-primary">Cartão</span>
                                                    </Label>
                                                </div>
                                            </RadioGroup>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Right Column: Order Summary */}
                                <div className="lg:col-span-1">
                                    <div className="sticky top-28">
                                        <Card className="border-border/50 bg-white/50 backdrop-blur-xl shadow-lg">
                                            <CardHeader>
                                                <CardTitle>Resumo do Pedido</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                <div className="space-y-4">
                                                    {items.map((item) => (
                                                        <div key={item.id} className="flex justify-between text-sm">
                                                            <span className="text-muted-foreground line-clamp-1 pr-4">
                                                                {item.title}
                                                            </span>
                                                            <span className="font-medium whitespace-nowrap">
                                                                {item.price.toFixed(2)} €
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <Separator />

                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-muted-foreground">Subtotal</span>
                                                        <span>{total.toFixed(2)} €</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-muted-foreground">Taxas</span>
                                                        <span>0.00 €</span>
                                                    </div>
                                                    <div className="flex justify-between text-lg font-bold text-primary pt-2">
                                                        <span>Total</span>
                                                        <span>{total.toFixed(2)} €</span>
                                                    </div>
                                                </div>

                                                <Button
                                                    className="w-full"
                                                    size="lg"
                                                    type="submit"
                                                    form="checkout-form"
                                                    disabled={isLoading}
                                                >
                                                    {isLoading ? (
                                                        <>
                                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                            Processando...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Pagar e Aceder
                                                            <CheckCircle2 className="ml-2 h-4 w-4" />
                                                        </>
                                                    )}
                                                </Button>

                                                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                                                    <div className="flex -space-x-2">
                                                        {[...Array(3)].map((_, i) => (
                                                            <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-gray-500">
                                                                {String.fromCharCode(65 + i)}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <div className="flex">
                                                            {[...Array(4)].map((_, i) => (
                                                                <Star key={i} size={10} className="fill-primary text-primary" />
                                                            ))}
                                                            <div className="relative">
                                                                <Star size={10} className="text-primary" />
                                                                <div className="absolute inset-0 overflow-hidden w-1/2">
                                                                    <Star size={10} className="fill-primary text-primary" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="font-medium text-xs text-primary">+300 alunos</span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
