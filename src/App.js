import { useState } from "react";

const faqs = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor free?",
    text: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: "How can I get help if I'm stuck on a challenge?",
    text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function App() {
  return <Accordion data={faqs} />;
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <main className="bg-[url('/assets/images/background-pattern-mobile.svg')] md:bg-[url('/assets/images/background-pattern-desktop.svg')] bg-no-repeat bg-contain bg-['#f9f0ff'] h-screen p-6 pt-40 sm:pt-24 md:pt-36 flex justify-center font-workSans ">
      <div className="p-8 bg-white rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col gap-3 max-w-lg h-fit">
        <div className="flex items-center gap-8">
          <div className="bg-[url('/assets/images/icon-star.svg')] bg-no-repeat bg-contain w-8 h-8"></div>
          <span className="font-bold text-4xl text-[#2f1533]">FAQs</span>
        </div>

        {data.map((el, i) => (
          <AccordionItem
            num={i}
            title={el.title}
            key={el.title}
            curOpen={curOpen}
            onOpen={setCurOpen}
          >
            {el.text}
          </AccordionItem>
        ))}

        <button className="accordion "></button>

        <div className="flex flex-col justify-center items-center">
          <span>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              rel="noreferrer"
              target="_blank"
              className="text-blue-600 font-semibold"
            >
              Frontend Mentor
            </a>
          </span>
          <span>
            Coded by{" "}
            <span className="text-blue-600 font-semibold">Divas Jaglan</span>
          </span>
        </div>
      </div>
    </main>
  );
}

function AccordionItem({ num, title, children, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className="flex flex-col gap-3 transition" onClick={handleToggle}>
      <div className="flex justify-between gap-5 items-center transition">
        <p className="text-[#2f1533] font-bold cursor-pointer transition">
          {title}
        </p>
        <p className="cursor-pointer">{isOpen ? <Minus /> : <Plus />}</p>
      </div>
      {isOpen && <div className="text-sm text-[#2f1533]">{children}</div>}
    </div>
  );
}

function Minus() {
  return (
    <div className="bg-[url('/assets/images/icon-minus.svg')] bg-no-repeat bg-contain w-8 h-8 "></div>
  );
}

function Plus() {
  return (
    <div className="bg-[url('/assets/images/icon-plus.svg')] bg-no-repeat bg-contain w-8 h-8 "></div>
  );
}
