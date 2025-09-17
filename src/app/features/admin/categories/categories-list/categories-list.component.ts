import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../services/categories.service';
import { Category } from '../../../../core/models/category.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];
  constructor(private svc: CategoriesService, private router: Router) {}

  ngOnInit(): void { this.svc.list().subscribe(c => this.categories = c); }
  create() { this.router.navigate(['/admin/categories/new']); }
  edit(c: Category) { this.router.navigate(['/admin/categories', c.id]); }
}
