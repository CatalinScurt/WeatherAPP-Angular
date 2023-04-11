import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySliderComponent } from './daily-slider.component';

describe('DailySliderComponent', () => {
  let component: DailySliderComponent;
  let fixture: ComponentFixture<DailySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailySliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
