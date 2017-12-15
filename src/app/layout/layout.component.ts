import { Component, OnInit, Injector } from '@angular/core';
import {
    Router,
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
    
} from '@angular/router';
import { BaseComponent } from '../BaseComponent';
declare let $;
@Component({
	selector: 'app-layout',
  	templateUrl: './layout.component.html',
  	styleUrls: ['./layout.component.css']
})
export class LayoutComponent extends BaseComponent implements OnInit {

	constructor(
		public injector: Injector,
		private router: Router
	) { 
		super(injector);
		router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }
    ngOnInit(){
        $(".preloader-base").remove();
        if (this.router.url == '/'){
            this.router.navigate(["/home"]);
        }
	}
	public currentState;
	navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            console.info("Layout.module.ts","NavigationStart");
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
                    }, 300);
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
}
