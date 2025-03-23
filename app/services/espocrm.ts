import axiosInstance from "./axiosInstance";

export class EspoCrmTracker {
  private userEmail = localStorage.getItem("userEmail");
  private userName = localStorage.getItem("userName");
  private userPhone = localStorage.getItem("userPhone");

  // Método para registrar quando o usuário entra no site
  async trackSiteVisit() {
    const data = {
      firstName: this.userName,
      emailAddress: this.userEmail,
      phoneNumber: `+55 ${this.userPhone}`,
    };

    const endpoint = `${process.env.NEXT_PUBLIC_API_TRACKSITEVISIT}`;
    return this.trackEvent(endpoint, data);
  }

  // Método para registrar quando o usuário clica em "Começar Grátis"
  async trackStartFreeClick() {
    const data = {
      firstName: this.userName,
      emailAddress: this.userEmail,
      phoneNumber: `+55 ${this.userPhone}`,
      description: "Clicou em 'Começar Grátis'",
    };

    const endpoint = `${process.env.NEXT_PUBLIC_API_TRACKSTARTFREECLICK}`;
    return this.trackEvent(endpoint, data);
  }

  // Método para registrar quando o usuário clica em "Agendar Demonstração"
  async trackScheduleDemoClick() {
    const data = {
      firstName: this.userName,
      emailAddress: this.userEmail,
      phoneNumber: `+55 ${this.userPhone}`,
      description: "Clicou em 'Agendar Demonstração'",
    };

    const endpoint = `${process.env.NEXT_PUBLIC_API_TRACKSCHEDULEDEMOCLICK}`;
    return this.trackEvent(endpoint, data);
  }

  // Método para registrar quando o usuário clica em "Ainda tem dúvidas?"
  async trackScheduleQuestionClick() {
    const data = {
      firstName: this.userName,
      emailAddress: this.userEmail,
      phoneNumber: `+55 ${this.userPhone}`,
      description: "Clicou em 'Ainda tem dúvidas?'",
    };

    const endpoint = `${process.env.NEXT_PUBLIC_API_TRACKSCHEDULEQUESTIONCLICK}`;
    return this.trackEvent(endpoint, data);
  }

  // Método para registrar um contato com os dados fornecidos
  async registerContact(contactData: any) {
    const data = {
      firstName: contactData.firstName,
      lastName: contactData.lastName,
      emailAddress: contactData.emailAddress,
      title: contactData.company,
      phoneNumber: `+55 ${contactData.phoneNumber}`,
      description: `Entrou em contato via formulário do site, mensagem do usuário: ${contactData.description}`,
    };

    const endpoint = `${process.env.NEXT_PUBLIC_API_REGISTERCONTACT}`;
    try {
      const response = await axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao registrar contato no EspoCRM:", error);
      throw error;
    }
  }

  // Método para redirecionar o usuário para um link do WhatsApp
  redirectToWhatsApp() {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
    const whatsappBaseUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;
    const whatsappLink = `${whatsappBaseUrl}${phoneNumber}`;
    window.location.href = whatsappLink;
  }

  // Método genérico para rastrear eventos
  private async trackEvent(endpoint: string, data?: any) {
    try {
      const response = await axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao enviar evento para o EspoCRM:", error);
      throw error;
    }
  }
}
