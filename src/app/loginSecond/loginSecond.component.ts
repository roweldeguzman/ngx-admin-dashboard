import { Component, OnInit } from '@angular/core';

declare let $: any;
@Component({
	selector: 'app-login-second',
	templateUrl: './loginSecond.component.html',
	styleUrls: ['./loginSecond.component.css']
})
export class LoginSecondComponent implements OnInit {

	constructor() { }

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
}
