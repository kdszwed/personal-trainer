import { Injectable, signal } from '@angular/core';

import metaJson from '@content/meta.json';
import heroSectionJson from '@content/hero-section.json';
import aboutSectionJson from '@content/about-section.json';
import slogansJson from '@content/slogans.json';
import achievementsSectionJson from '@content/achievements-section.json';
import transformationsSectionJson from '@content/transformations-section.json';
import gallerySectionJson from '@content/gallery-section.json';
import bookSessionSectionJson from '@content/book-session-section.json';
import contactSectionJson from '@content/contact-section.json';

import { MetaDto } from '@dto/meta.dto';
import { HeroSectionDto } from '@dto/hero-section.dto';
import { AboutSectionDto } from '@dto/about-section.dto';
import { SlogansDto } from '@dto/slogans.dto';
import { AchievementsSectionDto } from '@dto/achievements-section.dto';
import { TransformationsSectionDto } from '@dto/transformations-section.dto';
import { GallerySectionDto } from '@dto/gallery-section.dto';
import { BookSessionSectionDto } from '@dto/book-session-section.dto';
import { ContactSectionDto } from '@dto/contact-section.dto';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  readonly meta = signal<MetaDto>(metaJson as MetaDto);
  readonly heroSection = signal<HeroSectionDto>(heroSectionJson as HeroSectionDto);
  readonly aboutSection = signal<AboutSectionDto>(aboutSectionJson as AboutSectionDto);
  readonly slogans = signal<SlogansDto>(slogansJson as SlogansDto);
  readonly achievementsSection = signal<AchievementsSectionDto>(
    achievementsSectionJson as AchievementsSectionDto
  );
  readonly transformationsSection = signal<TransformationsSectionDto>(
    transformationsSectionJson as TransformationsSectionDto
  );
  readonly gallerySection = signal<GallerySectionDto>(
    gallerySectionJson as GallerySectionDto
  );
  readonly bookSessionSection = signal<BookSessionSectionDto>(
    bookSessionSectionJson as BookSessionSectionDto
  );
  readonly contactSection = signal<ContactSectionDto>(
    contactSectionJson as ContactSectionDto
  );
}
