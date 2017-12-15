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
	
	public baseUrl	=	"http://server.roweldev.com";
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
		$("aside, .overlay").toggleClass("active")
	}
}