export interface AchievementDto {
  label: string;
  value: string;
}

export interface AchievementsSectionDto {
  heading: string;
  subtitle: string;
  description: string;
  achievements: AchievementDto[];
}
