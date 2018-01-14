import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { Router } from "@angular/router";
import { BaseComponent } from "../BaseComponent";
declare let $;
@Component({
	selector: 'app-lock-screen',
	templateUrl: './lock-screen.component.html',
	styleUrls: ['./lock-screen.component.css']
})
export class LockScreenComponent extends BaseComponent implements OnInit {

	constructor( public injector: Injector) { super(injector) }


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

	public unlock(){
		if (this.password == "admin"){
			this.localstorage.remove("isLock")
			this.router.navigate(["/home"]);
		} else {
			this.service.notify("Password is admin", "inverse", {
				from: 'top',
				align: 'right'
			}, {
				enter: 'animated bounceIn',
				exit: 'animated bounceOut'
			})
		}
	}
}
