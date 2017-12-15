import { Component, OnInit } from '@angular/core';


declare let $;
@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
	constructor() { }
	ngOnInit() {
		this.donutChart();
		this.dynamicChart();
		this.barChart();


		$(".flot-chart").bind("plothover", function (event, pos, item) {
			if (item) {
				var x = item.datapoint[0].toFixed(2),
					y = item.datapoint[1].toFixed(2);
				$(".flot-tooltip").html(item.series.label + " of " + x + " = " + y).css({ top: item.pageY + 5, left: item.pageX + 5 }).show();
			}
			else {
				$(".flot-tooltip").hide();
			}
		});

		$("<div class='flot-tooltip' class='chart-tooltip'></div>").appendTo("body");
	}
	/* SPARKLINE */
	public sparkValueBar1 = [6, 4, 8, 6, 5, 6, 7, 8, 3, 5, 9, 5, 8, 4, 3, 6, 8];
	public sparkValueBar2 = [4, 7, 6, 2, 5, 3, 8, 6, 6, 4, 8, 6, 5, 8, 2, 4, 6];
	public sparkValueLine1 = [9, 4, 6, 5, 6, 4, 5, 7, 9, 3, 6, 5];
	public sparkValueLine2 = [5, 6, 3, 9, 7, 5, 4, 6, 5, 6, 4, 9];
	public sparkPie1 = [25, 30, 30, 15];
	public sparkPie2 =	[20, 35, 30, 5];

	public updateSparkLine(){
		this.sparkValueBar1 = [
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random())
		];
		this.sparkValueBar2 = [
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random())
		];
		this.sparkValueLine1 = [
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random())
		];
		this.sparkValueLine2 = [
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random())
		];
		this.sparkPie1 = [
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random()), 
			Math.floor(100 * Math.random())
		];
		this.sparkPie2 = [
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random()),
			Math.floor(100 * Math.random())
		];
	}
	/* Easy Pie*/

	public updatePie(){
		$(".easy-pie").each(function(e, i){
			var ran = Math.floor(100 * Math.random());
			$(this).data('easyPieChart').update(ran);
			$(this).find(".percent").html(ran)
		})
		
	}

	/* PLOT CHART */
	public barPloter;
	public donutPloter;
	public piePloter;
	public donutChart(){
		var pieData = [
			{ data: 1, color: '#F44336', label: 'Toyota' },
			{ data: 2, color: '#03A9F4', label: 'Nissan' },
			{ data: 3, color: '#8BC34A', label: 'Hyundai' },
			{ data: 4, color: '#FFEB3B', label: 'Scion' },
			{ data: 4, color: '#009688', label: 'Daihatsu' },
		];
		this.piePloter	=	$.plot('#pie-chart', this.donutPieChartData(), {
			series: {
				pie: {
					show: true,
					stroke: {
						width: 2,
					},
				},
			},
			legend: {
				container: '.flc-pie',
				backgroundOpacity: 0.5,
				noColumns: 0,
				backgroundColor: "white",
				lineWidth: 0
			},
			grid: {
				hoverable: true,
				clickable: true
			},
			tooltip: true,
			tooltipOpts: {
				content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
				shifts: {
					x: 20,
					y: 0
				},
				defaultTheme: false,
				cssClass: 'flot-tooltip'
			}

		});

		this.donutPloter=	$.plot('#donut-chart', this.donutPieChartData(), {
			series: {
				pie: {
					innerRadius: 0.5,
					show: true,
					stroke: {
						width: 2,
					},
				},
			},
			legend: {
				container: '.flc-donut',
				backgroundOpacity: 0.5,
				noColumns: 0,
				backgroundColor: "white",
				lineWidth: 0
			},
			grid: {
				hoverable: true,
				clickable: true
			},
			tooltip: true,
			tooltipOpts: {
				content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
				shifts: {
					x: 20,
					y: 0
				},
				defaultTheme: false,
				cssClass: 'flot-tooltip'
			}

		});
	}
	public donutPieChartData() {
		var pieData = [
			{ data: Math.floor(100 * Math.random()), color: '#F44336', label: 'Toyota' },
			{ data: Math.floor(100 * Math.random()), color: '#03A9F4', label: 'Nissan' },
			{ data: Math.floor(100 * Math.random()), color: '#8BC34A', label: 'Hyundai' },
			{ data: Math.floor(100 * Math.random()), color: '#FFEB3B', label: 'Scion' },
			{ data: Math.floor(100 * Math.random()), color: '#009688', label: 'Daihatsu' },
		];

		return pieData;
	}
	public refreshPieChart(){
		this.piePloter.setData(this.donutPieChartData());
		this.piePloter.draw();

	}
	public refreshDonutChart(){
		this.donutPloter.setData(this.donutPieChartData());
		this.donutPloter.draw();
	}
	public barChart(){
		/* Let's create the chart */
		this.barPloter = $.plot($("#bar-chart"), this.barPloterData(), {
			grid: {
				borderWidth: 1,
				borderColor: '#eee',
				show: true,
				hoverable: true,
				clickable: true
			},
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
			yaxis: {
				tickColor: '#eee',
				tickDecimals: 0,
				font: {
					lineHeight: 13,
					style: "normal",
					color: "#9f9f9f",
				},
				shadowSize: 0
			},

			xaxis: {
				tickColor: '#fff',
				tickDecimals: 0,
				font: {
					lineHeight: 13,
					style: "normal",
					color: "#9f9f9f"
				},
				shadowSize: 0,
			},

			legend: {
				container: '.flc-bar',
				backgroundOpacity: 0.5,
				noColumns: 0,
				backgroundColor: "white",
				lineWidth: 0
			}
		});
	}
	public dynamicChart(){
		var data = [],
			totalPoints = 300,
			j = 0;
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
				res.push([j++, data[i]])
			}

			return res;
		}
		var updateInterval = 30;
		var plot = $.plot("#dynamic-chart", [getRandomData()], {
			series: {
				label: "Server Process Data",
				lines: {
					show: true,
					lineWidth: 0.2,
					fill: 0.6
				},

				color: '#00BCD4',
				shadowSize: 0
			},
			yaxis: {
				min: 0,
				max: 100,
				tickColor: '#eee',
				font: {
					lineHeight: 13,
					style: "normal",
					color: "#9f9f9f",
				},
				shadowSize: 0,
			},
			xaxis: {
				show: true,
				tickColor: '#eee',				
				font: {
					lineHeight: 13,
					style: "normal",
					color: "#9f9f9f",
				},
				shadowSize: 0,
			}, 
			grid: {
				borderWidth: 1,
				borderColor: '#eee',
				labelMargin: 10,
				hoverable: true,
				clickable: true,
				mouseActiveRadius: 6,
			},
			legend: {
				container: '.flc-dynamic',
				backgroundOpacity: 0.5,
				noColumns: 0,
				backgroundColor: "white",
				lineWidth: 0
			}
		});

		function update() {
			plot.setData([getRandomData()]);
			plot.setupGrid();
			plot.draw();
			setTimeout(update, updateInterval);
		}
		update();
	}
	public barPloterData(){
		var data1 = [
			[1, Math.floor(100 * Math.random())],
			[2, Math.floor(100 * Math.random())],
			[3, Math.floor(100 * Math.random())],
			[4, Math.floor(100 * Math.random())],
			[5, Math.floor(100 * Math.random())],
			[6, Math.floor(100 * Math.random())],
			[7, Math.floor(100 * Math.random())]
		];
		var data2 = [
			[1, Math.floor(100 * Math.random())], 
			[2, Math.floor(100 * Math.random())], 
			[3, Math.floor(100 * Math.random())], 
			[4, Math.floor(100 * Math.random())], 
			[5, Math.floor(100 * Math.random())], 
			[6, Math.floor(100 * Math.random())], 
			[7, Math.floor(100 * Math.random())]
		];
		var data3 = [
			[1, Math.floor(100 * Math.random())], 
			[2, Math.floor(100 * Math.random())], 
			[3, Math.floor(100 * Math.random())], 
			[4, Math.floor(100 * Math.random())], 
			[5, Math.floor(100 * Math.random())], 
			[6, Math.floor(100 * Math.random())], 
			[7, Math.floor(100 * Math.random())]
		];
		var barData = new Array();
		barData.push({
			data: data1,
			label: 'Tokyo',
			bars: {
				show: true,
				barWidth: 0.08,
				order: 1,
				lineWidth: 0,
				fillColor: '#8BC34A'
			}
		});

		barData.push({
			data: data2,
			label: 'Seoul',
			bars: {
				show: true,
				barWidth: 0.08,
				order: 2,
				lineWidth: 0,
				fillColor: '#00BCD4'
			}
		});

		barData.push({
			data: data3,
			label: 'Beijing',
			bars: {
				show: true,
				barWidth: 0.08,
				order: 3,
				lineWidth: 0,
				fillColor: '#FF9800'
			}
		});

		return barData;
	}
	public refreshBarChart(){
		this.barPloter.setData(this.barPloterData());
		this.barPloter.draw();
	}
}
