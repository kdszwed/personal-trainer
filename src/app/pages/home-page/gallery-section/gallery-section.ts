import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ContentService } from '@service/content.service';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './gallery-section.html',
  styleUrl: './gallery-section.scss'
})
export class GallerySectionComponent {
  private readonly contentService = inject(ContentService);

  readonly gallerySection = this.contentService.gallerySection;
}
