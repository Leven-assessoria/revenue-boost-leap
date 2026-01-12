import { Search, Settings, Megaphone, RefreshCw } from "lucide-react";

const methodologyItems = [
  {
    icon: Search,
    title: "Análise e diagnóstico",
    description:
      "Analisamos o posicionamento da sua empresa, comportamento do seu público + o que os concorrentes estão fazendo. A partir disso, definimos exatamente o que precisa ser corrigido para você vender mais.",
  },
  {
    icon: Settings,
    title: "Estruturação comercial",
    bullets: [
      "Implementamos scripts, processos e ferramentas para escalar seu negócio.",
      "Treinamos seus vendedores para venderem mais no WhatsApp",
    ],
  },
  {
    icon: Megaphone,
    title: "Mídia paga",
    description:
      "Gestão dos seus anúncios no Instagram e Facebook, focados em trazer pessoas certas direto para o seu WhatsApp.",
  },
  {
    icon: RefreshCw,
    title: "Otimização constante de todas as etapas do funil",
    description:
      "Acompanhamos suas campanhas diariamente, ajustamos o que for necessário e garantimos que cada investimento trabalhe no seu favor para gerar mais resultados.",
  },
];

const MethodologySection = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16">
          Conheça a metodologia <span className="text-primary">LEVEN</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {methodologyItems.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              {item.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.bullets && (
                <ul className="space-y-2 text-muted-foreground">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
