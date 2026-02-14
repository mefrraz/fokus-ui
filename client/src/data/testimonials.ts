export interface Testimonial {
    nome: string;
    cargo: string; // Age + Location
    texto: string;
    rating: number;
}

export const testimonialsData: Testimonial[] = [
    {
        nome: "Ana Silva",
        cargo: "24 anos, Lisboa",
        texto: "Adorei a flexibilidade! Pude fazer o curso ao meu ritmo enquanto trabalhava. O apoio do formador foi impecável.",
        rating: 5,
    },
    {
        nome: "Carlos Mendes",
        cargo: "32 anos, Porto",
        texto: "Muito prático e direto ao ponto. Os manuais são excelentes e os quizzes ajudam imenso a fixar a matéria.",
        rating: 4.5,
    },
    {
        nome: "Beatriz Costa",
        cargo: "28 anos, Coimbra",
        texto: "A certificação DGERT foi decisiva para mim. O curso está muito bem estruturado e o feedback é rápido.",
        rating: 5,
    },
    {
        nome: "João Ferreira",
        cargo: "45 anos, Braga",
        texto: "Estava com receio por ser online, mas o acompanhamento individual fez toda a diferença. Recomendo!",
        rating: 5,
    },
    {
        nome: "Mariana Santos",
        cargo: "22 anos, Faro",
        texto: "Ótimo para quem quer aprender sem pressão. Os PDFs são muito completos e explicativos.",
        rating: 4,
    },
    {
        nome: "Pedro Oliveira",
        cargo: "35 anos, Aveiro",
        texto: "Gostei muito da metodologia. Sem vídeos chatos, apenas o essencial para aprender e aplicar.",
        rating: 4.5,
    },
    {
        nome: "Sofia Martins",
        cargo: "29 anos, Leiria",
        texto: "O melhor investimento que fiz este ano. Consegui mudar de área graças a este curso.",
        rating: 5,
    },
    {
        nome: "Rui Pereira",
        cargo: "40 anos, Viseu",
        texto: "Simples, eficaz e com conteúdo de qualidade. O formador esteve sempre disponível para dúvidas.",
        rating: 4.5,
    },
    {
        nome: "Inês Rodrigues",
        cargo: "26 anos, Setúbal",
        texto: "Adorei a liberdade de estudar quando quero. Os testes são desafiantes mas justos.",
        rating: 5,
    },
    {
        nome: "Tiago Gomes",
        cargo: "30 anos, Évora",
        texto: "Material muito bem organizado. Sente-se que foi feito por profissionais experientes.",
        rating: 4,
    },
    {
        nome: "Cláudia Nunes",
        cargo: "33 anos, Santarém",
        texto: "A plataforma Moodle é super intuitiva. Fiz o curso em 2 meses e aprendi imenso.",
        rating: 5,
    },
    {
        nome: "Miguel Sousa",
        cargo: "27 anos, Viana do Castelo",
        texto: "Recomendo vivamente. A relação qualidade/preço é imbatível, especialmente com certificado DGERT.",
        rating: 4.5,
    },
    {
        nome: "Patrícia Lima",
        cargo: "31 anos, Castelo Branco",
        texto: "Muito bom para quem gosta de estudar sozinho mas com rede de segurança. O apoio é top.",
        rating: 5,
    },
    {
        nome: "Ricardo Alves",
        cargo: "38 anos, Guarda",
        texto: "Fiquei surpreendido pela positiva. Conteúdo denso mas fácil de digerir. 5 estrelas.",
        rating: 5,
    },
    {
        nome: "Diana Marques",
        cargo: "25 anos, Beja",
        texto: "Curso muito completo. Os exercícios práticos ajudaram-me a conseguir o meu primeiro emprego na área.",
        rating: 4.5,
    },
];

export function getRandomTestimonials(count: number = 3): Testimonial[] {
    const shuffled = [...testimonialsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
