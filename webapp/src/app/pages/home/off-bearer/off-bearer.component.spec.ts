import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffBearerComponent } from './off-bearer.component';

describe('OffBearerComponent', () => {
  let component: OffBearerComponent;
  let fixture: ComponentFixture<OffBearerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffBearerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffBearerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
