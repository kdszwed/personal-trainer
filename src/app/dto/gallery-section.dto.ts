export interface GalleryItemDto {
  title: string;
  imageUrl: string;
}

export interface GallerySectionDto {
  heading: string;
  subtitle: string;
  galleryItems: GalleryItemDto[];
}
