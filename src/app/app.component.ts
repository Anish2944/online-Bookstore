import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LoaderComponent } from './shared/loader/loader.component';
import { HeaderComponent } from './shared/header/header.component';
import { AuthService } from './auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, LoaderComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showHeader = true;
  constructor(private auth: AuthService, private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      this.showHeader = !['/login', '/register', '/unauthorized'].includes(event.urlAfterRedirects);
    });
  }

  ngOnInit(): void {
    console.log("AutoLogin RUNNING...")
    this.auth.autoLogin();
  }
  title = 'online-bookstore';
}
