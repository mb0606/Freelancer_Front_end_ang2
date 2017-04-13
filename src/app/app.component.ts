import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `




  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Navbar</a>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
				<a class='nav-link' [routerLinkActiveOptions]="{exact: true}"  routerLinkActive="active" routerLink="/home">Home</a>
      </li>
      <li class="nav-item">
				<a class='nav-link' [routerLinkActiveOptions]="{exact: true}"  routerLinkActive="active" routerLink="/documents">Docs</a>
      </li>

      <li class="nav-item dropdown">
        <button class=" dropdown-toggle btn btn-outline-primary" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Proposals
					</button>
					<div class="dropdown-menu" aria-labelledby="proposalDropdown">
						<a class="dropdown-item" routerLinkActive="active" 
            [routerLinkActiveOptions]="{exact: true}" routerLink="/proposals">Proposals</a>
						<a class="dropdown-item" routerLinkActive="active" 
            [routerLinkActiveOptions]="{exact: true}" routerLink="/proposals/new">New Proposal</a>
					</div>
      </li>
    </ul>
  </div>
</nav>

<div class="container">
  <router-outlet></router-outlet>
</div>
  `
})
export class AppComponent {

}
