export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating?: number;
}