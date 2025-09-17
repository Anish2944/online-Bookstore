export interface OrderItem {
    bookId: number;
    bookTitle?: string;
    quantity: number;
    unitPrice: number;
  }
  
  export interface Order {
    id: number;
    orderDate: string;
    totalAmount: number;
    userId: number;
    items: OrderItem[];
  }
  