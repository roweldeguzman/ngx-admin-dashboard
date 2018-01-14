import { Component, OnInit, OnDestroy, Injector } from '@angular/core';

import { BaseComponent } from '../../BaseComponent';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BaseComponent implements OnInit, OnDestroy {

	constructor(public injector: Injector) { 
		super(injector);
	}
	ngOnInit() {
		this.updateTitle("This is Contact Component");
	}
	ngOnDestroy(){		
	}

}
