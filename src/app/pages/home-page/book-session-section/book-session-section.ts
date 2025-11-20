import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ContentService } from '../../../content/content';

@Component({
  selector: 'app-book-session-section',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './book-session-section.html',
  styleUrl: './book-session-section.scss'
})
export class BookSessionSectionComponent {
  private readonly contentService = inject(ContentService);

  bookSection = this.contentService.bookSection;

  scrollToContact() {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
