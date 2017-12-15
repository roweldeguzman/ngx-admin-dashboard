import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import 'rxjs/add/observable/of';

@Component({
	selector: 'app-ui-bootstrap',
	templateUrl: './ui-bootstrap.component.html',
	styleUrls: ['./ui-bootstrap.component.css']
})
export class UiBootstrapComponent implements OnInit {
	constructor(
		private modalService: BsModalService
	) { 
		this.random();
		this.randomStacked();
	}
	ngOnInit() {

	}
	singleModel: string = '1';
	checkModel: any = { left: false, middle: true, right: false };
	radioModel: string = 'Middle';

	// Collapse
	isCollapsed: boolean = false;

	collapsed(event: any): void {
		console.log(event);
	}

	expanded(event: any): void {
		console.log(event);
	}
	//Dropdown
	public items = [
		{ name: 'The first choice!', icon: 'home' },
		{ name: 'And another choice', icon: 'account' },
		{ name: 'But wait! A third!', icon: 'email' },
		{ name: 'And fourth on here', icon: 'pin' }
	]

	/* PAGINATION */
	totalItems = 64;
	currentPage = 4;
	smallnumPages = 0;

	setPage(pageNo: number): void {
		this.currentPage = pageNo;
	}

	pageChanged(event: any): void {
		console.log('Page changed to: ' + event.page);
		console.log('Number items per page: ' + event.itemsPerPage);
	}


	maxSize: number = 5;
	bigTotalItems: number = 175;
	bigCurrentPage: number = 1;
	numPages: number = 0;

	pageChanged2(event: any): void {
		console.log('Page changed to: ' + event.page);
		console.log('Number items per page: ' + event.itemsPerPage);
	}

	/* Progress */
	max: number = 200;
	showWarning: boolean;
	dynamic: number;
	type: string;

	random(): void {
		let value = Math.floor(Math.random() * 100 + 1);
		let type: string;

		if (value < 25) {
			type = 'success';
		} else if (value < 50) {
			type = 'info';
		} else if (value < 75) {
			type = 'warning';
		} else {
			type = 'danger';
		}

		this.showWarning = type === 'danger' || type === 'warning';
		this.dynamic = value;
		this.type = type;
	}

	stacked: any[] = [];
	randomStacked(): void {
		let types = ['success', 'info', 'warning', 'danger'];

		this.stacked = [];
		let n = Math.floor(Math.random() * 4 + 1);
		for (let i = 0; i < n; i++) {
			let index = Math.floor(Math.random() * 4);
			let value = Math.floor(Math.random() * 27 + 3);
			this.stacked.push({
				value,
				type: types[index],
				label: value + ' %'
			});
		}
	}

	/* TABS */
	alertMe(): void {
		setTimeout(function (): void {
			alert("You've selected the alert tab!");
		});
	}
	public tabActive: number = 1;
	private selectTab(tab: number) {
		this.tabActive = tab;
	}
	/*Typehead*/
	selected: string;
	states: string[] = [
		'Alabama',
		'Alaska',
		'Arizona',
		'Arkansas',
		'California',
		'Colorado',
		'Connecticut',
		'Delaware',
		'Florida',
		'Georgia',
		'Hawaii',
		'Idaho',
		'Illinois',
		'Indiana',
		'Iowa',
		'Kansas',
		'Kentucky',
		'Louisiana',
		'Maine',
		'Maryland',
		'Massachusetts',
		'Michigan',
		'Minnesota',
		'Mississippi',
		'Missouri',
		'Montana',
		'Nebraska',
		'Nevada',
		'New Hampshire',
		'New Jersey',
		'New Mexico',
		'New York',
		'North Dakota',
		'North Carolina',
		'Ohio',
		'Oklahoma',
		'Oregon',
		'Pennsylvania',
		'Rhode Island',
		'South Carolina',
		'South Dakota',
		'Tennessee',
		'Texas',
		'Utah',
		'Vermont',
		'Virginia',
		'Washington',
		'West Virginia',
		'Wisconsin',
		'Wyoming'
	];
}
