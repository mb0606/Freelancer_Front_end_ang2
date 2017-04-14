import { Component } from '@angular/core'
import { Proposal } from './proposal'



@Component({
  selector: 'app-proposal-list',
  styleUrls: ['proposal-list.component.css'],
  template: `
	<div class="list-group">
		<a class="list-group-item list-group-item-action active">
			<h1 class="headline">Proposal List</h1>
		</a>
		<span *ngFor="let proposal of proposals" class="list-group-item list-group-item-action">
			<a routerLink="/proposal/{{proposal.id}}" class="proposal-link">
				<h5 class="list-group-item-heading">{{proposal.customer}}</h5>
				<p class="list-group-item-text">
					{{ proposal.hourly_rate * proposal.estimated_hours | currency:'USD':true:'.2'}}
				</p>
			</a>
		</span>
	</div><!-- list-group -->
  `
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(1, 'Fake Company', 'http://fake.com','Ruby',150, 220, 15, 'marcoberardini@gmail.com')
  proposalTwo: Proposal = new Proposal(2, '2 Fake Company','http://2fake.com', 'Javascript', 110, 220, 10, 'marcoberardini@gmail.com')
  proposalThree: Proposal = new Proposal(3, '3 Fake Company', 'http://3fake.com', 'Python' ,40, 220, 1, 'marcoberardini@gmail.com')
  

  proposals: Proposal[] = [ this.proposalOne, this.proposalTwo, this.proposalThree ]

}
