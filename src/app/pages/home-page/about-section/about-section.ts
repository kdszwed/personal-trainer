import { Component, inject } from '@angular/core';
import { ContentService } from '../../../content/content';

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss'
})
export class AboutSectionComponent {
  private readonly contentService = inject(ContentService);

  heroTitle = this.contentService.heroTitle;
  heroSubtitle = this.contentService.heroSubtitle;

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
