import { Component, OnInit} from '@angular/core';
import {
	Router,
	Event as RouterEvent,
	NavigationEnd,

} from '@angular/router';

@Component({
	template: `<router-outlet></router-outlet>`
})

export class FormsComponent {
	constructor(public router: Router){
		router.events.subscribe((event: RouterEvent) => {
			if (event instanceof NavigationEnd) {
				if (event.url == "/forms"){
					this.router.navigate(["/forms/basic"])
				}
			}
		});
	}
}