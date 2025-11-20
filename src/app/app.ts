import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

interface NavItem {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule
  ],
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

  scrollTo(fragment: string) {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
