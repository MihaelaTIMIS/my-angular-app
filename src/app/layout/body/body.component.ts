import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  items: string[] = [
    'First Item',
    'Second Item',
    'Third Item',
    'Fourth Item',
    'Fifth Item',
    'Sixth Item',
  ];
  fruits: string[] = [
    'Pomme',
    'Fraise',
    'Banane',
    'Orange',
    'Ananas',
    'Grenadine',
  ];

  onAddItemClick(newItem: string) {
    this.items.push(newItem);
    this.items.sort();
  }
}
