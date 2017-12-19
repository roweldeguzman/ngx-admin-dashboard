import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list-view',
	templateUrl: './list-view.component.html',
	styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

	constructor() { }
	
	public maxSize: number = 5;
	public totalItems: number = 175;
	public currentPage: number = 1;
	
	ngOnInit() {
		window.scrollTo(0, 0);
	}
	pageChanged(event: any): void {
		console.log(event);
		console.log('Page changed to: ' + event.page);
		console.log('Number items per page: ' + event.itemsPerPage);
	}

}
