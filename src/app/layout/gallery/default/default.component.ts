import { 
	Component, 
	OnInit,
	ViewChild
} from '@angular/core';

declare let lightGallery;
declare let $;
@Component({
	selector: 'app-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
	constructor() { }
	@ViewChild('lightbox') lightbox;
	ngOnInit() {
		$(this.lightbox.nativeElement).lightGallery({
			enableTouch: true
		})
	}
	public listviewSearchStat = false;
	public photoColumn = "col-md-2"
	public photoColumnSize = 2;
	public photoOptions = [
		{ value: 2, column: 6 },
		{ value: 3, column: 4 },
		{ value: 4, column: 3 },
		{ value: 1, column: 12 },
	]
	public photoGrid(size){
		this.photoColumn = 'col-md-' + size;
		this.photoColumnSize = size;
	}
}
