import { Component, OnInit, OnDestroy, Injector, ViewChild } from '@angular/core';

import { BaseComponent } from '../../../BaseComponent';

@Component({
	selector: 'app-form-component',
  	templateUrl: './form-component.component.html',
  	styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent extends BaseComponent implements OnInit, OnDestroy {

	constructor(public injector: Injector) { super(injector) }

  	ngOnInit() {
		window.scrollTo(0, 0);
	}
	
	public SELECTIZE_CONF	=	Object.assign({}, this.SELECTIZE_DEFAULT_CONFIG, {
		valueField: 'id',
		labelField: 'name',
		searchField: 'name'	
	})

	public sampleDate: Date;
	public greenDate: Date;
	public blueDate: Date;
	public redDate: Date;
	public dropUpDate: Date;

	public minDate: Date = new Date();

	public status: { isopen: boolean } = { isopen: false };

	public green: { isopen: boolean } = { isopen: false };
	public blue: { isopen: boolean } = { isopen: false };
	public red: { isopen: boolean } = { isopen: false };
	public dropUp: { isopen: boolean } = { isopen: false };
	 
	public onSelectionDone(event, which) {
		if (which == 'green'){
			this.green.isopen = !this.green.isopen;
		} else if (which == 'blue'){
			this.blue.isopen = !this.blue.isopen;
		} else if (which == 'red'){
			this.red.isopen = !this.red.isopen;
		} else if (which == 'dropUp'){
			this.dropUp.isopen = !this.dropUp.isopen;
		}
		
	}
	ngOnDestroy() {
		//Called once, before the instance is destroyed.
		//Add 'implements OnDestroy' to the class.
		
	}
}
