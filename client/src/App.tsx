import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import CourseDetail from "@/pages/CourseDetail";
import StudentArea from "@/pages/StudentArea";
import Checkout from "@/pages/Checkout";
import Methodology from "@/pages/Methodology";
import HowItWorks from "@/pages/HowItWorks";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";

import ScrollToTop from "@/components/ScrollToTop";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/cursos" component={Catalog} />
        <Route path="/cursos/:slug" component={CourseDetail} />
        <Route path="/area-aluno" component={StudentArea} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/metodologia" component={Methodology} />
        <Route path="/como-funciona" component={HowItWorks} />
        <Route path="/contactos" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
