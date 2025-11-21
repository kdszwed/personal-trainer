import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

interface NavItem {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  navItems: NavItem[] = [
    { label: 'O mnie', fragment: 'about' },
    { label: 'Osiągnięcia', fragment: 'achievements' },
    { label: 'Przemiany', fragment: 'transformations' },
    { label: 'Galeria', fragment: 'gallery' },
    { label: 'Umów trening', fragment: 'book-session' },
    { label: 'Kontakt', fragment: 'contact' }
  ];

  constructor(private router: Router) {}

  scrollTo(fragment: string) {
    void this.router.navigate([], {
      fragment,
      replaceUrl: false,
      queryParamsHandling: 'preserve'
    });
  }


  scrollTop() {
    if (typeof window === 'undefined') return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    void this.router.navigate([], {
      replaceUrl: true
    });
  }
}
