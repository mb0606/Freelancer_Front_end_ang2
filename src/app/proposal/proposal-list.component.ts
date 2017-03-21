import { Component } from '@angular/core'
import { Proposal } from './proposal'



@Component({
  selector: 'app-proposal-list',
  template: `
    <h1>Proposal list </h1>
    <div *ngFor='let prop of proposals'> {{prop.id}} - {{prop.customer}} - {{prop.portfolio_url}}</div>
  
  `
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(1, 'Fake Company', 'http://fake.com','Ruby',150, 220, 15, 'marcoberardini@gmail.com')
  proposalTwo: Proposal = new Proposal(2, '2 Fake Company','http://2fake.com, 'Javascript', 110, 220, 10, 'marcoberardini@gmail.com')
  proposalThree: Proposal = new Proposal(3, '3 Fake Company', 'http://3fake.com', 'Python' ,40, 220, 1, 'marcoberardini@gmail.com')
  

  proposals: Proposal[] = [ this.proposalOne, this.proposalTwo, this.proposalThree ]

}
