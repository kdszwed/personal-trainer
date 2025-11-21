import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ContentService } from '@service/content.service';

@Component({
  selector: 'app-book-session-section',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './book-session-section.html',
  styleUrl: './book-session-section.scss'
})
export class BookSessionSectionComponent {
  private readonly contentService = inject(ContentService);

  readonly bookSection = this.contentService.bookSessionSection;

  scrollToContact() {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
