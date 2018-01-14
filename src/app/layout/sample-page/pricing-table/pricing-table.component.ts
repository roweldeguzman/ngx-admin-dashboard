import { Component, OnInit } from '@angular/core';
declare let $;
@Component({
	selector: 'app-pricing-table',
	templateUrl: './pricing-table.component.html',
	styleUrls: ['./pricing-table.component.scss']
})
export class PricingTableComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		window.scrollTo(0, 0);
		$(".preloader-base").remove();
	}

}
