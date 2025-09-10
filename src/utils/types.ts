export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  showDivider: boolean;
}

export interface DecorationShapeProps {
  testimonialsRef: React.RefObject<HTMLUListElement>;
}
