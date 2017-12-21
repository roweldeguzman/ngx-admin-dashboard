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

	changeLayout(ev){
		if (ev.target.checked){
			$("body").addClass("full-layout");
		} else {
			$("body").removeClass("full-layout");
		}
	}
	public rest = "Rowel";
	public messageList = [
		{
			title: "Rowel de Guzman",
			message: "Sample Message for Rowel de Guzman",
			image: "1.jpg"
		}, {
			title: "Alber Magat",
			message: "Sample Message for Alber Magat",
			image: "2.jpg"
		}
	];
}
