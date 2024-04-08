import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaAuthComponent } from './gpa-auth.component';

describe('GpaAuthComponent', () => {
  let component: GpaAuthComponent;
  let fixture: ComponentFixture<GpaAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GpaAuthComponent]
    });
    fixture = TestBed.createComponent(GpaAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
