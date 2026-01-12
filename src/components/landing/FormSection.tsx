import { useState } from "react";
import { FileText, Phone, Shield, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const countryCodes = [
  { code: "+55", country: "BR", flag: "🇧🇷" },
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+351", country: "PT", flag: "🇵🇹" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
];

const revenueOptions = [
  "Até R$50.000",
  "R$50.000 - R$100.000",
  "R$100.000 - R$500.000",
  "R$500.000 - R$1.000.000",
  "Acima de R$1.000.000",
];

const FormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+55",
    phone: "",
    company: "",
    revenue: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeVKF8QE6xQ1haFaN2eHGjMQ6J5-4ahQvSmocKvhjazGQUpVw/formResponse";
    
    // Combine country code with phone number
    const fullPhone = `${formData.countryCode} ${formData.phone}`;

    // Create a hidden iframe to submit the form (bypasses CORS)
    const iframe = document.createElement("iframe");
    iframe.name = "hidden_iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    // Create a hidden form to submit
    const form = document.createElement("form");
    form.method = "POST";
    form.action = googleFormUrl;
    form.target = "hidden_iframe";

    // Add form fields
    const fields = [
      { name: "entry.2140489623", value: formData.name },
      { name: "entry.1837813132", value: formData.email },
      { name: "entry.846955133", value: fullPhone },
      { name: "entry.458580831", value: formData.company },
      { name: "entry.1058520858", value: formData.revenue },
    ];

    fields.forEach(({ name, value }) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Cleanup after submission
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 1000);

    toast({
      title: "Formulário enviado com sucesso!",
      description: "Em breve um de nossos especialistas entrará em contato.",
    });

    setFormData({
      name: "",
      email: "",
      countryCode: "+55",
      phone: "",
      company: "",
      revenue: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="form-section" className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column - Steps */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Cadastre-se e receba o contato do nosso time!
                </h2>
              </div>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-primary font-medium mb-1">Passo 1</div>
                    <h3 className="text-lg font-semibold mb-2">Complete o formulário</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Forneça suas informações de contato. Garantimos a segurança total de 
                      seus dados. Serão usados apenas para contato.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-accent font-medium mb-1">Passo 2</div>
                    <h3 className="text-lg font-semibold mb-2">Receba uma ligação personalizada</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Em um prazo de até 8 horas, um dos nossos especialistas entrará em 
                      contato diretamente para agendar a reunião mais crucial com você.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security badge */}
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Shield className="w-4 h-4" />
                <span>Seus dados estão protegidos</span>
              </div>
            </div>

            {/* Right Column - Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary border-border h-12"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Seu melhor email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary border-border h-12"
                />
              </div>

              <div className="flex gap-2">
                <Select
                  value={formData.countryCode}
                  onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                >
                  <SelectTrigger className="w-28 bg-secondary border-border h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <span className="flex items-center gap-2">
                          <span>{country.flag}</span>
                          <span>{country.code}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="flex-1 bg-secondary border-border h-12"
                />
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Nome da empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="bg-secondary border-border h-12"
                />
              </div>

              <div>
                <Select
                  value={formData.revenue}
                  onValueChange={(value) => setFormData({ ...formData, revenue: value })}
                >
                  <SelectTrigger className="w-full bg-secondary border-border h-12">
                    <SelectValue placeholder="Qual o seu faturamento mensal?" />
                  </SelectTrigger>
                  <SelectContent>
                    {revenueOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base font-semibold"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
