import { Component, OnInit, ViewChild } from '@angular/core';

declare let $;
@Component({
	selector: 'app-lock-screen',
	templateUrl: './lock-screen.component.html',
	styleUrls: ['./lock-screen.component.css']
})
export class LockScreenComponent implements OnInit {

	constructor() { }


	public password = "";
	ngOnInit() {
		$(".preloader-base").remove();
	}

	public inFocus(){ $(".lock-img").addClass("active"); }
	public inBlur() {
		if (this.password.trim().length == 0){
			$(".lock-img").removeClass("active");
		}
	}
}
