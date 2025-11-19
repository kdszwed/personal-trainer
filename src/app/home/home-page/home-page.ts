import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Title, Meta } from '@angular/platform-browser';
import { ContentService } from '../../content/content';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],

  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePageComponent {

  private readonly contentService = inject(ContentService);
  private readonly fb = inject(FormBuilder);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);


  slogans = this.contentService.slogans;
  achievements = this.contentService.achievements;
  transformations = this.contentService.transformations;
  galleryItems = this.contentService.galleryItems;
  aboutText = this.contentService.aboutText;

  // Reactive Form
  contactForm = this.fb.nonNullable.group({
    type: ['umow-trening', [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSending = false;
  formSubmitted = false;

  constructor() {
    this.setSeoMeta();
  }

  private setSeoMeta() {
    this.title.setTitle('Trener personalny – treningi personalne w Lublinie');
    this.meta.updateTag({
      name: 'description',
      content:
        'Trener personalny w Lublinie. Indywidualne treningi, redukcja tkanki tłuszczowej, budowa masy mięśniowej i poprawa kondycji.'
    });
  }

  scrollToSection(fragment: string) {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  submitContactForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;
    console.log('Contact form data', this.contactForm.value);

    setTimeout(() => {
      this.isSending = false;
      this.formSubmitted = true;
      this.contactForm.reset({
          type: 'umow-trening'
        });
    }, 800);
  }
}
