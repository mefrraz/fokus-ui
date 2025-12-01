import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { cursosData, getCategories } from "@shared/courses";

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas as Áreas");
  const [sortBy, setSortBy] = useState("recentes");

  const categories = getCategories();

  const filteredCourses = useMemo(() => {
    let courses = [...cursosData];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      courses = courses.filter(
        (c) =>
          c.titulo.toLowerCase().includes(query) ||
          c.descricao.toLowerCase().includes(query) ||
          c.categoria.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== "Todas as Áreas") {
      courses = courses.filter((c) => c.categoria === selectedCategory);
    }

    switch (sortBy) {
      case "populares":
        courses.sort((a, b) => b.alunos - a.alunos);
        break;
      case "rating":
        courses.sort((a, b) => b.rating - a.rating);
        break;
      case "preco-baixo":
        courses.sort((a, b) => a.preco - b.preco);
        break;
      case "preco-alto":
        courses.sort((a, b) => b.preco - a.preco);
        break;
      default:
        courses.sort((a, b) => b.id - a.id);
    }

    return courses;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full"
          >
            Catálogo de Cursos
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
          >
            Especialize-se com os
            <br />
            <span className="text-primary">Nossos Cursos Premium</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            Formação certificada, acesso vitalício, suporte permanente
          </motion.p>
        </div>
      </section>

      <section className="sticky top-[73px] z-40 bg-background/80 backdrop-blur-xl border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <input
                type="search"
                placeholder="Procurar cursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/60 backdrop-blur-xl rounded-full pl-11 pr-6 py-3 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                data-testid="input-search-courses"
              />
            </div>

            <div className="flex gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/60 backdrop-blur-xl rounded-full px-5 py-3 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                data-testid="select-category"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/60 backdrop-blur-xl rounded-full px-5 py-3 border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
                data-testid="select-sort"
              >
                <option value="recentes">Mais Recentes</option>
                <option value="populares">Mais Populares</option>
                <option value="rating">Melhor Avaliação</option>
                <option value="preco-baixo">Preço: Menor</option>
                <option value="preco-alto">Preço: Maior</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filteredCourses.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground">
                Nenhum curso encontrado para a sua pesquisa.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Todas as Áreas");
                }}
                className="mt-4 text-primary underline underline-offset-4"
                data-testid="button-clear-filters"
              >
                Limpar filtros
              </button>
            </motion.div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                {filteredCourses.length} curso{filteredCourses.length !== 1 ? "s" : ""} encontrado{filteredCourses.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredCourses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
