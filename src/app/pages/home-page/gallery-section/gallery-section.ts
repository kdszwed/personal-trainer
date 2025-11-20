import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ContentService } from '../../../content/content';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './gallery-section.html',
  styleUrl: './gallery-section.scss'
})
export class GallerySectionComponent {
  private readonly contentService = inject(ContentService);

  gallerySection = this.contentService.gallerySection;
  galleryItems = this.contentService.galleryItems;
}
