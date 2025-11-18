import { Injectable, signal } from '@angular/core';
import siteContent from '../../assets/content/site-content.json';

export interface Achievement {
  label: string;
  value: string;
}

export interface TransformationItem {
  name: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
}

export interface GalleryItem {
  title: string;
  imageUrl: string;
}

export interface SiteContent {
  slogans: string[];
  aboutText: string;
  achievements: Achievement[];
  transformations: TransformationItem[];
  galleryItems: GalleryItem[];
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly contentSignal = signal<SiteContent>(siteContent as SiteContent);

  slogans = signal<string[]>(this.contentSignal().slogans);
  aboutText = signal<string>(this.contentSignal().aboutText);
  achievements = signal<Achievement[]>(this.contentSignal().achievements);
  transformations = signal<TransformationItem[]>(this.contentSignal().transformations);
  galleryItems = signal<GalleryItem[]>(this.contentSignal().galleryItems);

  updateSlogans(slogans: string[]) {
    this.slogans.set(slogans);
  }

  updateAbout(text: string) {
    this.aboutText.set(text);
  }

  updateAchievements(items: Achievement[]) {
    this.achievements.set(items);
  }
}
