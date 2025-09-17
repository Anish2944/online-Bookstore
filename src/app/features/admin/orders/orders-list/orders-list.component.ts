import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../../services/orders.service';
import { Order } from '../../../../core/models/order.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  constructor(private svc: OrdersService) {}
  ngOnInit(): void { this.svc.listAll().subscribe(o => this.orders = o); }
}
