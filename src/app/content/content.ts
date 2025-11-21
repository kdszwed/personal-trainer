import { Injectable, signal } from '@angular/core';
import siteContent from './site-content.json';

export interface Achievement {
  label: string;
  value: string;
}

export interface Transformation {
  name: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
}

export interface GalleryItem {
  title: string;
  imageUrl: string;
}

export interface ContactOption {
  value: string;
  label: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  about: {
    heading: string;
    intro: string;
    paragraphs: string[];
  };
  slogans: string[];
  highlightSlogan: string;
  achievementsSection: {
    heading: string;
    subtitle: string;
    description: string;
  };
  achievements: Achievement[];
  transformationsSection: {
    heading: string;
    subtitle: string;
    description: string;
  };
  transformations: Transformation[];
  gallerySection: {
    heading: string;
    subtitle: string;
  };
  galleryItems: GalleryItem[];
  bookSection: {
    heading: string;
    text: string;
    buttonLabel: string;
  };
  contactSection: {
    heading: string;
    subtitle: string;
    description: string;
    successMessage: string;
    fields: {
      type: {
        label: string;
        error: string;
        options: ContactOption[];
      };
      name: {
        label: string;
        placeholder: string;
        error: string;
      };
      email: {
        label: string;
        placeholder: string;
        error: string;
      };
      message: {
        label: string;
        placeholder: string;
        error: string;
      };
      submit: {
        label: string;
        sendingLabel: string;
      };
    };
  };
}

const content = siteContent as SiteContent;

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly _content = signal<SiteContent>(content);

  // Meta
  metaTitle = signal(this._content().meta.title);
  metaDescription = signal(this._content().meta.description);

  // Hero
  heroTitle = signal(this._content().hero.title);
  heroSubtitle = signal(this._content().hero.subtitle);
  heroPrimaryCtaLabel = signal(this._content().hero.primaryCtaLabel);
  heroSecondaryCtaLabel = signal(this._content().hero.secondaryCtaLabel);

  // About
  aboutHeading = signal(this._content().about.heading);
  aboutIntro = signal(this._content().about.intro);
  aboutParagraphs = signal(this._content().about.paragraphs);

  // Slogans
  slogans = signal(this._content().slogans);

  highlightSlogan = signal(this._content().highlightSlogan);


  // Achievements
  achievementsSection = signal(this._content().achievementsSection);
  achievements = signal(this._content().achievements);

  // Transformations
  transformationsSection = signal(this._content().transformationsSection);
  transformations = signal(this._content().transformations);

  // Gallery
  gallerySection = signal(this._content().gallerySection);
  galleryItems = signal(this._content().galleryItems);

  // Book (Umów trening)
  bookSection = signal(this._content().bookSection);

  // Contact
  contactSection = signal(this._content().contactSection);

}
