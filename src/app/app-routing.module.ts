import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthguardService } from './service/authguard.service';
import { ErrorComponent } from './error/error.component';
import { ProductBaseComponent } from './product-base/product-base.component';
import { AuthenticationService } from './service/authentication.service';


const routes: Routes = [
  { path:"", redirectTo : "home", pathMatch: "full"},
  { path:"home", component: HomeComponent},
  { path:"contactus", component: ContactComponent},
  { path:"aboutus", component: AboutComponent},
  { path:"login", component: LoginComponent},
  { path:"logout", component: LogoutComponent, canActivate :[AuthguardService]},
  { path:"Product",component:ProductBaseComponent,canActivate:[AuthenticationService]},
  { path:"search/:searchText", component: SearchResultComponent},
  { path:"**", component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
