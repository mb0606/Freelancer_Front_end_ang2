import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute, Params} from '@angular/router'
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal'
import { ProposalService } from './proposal.service'



@Component({
  selector: "app-proposal-show",
  styleUrls: ['proposal-show.component.css'],
  template: `
	<div *ngIf="proposal" class="card proposal-card">
		<h1>Hi {{ proposal.customer }}</h1>

    <p>It was a pleasure getting to meet with you and review your project requirements, I believe it is a great fit for the types of applications that I build out. Please feel free to check out some of my past projects <a href="{{ proposal.portfolio_url }}">here</a>.</p>
  
  
    <p>To successfully build out the application I will be utilizing {{ proposal.tools }}, and a number of other tools to ensure that the project follows industry wide best practices.</p>
  
  
    <p>Ensuring that you are fully informed is one of my top priorities, so in addition to incorporating everything that we discussed, I will also be creating a project management dashboard and sending you a project update message daily so that you can have a transparent view of the development as it takes place.</p>
  
  
    <p>To accomplish the project and meet the requirements that we discussed, I am estimating that it will take {{ proposal.estimated_hours }} hours in development time to complete. The project should take {{ proposal.weeks_to_complete }} weeks to complete and with my hourly rate of {{ proposal.hourly_rate }}/hour, the estimated total will be {{ proposal.hourly_rate * proposal.estimated_hours | currency:'USD':true:'.2' }}.</p>
  
  
    <p>The next step from here is to set up a meeting to finalize the project and sign contracts.</p>
  
  
    <p>I am excited to working with you and build out this project.</p>
 
	</div><!-- card -->
  `
})

export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private propService: ProposalService
  ){}

  @Input() proposal: Proposal;

  ngOnInit(): void {
    let propRequest = this.route.params
          .flatMap((params: Params) => 
            this.propService.getProposal(+params['id'])
          );
    propRequest.subscribe(resp => this.proposal = resp.json())
  }
}