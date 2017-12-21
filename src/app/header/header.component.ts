import { Component, OnInit, Injector } from '@angular/core';

import { BaseComponent } from '../BaseComponent';

declare let $:any;
@Component({
	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

	constructor(public injector: Injector) { super(injector); }

	ngOnInit() {}

	public messageList = [
		{
			title: "Rowel de Guzman",
			message: "Sample Message for Rowel de Guzman",
			image: "1.jpg"
		}, {
			title: "Albert Magat",
			message: "Sample Message for Albert Magat",
			image: "2.jpg"
		}, {
			title: "Daryl Abalos",
			message: "Sample Message for Daryl Abalos",
			image: "3.jpg"
		}, {
			title: "Jonathan Poquiz",
			message: "Sample Message for Jonathan Poquiz",
			image: "4.jpg"
		}
	];


	changeLayout(ev){
		if (ev.target.checked){
			$("body").addClass("full-layout");
		} else {
			$("body").removeClass("full-layout");
		}
	}
	
}
