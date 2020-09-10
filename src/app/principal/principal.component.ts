import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-principal',
  styleUrls: ['./principal.component.scss'],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class PrincipalComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
