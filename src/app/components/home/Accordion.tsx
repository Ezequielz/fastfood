'use client'

import { useState } from "react";
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

interface Props {
    title: string;
    content: string;
}

const AccordionItem = ({ title, content }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-sm md:text-lg font-medium">{title}</h2>
        {
            isOpen ? (
                <IoChevronUp />
            ) : (
                <IoChevronDown />
            )
        }
     
      </div>
      {isOpen && (
        <section className="mt-2 px-4 text-sm text-gray-700">
          <p>{content}</p>
        </section>
      )}
    </div>
  );
};

export const Accordion = () => {
  const accordionData = [
    {
      title: "¿Qué medios de pago acepta McDonald´s?",
      content:
        "Podés realizar tu compra con tarjetas de débito y crédito, Mastercard, Visa, American Express, y Mercado Pago.",
    },
    {
      title: "¿Cómo puedo cancelar mi pedido?",
      content:
        "Si aún no fue preparado, podés cancelar tu pedido rápidamente desde el botón “Cancelar pedido” que se encuentra en la pantalla de confirmación. De lo contrario, deberás comunicarte con el Call Center (08007776236).",
    },
    {
      title: "Seguimiento del estado de mi pedido",
      content:
        "Desde el Menú, Mis Pedidos, seleccionando la opción Pedidos en Curso, podés seguir en tiempo real el estado del mismo, o también hacer clic en el link que figura en el email de confirmación del pedido recibido.",
    },
    {
      title: "Mi pedido no llegó como esperaba",
      content:
        "¡Lamentamos el inconveniente! Si tu pedido llegó frío, incompleto o tuviste otro inconveniente, comunícate con el Call Center (08007776236) para que podamos brindarte una solución personalizada.",
    },
    {
      title: "Mi tarjeta ha sido rechazada",
      content:
        "Si tu tarjeta de débito ha sido rechazada, verificá primero en tu banco emisor si debe ser habilitada para comprar en eCommerce, o compras por internet en tu home banking.",
    },
    {
      title: "Confirmación de compra",
      content:
        "Recibirás una confirmación de compra por mail con los datos de la transacción y lo verás también reflejado en la app. De no ser así, comunícate con el Call Center (08007776236) para que podamos brindarte una solución personalizada.",
    },
  ];

  return (
    <div className="mx-auto my-4 lg:w-[800px]">
      <h2 className="text-2xl font-bold text-center lg:text-5xl">
        ¿Necesitas alguna razón más?
      </h2>
      <div className="mt-6 space-y-4">
        {accordionData.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};
