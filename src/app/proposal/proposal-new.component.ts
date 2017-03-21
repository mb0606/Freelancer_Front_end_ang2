import { Component } from '@angular/core'
import { Proposal } from './proposal'

@Component({
  selector: "app-proposal-new",
  template: `
  <h1>Create new Proposal</h1>
  `
})

export class ProposalNewComponent {
  proposal = new Proposal;
}