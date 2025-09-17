import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookFormComponent } from './books/book-form/book-form.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { AuthorFormComponent } from './authors/author-form/author-form.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';

@NgModule({
  // declarations: [
  //   DashboardComponent,
  //   BooksListComponent,
  //   BookFormComponent,
  //   CategoriesListComponent,
  //   CategoryFormComponent,
  //   AuthorsListComponent,
  //   AuthorFormComponent,
  //   OrdersListComponent
  // ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AdminRoutingModule,
    DashboardComponent,
    BooksListComponent,
    BookFormComponent,
    CategoriesListComponent,
    CategoryFormComponent,
    AuthorsListComponent,
    AuthorFormComponent,
    OrdersListComponent
  ]
})
export class AdminModule {}
