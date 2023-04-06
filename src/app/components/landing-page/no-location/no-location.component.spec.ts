import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLocationComponent } from './no-location.component';

describe('NoLocationComponent', () => {
  let component: NoLocationComponent;
  let fixture: ComponentFixture<NoLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
