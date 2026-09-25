export interface Product {
  id: string;
  name: string;
}

export interface Review {
  id: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
