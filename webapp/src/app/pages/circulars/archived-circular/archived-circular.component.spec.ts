import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedCircularComponent } from './archived-circular.component';

describe('ArchivedCircularComponent', () => {
  let component: ArchivedCircularComponent;
  let fixture: ComponentFixture<ArchivedCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivedCircularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
