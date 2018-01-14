import { Component, OnInit, Injector } from '@angular/core';
import {
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
    
} from '@angular/router';
import { BaseComponent } from '../BaseComponent';
declare let $;
declare let window;
@Component({
	selector: 'app-layout',
  	templateUrl: './layout.component.html',
  	styleUrls: ['./layout.component.css']
})
export class LayoutComponent extends BaseComponent implements OnInit {

	constructor(public injector: Injector) { 
		super(injector);
		this.router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }
    public storageColor = this.localstorage.get("color");
    public currentSkin = this.storageColor == null ? "primary" : this.storageColor;
    public currentState;
    
    ngOnInit(){
        $(".preloader-base").remove();
        if (this.router.url == '/'){
            this.router.navigate(["/home"]);
        }
        $("body").attr("rg-skin", this.currentSkin);
    }
    
	navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            if (document.querySelector(".main-overlay") != null) {
                document.querySelector(".main-overlay").classList.add("active");
            }
        }
        if (event instanceof NavigationEnd) {
            this.currentState = this.router.routerState.snapshot.url.split('/');
            if (document.querySelector(".main-overlay") != null){
                document.querySelector(".main-overlay").classList.remove("active");
            }

            if (window.innerWidth <= 767){
                if($("aside").hasClass("active")){                    
                    setTimeout(function(){
                        $("aside, .overlay").removeClass("active");
                        $(".hamburger--spring").toggleClass("is-active");
                    }, 300);
                }                
            } else if (window.innerWidth > 768){
                if($("aside").hasClass("active")){
                    setTimeout(function(){
                        $("aside, .overlay, .bottom-toggler").removeClass("active");
                        $(".hamburger--spring").toggleClass("is-active");
                    }, 50);
                }
            }
        }
        if (event instanceof NavigationCancel) {
            console.info("Layout.module.ts", "NavigationCancel")
        }
        if (event instanceof NavigationError) {
            console.info("Layout.module.ts", "NavigationError")
        }
    }

    getCurrentSkin (color){
        this.currentSkin = color;
        this.localstorage.add("color", color);
        $("body").attr("rg-skin", color)
    }
}
