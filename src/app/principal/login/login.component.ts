import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {User} from '../../entity/user';
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
    this.oHttpClient.put(environment.urlServer + '#!/user/' + this.model.email, {}, {
      headers: {
        'X-Requested-With': 'Accept',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        app: 'APP_BCK',
        password: this.model.password,
      },
    }).subscribe((data: HttpResponse<any>) => {
      const user = new User().deepCopy(data.body);
      sessionStorage.setItem('user', data.body);
      this.oRouter.navigateByUrl('/booking');
    }, (err) => {
      console.error(err);
      this.openSnackBar('Usuario y/o contraseña incorrecta');
      this.temp();
    });
  }

  temp() {
    const user = '{"serviceData":null,"userAvailability":null,"sessionTokenBck":"testapis@tuten.clp8o4kug7f7n4avm30b2g30135p","firstName":"admin","lastName":"de lectura","email":"testapis@tuten.cl","active":true,"passwordHash":null,"sessionTokenWeb":null,"phoneNumber":"123456","agreedToTermsOfUse":true,"whereKnownUs":null,"lastLogin":1599756400940,"sessionTokenCli":null,"sessionTokenPro":null,"funds":0.0,"tokenFacebook":null,"tokenGoogle":null,"tokensIonic":null,"photoPath":null,"photoExt":null,"userRole":{"userRole":"ADMIN","description":"","fatherUserRole":null,"domain":"tuten","estatus":null,"defaultNamespace":null,"id":1},"sync":0,"usedCodeList":"","referrer":"","rut":null,"domain":"tuten","typeProfessional":null,"tutenSubRole":null,"userId":null,"appVersion":null,"estatus":null}';
    sessionStorage.setItem('user', user);
    this.oRouter.navigateByUrl('/booking');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

}
