import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[stop-propagate]'
})

export class StopPropagateDirective {
	@HostBinding('class.add-propagate')
	@HostListener('click', ['$event']) onClick(event: MouseEvent) {

		event.stopPropagation();

	}

}