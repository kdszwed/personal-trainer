import {
  Component,
  inject,
  signal,
  effect,
  AfterViewInit,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { ContentService } from '../../../content/content';

@Component({
  selector: 'app-achievements-section',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './achievements-section.html',
  styleUrl: './achievements-section.scss'
})
export class AchievementsSectionComponent implements AfterViewInit {
  private readonly contentService = inject(ContentService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  // dane tekstowe z JSON
  achievementsSection = this.contentService.achievementsSection;
  achievements = this.contentService.achievements;

  // sygnał do animowanych liczb
  animatedValues = signal<number[]>([]);

  // sufiksy typu "%", "kg", "+", "przemian" itd.
  suffixes: string[] = [];

  // kontroluje, czy animacja liczb już się wykonała
  private hasAnimated = false;

  constructor() {
    // ustawiamy początkowe wartości liczb = 0
    effect(() => {
      const items = this.achievements();
      this.animatedValues.set(items.map(() => 0));
    });
  }

  //   OBSERVER
  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    const section = document.getElementById('achievements');
    if (section) {
      const observer = new IntersectionObserver(
          entries => {
            if (entries[0].isIntersecting && !this.hasAnimated) {
              this.startNumberAnimation();
              this.hasAnimated = true;
            }
          },
          { threshold: 0.3 }
      );

      observer.observe(section);
    }

    window.addEventListener('scroll', () => this.updateParallax());
  }

  // PARSER – LICZBA
  private parseNumber(value: any): number {
    if (!value) return 0;
    return Number(String(value).replace(/[^0-9.-]/g, ''));
  }

  // PARSER – SUFIKS (%, kg, + ...)
  private extractSuffix(value: any): string {
    if (!value) return '';
    // usuń liczby, spacje, kropki, minusy – zostaje sufiks
    return String(value).replace(/[0-9.\-\s]+/g, '');
  }

  // START ANIMACJI LICZB
  private startNumberAnimation() {
    const data = this.achievements();

    const numericTargets = data.map(a => this.parseNumber(a.value));
    this.suffixes = data.map(a => this.extractSuffix(a.value));

    this.animateNumbers(numericTargets);
  }

  // GŁÓWNA ANIMACJA OD 0 -> value
  private animateNumbers(targets: number[]) {
    const duration = 1300;
    const steps = 60;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      const progress = frame / steps;
      const eased = progress < 1 ? progress * progress : 1; // easeOutQuad

      const currentValues = targets.map(t => Math.floor(t * eased));
      this.animatedValues.set(currentValues);

      if (frame >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);
  }

  // PARALLAX
  private updateParallax() {
    if (!this.isBrowser) {
      return;
    }

    const parallax = document.querySelector('.achievements__bg-parallax') as HTMLElement | null;
    if (!parallax) return;

    const scrollTop = window.scrollY || 0;

    parallax.style.transform = `translateY(calc(-50% + ${scrollTop * 0.12}px))`;
  }
}
