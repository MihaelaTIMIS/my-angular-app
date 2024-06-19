import { Component } from '@angular/core';

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.scss'],
})
export class IncrementDecrementComponent {
  currentNumber: number = 0;

  onIncrementClick() {
    this.currentNumber += 1;
  }

  onDecrementClick() {
    this.currentNumber -= 1;
  }

  onResetClick() {
    this.currentNumber = 0;
  }
}
