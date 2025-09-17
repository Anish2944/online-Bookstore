import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../../services/books.service';
import { Book } from '../../../../core/models/book.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-books-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  loading = false;

  constructor(private booksSvc: BooksService, private router: Router) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.loading = true;
    this.booksSvc.list().subscribe({
      next: res => { this.books = res; this.loading = false; },
      error: () => this.loading = false
    });
  }

  edit(b: Book) { this.router.navigate(['/admin/books', b.id]); }
  create() { this.router.navigate(['/admin/books/new']); }

  remove(b: Book) {
    if (!confirm(`Delete "${b.title}"?`)) return;
    this.booksSvc.delete(b.id).subscribe(() => this.fetch());
  }
}
