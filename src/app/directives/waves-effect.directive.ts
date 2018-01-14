
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
declare var Waves: any;

@Directive({ selector: '[waves-effect]' })

export class WavesEffectDirective implements OnInit {
	constructor(private el: ElementRef) { }

	ngOnInit() {
		this.el.nativeElement.classList.add('waves-effect');
		Waves.init();
		if (this.el.nativeElement.classList.contains('btn-float') || this.el.nativeElement.classList.contains('btn-icon')) {
			Waves.attach(this.el, ['waves-circle']);
		} else if (this.el.nativeElement.classList.contains('btn-light')) {
			Waves.attach(this.el, ['waves-light']);
		} else {
			Waves.attach(this.el);
		}
	}
}