import React from "react";
import TitleSection from "../title-section/TitleSection";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 transition-colors bg-gray-50 dark:bg-gray-700"
    >
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className="mb-14 text-center">
          <TitleSection
            title="ABOUT ME"
            bgColor="bg-orange-400 dark:bg-orange-300"
          />

          <h4 className="max-w-2xl mx-auto text-xl font-bold dark:text-white">
            This is my journey
          </h4>
        </div>
        <div className="bg-white dark:bg-slate-200  board-description shadow-board-contact-description">
          <p className="text-md md:text-lg font-bold dark:text-black text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa
            quisquam quos quo delectus soluta atque tempora, debitis rem
            similique ut fugiat praesentium facere fugit eum accusantium
            aspernatur error Lorem, ipsum. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Assumenda totam rerum, atque harum
            nemo ea vel laborum ipsam et tempore, recusandae nobis sequi maiores
            quo dolorem. Ullam aut maiores adipisci. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Est natus quidem reiciendis. Modi,
            quisquam, ad, officiis maxime facere sed magnam harum distinctio
            laboriosam et id cum odio hic quaerat deserunt. Facilis nisi ullam
            eligendi in provident dignissimos quasi sint culpa voluptas fuga
            adipisci porro, voluptatibus tenetur harum placeat amet enim? Qui ea
            corrupti commodi quod reiciendis magnam non, a cumque. Ut, repellat
            labore quis, obcaecati voluptates veritatis totam a numquam eius ea
            laboriosam soluta! Officia repellat officiis explicabo neque, porro
            vero minima non, rerum accusamus ratione similique eveniet debitis
            aliquam!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
