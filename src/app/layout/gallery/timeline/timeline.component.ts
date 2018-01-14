import { Component, OnInit } from '@angular/core';

declare let lightGallery;
declare let $;
@Component({
	selector: 'app-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
	
	constructor() { }

	ngOnInit() {
		window.scrollTo(0, 0);
		$(".lightbox").lightGallery({
			enableTouch: true
		})
	}
	public listviewSearchStat = false;
}
