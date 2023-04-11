import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayDetailsComponent } from './today-details.component';

describe('TodayDetailsComponent', () => {
  let component: TodayDetailsComponent;
  let fixture: ComponentFixture<TodayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
