import {
  Component,
  inject,
  AfterViewInit,
  signal,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ContentService } from '../../../content/content';

@Component({
  selector: 'app-transformations-section',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './transformations-section.html',
  styleUrl: './transformations-section.scss'
})
export class TransformationsSectionComponent implements AfterViewInit {
  private readonly contentService = inject(ContentService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  transformationsSection = this.contentService.transformationsSection;
  transformations = this.contentService.transformations;


  visible = signal(false);

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    const section = document.getElementById('transformations');
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
        entries => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            this.visible.set(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.3
        }
    );

    observer.observe(section);
  }
}
