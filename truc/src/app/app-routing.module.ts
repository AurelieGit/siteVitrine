import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
 /* {path:'', redirectTo :'home', pathMatch:'full'},
  {path: 'user/:id', component: UserComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent}*/
  {path: '', redirectTo :'home', pathMatch:'full'},
  
  {path: 'home', component: HomeComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'contact', component: ContactComponent}
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
