import Image from "next/image";

export default function TrustedBySection() {
  // Lista de clientes
  const clients = [
    { src: "/images/visao.png", alt: "Logo empresa 1" },
    { src: "/images/rubi.png", alt: "Logo empresa 2" },
    { src: "/images/santiago.png", alt: "Logo empresa 3" },
    { src: "/images/visao.png", alt: "Logo empresa 1" },
    { src: "/images/rubi.png", alt: "Logo empresa 2" },
    { src: "/images/santiago.png", alt: "Logo empresa 3" },
    
  ];

  return (
    <section id="clients" className="w-full py-12 md:py-24 bg-white">
      <div className="px-4 md:px-6">
        <h2 className="text-xl font-medium text-center text-gray-600 mb-12">
          Empresas que confiam no Córtex Cloud
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
          {clients.map((client, index) => (
            <div
              key={index}
              className="h-12 w-full flex items-center justify-center"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={800}
                height={800}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
