import {Injector} from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ServiceService } from './services/service.service';

declare let $:any;
declare let window:any;

export class BaseComponent{
	protected http: HttpClient;
	protected service:ServiceService;


    constructor(public injector: Injector){
		this.http           =   injector.get(HttpClient)
		this.service        =   injector.get(ServiceService)
	}
	
	public baseUrl	=	"";
	public appDefaultConfig: Object	=	{};
	public isAsideActive	=	true;
	public updateTitle(title){
		let titleElement : any = document.getElementsByTagName("title");
		titleElement[0].innerHTML = title;
	}
	/* Selectize Config */
	public SELECTIZE_DEFAULT_CONFIG = {
		plugins: ['dropdown_direction', 'remove_button'],
		dropdownDirection: 'auto',
		highlight: false,
		onFocus: function () {
			$(this.$control).parents(".rg-line").addClass("rg-toggled");
		},
		onBlur: function () {
			if (this.items.length == 0) {
				$(this.$control).parents(".rg-line").removeClass("rg-toggled");
			}
		}
	}
	public expandNavHead(){
		$("aside, .overlay").toggleClass("active");
		if ($(".bottom-toggler").hasClass("active")) {
			$(".bottom-toggler").removeClass("active");
		}
		if ($("aside").hasClass("active")) {
			this.collapseSpandedNav(false);
		} else {
			this.collapseSpandedNav(true);
		}
	}

	public collapseSpandedNav(isClose: boolean){
		$(".hamburger--spring").toggleClass("is-active");
		if (isClose) {
			$(".sub-menu.toggled").each(function(i, e){
				$(e).find('ul:first').find("a.sub").css("visibility","hidden");
				$(e).toggleClass("toggled");
				$(e).addClass("toggled-hidden");
				$(e).find('ul:first').slideToggle('fast');
			});
		} else {
			$(".toggled-hidden").each(function(i, e){
				$(e).removeClass("toggled-hidden");
				$(e).toggleClass("toggled");
				$(e).find('ul:first').slideToggle('fast');
				$(e).find('ul:first').find("a.sub").css("visibility", "visible");
			})
		}
	}
}