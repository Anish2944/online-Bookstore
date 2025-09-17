import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../../services/books.service';
import { AuthorsService } from '../../../../services/authors.service';
import { CategoriesService } from '../../../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../../core/models/book.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  id?: number;
  model = {
    title: '', description: '', price: 0, stock: 0,
    authorId: null as number | null,
    categoryId: null as number | null,
    image: null as File | null,
    imageUrl: '' as string
  };
  authors: { id:number; name:string }[] = [];
  categories: { id:number; name:string }[] = [];
  loading = false;

  constructor(
    private booksSvc: BooksService,
    private authorsSvc: AuthorsService,
    private categoriesSvc: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) || undefined;
    this.authorsSvc.list().subscribe(a => this.authors = a);
    this.categoriesSvc.list().subscribe(c => this.categories = c);
    if (this.id) {
      this.loading = true;
      this.booksSvc.get(this.id).subscribe({
        next: (b: Book) => {
          this.model = {
            title: b.title,
            description: b.description,
            price: b.price,
            stock: b.stock,
            authorId: b.author?.id ?? null,
            categoryId: b.category?.id ?? null,
            image: null,
            imageUrl: b.imageUrl || ''
          };
          this.loading = false;
        },
        error: () => this.loading = false
      });
    }
  }

  onFile(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files[0]) this.model.image = input.files[0];
  }

  save() {
    if (!this.model.authorId || !this.model.categoryId) return;

    const payload = {
      title: this.model.title,
      description: this.model.description,
      price: this.model.price,
      stock: this.model.stock,
      authorId: this.model.authorId,
      categoryId: this.model.categoryId,
      image: this.model.image,
      imageUrl: this.model.imageUrl || null
    };

    if (this.id) {
      this.booksSvc.update(this.id, payload).subscribe(() =>
        this.router.navigate(['/admin/books'])
      );
    } else {
      this.booksSvc.create(payload).subscribe(() =>
        this.router.navigate(['/admin/books'])
      );
    }
  }
}