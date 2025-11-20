import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationsSection } from './transformations-section';

describe('TransformationsSection', () => {
  let component: TransformationsSection;
  let fixture: ComponentFixture<TransformationsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformationsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformationsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
