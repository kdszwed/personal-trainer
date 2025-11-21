export interface TransformationDto {
  name: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
}

export interface TransformationsSectionDto {
  heading: string;
  subtitle: string;
  description: string;
  transformations: TransformationDto[];
}
