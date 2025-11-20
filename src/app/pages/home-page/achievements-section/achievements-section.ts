import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ContentService } from '../../../content/content';

@Component({
  selector: 'app-achievements-section',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './achievements-section.html',
  styleUrl: './achievements-section.scss'
})
export class AchievementsSectionComponent {
  private readonly contentService = inject(ContentService);

  achievementsSection = this.contentService.achievementsSection;
  achievements = this.contentService.achievements;
}
