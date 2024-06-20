import { Component } from '@angular/core';

@Component({
  selector: 'app-ifexemple',
  templateUrl: './ifexemple.component.html',
  styleUrls: ['./ifexemple.component.scss']
})
export class IfexempleComponent {
  userLoggedIn : boolean = false
  usename: string = "Mihaela"

  onConnectToggle(){
    this.userLoggedIn = !this.userLoggedIn
    console.log(this.userLoggedIn)

  }

}
