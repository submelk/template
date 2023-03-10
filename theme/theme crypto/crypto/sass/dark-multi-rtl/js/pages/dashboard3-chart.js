//[Dashboard chart Javascript]

//Project:	Crypto Admin - Responsive Admin Template


 		
//-----amchart
//----------------chartdiv21

var chartData = [];
generateChartData();

function generateChartData() {
  var firstDate = new Date( 1390, 0, 1 );
  firstDate.setDate( firstDate.getDate() - 500 );
  firstDate.setHours( 0, 0, 0, 0 );

  for ( var i = 0; i < 500; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setDate( newDate.getDate() + i );

    var a = Math.round( Math.random() * ( 40 + i ) ) + 100 + i;
    var b = Math.round( Math.random() * 100000000 );

    chartData.push( {
      "date": newDate,
      "value": a,
      "volume": b
    } );
  }
}

var chart = AmCharts.makeChart( "chartdiv21", {
  "language" : "fa",
  "type": "stock",
  "fontFamily":"yekan",
  "theme": "black",
  "dataSets": [ {
    "color": "#fbae1c",
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    }, {
      "fromField": "volume",
      "toField": "volume"
    } ],
    "dataProvider": chartData,
    "categoryField": "date",
    // EVENTS
    "stockEvents": [ {
      "date": new Date( 1388, 8, 19 ),
      "type": "sign",
      "backgroundColor": "#fc00ff",
      "graph": "g1",
      "text": "س",
      "description": "این توصیف یک رویداد است"
    }, {
      "date": new Date( 1388, 10, 19 ),
      "type": "flag",
      "backgroundColor": "#FFFFFF",
      "backgroundAlpha": 0.5,
      "graph": "g1",
      "text": "ف",
      "description": "همچنین می توان متن طولانی تری را نیز اضافه کرد"
    }, {
      "date": new Date( 1388, 11, 10 ),
      "showOnAxis": true,
      "backgroundColor": "#85CDE6",
      "type": "pin",
      "text": "ک",
      "graph": "g1",
      "description": "این توصیف یک رویداد است"
    }, {
      "date": new Date( 1388, 11, 26 ),
      "showOnAxis": true,
      "backgroundColor": "#85CDE6",
      "type": "pin",
      "text": "ز",
      "graph": "g1",
      "description": "این توصیف یک رویداد است"
    }, {
      "date": new Date( 1389, 0, 3 ),
      "type": "sign",
      "backgroundColor": "#85CDE6",
      "graph": "g1",
      "text": "ی",
      "description": "این توصیف یک رویداد است"
    }, {
      "date": new Date( 1389, 1, 6 ),
      "type": "sign",
      "graph": "g1",
      "text": "د",
      "description": "این توصیف یک رویداد است"
    }, {
      "date": new Date( 1389, 3, 5 ),
      "type": "sign",
      "graph": "g1",
      "text": "ل",
      "description": "این توصیف یک رویداد است"
    }, {
      "date": new Date( 1389, 3, 5 ),
      "type": "sign",
      "graph": "g1",
      "text": "ر",
      "description": "این توصیف یک رویداد است"
    }, {
      "date": new Date( 1389, 5, 15 ),
      "type": "arrowUp",
      "backgroundColor": "#00CC00",
      "graph": "g1",
      "description": "این توصیف یک رویداد است"
    }, {
      "date": new Date( 1389, 6, 25 ),
      "type": "arrowDown",
      "backgroundColor": "#CC0000",
      "graph": "g1",
      "description": "این توصیف یک رویداد است"
    }, {
      "date": new Date( 1389, 8, 1 ),
      "type": "text",
      "graph": "g1",
      "text": "متن طولانی تر نیز می تواند نمایش داده شود",
      "description": "این توصیف یک رویداد است"
    } ]
  } ],


  "panels": [ {
    "title": "مقدار",
    "fontFamily":"yekan",
    "stockGraphs": [ {
      "id": "g1",
      "valueField": "value"
    } ],
     "stockLegend": {
      "valueTextRegular": " ",
      "markerType": "none"
    },
     "categoryAxis": {
      parseDates: true,
      labelFunction: function(dateText, dateObj, categoryAxis, period) {
        var labelText;
        var pDate = persianDate(dateObj);
        switch (period) {
          case "YYYY":
            labelText = pDate.format("YYYY");
            break;
          case "MM":
            labelText = pDate.format("MMM YYYY");
            break;
          default:
            labelText = pDate.format("MMM DD");
            break;
        }
  
        return labelText;
      }
    },
  } ],

  "chartScrollbarSettings": {
    "graph": "g1"
  },

  "chartCursorSettings": {
    "valueBalloonsEnabled": true,
    "graphBulletSize": 1,
    "valueLineBalloonEnabled": true,
    "valueLineEnabled": true,
    "valueLineAlpha": 0.5,
    categoryBalloonFunction: function(dateObj) {
      return persianDate(dateObj).format("MMM DD, YYYY");
    }
  },

  "periodSelector": {
    "periods": [ {
      "period": "DD",
      "count": 10,
      "label": "10 روز"
    }, {
      "period": "MM",
      "count": 1,
      "label": "1 ماه"
    }, {
      "period": "YYYY",
      "count": 1,
      "label": "1 سال"
    }, {
      "period": "YTD",
      "label": "از ابتدای سال تا کنون"
    }, {
      "period": "MAX",
     "label": "حداکثر"
    } ]
  },


  "panelsSettings": {
  "usePrefixes": false,
  "fontFamily":"yekan",
},
  "export": {
    "enabled": true
  }
} );


//-----amchart4
var chart = AmCharts.makeChart("chartdiv4", {
    "language" : "fa",
    "type": "serial",
    "theme": "black",
    "fontFamily":"yekan",
    "autoMarginOffset":20,
    "marginRight":20,
    "dataProvider": [{
        "date": "2009-10-01",
        "value": 3,
        "fromValue": 2,
        "toValue": 5
    }, {
        "date": "2009-10-02",
        "value": 5,
        "fromValue": 4,
        "toValue": 6
    }, {
        "date": "2009-10-03",
        "value": 15,
        "fromValue": 12,
        "toValue": 18
    }, {
        "date": "2009-10-04",
        "value": 13,
        "fromValue": 10.4,
        "toValue": 15.6
    }, {
        "date": "2009-10-05",
        "value": 17,
        "fromValue": 13.6,
        "toValue": 20.4
    }, {
        "date": "2009-10-06",
        "value": 15,
        "fromValue": 12,
        "toValue": 18
    }, {
        "date": "2009-10-09",
        "value": 19,
        "fromValue": 15.2,
        "toValue": 22.8
    }, {
        "date": "2009-10-10",
        "value": 21,
        "fromValue": 16.8,
        "toValue": 25.2
    }, {
        "date": "2009-10-11",
        "value": 20,
        "fromValue": 16,
        "toValue": 24
    }, {
        "date": "2009-10-12",
        "value": 20,
        "fromValue": 16,
        "toValue": 24
    }, {
        "date": "2009-10-13",
        "value": 19,
        "fromValue": 15.2,
        "toValue": 22.8
    }, {
        "date": "2009-10-16",
        "value": 25,
        "fromValue": 20,
        "toValue": 30
    }, {
        "date": "2009-10-17",
        "value": 24,
        "fromValue": 19.2,
        "toValue": 28.8
    }, {
        "date": "2009-10-18",
        "value": 26,
        "fromValue": 20.8,
        "toValue": 31.2
    }, {
        "date": "2009-10-19",
        "value": 27,
        "fromValue": 21.6,
        "toValue": 32.4
    }, {
        "date": "2009-10-20",
        "value": 25,
        "fromValue": 20,
        "toValue": 30
    }, {
        "date": "2009-10-23",
        "value": 29,
        "fromValue": 23.2,
        "toValue": 34.8
    }, {
        "date": "2009-10-24",
        "value": 28,
        "fromValue": 22.4,
        "toValue": 33.6
    }, {
        "date": "2009-10-25",
        "value": 30,
        "fromValue": 24,
        "toValue": 36
    }, {
        "date": "2009-10-26",
        "value": 72,
        "fromValue": 57.6,
        "toValue": 86.4
    }, {
        "date": "2009-10-27",
        "value": 43,
        "fromValue": 34.4,
        "toValue": 51.6
    }, {
        "date": "2009-10-30",
        "value": 31,
        "fromValue": 24.8,
        "toValue": 37.2
    }, {
        "date": "2009-11-01",
        "value": 30,
        "fromValue": 24,
        "toValue": 36
    }, {
        "date": "2009-11-02",
        "value": 29,
        "fromValue": 23.2,
        "toValue": 34.8
    }, {
        "date": "2009-11-03",
        "value": 27,
        "fromValue": 21.6,
        "toValue": 32.4
    }, {
        "date": "2009-11-04",
        "value": 26,
        "fromValue": 20.8,
        "toValue": 31.2
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left"
    }],
    "graphs": [{
        "id": "fromGraph",
        "lineAlpha": 0,
        "showBalloon": false,
        "valueField": "fromValue",
        "fillAlphas": 0
    }, {
        "fillAlphas": 0.2,
        "fillToGraph": "fromGraph",
        "lineAlpha": 0,
        "showBalloon": false,
        "valueField": "toValue"
    }, {
        "valueField": "value",
        "balloonText":"<div style='margin:10px; text-align:right'><span style='font-size:11px'>محدوده مجاز : [[fromValue]] - [[toValue]]</span><br><span style='font-size:18px'>مقدار :[[value]]</span></div>",
        "fillAlphas": 0
    }],
    "chartCursor": {
        "fullWidth": true,
        "cursorAlpha": 0.05,
        "valueLineEnabled":true,
        "valueLineAlpha":0.5,
        "valueLineBalloonEnabled":true,
        categoryBalloonFunction: function(dateObj) {
          return persianDate(dateObj).format("MMM DD, YYYY");
        }
    },
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "date",
    "categoryAxis": {
     "position":"top",
        "parseDates": true,
        "axisAlpha": 0,
        "minHorizontalGap": 25,
        "gridAlpha": 0,
        "tickLength": 0,
        labelFunction: function(dateText, dateObj, categoryAxis, period) {
          var labelText;
          var pDate = persianDate(dateObj);
          switch (period) {
            case "YYYY":
              labelText = pDate.format("YYYY");
              break;
            case "MM":
              labelText = pDate.format("MMM YYYY");
              break;
            default:
              labelText = pDate.format("MMM DD");
              break;
          }
    
          return labelText;
        },
        "dateFormats": [{
            "period": 'fff',
            "format": 'JJ:NN:SS'
        }, {
            "period": 'ss',
            "format": 'JJ:NN:SS'
        }, {
            "period": 'mm',
            "format": 'JJ:NN'
        }, {
            "period": 'hh',
            "format": 'JJ:NN'
        }, {
            "period": 'DD',
            "format": 'DD'
        }, {
            "period": 'WW',
            "format": 'DD'
        }, {
            "period": 'MM',
            "format": 'MMM'
        }, {
            "period": 'YYYY',
            "format": 'YYYY'
        }]
    },

    "chartScrollbar":{

    },

    "export": {
        "enabled": true
    }
});

chart.addListener("dataUpdated", zoomChart);

function zoomChart(){
    chart.zoomToDates(new Date(2009,9,20, 15), new Date(2009,10,3,12));
}



