import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { AuthorFormComponent } from './authors/author-form/author-form.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'books', component: BooksListComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/:id', component: BookFormComponent },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'categories/new', component: CategoryFormComponent },
  { path: 'categories/:id', component: CategoryFormComponent },
  { path: 'authors', component: AuthorsListComponent },
  { path: 'authors/new', component: AuthorFormComponent },
  { path: 'authors/:id', component: AuthorFormComponent },
  { path: 'orders', component: OrdersListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
