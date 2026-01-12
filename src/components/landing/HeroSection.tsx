import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-20 pb-4 overflow-hidden">
      {/* Grid mesh background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/80 to-background pointer-events-none" />
      
      {/* Radial gradient for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, hsl(var(--primary) / 0.15) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 max-w-5xl mx-auto">
          Aumentamos o faturamento da sua empresa com o time de{" "}
          <span className="text-primary">marketing</span> e{" "}
          <span className="text-primary">vendas</span> da LEVEN
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Combinamos nossa experiência real à frente de empresas próprias com estratégia, 
          tecnologia e execução para atrair demanda qualificada, alinhar marketing e vendas 
          e escalar sua geração de receita.
        </p>

        <Button
          onClick={scrollToForm}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto font-semibold group"
        >
          Agende já uma reunião
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
