import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Navigation</h1>
    <ul>
      <li [routerLink]="['/']" style="cursor: pointer">Home</li>
      <li [routerLink]="['/documents']" style="cursor: pointer">Documents</li>
      <li [routerLink]="['/proposals']" style="cursor: pointer">Proposals</li>
    </ul>
    <router-outlet></router-outlet>
  
  
  
  `
})
export class AppComponent {

}
