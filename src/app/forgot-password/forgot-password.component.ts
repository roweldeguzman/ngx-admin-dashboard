import { Component, OnInit } from '@angular/core';

declare let $;
@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		$(".preloader-base").remove();
	}

}
