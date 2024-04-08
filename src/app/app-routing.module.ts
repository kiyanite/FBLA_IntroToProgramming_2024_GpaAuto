import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpaAuthComponent } from './gpa-auth/gpa-auth.component';
import { LoginComponent } from './login/login.component';
import { LoginErrorComponent } from './login-error/login-error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'gpa-auth', component: GpaAuthComponent },
  { path: 'login-error', component: LoginErrorComponent },
  { path: '', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
