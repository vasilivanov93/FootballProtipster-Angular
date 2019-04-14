import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

// Components
import {AppNavComponent} from './app-nav/app-nav.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';

// Cdk and Material
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { AnonymousHomeComponent } from './anonymous-home/anonymous-home.component';
import { AuthenticationHomeComponent } from './authentication-home/authentication-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    AppNavComponent,
    HomeComponent,
    FooterComponent,
    AnonymousHomeComponent,
    AuthenticationHomeComponent
  ],
  exports: [
    AppNavComponent,
    HomeComponent,
    FooterComponent
  ]
})

export class SharedModule {
}
