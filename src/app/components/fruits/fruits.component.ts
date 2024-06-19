import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})

export class FruitsComponent {
  fruits: string [] = ["Pomme", "Fraise", "Banane", "Orange", "Ananas", "Grenadine"]
}
