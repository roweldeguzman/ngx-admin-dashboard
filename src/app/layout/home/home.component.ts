import { Component, OnInit , Injector} from '@angular/core';

import { BaseComponent } from '../../BaseComponent';

declare let $;
@Component({
	selector: 'app-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
	constructor(public injector: Injector) { 
		super(injector);
	}
	ngOnInit() {
		this.updateTitle("This is a home component");
		this.service.notify("Welcome Rowel de Guzman", "inverse", {
			from: 'top',
			align: 'right'
		}, {
			enter: 'animated bounceIn',
			exit: 'animated bounceOut'
		})
		
		this.drawChart();
	}
	public sparkValueBar1 = [6, 4, 8, 6, 5, 6, 7, 8, 3, 5, 9, 5, 8, 4, 3, 6, 8];
	public sparkValueBar2 = [4, 7, 6, 2, 5, 3, 8, 6, 6, 4, 8, 6, 5, 8, 2, 4, 6];
	public sparkValueLine1 = [9, 4, 6, 5, 6, 4, 5, 7, 9, 3, 6, 5];
	public sparkValueLine2 = [5, 6, 3, 9, 7, 5, 4, 6, 5, 6, 4, 9];
	public bestSelling = [
		{
			"id": 1,
			"img": "note4.jpg",
			"name": "Samsung Galaxy Note 4",
			"range": "$850.00 - $1199.99"
		},{
			"id": 2,
			"img": "mate7.jpg",
			"name": "Huawei Ascend Mate",
			"range": "$649.59 - $749.99"
		},{
			"id": 3,
			"img": "535.jpg",
			"name": "Nokia Lumia 535",
			"range": "$189.99 - $250.00"
		}
	]
	public resentItems = [
		{
			"id": 2569,
			"name": "Samsung Galaxy Mega",
			"price": 521
		},
		{
			"id": 9658,
			"name": "Huawei Ascend P6",
			"price": 440
		},
		{
			"id": 1101,
			"name": "HTC One M8",
			"price": 680
		},
		{
			"id": 2569,
			"name": "Samsung Galaxy Alpha",
			"price": 870
		},
		{
			"id": 6598,
			"name": "LG G3",
			"price": 690
		}
	]
	public randomVal(){
		this.sparkValueBar1 = [4, 7, 6, 2, 5, 3, 8, 6, 6, 4, 8, 6, 5, 8, 2, 4, 6];
	}

	public drawChart(){
		var data = [];
		var totalPoints = 100;
		var updateInterval = 30;

		function getRandomData() {
			if (data.length > 0)
				data = data.slice(1);

			while (data.length < totalPoints) {

				var prev = data.length > 0 ? data[data.length - 1] : 50,
					y = prev + Math.random() * 10 - 5;
				if (y < 0) {
					y = 0;
				} else if (y > 90) {
					y = 90;
				}

				data.push(y);
			}

			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}

			return res;
		}
		/* Chart Options */

		var options = {
			tooltip: true,
			tooltipOpts: {
				content: "%s of %x = %y",
				shifts: {
					x: 20,
					y: 0
				},
				defaultTheme: false,
				cssClass: 'flot-tooltip'
			},
			series: {
				shadowSize: 0,
				lines: {
					show: false,
					lineWidth: 0,
				},
			},
			grid: {
				borderWidth: 0,
				labelMargin: 10,
				hoverable: true,
				clickable: true,
				mouseActiveRadius: 6,

			},
			xaxis: {
				tickDecimals: 0,
				ticks: false
			},

			yaxis: {
				tickDecimals: 0,
				ticks: false
			},

			legend: {
				show: false
			}
		};

		/* Recent Items Table Chart */
		$.plot($("#recent-items-chart"), [
			{
				data: getRandomData(), 
				lines: { 
					show: true, 
					fill: 0.8 
				}, 
				label: 'Items', 
				stack: true, 
				color: '#00BCD4' 
			},
		], options);
	
	}
}
