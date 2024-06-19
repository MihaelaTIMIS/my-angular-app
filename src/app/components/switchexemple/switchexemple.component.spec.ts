import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchexempleComponent } from './switchexemple.component';

describe('SwitchexempleComponent', () => {
  let component: SwitchexempleComponent;
  let fixture: ComponentFixture<SwitchexempleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchexempleComponent]
    });
    fixture = TestBed.createComponent(SwitchexempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
