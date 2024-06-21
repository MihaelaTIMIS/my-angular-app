import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component {
  form = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  onSubmit(){
    console.log(this.form.value)
  }
}
