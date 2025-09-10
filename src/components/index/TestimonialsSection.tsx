"use client";

import { useRef } from "react";
import { testimonials } from "@/utils/data";
import TestimonialCard from "./TestimonialCard";
import DecorationShape from "../assets/DecorationShape";
import Divider from "@/components/assets/Divider";

const TestimonialsSection = () => {
  const testimonialsRef = useRef<HTMLUListElement>(null);

  return (
    <section
      className="grid grid-cols-2 md:grid-cols-6 mb-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="col-span-6 px-6">
        <Divider />
      </div>

      <h2
        id="testimonials-heading"
        className="col-span-6 mb-20 text-sm text-bg-primary font-medium sticky m-6 top-6 mix-blend-difference"
      >
        What people say
      </h2>

      <DecorationShape testimonialsRef={testimonialsRef} />

      <div className="col-span-2 max-w-[1280px]  md:my-52 px-6">
        <ul
          ref={testimonialsRef}
          className="flex flex-col gap-40 text-fg-primary text-xl md:text-2xl font-regular"
          role="list"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              showDivider={index < testimonials.length - 1}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
