import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from "../BaseComponent"
declare let $: any;
@Component({
	selector: 'app-login-second',
	templateUrl: './loginSecond.component.html',
	styleUrls: ['./loginSecond.component.css']
})
export class LoginSecondComponent extends BaseComponent implements OnInit {

	constructor(public injector: Injector) { super(injector) }

	ngOnInit() {
		$(".preloader-base").remove();
	}
	ngAfterViewInit() {
		$(".owl-carousel").owlCarousel({
			loop: true,
			autoplay: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 1,
			slideSpeed: 3000,
			paginationSpeed: 3000,
			freeDrag: false,
			pullDrag: false,
			nav: true,
			dots: false,
			navElement: "div",
			navText: [
				"<i class='zmdi zmdi-chevron-left zmdi-hc-fw'></i>",
				"<i class='zmdi zmdi-chevron-right zmdi-hc-fw'></i>"
			],
		});
		
	}
	public username = "";
	public password = "";

	public config: Object = {
		register: false,
		forgot: false,
		login: true
	}
	public showTab(type){
		this.config = {
			register: false,
			forgot: false,
			login: false
		}
		this.config[type] = !this.config[type];
	}
	public login() {
		if (this.username == "admin" && this.password == "admin") {
			this.localstorage.remove("isLogin2")
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
