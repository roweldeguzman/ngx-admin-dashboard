import { Directive,HostListener , ElementRef} from '@angular/core';

declare let $:any

@Directive({ selector: '[rg-line]' })

export class RgLineDirective {
	constructor(private el: ElementRef) { }
	@HostListener('focus', ['$event']) onFocus(event:Event){
		let classes  = this.el.nativeElement.parentElement.classList;

		if(classes.contains('rg-line')){ classes.add('rg-toggled'); }
		if(this.el.nativeElement.tagName == "SELECT"){
			console.log(classes);
			if(classes.contains('rg-line') || classes.contains("select")){ classes.add('select-open'); }
		}
	}
	@HostListener('blur', ['$event']) onBlur(event:Event){
		let classes    =    this.el.nativeElement.parentElement.classList,
			closest		=	$(this.el.nativeElement).closest('.form-group');


		if(classes.contains('rg-toggled')){
			if(closest !== null && closest.hasClass('rg-float') && this.el.nativeElement.value.trim().length > 0){}
			else{ classes.remove('rg-toggled'); }

			if(this.el.nativeElement.tagName == "SELECT"){
				if(classes.contains('select-open')){ classes.remove('select-open'); }
			}
		}
	}

}