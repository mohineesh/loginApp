import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {loginComponent} from './login/login.component';
import { SucessComponent } from './login/sucess/sucess.component';

export const ROUTES : Routes = [{path:'login',component:loginComponent},{path:'sucess',component:SucessComponent}];

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    SucessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
