import { Phone, MapPin, Instagram } from "lucide-react";
import levenLogo from "@/assets/leven-logo-full.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <img alt="LEVEN" className="h-14 md:h-16 w-auto" src={levenLogo} />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Especialistas em marketing e processos comerciais para lojas de móveis. 
              Lotamos sua loja com clientes qualificados.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#form-section" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#form-section" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">Tráfego pago</li>
              <li className="text-muted-foreground text-sm">Estruturação comercial</li>
              <li className="text-muted-foreground text-sm">Funis de vendas</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:assessorialeven@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  assessorialeven@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+5531996486334" className="hover:text-foreground transition-colors">(31) 99648-6334</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Brasil</span>
              </li>
              <li className="pt-2">
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} LEVEN Assessoria. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;