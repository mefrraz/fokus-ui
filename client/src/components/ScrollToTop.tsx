import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
    const [pathname] = useLocation();

    useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

    return null;
}
