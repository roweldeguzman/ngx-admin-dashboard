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
		let $this = this;
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
			if (window.innerWidth <= 1024 && window.innerWidth >= 768){
				$(".sub-menu.toggled").each(function (i, e) {
					$(e).find('ul:first').find("a.sub").css("visibility", "hidden");
					$(e).toggleClass("toggled");
					$(e).addClass("toggled-hidden");
					$(e).find('ul:first').slideToggle('fast');
				});
			}
		}, 100);

		/*$("#sidebarContainer").on("mouseenter", function (event) {
			console.log(window.innerWidth <= 1025 && window.innerWidth >= 768);
			
			if (window.innerWidth <= 1025 && window.innerWidth >= 768) {
				if (!$("#sidebarContainer").hasClass("hovered") && !$("aside").hasClass("active")) {
					$("#sidebarContainer").addClass("hovered")
					$this.expandNav();
				}
			}
		});
		$("#sidebarContainer").on("mouseleave", function(event) {
			if (window.innerWidth <= 1025 && window.innerWidth >= 768) {
				if ($("#sidebarContainer").hasClass("hovered")) {
					$("#sidebarContainer").removeClass("hovered")
					$this.expandNav();
				}
			}
		});*/
	}
	ngOnChanges(changes: SimpleChanges) {
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
