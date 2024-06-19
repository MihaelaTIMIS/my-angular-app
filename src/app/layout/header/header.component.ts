import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchText ="";
  // @Input() text: string = 'my value';

  // ngOnInit() {
  //   console.log('on init: ', this.text);
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('on change: ', changes['text'].currentValue);
  // }

  // ngAfterViewInit() {
  //   console.log('after view init: ', this.text);
  // }

  // ngOnDestroy() {
  //   console.log('on destroy: ', this.text);
  // }

  // onChangeSearchField() {
  //   console.log('on button search click ! ');
  // }
}
