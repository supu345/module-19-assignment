import React, { useState } from "react";
import { questions } from "../questions";

import SingleQuestion from "../components/SingleQuestion";
const FAQPage = () => {
  const [cards, setCards] = useState(questions);
  return (
    <div>
      {" "}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-24 flex flex-col  items-center justify-between gap-8">
          <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-snug">
            Faq
          </h2>
          <div className="flex flex-row">
            <ul>
              <a href="/" className="hover:text-green">
                Home
              </a>
            </ul>
            <ul className="text-green">// Faq</ul>
          </div>
        </div>
      </div>
      <section className="max-w-4xl mx-auto py-2 px-2">
        <p className="font-semibold text-2xl mb-4 ">
          Below are frequently asked questions, you may find the answer for
          yourself
        </p>
        <p className="mb-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat
          sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper
          augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue.
          In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum
          sit amet. Nulla convallis mauris vitae congue consequat. Donec
          interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus
          iaculis euismod dui.
        </p>

        <section className=" py-5  px-2 grid grid-cols-1 gap-8 ">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default FAQPage;
