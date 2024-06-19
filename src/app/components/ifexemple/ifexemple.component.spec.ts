import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfexempleComponent } from './ifexemple.component';

describe('IfexempleComponent', () => {
  let component: IfexempleComponent;
  let fixture: ComponentFixture<IfexempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfexempleComponent]
    });
    fixture = TestBed.createComponent(IfexempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
