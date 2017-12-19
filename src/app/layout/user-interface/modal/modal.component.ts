import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		window.scrollTo(0, 0);
	}

	public entrance	=	'';

}
