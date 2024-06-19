import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass-exemple',
  templateUrl: './ngclass-exemple.component.html',
  styleUrls: ['./ngclass-exemple.component.scss'],
})
export class NgclassExempleComponent {
  isError: boolean = true;
  color: string = 'red';
  canSave: boolean = true;

  currentStyles = {
    'font-style': this.canSave ? 'italic' : 'normal',
    color: this.isError ? 'red' : 'black',
    'font-size': this.isError ? '24px' : '12px',
  };
}
