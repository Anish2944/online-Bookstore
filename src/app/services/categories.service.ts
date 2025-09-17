import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../core/models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private base = 'https://localhost:7139/api/Category';

  constructor(private http: HttpClient) {}

  list(): Observable<Category[]> {
    return this.http.get<Category[]>(this.base);
  }
  get(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.base}/${id}`);
  }
  create(data: { name: string }): Observable<Category> {
    return this.http.post<Category>(this.base, data);
  }
}
