import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ContentService } from '@service/content.service';

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss'
})
export class AboutSectionComponent {
  private readonly contentService = inject(ContentService);

  readonly heroSection = this.contentService.heroSection;
  readonly aboutSection = this.contentService.aboutSection;
  readonly slogans = this.contentService.slogans;

  scrollTo(fragment: string) {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
