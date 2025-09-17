import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseBooksComponent } from './books/browse-books/browse-books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse', component: BrowseBooksComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'orders', component: MyOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
