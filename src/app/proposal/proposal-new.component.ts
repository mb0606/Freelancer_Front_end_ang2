import { Component } from '@angular/core'
import { Proposal } from './proposal'

@Component({
  selector: "app-proposal-new",
  template: `
  <h1>Create new Proposal</h1>
  <div>
    <form #proposalForm="ngForm">
      <label for="customer">Customer Name</label>
      <input  type="text"
              id="customer"
              placeholder="ABC Company"
              name="customer"
              #customer
              [(ngModel)]="proposal.customer"
      >
    
    </form>
  
    <div>{{ proposal.customer }}</div>
  </div>
  `
})

export class ProposalNewComponent {
  proposal = new Proposal;
}