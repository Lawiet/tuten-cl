import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PrincipalComponent} from './principal.component';

const routes: Routes = [{
  path: '',
  component: PrincipalComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'booking',
      loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalRoutingModule {
}
