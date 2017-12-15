import { Component, Injector } from '@angular/core';

import { BaseComponent } from './BaseComponent';

@Component({
	selector: 'app-root',
  	template: '<router-outlet></router-outlet>',
  	styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
	constructor(public injector: Injector) { 
		super(injector);
		this.updateTitle("This is App Component, and i called a method in Base component using extends");
	}
}
