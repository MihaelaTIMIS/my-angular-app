import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forexemple',
 templateUrl: './forexemple.component.html',
  styleUrls: ['./forexemple.component.scss'],
})
export class ForexempleComponent {
  @Input() items : string[] = []
  // fruits: string[] = ['Citron', 'Orange', 'Cérise', 'Fraise', 'Banane', 'Poire'];
}
