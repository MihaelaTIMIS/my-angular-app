import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './layout/body/body.component';
import { FormsModule } from '@angular/forms';
import { IfexempleComponent } from './components/ifexemple/ifexemple.component';
import { ForexempleComponent } from './components/forexemple/forexemple.component';
import { SwitchexempleComponent } from './components/switchexemple/switchexemple.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { IncrementDecrementComponent } from './components/increment-decrement/increment-decrement.component';
import { NgclassExempleComponent } from './components/ngclass-exemple/ngclass-exemple.component';
import { BoldDirective } from './directives/bold.directive';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
