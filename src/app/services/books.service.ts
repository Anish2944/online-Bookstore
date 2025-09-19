import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../core/models/book.model';

@Injectable({ providedIn: 'root' })
export class BooksService {
  private base = 'https://onlinebookstoreapi.onrender.com/api/Books';

  constructor(private http: HttpClient) {}

  list(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
  }

  get(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }

  // Admin only: multipart/form-data (file or imageUrl)
  create(payload: {
    title: string; description: string; price: number; stock: number;
    authorId: number; categoryId: number; image?: File | null; imageUrl?: string | null;
  }): Observable<Book> {
    const form = new FormData();
    form.append('title', payload.title);
    form.append('description', payload.description);
    form.append('price', String(payload.price));
    form.append('stock', String(payload.stock));
    form.append('authorId', String(payload.authorId));
    form.append('categoryId', String(payload.categoryId));
    if (payload.image) form.append('image', payload.image);
    if (payload.imageUrl) form.append('imageUrl', payload.imageUrl);
    return this.http.post<Book>(this.base, form);
  }

  update(id: number, payload: Parameters<BooksService['create']>[0]) {
    const form = new FormData();
    form.append('title', payload.title);
    form.append('description', payload.description);
    form.append('price', String(payload.price));
    form.append('stock', String(payload.stock));
    form.append('authorId', String(payload.authorId));
    form.append('categoryId', String(payload.categoryId));
    if (payload.image) form.append('image', payload.image);
    if (payload.imageUrl) form.append('imageUrl', payload.imageUrl);
    return this.http.put<void>(`${this.base}/${id}`, form);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
