import { 
	Component, 
	OnInit, 
	Injector, 
	SimpleChanges,
	Input,
	ViewChild
} from '@angular/core';
import { BaseComponent } from '../BaseComponent';

declare let $: any;
declare let window: any;
@Component({
	selector: 'app-sidebar',
  	templateUrl: './sidebar.component.html'
})
export class SidebarComponent extends BaseComponent implements OnInit {
	
	constructor(public injector: Injector) { super(injector) }

	public scrollbarDisableOnMobile = false;	
	@Input() currentState;
	@ViewChild('sidebarContainer') sidebarContainer;
	public routerState;
	public currentSkin;
	ngOnInit() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			console.log(window.innerWidth <= 1025 && window.innerWidth >= 768);
			this.scrollbarDisableOnMobile = true;
		} else if (window.innerWidth <= 767) {
			this.scrollbarDisableOnMobile = true;
		}
		window.onresize	=	() => {
			if (window.innerWidth <= 767){
				this.scrollbarDisableOnMobile = true;
			} else {
				this.scrollbarDisableOnMobile = false;
			}
		}

		setTimeout(function(){
			/**
			 * this code will hide and show the text on sidebar when the window with is small and not in mobile mode.
			 * 
			*/
			if (window.innerWidth <= 1024 && window.innerWidth >= 768){
				$(".sub-menu.toggled").each(function (i, e) {
					$(e).find('ul').find("a.sub").css("visibility", "hidden");
					$(e).toggleClass("toggled");
					$(e).addClass("toggled-hidden");
					$(e).find('ul').slideToggle('fast');
				});
			}
		}, 100);
		
	}
	ngOnChanges(changes: SimpleChanges) {
		/**
		 * this code will deternime if the state from parent module has ben change, 
		 * this means that the user browse from to or on new
		 * 
		*/
		if (changes.currentState.currentValue !== undefined){
			this.routerState	=	changes.currentState.currentValue;
		}
	}
	public expandNav(){
		$("aside, footer, .overlay").toggleClass("active");

		if (!$("aside").hasClass("active")){
			this.collapseSpandedNav(true);
		} else {
			this.collapseSpandedNav(false);
		}
		$(".bottom-toggler").toggleClass("active");
		$("main").toggleClass("aside-active");
	}
	public contains(state){
		return this.service.in_array(state, this.routerState);
	}
	public dropHeader() {
		$('.aside-dropdown').slideToggle('fast');
		$('.header-dropdown-icon > i').toggleClass('rotate');
		if ($(".header-dropdown-icon > i").hasClass("rotate")) {
			$('#for-scroll').scrollTop(0);
		}		
	}
}
