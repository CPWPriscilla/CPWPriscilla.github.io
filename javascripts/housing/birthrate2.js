am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme1);
    // Themes end
    
    am4core.options.onlyShowOnViewport = true;
    
    // Create chart instance
    var chart = am4core.create("birthrate2", am4charts.XYChart);
    
    // Add data
    chart.data = 
    [
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
        "Total Fertility Rate (World)": 2.53
      },
      {
        "Category": 2017,
        "Total Fertility Rate (Hong Kong)": 1.13,
        "Total Fertility Rate (World)": 2.5
      },
      {
        "Category": 2018,
        "Total Fertility Rate (Hong Kong)": 1.08,
        "Total Fertility Rate (World)": 2.44
      },
      {
        "Category": 2019,
        "Total Fertility Rate (Hong Kong)": 1.06,
        "Total Fertility Rate (World)": 2.41
      },
      {
        "Category": 2020,
        "Total Fertility Rate (Hong Kong)": 0.88,
        "Total Fertility Rate (World)": 2.35
      },
      {
        "Category": 2021,
        "Total Fertility Rate (Hong Kong)": 0.77,
        "Total Fertility Rate (World)": 2.32
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
    
    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();
    
    // Create a horizontal scrollbar with previe and place it underneath the date axis
    //chart.scrollbarX.series.push(series);
    //chart.scrollbarX.parent = chart.bottomAxesContainer;
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;
  
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

    var range1 = dateAxis.axisRanges.create();
    range1.date = new Date(2012, 6, 1);
    range1.grid.stroke = "#adb5bd";
    range1.grid.strokeOpacity = 0.8;
    range1.grid.strokeDasharray = "5,2";
    range1.grid.strokeWidth = 2;

    var range2 = dateAxis.axisRanges.create();
    range2.date = new Date(2014, 6, 1);
    range2.grid.stroke = "#b3554d";
    range2.grid.strokeOpacity = 0.8;
    range2.grid.strokeDasharray = "5,2";
    range2.grid.strokeWidth = 2;

    range2.label.text = "Improvement in 2014";
    range2.label.inside = true;
    range2.label.rotation = 90;
    range2.label.horizontalCenter = "right";
    range2.label.verticalCenter = "bottom";
    range2.label.fill = '#6c757d';

    var range3 = dateAxis.axisRanges.create();
    range3.date = new Date(2016, 6, 1);
    range3.grid.stroke = "#b3554d";
    range3.grid.strokeOpacity = 0.8;
    range3.grid.strokeDasharray = "5,2";
    range3.grid.strokeWidth = 2;

    range3.label.text = "Improvement in 2016";
    range3.label.inside = true;
    range3.label.rotation = 90;
    range3.label.horizontalCenter = "right";
    range3.label.verticalCenter = "bottom";
    range3.label.fill = '#6c757d';

    var title = chart.titles.create();
    title.text = "Total Fertility Rate from 2000";
    title.align = "center"
    title.fill = '#6c757d'
    title.paddingBottom = 10;
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 10;
    
    }); // end am4core.ready()