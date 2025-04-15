"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronDown, ExternalLink } from "lucide-react";
import { EspoCrmTracker } from "@/app/services/espocrm";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleFaqDemo = () => {
    const tracker = new EspoCrmTracker();
    tracker.trackScheduleQuestionClick();
    tracker.redirectToWhatsApp();
  };

  const faqs = [
    {
      question: "Como funciona o período de teste gratuito?",
      answer:
        "Oferecemos um período de teste gratuito de 7 dias com acesso a todos os recursos do plano Profissional. Não é necessário cartão de crédito para começar, agende uma demonstração para começar seu teste.",
    },
    {
      question: "Posso migrar meus dados de outra plataforma?",
      answer:
        "Sim, oferecemos suporte para transferir seus dados de outras plataformas como Dropbox, Google Drive, Microsoft OneDrive e outros serviços similares.",
    },
    {
      question: "Quais são as opções de hospedagem disponíveis?",
      answer:
        "Oferecemos tanto hospedagem na nuvem (SaaS) quanto opções de instalação local (on-premise) para empresas que precisam manter seus dados em sua própria infraestrutura.",
    },
    {
      question: "Como funciona o suporte técnico?",
      answer:
        "Todos os planos incluem suporte por email. Os planos Profissional e Empresarial incluem suporte prioritário por chat e telefone, com tempos de resposta garantidos.",
    },
    {
      question: "O Córtex Cloud é compatível com dispositivos móveis?",
      answer:
        "Sim, oferecemos aplicativos nativos para iOS e Android, além de uma interface web responsiva que funciona em qualquer dispositivo.",
    },
  ];

  return (
    <section id="faq" className="w-full py-12 md:py-24 bg-white">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-[#0096f4]/30 bg-[#0096f4]/10 px-3 py-1 text-sm text-[#0096f4] mb-4">
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl font-bold text-[#002171] mb-4">
            Tire suas dúvidas
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Encontre respostas para as perguntas mais comuns sobre o Córtex
            Cloud.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[#c4cbd6] rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-4 text-left"
              >
                <span className="font-medium text-[#002171]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://wa.me/5563984040475"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-[#002171] text-[#002171] hover:bg-[#002171]/20"
                onClick={handleFaqDemo}
              >
                Fale conosco no WhatsApp
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
