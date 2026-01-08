import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Floating decorative icons */}
      <div className="absolute top-32 left-8 md:left-16 opacity-20 animate-pulse">
        <TrendingUp className="w-12 h-12 md:w-16 md:h-16 text-primary" />
      </div>
      <div className="absolute top-48 right-8 md:right-20 opacity-20 animate-pulse delay-75">
        <Target className="w-10 h-10 md:w-14 md:h-14 text-accent" />
      </div>
      <div className="absolute bottom-32 left-12 md:left-24 opacity-20 animate-pulse delay-150">
        <Zap className="w-8 h-8 md:w-12 md:h-12 text-primary" />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

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
