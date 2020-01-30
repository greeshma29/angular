import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AddMediaComponent } from './media/add-media/add-media.component';
import { ListMediaComponent } from './media/list-media/list-media.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AddMediaComponent,
    ListMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
