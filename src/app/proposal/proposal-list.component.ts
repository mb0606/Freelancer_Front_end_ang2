import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proposal } from './proposal';
import { Observable } from 'rxjs/Rx'; 
import { ProposalService } from './proposal.service';
 


@Component({
  selector: 'app-proposal-list',
  styleUrls: ['proposal-list.component.css'],
  template: `
	<div class="list-group">
		<a class="list-group-item list-group-item-action active">
			<h1 class="headline">Proposal List</h1>
		</a>
		<span *ngFor="let proposal of proposals" class="list-group-item list-group-item-action">
			<a (click)="goToShow(proposal)" class="proposal-link">
				<h5 class="list-group-item-heading">{{proposal.customer}}</h5>
				<p class="list-group-item-text">
					{{ proposal.hourly_rate * proposal.estimated_hours | currency:'USD':true:'.2'}}
				</p>
			</a>
		</span>
	</div><!-- list-group -->
  `
})

export class ProposalListComponent implements OnInit{
  proposals: Proposal[]
  errorMessage: string;
	mode = "Observable";


 	constructor(
     private proService: ProposalService,
     private router: Router 
     ){}

	ngOnInit(){
    let timer = Observable.timer(0,5000)
    timer.subscribe(()=> this.getProposals())
    
  }

  getProposals(){
    this.proService.getProposals()
            .subscribe(
              resp => this.proposals = resp,
              err  => this.errorMessage = <any>err
              )
    
  }

  goToShow(proposal:Proposal): void {
    let link = ['/proposal', proposal.id];
    this.router.navigate(link)
  }



}
