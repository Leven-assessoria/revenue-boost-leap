import levenLogo from "@/assets/leven-logo.png";

const Header = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img 
          src={levenLogo} 
          alt="LEVEN" 
          className="h-10 md:h-12 w-auto"
        />
        <button
          onClick={scrollToForm}
          className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Fale Conosco
        </button>
      </div>
    </header>
  );
};

export default Header;
