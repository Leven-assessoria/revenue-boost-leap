import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import levenLogo from "@/assets/leven-logo-new.png";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12">
        <Link to="/">
          <img 
            src={levenLogo} 
            alt="Leven Assessoria" 
            className="h-10 md:h-12"
          />
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Recebemos suas informações!
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Em breve um especialista da Leven Assessoria entrará em contato com você.
          </p>

          {/* Complementary Text */}
          <p className="text-base md:text-lg text-primary font-medium">
            Enquanto isso, fique atento ao seu WhatsApp.
          </p>

          {/* Back Link */}
          <div className="mt-12">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Leven Assessoria. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default ThankYou;
