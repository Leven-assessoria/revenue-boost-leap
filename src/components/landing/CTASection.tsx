import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border rounded-2xl p-8 md:p-12 lg:p-16 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-8 left-8 opacity-20">
            <Star className="w-8 h-8 text-accent" />
          </div>
          <div className="absolute bottom-8 right-8 opacity-20">
            <Star className="w-6 h-6 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            O nosso trabalho é exclusivo e nem sempre temos vagas abertas para 
            novos parceiros
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aproveite a oportunidade e receba uma assessoria de crescimento de 
            especialistas que vivenciam o mercado!
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
      </div>
    </section>
  );
};

export default CTASection;
