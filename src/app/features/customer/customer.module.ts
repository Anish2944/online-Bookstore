import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowseBooksComponent } from './books/browse-books/browse-books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
    CustomerRoutingModule,
    HomeComponent,
    BrowseBooksComponent,
    BookDetailsComponent,
    MyOrdersComponent
  ]
})
export class CustomerModule {}
