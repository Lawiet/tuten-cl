import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../../environments/environment';
import {User} from '../../entity/user';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  filters = [
    {text: 'like'},
    {text: '>='},
    {text: '<='},
  ];
  filter = this.filters[0];
  search = '';
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  displayedColumns: string[] = ['BookingId', 'Cliente', 'Creación', 'Dirección', 'Precio'];
  private rawData: any[] = [];
  private user: User = new User();

  constructor(
    private oHttpClient: HttpClient,
    private _snackBar: MatSnackBar,
  ) {
    this.user = this.user.deepCopy(JSON.parse(sessionStorage.getItem('user')));
  }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() {
    this.oHttpClient.get(environment.urlServer + 'rest/user/contacto@tuten.cl/bookings?current=true', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        app: 'APP_BCK',
        email: 'contacto@tuten.cl',
        adminemail: this.user?.email,
        token: this.user?.sessionTokenBck,
      },
    }).subscribe((data: any) => {
      this.rawData = data;
      this.dataSource.data = data;
    }, (err) => {
      console.error(err);
      this.openSnackBar('Ocurrio un error');
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    const data = [];

    this.rawData.forEach((d) => {
      switch (this.filter.text) {
        case '>=':
          if (d.bookingId >= filterValue || d.bookingPrice >= filterValue) {
            data.push(d);
          }
          break;
        case '<=':
          if (d.bookingId <= filterValue || d.bookingPrice <= filterValue) {
            data.push(d);
          }
          break;
        default:
          if (d.bookingId.toString().indexOf(filterValue) > -1 || d.bookingPrice.toString().indexOf(filterValue) > -1) {
            data.push(d);
          }
      }
    });

    this.dataSource.data = data;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

}
