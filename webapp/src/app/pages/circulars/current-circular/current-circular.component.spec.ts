import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCircularComponent } from './current-circular.component';

describe('CurrentCircularComponent', () => {
  let component: CurrentCircularComponent;
  let fixture: ComponentFixture<CurrentCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentCircularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
