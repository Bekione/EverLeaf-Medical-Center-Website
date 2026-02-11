
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  image: string;
  experience?: string;
  qualification?: string;
  rating?: number;
  reviews?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  summary: string;
}
