import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearerComponent } from './bearer.component';

describe('BearerComponent', () => {
  let component: BearerComponent;
  let fixture: ComponentFixture<BearerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BearerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BearerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
