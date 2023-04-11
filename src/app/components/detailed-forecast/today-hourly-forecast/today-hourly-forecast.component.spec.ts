import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayHourlyForecastComponent } from './today-hourly-forecast.component';

describe('TodayHourlyForecastComponent', () => {
  let component: TodayHourlyForecastComponent;
  let fixture: ComponentFixture<TodayHourlyForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayHourlyForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayHourlyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
