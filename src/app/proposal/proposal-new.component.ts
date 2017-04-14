import { Component } from '@angular/core'
import { Proposal } from './proposal'

@Component({
  selector: "app-proposal-new",
	styleUrls: ['proposal-new.component.css'],
  template: `
<div class="card container form-container">
	<div class="row">
		<div class="col-md-6">
			<h1>Create a Proposal</h1>
			
				<form #proposalForm="ngForm">
					<div class="form-group">
						<label for="customer">Customer Name</label>
						<input type="text"
										class="form-control"
										id="customer"
										placeholder="ABC Company"
										required
										name="customer"
										#customer="ngModel"
										[(ngModel)]="proposal.customer"
						>
						<div *ngIf="customer.invalid && customer.touched"
									class='alert alert-danger'
						>
							Customer name is required
						</div>
					</div>

					<div class="form-group">
						<label for="portfolio_url">Portfolio URL</label>
						<input type="text"
									class="form-control"
										id="portfolio_url"
										required
										minlength="8"
										name="portfolio_url"
										#portfolio_url="ngModel"
										[(ngModel)]="proposal.portfolio_url"
						>
						<div *ngIf="portfolio_url.invalid && portfolio_url.touched"
									class='alert alert-danger'
						>
							A Portfolio URL is required
						</div>
					</div>

					<div class="form-group">
						<label for="tools">Tools that you'll use on the project</label>
						<input type="text"
										class="form-control"
										id="tools"
										placeholder="Ruby on Rails, Angular, etc"
										required
										name="tools"
										#tools="ngModel"
										[(ngModel)]="proposal.tools"
						>
						<div *ngIf="tools.invalid && tools.touched"
									class='alert alert-danger'
						>
							A list of tools is required
						</div>
					</div>

					<div class="form-group">
						<label for="estimated_hours">Estimated hours</label>
						<input type="number"
										class="form-control"
										id="estimated_hours"
										required
										name="estimated_hours"
										#estimated_hours="ngModel"
										[(ngModel)]="proposal.estimated_hours"
						>
						<div *ngIf="estimated_hours.invalid &&estimated_hours.touched"
									class='alert alert-danger'
						>
							You need to enter your estimated hours for the project
						</div>
					</div>

					<div class="form-group">
						<label for="hourly_rate">Hourly rate</label>
						<div class="input-group">
						<span class="input-group-addon">$</span>
							<input type="number"
										 class="form-control"
											id="hourly_rate"
											required
											name="hourly_rate"
											#hourly_rate="ngModel"
											[(ngModel)]="proposal.hourly_rate"
							>
						</div>
						<div *ngIf="hourly_rate.invalid && hourly_rate.touched"
									class='alert alert-danger'
						>
							You need to enter your hourly rate for the project
						</div>
					</div>

					<div class="form-group">
						<label for="weeks_to_complete">Weeks to Complete</label>
						<input type="number"
										class="form-control"
										id="weeks_to_complete"
										required
										name="weeks_to_complete"
										#weeks_to_complete="ngModel"
										[(ngModel)]="proposal.weeks_to_complete"
						>
						<div *ngIf="weeks_to_complete.invalid && weeks_to_complete.touched"
									class='alert alert-danger'
						>
							You need to enter the weeks you estimate to complete the project
						</div>
					</div>

					<div class="form-group">
						<label for="client_email">Client Email <em>(Optional)</em></label>
						<input type="email"
										class="form-control"
										id="client_email"
										name="client_email"
										#client_email='ngModel'
										[(ngModel)]="proposal.client_email"
						>
					</div>

				</form>

			</div><!-- col -->
		  
		    <div class="col-md-6">
		    	<p>Hi {{ proposal.customer }},</p>
		    
		    
		    	<p>It was a pleasure getting to meet with you and review your project requirements, I believe it is a great fit for the types of applications that I build out. Please feel free to check out some of my past projects <a href="{{ proposal.portfolio_url }}">here</a>.</p>
		    
		    
		    	<p>To successfully build out the application I will be utilizing {{ proposal.tools }}, and a number of other tools to ensure that the project follows industry wide best practices.</p>
		    
		    
		    	<p>Ensuring that you are fully informed is one of my top priorities, so in addition to incorporating everything that we discussed, I will also be creating a project management dashboard and sending you a project update message daily so that you can have a transparent view of the development as it takes place.</p>
		    
		    
		    	<p>To accomplish the project and meet the requirements that we discussed, I am estimating that it will take {{ proposal.estimated_hours }} hours in development time to complete. The project should take {{ proposal.weeks_to_complete }} weeks to complete and with my hourly rate of {{ proposal.hourly_rate }}/hour, the estimated total will be {{ proposal.hourly_rate * proposal.estimated_hours | currency:'USD':true:'.2' }}.</p>
		    
		    
		    	<p>The next step from here is to set up a meeting to finalize the project and sign contracts.</p>
		    
		    
		    	<p>I am excited to working with you and build out this project.</p>
 
		  </div><!-- col -->
		</div><!-- row -->
	</div><!-- card -->
  `
})

export class ProposalNewComponent {
  proposal = new Proposal;
}