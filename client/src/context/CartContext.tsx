import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface Course {
    id: number;
    title: string;
    price: number;
    description?: string;
}

interface CartContextType {
    items: Course[];
    addToCart: (course: Course) => void;
    removeFromCart: (courseId: number) => void;
    clearCart: () => void;
    total: number;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<Course[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const { toast } = useToast();

    // Load cart from localStorage
    useEffect(() => {
        const storedCart = localStorage.getItem("fokus_cart");
        if (storedCart) {
            setItems(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to localStorage
    useEffect(() => {
        localStorage.setItem("fokus_cart", JSON.stringify(items));
    }, [items]);

    const addToCart = (course: Course) => {
        if (items.some((item) => item.id === course.id)) {
            toast({
                title: "Item já no carrinho",
                description: "Este curso já foi adicionado.",
                variant: "default",
            });
            return;
        }
        setItems((prev) => [...prev, course]);
        setIsOpen(true); // Open cart when adding item
        toast({
            title: "Adicionado ao carrinho",
            description: course.title,
        });
    };

    const removeFromCart = (courseId: number) => {
        setItems((prev) => prev.filter((item) => item.id !== courseId));
    };

    const clearCart = () => {
        setItems([]);
    };

    const total = items.reduce((acc, item) => acc + item.price, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                clearCart,
                total,
                isOpen,
                setIsOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
