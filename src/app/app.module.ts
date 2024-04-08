import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GpaAuthComponent } from './gpa-auth/gpa-auth.component';
import { LoginErrorComponent } from './login-error/login-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GpaAuthComponent,
    LoginErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
