import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { Course } from "@shared/courses";

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white/50 backdrop-blur-xl rounded-3xl p-6 border border-white/30 hover:shadow-lg transition-shadow"
      data-testid={`card-course-${course.id}`}
    >
      <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-medium">
        {course.categoria}
      </span>

      <div className="h-40 bg-gradient-to-br from-primary to-primary/70 rounded-2xl my-4 flex items-center justify-center overflow-hidden relative">
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full absolute inset-0 opacity-20"
        >
          <motion.circle
            cx="50"
            cy="60"
            r="30"
            fill="white"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.rect
            x="120"
            y="30"
            width="50"
            height="50"
            rx="10"
            fill="white"
            initial={{ rotate: 0 }}
            animate={{ rotate: 45 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M80 90 Q 100 70, 120 90 T 160 90"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="relative z-10 text-white/90 text-center p-4">
          <div className="text-4xl font-bold">{course.duracao}</div>
          <div className="text-sm mt-1">de conteúdo</div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground mt-4 line-clamp-2">
        {course.titulo}
      </h3>

      <p className="text-muted-foreground mt-2 text-sm line-clamp-2">
        {course.descricao}
      </p>

      <div className="flex flex-wrap gap-4 mt-5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock size={14} /> {course.duracao}
        </span>
        <span className="flex items-center gap-1.5">
          <Users size={14} /> {course.alunos} alunos
        </span>
        <span className="flex items-center gap-1.5">
          <Star size={14} className="fill-primary text-primary" /> {course.rating}
        </span>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
        <div>
          <span className="text-2xl font-bold text-foreground">{course.preco}€</span>
        </div>
        <Link href={`/cursos/${course.slug}`}>
          <Button data-testid={`button-view-course-${course.id}`}>
            Ver Detalhes
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
