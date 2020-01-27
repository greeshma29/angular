import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HdivrComponent } from './hdivr/hdivr.component';
import { Hdivr2Component } from './hdivr2/hdivr2.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HdivrComponent,
    Hdivr2Component,
    LoginComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
