import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityNotFoundComponent } from './city-not-found.component';

describe('CityNotFoundComponent', () => {
  let component: CityNotFoundComponent;
  let fixture: ComponentFixture<CityNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
