"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { EspoCrmTracker } from "@/app/services/espocrm";

export default function CTASection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    company: "",
    phoneNumber: "",
    description: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, emailAddress, phoneNumber } = formData;

    // Validação simples
    if (!firstName || !lastName || !emailAddress || !phoneNumber) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setErrorMessage(""); // Limpa mensagens de erro

    try {
      const tracker = new EspoCrmTracker();
      await tracker.registerContact(formData);
      setSuccessMessage("Sua solicitação foi enviada com sucesso, em breve entraremos em contato 😎😉✌️.");
      setFormData({
        firstName: "",
        lastName: "",
        emailAddress: "",
        company: "",
        phoneNumber: "",
        description: "",
      });
    } catch (error) {
      console.error("Erro ao registrar contato:", error);
      setErrorMessage(
        "Ocorreu um erro ao enviar o formulário. Tente novamente."
      );
    }
  };

  return (
    <section id="meeting" className="w-full py-12 md:py-24 bg-[#002171]">
      <div className="px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Pronto para transformar sua equipe?
            </h2>
            <p className="text-[#c4cbd6]">
              Agende uma demonstração personalizada com um de nossos
              especialistas e descubra como o Córtex Cloud pode atender às
              necessidades específicas da sua empresa.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#0096f4] mr-2" />
                <span className="text-white">Demonstração personalizada</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#0096f4] mr-2" />
                <span className="text-white">
                  Consulta de implementação gratuita
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-[#0096f4] mr-2" />
                <span className="text-white">
                  Suporte dedicado durante o teste
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#002171] mb-4">
              Agende uma demonstração
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-[#c4cbd6] focus:outline-none focus:ring-2 focus:ring-[#0096f4]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-[#c4cbd6] focus:outline-none focus:ring-2 focus:ring-[#0096f4]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email corporativo
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-md border border-[#c4cbd6] focus:outline-none focus:ring-2 focus:ring-[#0096f4]"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-md border border-[#c4cbd6] focus:outline-none focus:ring-2 focus:ring-[#0096f4]"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-md border border-[#c4cbd6] focus:outline-none focus:ring-2 focus:ring-[#0096f4]"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem (opcional)
                </label>
                <textarea
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-md border border-[#c4cbd6] focus:outline-none focus:ring-2 focus:ring-[#0096f4]"
                ></textarea>
              </div>
              {errorMessage && (
                <p className="text-sm text-red-500">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-sm text-green-500">{successMessage}</p>
              )}
              <Button
                type="submit"
                className="w-full bg-[#0096f4] hover:bg-[#0096f4]/90 text-white"
              >
                Agendar Demonstração
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Ao enviar este formulário, você concorda com nossa política de
                privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
