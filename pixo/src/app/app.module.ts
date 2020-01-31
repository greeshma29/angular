import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadrComponent } from './header/headr/headr.component';
import { UserHeadrComponent } from './header/user-headr/user-headr.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { UserRegistrationComponent } from './login/user-registration/user-registration.component';
import { MymediaComponent } from './media/mymedia/mymedia.component';
import { UploadmediaComponent } from './media/uploadmedia/uploadmedia.component';
import { FollowersComponent } from './media/followers/followers.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadrComponent,
    UserHeadrComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    MymediaComponent,
    UploadmediaComponent,
    FollowersComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
