import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLocation } from "wouter";
import AuthModal from "./AuthModal";

export default function CartSidebar() {
    const { items, removeFromCart, clearCart, total, isOpen, setIsOpen } = useCart();
    const { user } = useAuth();
    const { toast } = useToast();
    const [authOpen, setAuthOpen] = useState(false);
    const [, setLocation] = useLocation();

    const handleCheckout = () => {
        if (!user) {
            setAuthOpen(true);
            return;
        }

        setIsOpen(false);
        setLocation("/checkout");
    };

    return (
        <>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="w-full sm:max-w-md flex flex-col bg-white/90 backdrop-blur-xl">
                    <SheetHeader>
                        <SheetTitle className="text-2xl font-bold text-primary">Seu Carrinho</SheetTitle>
                    </SheetHeader>

                    <ScrollArea className="flex-1 my-4 pr-4">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
                                <p>Seu carrinho está vazio.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between p-3 bg-white/50 rounded-lg border border-white/20">
                                        <div>
                                            <h4 className="font-medium text-sm">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">€ {item.price.toFixed(2)}</p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <Trash2 size={18} />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ScrollArea>

                    <SheetFooter className="flex-col gap-4 sm:flex-col border-t pt-4">
                        <div className="flex items-center justify-between w-full text-lg font-bold">
                            <span>Total</span>
                            <span>€ {total.toFixed(2)}</span>
                        </div>
                        <Button
                            className="w-full"
                            size="lg"
                            disabled={items.length === 0}
                            onClick={handleCheckout}
                        >
                            Finalizar Compra
                        </Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

            <AuthModal
                isOpen={authOpen}
                onClose={() => setAuthOpen(false)}
                defaultTab="login"
            />
        </>
    );
}
