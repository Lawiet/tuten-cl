import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewComponent} from './view/view.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {BookingRoutingModule} from './booking-routing.module';
import {BookingComponent} from './booking.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    BookingRoutingModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatSelectModule,
  ],
  declarations: [
    BookingComponent,
    ViewComponent,
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
  ],
})
export class BookingModule {
}
