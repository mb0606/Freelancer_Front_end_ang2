import { Component } from '@angular/core'
import { Proposal } from './proposal'

@Component({
  selector: "app-proposal-new",
  template: `
<h1>Create a Proposal</h1>

<div>
	<form #proposalForm="ngForm">
		<div class="form-group">
			<label for="customer">Customer Name</label>
			<input type="text"
							id="customer"
							placeholder="ABC Company"
							required
							name="customer"
							#customer
							[(ngModel)]="proposal.customer"
			>
			<div [hidden]="customer || customer.valid || customer.pristine">
				Customer name is required
			</div>
		</div>

		<div class="form-group">
			<label for="portfolio_url">Portfolio URL</label>
			<input type="text"
							id="portfolio_url"
							required
							name="portfolio_url"
							#portfolio_url=
							[(ngModel)]="proposal.portfolio_url"
			>
			<div [hidden]="portfolio_url ||portfolio_url.valid || portfolio_url.pristine">
				A Portfolio URL is required
			</div>
		</div>

		<div class="form-group">
			<label for="tools">Tools that you'll use on the project</label>
			<input type="text"
							id="tools"
							placeholder="Ruby on Rails, Angular, etc"
							required
							name="tools"
							#tools
							[(ngModel)]="proposal.tools"
			>
			<div [hidden]="tools || tools.valid || tools.pristine">
				A list of tools is required
			</div>
		</div>

		<div class="form-group">
			<label for="estimated_hours">Estimated hours</label>
			<input type="number"
							id="estimated_hours"
							required
							name="estimated_hours"
							#estimated_hours
							[(ngModel)]="proposal.estimated_hours"
			>
			<div [hidden]="estimated_hours || estimated_hours.valid || estimated_hours.pristine">
				You need to enter your estimated hours for the project
			</div>
		</div>

		<div class="form-group">
			<label for="hourly_rate">Hourly rate</label>
			<input type="number"
							id="hourly_rate"
							required
							name="hourly_rate"
							#hourly_rate
							[(ngModel)]="proposal.hourly_rate"
			>
			<div [hidden]="hourly_rate || hourly_rate.valid || hourly_rate.pristine">
				You need to enter your hourly rate for the project
			</div>
		</div>

		<div class="form-group">
			<label for="weeks_to_complete">Weeks to Complete</label>
			<input type="number"
							id="weeks_to_complete"
							required
							name="weeks_to_complete"
							#weeks_to_complete
							[(ngModel)]="proposal.weeks_to_complete"
			>
			<div [hidden]="weeks_to_complete || weeks_to_complete.valid || weeks_to_complete.pristine">
				You need to enter the weeks you estimate to complete the project
			</div>
		</div>

		<div class="form-group">
			<label for="client_email">Client Email <em>(Optional)</em></label>
			<input type="email"
							id="client_email"
							name="client_email"
							#client_email='ngModel'
							[(ngModel)]="proposal.client_email"
			>
		</div>

	</form>
  
    <div>
    	<p>Hi {{ proposal.customer }},</p>
    
    
    	<p>It was a pleasure getting to meet with you and review your project requirements, I believe it is a great fit for the types of applications that I build out. Please feel free to check out some of my past projects <a href="{{ proposal.portfolio_url }}">here</a>.</p>
    
    
    	<p>To successfully build out the application I will be utilizing {{ proposal.tools }}, and a number of other tools to ensure that the project follows industry wide best practices.</p>
    
    
    	<p>Ensuring that you are fully informed is one of my top priorities, so in addition to incorporating everything that we discussed, I will also be creating a project management dashboard and sending you a project update message daily so that you can have a transparent view of the development as it takes place.</p>
    
    
    	<p>To accomplish the project and meet the requirements that we discussed, I am estimating that it will take {{ proposal.estimated_hours }} hours in development time to complete. The project should take {{ proposal.weeks_to_complete }} weeks to complete and with my hourly rate of {{ proposal.hourly_rate }}/hour, the estimated total will be {{ proposal.hourly_rate * proposal.estimated_hours }}.</p>
    
    
    	<p>The next step from here is to set up a meeting to finalize the project and sign contracts.</p>
    
    
    	<p>I am excited to working with you and build out this project.</p>
    </div>  
  </div>
  `
})

export class ProposalNewComponent {
  proposal = new Proposal;
}