import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './login/user-registration/user-registration.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { MymediaComponent } from './media/mymedia/mymedia.component';
import { UploadmediaComponent } from './media/uploadmedia/uploadmedia.component';
import { FollowersComponent } from './media/followers/followers.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path:"", redirectTo : "login", pathMatch: "full"},
  {path:"registeration", component:UserRegistrationComponent},
  {path:"login", component:UserLoginComponent},
  {path:"mymedia", component:MymediaComponent},
  {path:"uploadmedia", component:UploadmediaComponent},
  {path:"followers", component:FollowersComponent},
  {path:"account", component:AccountComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
