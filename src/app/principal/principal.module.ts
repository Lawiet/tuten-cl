import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrincipalComponent} from './principal.component';
import {LoginComponent} from './login/login.component';
import {PrincipalRoutingModule} from './principal-routing.module';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [
    PrincipalRoutingModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  declarations: [
    PrincipalComponent,
    LoginComponent,
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
  ],
})
export class PrincipalModule {
}
