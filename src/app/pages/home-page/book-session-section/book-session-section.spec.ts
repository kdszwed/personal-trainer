import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSessionSection } from './book-session-section';

describe('BookSessionSection', () => {
  let component: BookSessionSection;
  let fixture: ComponentFixture<BookSessionSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSessionSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSessionSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
