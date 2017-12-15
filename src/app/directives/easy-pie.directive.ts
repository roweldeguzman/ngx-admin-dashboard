import {
	Directive,
	ElementRef,
	Input,
	OnInit,
	OnChanges,
	SimpleChanges
} from '@angular/core';

declare let $: any;
@Directive({
	selector: '[easypie]'
})
export class EasyPieDirective {
	
	constructor(private el: ElementRef) { }

	@Input() easypieUpdate;
	ngOnChanges(changes: SimpleChanges): void {
		this.doChecking();
	}
	ngOnInit() {
		this.doChecking();
	}

	private doChecking(){
		this.createPie('#eee', '#ccc', '#2196F3', 4, 'butt', 148);
	}
	private createPie(trackColor, scaleColor, barColor, lineWidth, lineCap, size){
		$(this.el.nativeElement).easyPieChart({
			trackColor: trackColor,
			scaleColor: scaleColor,
			barColor: barColor,
			lineWidth: lineWidth,
			lineCap: lineCap,
			size: size
		});
	}
}
