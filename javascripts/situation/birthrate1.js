am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme);
    // Themes end

    am4core.options.onlyShowOnViewport = true;
    am4core.options.queue = false;
    
    // Create chart instance
    var chart = am4core.create("birthrate1", am4charts.XYChart);
    
    // Add data
    chart.data = 
    [
      /*{
        "Category": 1960,
        "Total Fertility Rate (Hong Kong)": "",
        "Total Fertility Rate (World)": 4.7
      },
      {
        "Category": 1961,
        "Total Fertility Rate (Hong Kong)": "",
        "Total Fertility Rate (World)": 4.57
      },
      {
        "Category": 1962,
        "Total Fertility Rate (Hong Kong)": "",
        "Total Fertility Rate (World)": 5.03
      },
      {
        "Category": 1963,
        "Total Fertility Rate (Hong Kong)": "",
        "Total Fertility Rate (World)": 5.32
      },
      {
        "Category": 1964,
        "Total Fertility Rate (Hong Kong)": "",
        "Total Fertility Rate (World)": 5.13
      },
      {
        "Category": 1965,
        "Total Fertility Rate (Hong Kong)": "",
        "Total Fertility Rate (World)": 5.08
      },
      {
        "Category": 1966,
        "Total Fertility Rate (Hong Kong)": "",
        "Total Fertility Rate (World)": 4.96
      },
      {
        "Category": 1967,
        "Total Fertility Rate (Hong Kong)": "",
        "Total Fertility Rate (World)": 4.86
      },
      {
        "Category": 1968,
        "Total Fertility Rate (Hong Kong)": "",
        "Total Fertility Rate (World)": 4.96
      },
      {
        "Category": 1969,
        "Total Fertility Rate (Hong Kong)": "",
        "Total Fertility Rate (World)": 4.87
      },
      {
        "Category": 1970,
        "Total Fertility Rate (Hong Kong)": "",
        "Total Fertility Rate (World)": 4.83
      },
      {
        "Category": 1971,
        "Total Fertility Rate (Hong Kong)": 3.46,
        "Total Fertility Rate (World)": 4.68
      },
      {
        "Category": 1972,
        "Total Fertility Rate (Hong Kong)": 3.32,
        "Total Fertility Rate (World)": 4.55
      },
      {
        "Category": 1973,
        "Total Fertility Rate (Hong Kong)": 3.18,
        "Total Fertility Rate (World)": 4.42
      },
      {
        "Category": 1974,
        "Total Fertility Rate (Hong Kong)": 2.97,
        "Total Fertility Rate (World)": 4.27
      },
      {
        "Category": 1975,
        "Total Fertility Rate (Hong Kong)": 2.67,
        "Total Fertility Rate (World)": 4.08
      },
      {
        "Category": 1976,
        "Total Fertility Rate (Hong Kong)": 2.48,
        "Total Fertility Rate (World)": 3.98
      },
      {
        "Category": 1977,
        "Total Fertility Rate (Hong Kong)": 2.38,
        "Total Fertility Rate (World)": 3.85
      },
      {
        "Category": 1978,
        "Total Fertility Rate (Hong Kong)": 2.27,
        "Total Fertility Rate (World)": 3.79
      },
      {
        "Category": 1979,
        "Total Fertility Rate (Hong Kong)": 2.12,
        "Total Fertility Rate (World)": 3.78
      },
      {
        "Category": 1980,
        "Total Fertility Rate (Hong Kong)": 2.05,
        "Total Fertility Rate (World)": 3.75
      },
      {
        "Category": 1981,
        "Total Fertility Rate (Hong Kong)": 1.93,
        "Total Fertility Rate (World)": 3.72
      },
      {
        "Category": 1982,
        "Total Fertility Rate (Hong Kong)": 1.86,
        "Total Fertility Rate (World)": 3.71
      },
      {
        "Category": 1983,
        "Total Fertility Rate (Hong Kong)": 1.72,
        "Total Fertility Rate (World)": 3.58
      },
      {
        "Category": 1984,
        "Total Fertility Rate (Hong Kong)": 1.56,
        "Total Fertility Rate (World)": 3.55
      },
      {
        "Category": 1985,
        "Total Fertility Rate (Hong Kong)": 1.49,
        "Total Fertility Rate (World)": 3.52
      },
      {
        "Category": 1986,
        "Total Fertility Rate (Hong Kong)": 1.37,
        "Total Fertility Rate (World)": 3.51
      },
      {
        "Category": 1987,
        "Total Fertility Rate (Hong Kong)": 1.31,
        "Total Fertility Rate (World)": 3.48
      },
      {
        "Category": 1988,
        "Total Fertility Rate (Hong Kong)": 1.4,
        "Total Fertility Rate (World)": 3.39
      },
      {
        "Category": 1989,
        "Total Fertility Rate (Hong Kong)": 1.3,
        "Total Fertility Rate (World)": 3.35
      },
      {
        "Category": 1990,
        "Total Fertility Rate (Hong Kong)": 1.27,
        "Total Fertility Rate (World)": 3.31
      },
      {
        "Category": 1991,
        "Total Fertility Rate (Hong Kong)": 1.28,
        "Total Fertility Rate (World)": 3.13
      },
      {
        "Category": 1992,
        "Total Fertility Rate (Hong Kong)": 1.35,
        "Total Fertility Rate (World)": 3.04
      },
      {
        "Category": 1993,
        "Total Fertility Rate (Hong Kong)": 1.34,
        "Total Fertility Rate (World)": 2.98
      },
      {
        "Category": 1994,
        "Total Fertility Rate (Hong Kong)": 1.36,
        "Total Fertility Rate (World)": 2.93
      },
      {
        "Category": 1995,
        "Total Fertility Rate (Hong Kong)": 1.3,
        "Total Fertility Rate (World)": 2.88
      },
      {
        "Category": 1996,
        "Total Fertility Rate (Hong Kong)": 1.19,
        "Total Fertility Rate (World)": 2.83
      },
      {
        "Category": 1997,
        "Total Fertility Rate (Hong Kong)": 1.13,
        "Total Fertility Rate (World)": 2.79
      },
      {
        "Category": 1998,
        "Total Fertility Rate (Hong Kong)": 1.02,
        "Total Fertility Rate (World)": 2.76
      },
      {
        "Category": 1999,
        "Total Fertility Rate (Hong Kong)": 0.98,
        "Total Fertility Rate (World)": 2.73
      },*/
      {
        "Category": 2000,
        "Total Fertility Rate (Hong Kong)": 1.03,
        "Total Fertility Rate (World)": 2.73
      },
      {
        "Category": 2001,
        "Total Fertility Rate (Hong Kong)": 0.93,
        "Total Fertility Rate (World)": 2.7
      },
      {
        "Category": 2002,
        "Total Fertility Rate (Hong Kong)": 0.94,
        "Total Fertility Rate (World)": 2.67
      },
      {
        "Category": 2003,
        "Total Fertility Rate (Hong Kong)": 0.9,
        "Total Fertility Rate (World)": 2.65
      },
      {
        "Category": 2004,
        "Total Fertility Rate (Hong Kong)": 0.92,
        "Total Fertility Rate (World)": 2.64
      },
      {
        "Category": 2005,
        "Total Fertility Rate (Hong Kong)": 0.96,
        "Total Fertility Rate (World)": 2.62
      },
      {
        "Category": 2006,
        "Total Fertility Rate (Hong Kong)": 0.98,
        "Total Fertility Rate (World)": 2.61
      },
      {
        "Category": 2007,
        "Total Fertility Rate (Hong Kong)": 1.03,
        "Total Fertility Rate (World)": 2.61
      },
      {
        "Category": 2008,
        "Total Fertility Rate (Hong Kong)": 1.06,
        "Total Fertility Rate (World)": 2.61
      },
      {
        "Category": 2009,
        "Total Fertility Rate (Hong Kong)": 1.06,
        "Total Fertility Rate (World)": 2.61
      },
      {
        "Category": 2010,
        "Total Fertility Rate (Hong Kong)": 1.13,
        "Total Fertility Rate (World)": 2.59
      },
      {
        "Category": 2011,
        "Total Fertility Rate (Hong Kong)": 1.2,
        "Total Fertility Rate (World)": 2.57
      },
      {
        "Category": 2012,
        "Total Fertility Rate (Hong Kong)": 1.29,
        "Total Fertility Rate (World)": 2.59
      },
      {
        "Category": 2013,
        "Total Fertility Rate (Hong Kong)": 1.13,
        "Total Fertility Rate (World)": 2.56
      },
      {
        "Category": 2014,
        "Total Fertility Rate (Hong Kong)": 1.24,
        "Total Fertility Rate (World)": 2.55
      },
      {
        "Category": 2015,
        "Total Fertility Rate (Hong Kong)": 1.2,
        "Total Fertility Rate (World)": 2.52
      },
      {
        "Category": 2016,
        "Total Fertility Rate (Hong Kong)": 1.21,
        "Total Fertility Rate (World)": 2.53,
        "Projected Fertility Rate (Hong Kong)": 1.17,
      },
      {
        "Category": 2017,
        "Total Fertility Rate (Hong Kong)": 1.13,
        "Total Fertility Rate (World)": 2.5,
      },
      {
        "Category": 2018,
        "Total Fertility Rate (Hong Kong)": 1.08,
        "Total Fertility Rate (World)": 2.44,
      },
      {
        "Category": 2019,
        "Total Fertility Rate (Hong Kong)": 1.06,
        "Total Fertility Rate (World)": 2.41,
      },
      {
        "Category": 2020,
        "Total Fertility Rate (Hong Kong)": 0.88,
        "Total Fertility Rate (World)": 2.35,
      },
      {
        "Category": 2021,
        "Total Fertility Rate (Hong Kong)": 0.77,
        "Total Fertility Rate (World)": 2.32,
        "Projected Fertility Rate (Hong Kong)": 1.19,
      }
    ];
  
      chart.data.forEach(function (o) {
      
        o.Category = "" + o.Category;
        o["Total Fertility Rate (Hong Kong)"] = o["Total Fertility Rate (Hong Kong)"] || undefined;
        o["Total Fertility Rate (World)"] = o["Total Fertility Rate (World)"] || undefined;
    });
  
    chart.events.on("ready", function () {
      dateAxis.zoom({ start: 0, end: 1 });
    });
    
    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy";
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Births Per Woman";
  
    ["Total Fertility Rate (Hong Kong)",
    "Total Fertility Rate (World)"
    ].forEach(function (elem) {

  
    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = elem;
    series.tooltipText = elem + ": {valueY}"
    series.dataFields.dateX = "Category";
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "left";
    series.tooltip.label.textValign = "middle";
    series.tooltipText = elem + ":\n[bold font-size: 20]{valueY}[/]";

    // Make bullets grow on hover
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    var bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.maxTooltipDistance = 500;
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = valueAxis;
    //chart.cursor.snapToSeries = series;

    series.legendSettings.valueText = elem;
  
    valueAxis.cursorTooltipEnabled = false;

    chart.zoomOutButton.background.fill = am4core.color("#F8D9D6");
    chart.zoomOutButton.icon.stroke = am4core.color("#fff");
    chart.zoomOutButton.icon.strokeWidth = 2;
    chart.zoomOutButton.background.states.getKey("hover").properties.fill = am4core.color("#f7b6b0");
    chart.zoomOutButton.background.states.getKey("down").properties.fill = am4core.color("#f7b6b0");
    
    dateAxis.start = 0;
    dateAxis.keepSelection = true;
    
    });
      // Create a horizontal scrollbar with previe and place it underneath the date axis
      //chart.scrollbarX = new am4charts.XYChartScrollbar();
      //chart.scrollbarX.series.push(series);
      //chart.scrollbarX = new am4core.Scrollbar();
      //chart.scrollbarX.parent = chart.bottomAxesContainer;
      
    chart.legend = new am4charts.Legend();

    var range = valueAxis.axisRanges.create();
    range.value = 2.1;
    range.grid.stroke = "#adb5bd";
    range.grid.strokeOpacity = 0.8;
    range.grid.strokeDasharray = "5,2";
    range.grid.strokeWidth = 2;

    range.label.text = "Replacement Level Fertility";
    range.label.inside = true;
    range.label.rotation = 0;
    range.label.horizontalCenter = "right";
    range.label.verticalCenter = "bottom";
    range.label.fill = '#6c757d';

    var title = chart.titles.create();
    title.text = "Total Fertility Rate";
    title.align = "center"
    title.fill = '#6c757d'
    title.paddingBottom = 10;
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 10;
    
    }); // end am4core.ready()