export interface Product {
  id: string;
  brand: string;
  name: string;
  small_description: string;
  description?: string;
  sport?: string;
  family: string;
  code?: string;
  in_stock?: boolean;
  price: number;
  link?: string;
}

export interface Customization {
  id: string;
  name: string;
  description: string;
  delay: string;
  price: number;
}

export interface Session {
  user_id: string;
  step: number;
  selections: {
    maillot?: Product;
    customizations?: Customization[];
    plots?: Product[];
    logo?: boolean;
  };
}

export interface ChatRequest {
  user_id: string;
  session_id?: string;
  message: string;
}

export interface ChatResponse {
  user_id: string;
  session_id: string;
  title: string;
  answer: string;
  products: Product[];
  customizations: Customization[];
  show_upload_placeholder: boolean;
}