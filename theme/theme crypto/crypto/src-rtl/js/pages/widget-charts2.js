//[widget charts Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the  widget charts



$( document ).ready(function() {
    "use strict";
	
	if( $('#chart_1').length > 0 ){
		var ctx1 = document.getElementById("chart_1").getContext("2d");
		var data1 = {
			labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر"],
			datasets: [
			{
				label: "اول",
				backgroundColor: "#fbae1c",
				borderColor: "#fbae1c",
				pointBorderColor: "#fbae1c",
				pointHighlightStroke: "#fbae1c",
				data: [0, 35, 55, 75, 65, 80, 40]
			},
			{
				label: "دوم",
				backgroundColor: "#465161",
				borderColor: "#465161",
				pointBorderColor: "#465161",
				pointBackgroundColor: "#465161",
				data: [20, 15, 35, 45, 35, 40, 20],
			}
			
		]
		};
		
		var areaChart = new Chart(ctx1, {
			type:"line",
			data:data1,
			
			options: {
				tooltips: {
					mode:"label"
				},
				elements:{
					point: {
						hitRadius:90
					}
				},
				
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "yekan",
							fontColor:"#878787"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "yekan",
							fontColor:"#878787"
						}
					}]
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"yekan"
				}
				
			}
		});
	}
    
	if( $('#chart_2').length > 0 ){
		var ctx2 = document.getElementById("chart_2").getContext("2d");
		var data2 = {
			labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر"],
			datasets: [
				{
					label: "اولین مجموعه داده من",
					backgroundColor: "#fbae1c",
					borderColor: "#fbae1c",
					data: [0, 35, 55, 75, 65, 80, 40]
				},
				{
					label: "دومین مجموعه داده من",
					backgroundColor: "#465161",
					borderColor: "#465161",
					data: [20, 15, 35, 45, 35, 40, 20]
				}
			]
		};
		
		var hBar = new Chart(ctx2, {
			type:"horizontalBar",
			data:data2,
			
			options: {
				tooltips: {
					mode:"label"
				},
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "yekan",
							fontColor:"#878787"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "yekan",
							fontColor:"#878787"
						}
					}],
					
				},
				elements:{
					point: {
						hitRadius:40
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"yekan"
				}
				
			}
		});
	}

	if( $('#chart_3').length > 0 ){
		var ctx3 = document.getElementById("chart_3").getContext("2d");
		var data3 = {
			labels: ["خوردن", "نوشیدن", "خوابیدن", "طراحی", "کد نویسی", "دوچرخه سواري", "دویدن"],
			datasets: [
				{
					label: "دومین مجموعه داده من",
					backgroundColor: "rgba(70, 81, 97, 0.6)",
					borderColor: "rgba(70, 81, 97, 0.5)",
					pointBackgroundColor: "rgba(70, 81, 97, 0.5)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(70, 81, 97, 0.5)",
					data: [20, 15, 35, 45, 35, 40, 20]
				},
				{
					label: "اولین مجموعه داده من",
					backgroundColor: "rgba(251, 174, 28, 0.6)",
					borderColor: "rgba(251, 174, 28, 0.6)",
					pointBackgroundColor: "rgba(251, 174, 28, 0.6)",
					pointBorderColor: "#fff",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(251, 174, 28, 0.6)",
					data: [0, 35, 55, 75, 65, 80, 40]
				},
				
			]
		};
		var radarChart = new Chart(ctx3, {
			type: "radar",
			data: data3,
			options: {
					scale: {
						ticks: {
							beginAtZero: true,
							fontFamily: "yekan",
							
						},
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						pointLabels:{
							fontFamily: "yekan",
							fontColor:"#878787"
						},
					},
					
					animation: {
						duration:	3000
					},
					responsive: true,
					legend: {
							labels: {
							fontFamily: "yekan",
							fontColor:"#878787"
							}
						},
						elements: {
							arc: {
								borderWidth: 0
							}
						},
						tooltip: {
						backgroundColor:'rgba(33,33,33,1)',
						cornerRadius:0,
						footerFontFamily:"yekan"
					}
			}
		});
	}

	if( $('#chart_4').length > 0 ){
		var ctx4 = document.getElementById("chart_4").getContext("2d");
		var data4 = {
			datasets: [{
				data: [
					10,
					6,
					12,
					20,
					5
				],
				backgroundColor: [
					"#fb9678",
					"#fbae1c",
					"#03a9f3",
					"#00c292",
					"#ab8ce4"
				],
				hoverBackgroundColor: [
					"#fcf0e3",
					"#fcf0e3",
					"#e3f3fc",
					"#e3fcf2",
					"#f0e8ff"
				],
				label: 'مجموعه داده من' // for legend
			}],
			labels: [
				"پنج",
			"چهار",
			"سه",
			"دو",
			"یک"
			]
		};
		var polarChart = new Chart(ctx4, {
			type: "polarArea",
			data: data4,
			options: {
				elements: {
					arc: {
						borderColor: "#fff",
						borderWidth: 0
					}
				},
				scale: {
					ticks: {
						beginAtZero: true,
						fontFamily: "yekan",
						
					},
					gridLines: {
						color: "rgba(135,135,135,0)",
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
					fontFamily: "yekan",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"yekan"
				}
			}
		});
	}

	if( $('#chart_5').length > 0 ){
		var ctx5 = document.getElementById("chart_5").getContext("2d");
		var data5 = {
			datasets: [
				
				{
					label: 'دومین مجموعه داده',
					data: [
						{
							x: 50,
							y: 40,
							r: 10
						},
						{
							x: 45,
							y: 50,
							r: 10
						},
						{
							x: 55,
							y: 40,
							r: 10
						}
					],
					backgroundColor:"#03a9f3",
					hoverBackgroundColor: "#e3f3fc",
				},
				{
					label: 'اولین مجموعه داده',
					data: [
						{
							x: 50,
							y: 70,
							r: 5
						},
						{
							x: 60,
							y: 50,
							r: 30
						},
						{
							x: 20,
							y: 50,
							r: 40
						},
						{
							x: 40,
							y: 30,
							r: 10
						},
						{
							x: 60,
							y: 20,
							r: 10
						}
					],
					backgroundColor:"#fbae1c",
					hoverBackgroundColor: "#fcf0e3",
				},]
		};
		
		var bubbleChart = new Chart(ctx5,{
			type:"bubble",
			data:data5,
			options: {
				elements: {
					points: {
						borderWidth: 1,
						borderColor: 'rgb(33, 33, 33)'
					}
				},
				scales: {
					xAxes: [
					{
						ticks: {
							min: -10,
							max: 100,
							fontFamily: "yekan",
							fontColor:"#878787"
						},
						gridLines: {
							color: "rgba(135,135,135,0)",
						}
					}],
					yAxes: [
					{
						ticks: {
							fontFamily: "yekan",
							fontColor:"#878787"
						},
						gridLines: {
							color: "rgba(135,135,135,0)",
						}
					}]
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
					fontFamily: "yekan",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"yekan"
				}
			}
		});
	}

	if( $('#chart_6').length > 0 ){
		var ctx6 = document.getElementById("chart_6").getContext("2d");
		var data6 = {
			 labels: [
			"پنج",
			"چهار",
			"سه",
			"دو",
			"یک"
		],
		datasets: [
			{
				data: [45, 250, 190, 80, 415],
				backgroundColor: [
					"#fb9678",
					"#fbae1c",
					"#03a9f3",
					"#00c292",
					"#ab8ce4"
				],
				hoverBackgroundColor: [
					"#fcf0e3",
					"#fcf0e3",
					"#e3f3fc",
					"#e3fcf2",
					"#f0e8ff"
				]
			}]
		};
		
		var pieChart  = new Chart(ctx6,{
			type: 'pie',
			data: data6,
			options: {
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
					fontFamily: "yekan",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"yekan"
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				}
			}
		});
	}

	if( $('#chart_7').length > 0 ){
		var ctx7 = document.getElementById("chart_7").getContext("2d");
		var data7 = {
			 labels: [
			"پنج",
			"چهار",
			"سه",
			"دو",
			"یک"
		],
		datasets: [
			{
				data: [86, 184, 90, 150, 250],
				backgroundColor: [
					"#fb9678",
					"#fbae1c",
					"#03a9f3",
					"#00c292",
					"#ab8ce4"
				],
				hoverBackgroundColor: [
					"#fcf0e3",
					"#fcf0e3",
					"#e3f3fc",
					"#e3fcf2",
					"#f0e8ff"
				]
			}]
		};
		
		var doughnutChart = new Chart(ctx7, {
			type: 'doughnut',
			data: data7,
			options: {
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
					fontFamily: "yekan",
					fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"yekan"
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				}
			}
		});
	}
	
	if( $('#chart_8').length > 0 ){
		var ctx2 = document.getElementById("chart_8").getContext("2d");
		var data2 = {
			labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر"],
			datasets: [
				{
					label: "اولین مجموعه داده من",
					backgroundColor: "#398bf7",
					borderColor: "#398bf7",
					data: [11, 25, 58, 15, 85, 45, 95]
				},
				{
					label: "دومین مجموعه داده من",
					backgroundColor: "#fbae1c",
					borderColor: "#fbae1c",
					data: [15, 45, 25, 84, 15, 54, 85]
				},
				{
					label: "سومین مجموعه داده من",
					backgroundColor: "#926dde",
					borderColor: "#926dde",
					data: [18, 8, 85, 63, 12, 29, 41]
				}
			]
		};
		
		var hBar = new Chart(ctx2, {
			type:"bar",
			data:data2,
			
			options: {
				tooltips: {
					mode:"label"
				},
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "yekan",
							fontColor:"#878787"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "yekan",
							fontColor:"#878787"
						}
					}],
					
				},
				elements:{
					point: {
						hitRadius:40
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				maintainAspectRatio:false,
				legend: {
					display: false,
				},
				
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"yekan"
				}
				
			}
		});
	}
	
}); // End of use strict
