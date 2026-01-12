import levenLogo from "@/assets/leven-logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <img 
          src={levenLogo} 
          alt="LEVEN" 
          className="h-12 md:h-14 w-auto"
        />
        <span className="hidden md:block text-sm text-muted-foreground font-medium">
          (Exclusivo para lojas de móveis)
        </span>
        <Button
          onClick={scrollToForm}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Agendar Reunião
        </Button>
      </div>
    </header>
  );
};

export default Header;
