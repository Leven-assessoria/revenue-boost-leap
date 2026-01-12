import levenLogo from "@/assets/leven-logo-full.png";
import { Button } from "@/components/ui/button";
const Header = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToMethodology = () => {
    const methodologySection = document.querySelector('section:has(h2)');
    methodologySection?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      {/* Grid mesh background */}
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
      backgroundSize: '50px 50px'
    }} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background/90 to-background pointer-events-none" />
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse at center top, hsl(var(--primary) / 0.15) 0%, transparent 60%)'
    }} />

      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <img alt="LEVEN" className="h-10 md:h-12 w-auto" src={levenLogo} />
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={scrollToMethodology} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            Serviços
          </button>
          <button onClick={scrollToForm} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            Contato
          </button>
        </nav>
        <Button onClick={scrollToForm} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
          Agendar Reunião
        </Button>
      </div>
    </header>;
};
export default Header;