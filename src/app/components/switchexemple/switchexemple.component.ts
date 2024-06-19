import { Component } from '@angular/core';

@Component({
  selector: 'app-switchexemple',
  templateUrl: './switchexemple.component.html',
  styleUrls: ['./switchexemple.component.scss'],
})
export class SwitchexempleComponent {
  colors: string[] = [
    'red',
    'green',
    'yellow',
    'orange',
    'blue',
    'tourquoise',
    'violet',
    'cyan',
    'another',
  ];
}
