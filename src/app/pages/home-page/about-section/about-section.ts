import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ContentService } from '../../../content/content';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss'
})
export class AboutSectionComponent {
  private readonly contentService = inject(ContentService);

  heroTitle = this.contentService.heroTitle;
  heroSubtitle = this.contentService.heroSubtitle;
  heroPrimaryCtaLabel = this.contentService.heroPrimaryCtaLabel;
  heroSecondaryCtaLabel = this.contentService.heroSecondaryCtaLabel;

  aboutHeading = this.contentService.aboutHeading;
  aboutIntro = this.contentService.aboutIntro;
  aboutParagraphs = this.contentService.aboutParagraphs;

  slogans = this.contentService.slogans;

  scrollTo(fragment: string) {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
