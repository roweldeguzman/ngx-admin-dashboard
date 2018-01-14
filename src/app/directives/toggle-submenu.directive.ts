import { Directive, HostListener } from '@angular/core';

declare let $: any;
@Directive({
	selector: '[toggle-submenu]'
})
export class ToggleSubmenuDirective {

	constructor() { }

	@HostListener('click', ['$event']) onClick(event){
		let target = event.target.nodeName == "A" ? event.target : $(event.target).parents("a")[0];
		
		$(target).next().slideToggle(200);
		$(target).parent().toggleClass("toggled");
		
		
		// let parent = $(event.target).parents("li");
		// parent.toggleClass('toggled');
		// parent.find('ul:first').slideToggle('fast');
	}

}
