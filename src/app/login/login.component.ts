import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from "../BaseComponent";
declare let $;
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

	constructor(public injector: Injector) { super(injector); }
	public username		= 	"";
	public password 	= 	"";
	ngOnInit() {
		$(".preloader-base").remove();
	}

	public login(){
		if (this.username == "admin" && this.password == "admin"){
			this.localstorage.remove("isLogin")
			this.router.navigate(["home"])
		} else {
			this.service.notify("Username and Password is admin", "inverse", {
				from: 'top',
				align: 'right'
			}, {
				enter: 'animated bounceIn',
				exit: 'animated bounceOut'
			})
		}
	}
}
