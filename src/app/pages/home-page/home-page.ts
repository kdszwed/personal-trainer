import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ContentService } from '../../content/content';

// Sekcje strony głównej
import { AboutSectionComponent } from './about-section/about-section';
import { AchievementsSectionComponent } from './achievements-section/achievements-section';
import { TransformationsSectionComponent } from './transformations-section/transformations-section';
import { GallerySectionComponent } from './gallery-section/gallery-section';
import { BookSessionSectionComponent } from './book-session-section/book-session-section';
import { ContactSectionComponent } from './contact-section/contact-section';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AboutSectionComponent,
    AchievementsSectionComponent,
    TransformationsSectionComponent,
    GallerySectionComponent,
    BookSessionSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePageComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly contentService = inject(ContentService);

  constructor() {
    this.setSeoMeta();
  }

  private setSeoMeta() {
    this.title.setTitle(this.contentService.metaTitle());
    this.meta.updateTag({
      name: 'description',
      content: this.contentService.metaDescription()
    });
  }
}
