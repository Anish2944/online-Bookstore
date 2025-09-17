import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../../../services/books.service';
import { OrdersService } from '../../../../services/orders.service';
import { Book } from '../../../../core/models/book.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  id!: number;
  book?: Book;
  qty = 1;

  constructor(
    private route: ActivatedRoute,
    private booksSvc: BooksService,
    private ordersSvc: OrdersService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.booksSvc.get(this.id).subscribe(b => this.book = b);
  }

  buy() {
    if (!this.book) return;
    this.ordersSvc.create([{ bookId: this.book.id, quantity: this.qty }])
      .subscribe(() => alert('Order placed!'));
  }
}
