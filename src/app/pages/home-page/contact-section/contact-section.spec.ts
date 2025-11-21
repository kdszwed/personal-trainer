import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { ContactSectionComponent } from './contact-section';
import { ContentService } from '@service/content.service';


class MockContentService {
  contactSection = () => ({
    heading: 'Kontakt',
    subtitle: 'Wyślij wiadomość',
    description: 'Test description',
    successMessage: 'Dziękujemy za wiadomość!',
    fields: {
      type: {
        label: 'Rodzaj zapytania',
        error: 'Błąd typu',
        options: [
          { value: 'umow-trening', label: 'Umów trening' },
          { value: 'pytanie-ogolne', label: 'Pytanie ogólne' }
        ]
      },
      name: {
        label: 'Imię',
        placeholder: 'Twoje imię',
        error: 'Błąd imienia'
      },
      email: {
        label: 'E-mail',
        placeholder: 'email@test.pl',
        error: 'Błąd email'
      },
      message: {
        label: 'Wiadomość',
        placeholder: 'Treść...',
        error: 'Błąd wiadomości'
      },
      submit: {
        label: 'Wyślij',
        sendingLabel: 'Wysyłanie...'
      }
    }
  });
}

describe('ContactSectionComponent', () => {
  let fixture: ComponentFixture<ContactSectionComponent>;
  let component: ContactSectionComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSectionComponent],
      providers: [{ provide: ContentService, useClass: MockContentService }]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('powinien utworzyć komponent', () => {
    expect(component).toBeTruthy();
  });

  it('formularz powinien być nieprawidłowy na starcie', () => {
    const form = component.contactForm;
    expect(form.valid).toBeFalse();
  });

  it('formularz jest nieprawidłowy, jeśli brakuje wymaganych pól', () => {
    component.contactForm.setValue({
      type: '',
      name: '',
      email: '',
      message: ''
    });

    expect(component.contactForm.invalid).toBeTrue();
  });

  it('formularz staje się prawidłowy po wpisaniu poprawnych danych', () => {
    component.contactForm.setValue({
      type: 'umow-trening',
      name: 'Adam',
      email: 'mail@example.com',
      message: 'To jest testowa wiadomość'
    });

    expect(component.contactForm.valid).toBeTrue();
  });

  it('submitContactForm powinno ustawić formSubmitted po udanym wysłaniu', fakeAsync(() => {
    component.contactForm.setValue({
      type: 'umow-trening',
      name: 'Adam',
      email: 'mail@example.com',
      message: 'Wiadomość testowa o długości > 10'
    });

    component.submitContactForm();
    expect(component.isSending).toBeTrue();

    tick(800);

    expect(component.isSending).toBeFalse();
    expect(component.formSubmitted).toBeTrue();
  }));

  it('submitContactForm nie powinno wysłać formularza, jeśli jest nieprawidłowy', () => {
    spyOn(component.contactForm, 'markAllAsTouched');

    component.contactForm.setValue({
      type: '',
      name: '',
      email: '',
      message: ''
    });

    component.submitContactForm();
    expect(component.contactForm.markAllAsTouched).toHaveBeenCalled();
    expect(component.isSending).toBeFalse();
    expect(component.formSubmitted).toBeFalse();
  });
});
