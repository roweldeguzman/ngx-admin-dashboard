import { Component, OnInit } from '@angular/core';

declare let $;
@Component({
	selector: 'app-page404',
	templateUrl: './page404.component.html',
	styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

	constructor() { }

	ngOnInit() {
		window.scrollTo(0, 0);
		$(".preloader-base").remove();
	}

}
