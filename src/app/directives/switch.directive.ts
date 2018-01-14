
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

declare let $: any;
@Directive({ selector: '[switcher]' })

export class SwitchDirective implements OnInit {
	constructor(private el: ElementRef) { }

  	@Input('switcher') switcher: string;
  	@Input() switchColor: string;
  	@Input() switchActive: string;
  	ngOnInit() {
		this.el.nativeElement.classList.add(this.switcher);
		var css = ".toggle-switch." + this.switcher + " input:checked:not(:disabled) + .ts-helper{ background: " + this.switchColor + ";}";
		css += ".toggle-switch." + this.switcher + " input:checked:not(:disabled) + .ts-helper::before{background: " + this.switchActive + ";}";

		var style = document.createElement("style");
		style.type = "text/css",
	  	style.appendChild(document.createTextNode(css));
		document.getElementsByTagName("head")[0].appendChild(style);
  	}
}