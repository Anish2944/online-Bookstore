import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  id?: number;
  name = '';

  constructor(private svc: CategoriesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) || undefined;
    if (this.id) this.svc.get(this.id).subscribe(c => this.name = c.name);
  }

  save() {
    if (!this.name.trim()) return;
    const obs = this.id ? this.svc.create({ name: this.name }) : this.svc.create({ name: this.name });
    obs.subscribe(() => this.router.navigate(['/admin/categories']));
  }
}
