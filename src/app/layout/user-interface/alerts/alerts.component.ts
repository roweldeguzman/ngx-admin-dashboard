import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-alerts',
	templateUrl: './alerts.component.html',
	styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
	
	constructor() { }
	
	ngOnInit() {

	}
	dismissible = true;
	alerts: any = [
		{
			type: 'success',
			msg: `You successfully read this important alert message.`
		},
		{
			type: 'info',
			msg: `This alert needs your attention, but it's not super important.`
		},
		{
			type: 'danger',
			msg: `Better check yourself, you're not looking too good.`
		}
	];

	reset(): void {
		this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
	}
}
