import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: { email: string, password: string } = {email: '', password: ''};
  public form: FormGroup;
  @ViewChild(FormGroupDirective, {static: false}) public formDirective: FormGroupDirective;

  constructor(
    private oHttpClient: HttpClient,
    private _snackBar: MatSnackBar,
    private oRouter: Router,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.oHttpClient.put(environment.urlServer + 'rest/user/' + this.model.email, {}, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        app: 'APP_BCK',
        password: this.model.password,
      },
    }).subscribe((data: HttpResponse<any>) => {
      sessionStorage.setItem('user', JSON.stringify(data));
      this.oRouter.navigateByUrl('/booking');
    }, (err) => {
      console.error(err);
      this.openSnackBar('Usuario y/o contraseña incorrecta');
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

}
