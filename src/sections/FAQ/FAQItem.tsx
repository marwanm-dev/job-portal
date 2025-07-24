import { useState } from "react";

type FAQItemProps = {
  number: string;
  question: string;
  answer: string;
};

export default function FAQItem({ number, question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(number === "01");

  return (
    <div
      className={`px-10 w-full flex justify-between items-start transition-all border-b-2 ${
        isOpen
          ? "bg-cyan rounded-3xl border-transparent py-8"
          : "bg-white border-b5/20 py-10"
      }
        `}
    >
      <div className={`flex gap-5 ${!isOpen ? "items-center" : null}`}>
        <span
          className={`text-[28px] font-semibold ${
            isOpen ? "text-b5" : "text-gray"
          } min-w-[2rem]`}
        >
          {number}
        </span>
        <div className="flex flex-col gap-3">
          <h4 className={`text-b9 ${isOpen ? "mt-1" : null}`}>{question}</h4>
          <p
            className={`p-sm leading-relaxed font-normal text-b8 ${isOpen ? "flex" : "hidden"}`}
          >
            {answer}
          </p>
        </div>
      </div>
      <img
        onClick={() => setIsOpen(!isOpen)}
        src={isOpen ? "/faq-cross.svg" : "/faq-plus.svg"}
      />
    </div>
  );
}
