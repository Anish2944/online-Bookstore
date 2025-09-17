export interface Book {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    imageUrl?: string | null;
    created: string;
    author?: { id: number; name: string } | null;
    category?: { id: number; name: string } | null;
  }
  