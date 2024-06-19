import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexempleComponent } from './forexemple.component';

describe('ForexempleComponent', () => {
  let component: ForexempleComponent;
  let fixture: ComponentFixture<ForexempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForexempleComponent]
    });
    fixture = TestBed.createComponent(ForexempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
