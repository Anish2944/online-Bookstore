import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../../services/books.service';
import { Book } from '../../../../core/models/book.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-browse-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.scss']
})
export class BrowseBooksComponent implements OnInit {
  books: Book[] = [];
  q = '';
  constructor(private booksSvc: BooksService, private router: Router) {}

  ngOnInit(): void { this.booksSvc.list().subscribe(b => this.books = b); }
  details(b: Book) { this.router.navigate(['/home/book', b.id]); }

  get filtered() {
    const q = this.q.toLowerCase();
    return this.books.filter(b =>
      b.title.toLowerCase().includes(q) ||
      (b.author?.name?.toLowerCase().includes(q) ?? false)
    );
  }
}
