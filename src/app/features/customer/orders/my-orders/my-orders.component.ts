import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../../services/orders.service';
import { Order } from '../../../../core/models/order.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orders: Order[] = [];
  constructor(private svc: OrdersService) {}
  ngOnInit(): void { this.svc.listMine().subscribe(o => this.orders = o); }
}
