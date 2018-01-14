import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

declare let $: any;
@Directive({ selector: '[inputmask]' })

export class InputMaskDirective implements OnInit, OnChanges {
	constructor(private el: ElementRef) { }

	@Input('inputmask') maskTxt: string;
	@Input() maskHolder: string;

	ngOnInit() {
		if (typeof this.maskHolder !== 'undefined' && this.maskHolder == 'datetime') {
			$(this.el.nativeElement).inputmask("datetime", {
				mask: "1-2-y h:m:s",
				alias: "dd-mm-yyyy",
				placeholder: "dd-mm-yyyy hh:mm:ss",
				separator: '-',
				showMaskOnHover: false
			});
		}
		else {
			$(this.el.nativeElement).inputmask(this.maskTxt, {
				placeholder: typeof this.maskHolder !== 'undefined' ? this.maskHolder : this.maskTxt,
				showMaskOnHover: false,
			});
		}
	}
	ngOnChanges(changes: SimpleChanges) {
		/*console.log(changes);*/
	}
}