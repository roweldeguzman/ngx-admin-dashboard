import { Directive, HostListener } from '@angular/core';

declare let $: any;
@Directive({
  selector: '[toggle-submenu]'
})
export class ToggleSubmenuDirective {

	constructor() { }

	@HostListener('click', ['$event']) onClick(event){
		let parent = $(event.target).parents("li");
		parent.toggleClass('toggled');
		parent.find('ul:first').slideToggle('fast');
	}

}
