//[Dashboard chart Javascript]

//Project:	Crypto Admin - Responsive Admin Template


 		
//-----amchart

	am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_kelly);
	am4core.useTheme(am4themes_animated);
	// Themes end

	// Create chart instance
	var chart = am4core.create("market-chart", am4charts.XYChart);

	chart.colors.step = 2;
	chart.maskBullets = false;

	// Add data
	chart.data = [{
			"date": "2012-01-01",
			"distance": 227,
			"townName": "نیویورک",
			"townName2": "نیویورک",
			"townSize": 12,
			"latitude": 40.71,
			"duration": 408
		}, {
			"date": "2012-01-02",
			"distance": 371,
			"townName": "واشنگتن",
			"townSize": 7,
			"latitude": 38.89,
			"duration": 482
		}, {
			"date": "2012-01-03",
			"distance": 433,
			"townName": "ویلمینگتون",
			"townSize": 3,
			"latitude": 34.22,
			"duration": 562
		}, {
			"date": "2012-01-04",
			"distance": 345,
			"townName": "جکسونویل",
			"townSize": 3.5,
			"latitude": 30.35,
			"duration": 379
		}, {
			"date": "2012-01-05",
			"distance": 480,
			"townName": "میامی",
			"townName2": "میامی",
			"townSize": 5,
			"latitude": 25.83,
			"duration": 501
		}, {
			"date": "2012-01-06",
			"distance": 386,
			"townName": "تالاهاسی",
			"townSize": 3.5,
			"latitude": 30.46,
			"duration": 443
		}, {
			"date": "2012-01-07",
			"distance": 348,
			"townName": "نیواورلان",
			"townSize": 5,
			"latitude": 29.94,
			"duration": 405
		}, {
			"date": "2012-01-08",
			"distance": 238,
			"townName": "هیوستون",
			"townName2": "هیوستون",
			"townSize": 8,
			"latitude": 29.76,
			"duration": 309
		}, {
			"date": "2012-01-09",
			"distance": 218,
			"townName": "دالاس",
			"townSize": 8,
			"latitude": 32.8,
			"duration": 287
		}, {
			"date": "2012-01-10",
			"distance": 349,
			"townName": "اوکلاهما",
			"townSize": 5,
			"latitude": 35.49,
			"duration": 485
		}, {
			"date": "2012-01-11",
			"distance": 603,
			"townName": "کانزاس",
			"townSize": 5,
			"latitude": 39.1,
			"duration": 890
		}, {
			"date": "2012-01-12",
			"distance": 534,
			"townName": "دنور",
			"townName2": "دنور",
			"townSize": 9,
			"latitude": 39.74,
			"duration": 810
		}, {
			"date": "2012-01-13",
			"townName": "سالت لیک",
			"townSize": 6,
			"distance": 425,
			"duration": 670,
			"latitude": 40.75,
			"dashLength": 8,
			"alpha": 0.4
		}, {
			"date": "2012-01-14",
			"latitude": 36.1,
			"duration": 470,
			"townName": "لاس وگاس",
			"townName2": "لاس وگاس"
		}, {
			"date": "2012-01-15"
		}, {
			"date": "2012-01-16"
		}, {
			"date": "2012-01-17"
		}];

	// Create axes
	var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
	dateAxis.renderer.grid.template.location = 0;
	dateAxis.renderer.minGridDistance = 50;
	dateAxis.renderer.grid.template.disabled = true;
	dateAxis.renderer.fullWidthTooltip = true;

	var distanceAxis = chart.yAxes.push(new am4charts.ValueAxis());
	distanceAxis.title.text = "مسافت";
	distanceAxis.renderer.grid.template.disabled = true;

	var durationAxis = chart.yAxes.push(new am4charts.DurationAxis());
	durationAxis.title.text = "مدت زمان";
	durationAxis.baseUnit = "minute";
	durationAxis.renderer.grid.template.disabled = true;
	durationAxis.renderer.opposite = true;

	durationAxis.durationFormatter.durationFormat = "'در 'hh'ساعت' mm'دقیقه'";

	var latitudeAxis = chart.yAxes.push(new am4charts.ValueAxis());
	latitudeAxis.renderer.grid.template.disabled = true;
	latitudeAxis.renderer.labels.template.disabled = true;

	// Create series
	var distanceSeries = chart.series.push(new am4charts.ColumnSeries());
	distanceSeries.dataFields.valueY = "distance";
	distanceSeries.dataFields.dateX = "date";
	distanceSeries.yAxis = distanceAxis;
	distanceSeries.tooltipText = "در {valueY} مایل";
		distanceSeries.name = "مسافت";
	distanceSeries.columns.template.fillOpacity = 0.7;
	distanceSeries.columns.template.propertyFields.strokeDasharray = "dashLength";
	distanceSeries.columns.template.propertyFields.fillOpacity = "alpha";

	var disatnceState = distanceSeries.columns.template.states.create("hover");
	disatnceState.properties.fillOpacity = 0.9;

	var durationSeries = chart.series.push(new am4charts.LineSeries());
	durationSeries.dataFields.valueY = "duration";
	durationSeries.dataFields.dateX = "date";
	durationSeries.yAxis = durationAxis;
	durationSeries.name = "مدت زمان";
	durationSeries.strokeWidth = 2;
	durationSeries.propertyFields.strokeDasharray = "dashLength";
	durationSeries.tooltipText = "{valueY.formatDuration()}";

	var durationBullet = durationSeries.bullets.push(new am4charts.Bullet());
	var durationRectangle = durationBullet.createChild(am4core.Rectangle);
	durationBullet.horizontalCenter = "middle";
	durationBullet.verticalCenter = "middle";
	durationBullet.width = 7;
	durationBullet.height = 7;
	durationRectangle.width = 7;
	durationRectangle.height = 7;

	var durationState = durationBullet.states.create("hover");
	durationState.properties.scale = 1.2;

	var latitudeSeries = chart.series.push(new am4charts.LineSeries());
	latitudeSeries.dataFields.valueY = "latitude";
	latitudeSeries.dataFields.dateX = "date";
	latitudeSeries.yAxis = latitudeAxis;
	latitudeSeries.name = "عرض جغرافیایی";
	latitudeSeries.strokeWidth = 2;
	latitudeSeries.propertyFields.strokeDasharray = "dashLength";
	latitudeSeries.tooltipText = "عرض جغرافیایی ({townName}) : {valueY} ";

	var latitudeBullet = latitudeSeries.bullets.push(new am4charts.CircleBullet());
	latitudeBullet.circle.fill = am4core.color("#fff");
	latitudeBullet.circle.strokeWidth = 2;
	latitudeBullet.circle.propertyFields.radius = "townSize";

	var latitudeState = latitudeBullet.states.create("hover");
	latitudeState.properties.scale = 1.2;

	var latitudeLabel = latitudeSeries.bullets.push(new am4charts.LabelBullet());
	latitudeLabel.label.text = "{townName2}";
	latitudeLabel.label.horizontalCenter = "left";
	latitudeLabel.label.dx = 14;

	// Add legend
	chart.legend = new am4charts.Legend();

	// Add cursor
	chart.cursor = new am4charts.XYCursor();
	chart.cursor.fullWidthLineX = true;
	chart.cursor.xAxis = dateAxis;
	chart.cursor.lineX.strokeOpacity = 0;
	chart.cursor.lineX.fill = am4core.color("#000");
	chart.cursor.lineX.fillOpacity = 0.1;

	}); // end am4core.ready()
	
	
	
	am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_kelly);
	am4core.useTheme(am4themes_animated);
	// Themes end

	// Create chart instance
	var chart = am4core.create("topcity", am4charts.PieChart);

	// Add and configure Series
	var pieSeries = chart.series.push(new am4charts.PieSeries());
	pieSeries.dataFields.value = "litres";
	pieSeries.dataFields.category = "country";

	// Let's cut a hole in our Pie chart the size of 30% the radius
	chart.innerRadius = am4core.percent(30);

	// Put a thick white border around each Slice
	pieSeries.slices.template.stroke = am4core.color("#fff");
	pieSeries.slices.template.strokeWidth = 2;
	pieSeries.slices.template.strokeOpacity = 1;
	pieSeries.slices.template
	  // change the cursor on hover to make it apparent the object can be interacted with
	  .cursorOverStyle = [
		{
		  "property": "cursor",
		  "value": "pointer"
		}
	  ];

	pieSeries.alignLabels = false;
	pieSeries.labels.template.bent = true;
	pieSeries.labels.template.radius = 3;
	pieSeries.labels.template.padding(0,0,0,0);

	pieSeries.ticks.template.disabled = true;

	// Create a base filter effect (as if it's not there) for the hover to return to
	var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
	shadow.opacity = 0;

	// Create hover state
	var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

	// Slightly shift the shadow and make it more prominent on hover
	var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
	hoverShadow.opacity = 0.7;
	hoverShadow.blur = 5;

	// Add a legend
	chart.legend = new am4charts.Legend();
	chart.legend.position = "right";
	chart.legend.valign = "bottom";

	chart.data = [{
	  "country": "الف",
	  "litres": 501.9
	},{
	  "country": "ب",
	  "litres": 165.8
	}, {
	  "country": "پ",
	  "litres": 139.9
	}, {
	  "country": "ت",
	  "litres": 128.3
	}, {
	  "country": "ج",
	  "litres": 99
	}, {
	  "country": "ح",
	  "litres": 60
	}];

	}); // end am4core.ready()



		var optionsCandlestick = {
            chart: {
                id: 'candles',
                height: 250,
                type: 'candlestick',
                toolbar: {
                    autoSelected: 'pan',
                    show: false
                },
                zoom: {
                    enabled: false
                },
            },
			grid: {
			  row: {
				colors: ['#130b3e', '#130b3e', '#130b3e']
			  },
			  column: {
				colors: ['#130b3e', '#130b3e', '#130b3e']
			  }
			},
            plotOptions: {
                candlestick: {
                    colors: {
                    upward: '#cc208e',
                    downward: '#6713d2'
                    }
                }
            },
            series: [{
                data: seriesData
            }],
            xaxis: {
                type: 'datetime'
            }
        }

        var chartCandlestick = new ApexCharts(
            document.querySelector("#chart-candlestick"),
            optionsCandlestick
        );

        chartCandlestick.render();

        var options = {
            chart: {
                height: 160,
                type: 'bar',
                brush: {
                    enabled: true,
                    target: 'candles'
                },
                selection: {
                    enabled: true,
                    xaxis: {
                        min: new Date('20 Jan 2017').getTime(),
                        max: new Date('10 Dec 2017').getTime()
                    },
                    fill: {
                        color: '#ccc',
                        opacity: 0.4
                    },
                    stroke: {
                        color: '#6713d2',
                    }
                },
            },
			
			grid: {
			  row: {
				colors: ['#130b3e', '#130b3e', '#130b3e']
			  },
			  column: {
				colors: ['#130b3e', '#130b3e', '#130b3e']
			  }
			},
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    columnWidth: '80%',
                    colors: {
                        ranges: [
                            {
                                from: -1000,
                                to: 0,
                                color: '#6713d2'
                            }, {
                                from: 1,
                                to: 10000,
                                color: '#cc208e'
                            }
                        ],
                       
                    },
                }        
            },
            stroke: {
                width: 0
            },
            series: [{
                name: 'volume',
                data: seriesDataLinear
            }],
            xaxis: {
                type: 'datetime',
                axisBorder: {
                    offsetX: 13
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#chart-bar"),
            options
        );

        chart.render();










