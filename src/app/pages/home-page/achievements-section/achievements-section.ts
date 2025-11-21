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


  achievementsSection = this.contentService.achievementsSection;
  achievements = this.contentService.achievements;


  animatedValues = signal<number[]>([]);


  suffixes: string[] = [];


  private hasAnimated = false;

  constructor() {

    effect(() => {
      const items = this.achievements();
      this.animatedValues.set(items.map(() => 0));
    });
  }

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

  private parseNumber(value: any): number {
    if (!value) return 0;
    return Number(String(value).replace(/[^0-9.-]/g, ''));
  }

  private extractSuffix(value: any): string {
    if (!value) return '';

    return String(value).replace(/[0-9.\-\s]+/g, '');
  }

  private startNumberAnimation() {
    const data = this.achievements();

    const numericTargets = data.map(a => this.parseNumber(a.value));
    this.suffixes = data.map(a => this.extractSuffix(a.value));

    this.animateNumbers(numericTargets);
  }

  private animateNumbers(targets: number[]) {
    const duration = 1300;
    const steps = 60;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      const progress = frame / steps;
      const eased = progress < 1 ? progress * progress : 1;

      const currentValues = targets.map(t => Math.floor(t * eased));
      this.animatedValues.set(currentValues);

      if (frame >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);
  }

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
