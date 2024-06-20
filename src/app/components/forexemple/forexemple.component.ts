import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-forexemple',
 templateUrl: './forexemple.component.html',
  styleUrls: ['./forexemple.component.scss'],
})
export class ForexempleComponent {
  @Input() items : string[] = []
  @Output() addItemClick = new EventEmitter()

  onAdd(item: string){
    if(item === '') return 
    this.addItemClick.emit(item)
  }
}
