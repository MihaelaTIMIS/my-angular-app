import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './layout/body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IfexempleComponent } from './components/ifexemple/ifexemple.component';
import { ForexempleComponent } from './components/forexemple/forexemple.component';
import { SwitchexempleComponent } from './components/switchexemple/switchexemple.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { IncrementDecrementComponent } from './components/increment-decrement/increment-decrement.component';
import { NgclassExempleComponent } from './components/ngclass-exemple/ngclass-exemple.component';
import { BoldDirective } from './directives/bold.directive';
import { LoginComponent } from './components/login/login.component';
import { Login2Component } from './components/login2/login2.component';
import { Login3Component } from './components/login3/login3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    IfexempleComponent,
    ForexempleComponent,
    SwitchexempleComponent,
    FruitsComponent,
    IncrementDecrementComponent,
    NgclassExempleComponent,
    BoldDirective,
    LoginComponent,
    Login2Component,
    Login3Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
