import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params} from '@angular/router'
import { Proposal } from './proposal'


@Component({
  selector: "app-proposal-show",
  styleUrls: ['proposal-show.component.css'],
  template: `
	<div class="card proposal-card">
		<h1>Proposal Show</h1>

		<div>
			The id for this proposal is: {{ id }}
		</div>
	</div><!-- card -->
  `
})

export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  constructor(
    private route: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      })
  }
}