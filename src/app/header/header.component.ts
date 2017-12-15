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
			$("body").addClass("single-layout");
		} else {
			$("body").removeClass("single-layout");
		}
	}
}
