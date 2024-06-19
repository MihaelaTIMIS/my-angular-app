import { Component } from '@angular/core';

@Component({
  selector: 'app-forexemple',
 templateUrl: './forexemple.component.html',
  styleUrls: ['./forexemple.component.scss'],
})
export class ForexempleComponent {
  items: string[] = ['Citron', 'Orange', 'Cérise', 'Fraise', 'Banane', 'Poire'];
}
