import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ContentService } from '../../../content/content';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss'
})
export class ContactSectionComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contentService = inject(ContentService);

  contactSection = this.contentService.contactSection;

  contactForm = this.fb.nonNullable.group({
    type: ['umow-trening', [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSending = false;
  formSubmitted = false;

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
      this.contactForm.reset({ type: 'umow-trening' });
    }, 800);
  }
}
