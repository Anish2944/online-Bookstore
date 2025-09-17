export interface Author {
    id: number;
    name: string;
    bio: string;
    books?: { id: number; title: string }[];
  }
  