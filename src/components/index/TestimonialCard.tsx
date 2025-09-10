import Divider from "@/components/assets/Divider";
import { Testimonial } from "@/utils/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  showDivider: boolean;
}

const TestimonialCard = ({
  testimonial,
  showDivider,
}: TestimonialCardProps) => (
  <li className="flex flex-col gap-10">
    <figure className="flex flex-col gap-4">
      <blockquote className="text-fg-primary leading-relaxed">
        &quot;{testimonial.quote}&quot;
      </blockquote>
      <figcaption className="flex flex-col items-end text-right">
        <cite className="not-italic font-medium text-fg-primary">
          &mdash; {testimonial.author}
        </cite>
        <div className="text-sm font-medium text-fg-secondary">
          <span>{testimonial.title}</span>
          {testimonial.company && (
            <>
              <span className="block">at {testimonial.company}</span>
            </>
          )}
        </div>
      </figcaption>
    </figure>
    {showDivider && <Divider />}
  </li>
);

export default TestimonialCard;
