import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../../services/authors.service';
import { Author } from '../../../../core/models/author.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-authors-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
  authors: Author[] = [];
  constructor(private svc: AuthorsService, private router: Router) {}

  ngOnInit(): void { this.svc.list().subscribe(a => this.authors = a); }
  create() { this.router.navigate(['/admin/authors/new']); }
  edit(a: Author) { this.router.navigate(['/admin/authors', a.id]); }
  remove(a: Author) {
    if (!confirm(`Delete ${a.name}?`)) return;
    this.svc.delete(a.id).subscribe(() => this.ngOnInit());
  }
}
