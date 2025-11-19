import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface NavItem {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  navItems: NavItem[] = [
    { label: 'Osiągnięcia', fragment: 'achievements' },
    { label: 'Przemiany', fragment: 'transformations' },
    { label: 'Galeria', fragment: 'gallery' },
    { label: 'O mnie', fragment: 'about' },
    { label: 'Umów trening', fragment: 'book-session' },
    { label: 'Kontakt', fragment: 'contact' }
  ];

  constructor(private router: Router) {}

  scrollTo(fragment: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.performScroll(fragment), 100);
      });
    } else {
      this.performScroll(fragment);
    }
  }

  private performScroll(fragment: string) {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
