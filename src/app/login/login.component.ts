import { Component, OnInit } from '@angular/core';

declare let $;
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor() { }
	ngOnInit() {
		$(".preloader-base").remove();
	}

}
