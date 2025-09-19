import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../core/models/order.model';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private base = 'https://onlinebookstoreapi.onrender.com/api/Order';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Order[]> { // admin list
    return this.http.get<Order[]>(this.base);
  }
  listMine(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.base}/my`);
  }
  get(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.base}/${id}`);
  }
  create(items: { bookId: number; quantity: number }[]): Observable<Order> {
    return this.http.post<Order>(this.base, { items });
  }
}
