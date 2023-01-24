//[widget morris charts Javascript]

//Project:	Crypto Admin - Responsive Admin Template
//Primary use:   Used only for the morris charts


$(function () {
    "use strict";

    // AREA CHART
    var area = new Morris.Area({ 
      element: 'revenue-chart',
      resize: true,
      data: [
        { y: '1395', a: 100, b: 90 },
		{ y: '1396', a: 75,  b: 65 },
		{ y: '1397', a: 50,  b: 40 },
		{ y: '1398', a: 75,  b: 65 },
		{ y: '1399', a: 50,  b: 40 },
		{ y: '1400', a: 75,  b: 65 },
		{ y: '1401', a: 100, b: 90 }
      ],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['امتیاز انفرادی', 'امتیاز تیم'],
		fillOpacity: 1,
		lineWidth:3,
		lineColors: ['#03a9f3', '#f96197'],
		hideHover: 'auto'
    });

    // LINE CHART
    var line = new Morris.Line({
      element: 'line-chart',
      resize: true,
      data: [
        {y: '1391', item1: 15489},
        {y: '1392', item1: 56589},
        {y: '1393', item1: 35458},
        {y: '1394', item1: 85698},
        {y: '1395', item1: 56896},
        {y: '1396', item1: 15489},
        {y: '1397', item1: 75896},
        {y: '1398', item1: 55263},
        {y: '1399', item1: 36325},
        {y: '1400', item1: 12586}
      ],
		xkey: 'y',
		ykeys: ['item1'],
		labels: ['تجزیه و تحلیل'],
		lineWidth:3,
		pointFillColors: ['rgba(30,136,229,1)'],
		lineColors: ['rgba(30,136,229,1)'],
		hideHover: 'auto',
    });

    //DONUT CHART
    var donut = new Morris.Donut({
      element: 'sales-chart',
      resize: true,
      colors: ["#fbae1c", "#00c292", "#926dde"],
      data: [
        {label: "فروش آنلاین", value: 12},
        {label: "فروش حضوری", value: 30},
        {label: "فروش تلفنی", value: 20}
      ],
      hideHover: 'auto'
    });
    //BAR CHART
    var bar = new Morris.Bar({
      element: 'bar-chart',
      resize: true,
      data: [
        {y: 'شنبه', a: 55, b: 35, c: 33},
        {y: 'یک شنبه', a: 43, b: 23, c: 73},
        {y: 'دوشنبه', a: 34, b: 94, c: 44},
        {y: 'سه شنبه', a: 75, b: 55, c: 35},
        {y: 'چهارشنبه', a: 57, b: 47, c: 97},
        {y: 'پنج شنبه', a: 10, b: 60, c: 30},
		{y: 'جمعه', a: 86, b: 96, c: 46}
      ],
		barColors: ['#fbae1c', '#00c292', '#926dde'],
		barSizeRatio: 0.5,
		barGap:5,
		xkey: 'y',
		ykeys: ['a', 'b', 'c'],
		labels: ['صبح', 'عصر', 'شب'],
		hideHover: 'auto'
    });
  });