import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.scss'],
})
export class Login3Component {
  @ViewChild('form') form!: NgForm;

  credentials = {
    email: '',
    password: '',
  };

  onSubmit(e:{}){
    if(this.form.invalid){return}
    console.log(e)
  }
}
