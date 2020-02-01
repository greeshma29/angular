import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './login/user-registration/user-registration.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { MymediaComponent } from './media/mymedia/mymedia.component';
import { UploadmediaComponent } from './media/uploadmedia/uploadmedia.component';
import { FollowersComponent } from './media/followers/followers.component';
import { AccountComponent } from './account/account.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { BlockaccComponent } from './blockacc/blockacc.component';
import { AccupdateComponent } from './accupdate/accupdate.component';
import { SearchComponent } from './search/search.component';
import { LogoutComponent } from './logout/logout.component';
import { SinglemediaComponent } from './media/singlemedia/singlemedia.component';
import { MultiplemediaComponent } from './media/multiplemedia/multiplemedia.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path:"", redirectTo : "login", pathMatch: "full"},
  {path:"registeration", component:UserRegistrationComponent},
  {path:"login", component:UserLoginComponent},
  {path:"mymedia", component:MymediaComponent },
  {path:"uploadmedia", component:UploadmediaComponent},
  {path:"followers", component:FollowersComponent},
  {path:"account", component:AccountComponent},
  {path:"newsfeed", component:NewsfeedComponent},
  {path:"blockacc", component:BlockaccComponent},
  {path:"accupdate", component:AccupdateComponent},
  {path:"search", component:SearchComponent},
  {path:"logout", component:LogoutComponent},
  {path:"singlemedia", component:SinglemediaComponent},
  {path:"multiplemedia", component:MultiplemediaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
