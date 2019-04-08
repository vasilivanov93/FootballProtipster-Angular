import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

// Directives
import {CheckPasswordDirective} from '../../core/directives/check-password.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    CheckPasswordDirective
  ],
  exports: [

  ]
})

export class AuthenticationModule { }