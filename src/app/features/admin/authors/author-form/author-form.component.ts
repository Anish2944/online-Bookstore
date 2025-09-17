import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../../services/authors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit {
  id?: number;
  name = '';
  bio = '';

  constructor(private svc: AuthorsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) || undefined;
    if (this.id) this.svc.get(this.id).subscribe(a => { this.name = a.name; this.bio = a.bio; });
  }

  save() {
    const dto = { name: this.name, bio: this.bio };
  
    if (this.id) {
      this.svc.update(this.id, dto).subscribe(() =>
        this.router.navigate(['/admin/authors'])
      );
    } else {
      this.svc.create(dto).subscribe(() =>
        this.router.navigate(['/admin/authors'])
      );
    }
  }
  
  
}
