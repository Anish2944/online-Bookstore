import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../core/models/author.model';

@Injectable({ providedIn: 'root' })
export class AuthorsService {
  private base = 'https://onlinebookstoreapi.onrender.com/api/Author';

  constructor(private http: HttpClient) {}

  list(): Observable<Author[]> {
    return this.http.get<Author[]>(this.base);
  }
  get(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.base}/${id}`);
  }
  create(data: { name: string; bio?: string }): Observable<Author> {
    return this.http.post<Author>(this.base, data);
  }
  update(id: number, data: { name: string; bio?: string }) {
    return this.http.put<void>(`${this.base}/${id}`, data);
  }
  delete(id: number) {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
