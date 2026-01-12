import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="relative border border-border rounded-2xl p-8 md:p-12 lg:p-16 text-center overflow-hidden">
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

          <div className="relative z-10">
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
      </div>
    </section>
  );
};

export default CTASection;
