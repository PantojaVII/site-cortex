"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EspoCrmTracker } from "@/app/services/espocrm";


export default function UserInfoModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Carregar dados do localStorage ao montar o componente
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");
    const storedPhone = localStorage.getItem("userPhone");

    if (storedName && storedEmail && storedPhone) {
      setName(storedName);
      setEmail(storedEmail);
      setPhone(storedPhone);
      setIsOpen(false); // Fecha o modal se os dados já estiverem preenchidos
    }
  }, []);

  const handleSubmit = () => {
    if (name && email && phone) {
      // Salvar os dados no localStorage
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPhone", phone);
      const tracker = new EspoCrmTracker();
      tracker.trackSiteVisit();
      setIsOpen(false); // Fecha o modal
    } else {
      setErrorMessage("Por favor, preencha todos os campos.");
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Preencha suas informações</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            As informações fornecidas serão utilizadas para personalizar sua experiência no site, garantindo uma melhor interação com nossos serviços.
          </p>
          {errorMessage && (
            <div className="p-3 text-sm text-red-600 bg-red-100 border border-red-400 rounded">
              {errorMessage}
            </div>
          )}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrorMessage(""); // Limpa a mensagem de erro ao digitar
              }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage(""); // Limpa a mensagem de erro ao digitar
              }}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Telefone
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="Digite seu telefone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrorMessage(""); // Limpa a mensagem de erro ao digitar
              }}
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full bg-[#0096f4] text-white"
          >
            Salvar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
