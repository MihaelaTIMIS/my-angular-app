import { Component, Directive, Input } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})

export class FruitsComponent {
  @Input() fruits : string[] = []
}
