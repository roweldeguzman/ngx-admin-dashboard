import { Component, OnInit, Injector } from '@angular/core';

import { BaseComponent } from '../../BaseComponent';

@Component({
	selector: 'app-about',
  	templateUrl: './about.component.html',
  	styleUrls: ['./about.component.css']
})

export class AboutComponent extends BaseComponent implements OnInit {

	constructor(public injector: Injector) { super(injector) }

  	ngOnInit() {
		this.updateTitle("This is a About Component")
	}

}
