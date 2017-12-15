import { Component, OnInit } from '@angular/core';

declare let $;
@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		$(".preloader-base").remove();
	}

}
