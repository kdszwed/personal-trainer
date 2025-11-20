import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ContentService } from '../../../content/content';

@Component({
  selector: 'app-transformations-section',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './transformations-section.html',
  styleUrl: './transformations-section.scss'
})
export class TransformationsSectionComponent {
  private readonly contentService = inject(ContentService);

  transformationsSection = this.contentService.transformationsSection;
  transformations = this.contentService.transformations;
}
