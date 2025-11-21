import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ContentService } from '@service/content.service';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import {
  AboutSectionComponent,
  AchievementsSectionComponent,
  TransformationsSectionComponent,
  GallerySectionComponent,
  BookSessionSectionComponent,
  ContactSectionComponent
} from './sections';

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
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly content = inject(ContentService);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.route.fragment.subscribe(fragment => {
      if (!fragment) return;
      this.scrollToFragment(fragment);
    });

    const init = this.route.snapshot.fragment;
    if (init) {
      setTimeout(() => this.scrollToFragment(init), 0);
    }
  }

  private scrollToFragment(fragment: string) {
    const offset = 80;
    const maxRetries = 30;

    const tryScroll = (retry: number) => {
      const el = document.getElementById(fragment);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (retry > 0) {
        setTimeout(() => tryScroll(retry - 1), 50);
      }
    };

    tryScroll(maxRetries);
  }
}
