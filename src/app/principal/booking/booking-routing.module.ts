import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingComponent} from './booking.component';
import {ViewComponent} from './view/view.component';

const routes: Routes = [{
  path: '',
  component: BookingComponent,
  children: [
    {
      path: 'view',
      component: ViewComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {
}
