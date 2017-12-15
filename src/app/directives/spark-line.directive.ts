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
	selector: '[sparkline]'
})
export class SparkLineDirective implements OnInit, OnChanges {
	constructor(private el: ElementRef) { }

	@Input() sparklineType: string;
	@Input() sparklineValue: string;
	@Input() sparklineWidth;
	@Input() sparkLineHeight;

	ngOnChanges(changes: SimpleChanges): void {
		this.doChecking()
	}
 	ngOnInit() {
		this.doChecking();
	}
	private doChecking(){
		if (this.sparklineType == "bar") {
			this.sparkLineBar(this.sparklineValue.split(","), '45px', 3, '#fff', 2);
		}
		else if (this.sparklineType == "line") {
			this.sparkLineLine(this.sparklineValue.split(","), this.sparklineWidth, this.sparkLineHeight, '#fff', 'rgba(0,0,0,0)', 1.25, 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 3, '#fff', 'rgba(255,255,255,0.4)');
		}
		else if (this.sparklineType == "pie") {
			this.sparkLinePie(this.sparklineValue.split(","), this.sparklineWidth, this.sparkLineHeight, ['#fff', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.2)']);
		}
		else {
			console.error("Error in SparkLineDirective: ", "Invalid sparkline type. available is bar, line or pie");
		}
	}
	private sparkLineBar(values, height, barWidth, barColor, barSpacing){
		$(this.el.nativeElement).sparkline(values, {
			type: 'bar',
			height: height,
			barWidth: barWidth,
			barColor: barColor,
			barSpacing: barSpacing
		});
	}
	private sparkLineLine(values, width, height, lineColor, fillColor, lineWidth, maxSpotColor, minSpotColor, spotColor, spotRadius, hSpotColor, hLineColor) {
		$(this.el.nativeElement).sparkline(values, {
			type: 'line',
			width: width,
			height: height,
			lineColor: lineColor,
			fillColor: fillColor,
			lineWidth: lineWidth,
			maxSpotColor: maxSpotColor,
			minSpotColor: minSpotColor,
			spotColor: spotColor,
			spotRadius: spotRadius,
			highlightSpotColor: hSpotColor,
			highlightLineColor: hLineColor
		});
	}
	private sparkLinePie(values, width, height, sliceColors){
		$(this.el.nativeElement).sparkline(values, {
			type: 'pie',
			width: width,
			height: height,
			sliceColors: sliceColors,
			offset: 0,
			borderWidth: 0
		});
	}
}
