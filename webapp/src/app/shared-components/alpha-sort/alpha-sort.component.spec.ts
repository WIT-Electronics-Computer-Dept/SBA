import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaSortComponent } from './alpha-sort.component';

describe('AlphaSortComponent', () => {
  let component: AlphaSortComponent;
  let fixture: ComponentFixture<AlphaSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphaSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphaSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
