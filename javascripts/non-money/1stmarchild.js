am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme1);
    // Themes end

    am4core.options.onlyShowOnViewport = true;
    
    // Create chart instance
    var chart = am4core.create("1stmarchild", am4charts.XYChart);
    
    // Add data
    chart.data = 
    [
        {
          "Category": 1991,
          "Median age of females at first marriage": 26.2,
          "Median age of females at first childbirth": 28.1
        },
        {
          "Category": 1996,
          "Median age of females at first marriage": 26.9,
          "Median age of females at first childbirth": 28.8
        },
        {
          "Category": 2001,
          "Median age of females at first marriage": 27.5,
          "Median age of females at first childbirth": 29.4
        },
        {
          "Category": 2006,
          "Median age of females at first marriage": 28.2,
          "Median age of females at first childbirth": 29.2
        },
        {
          "Category": 2011,
          "Median age of females at first marriage": 28.9,
          "Median age of females at first childbirth": 30.0
        },
        {
          "Category": 2016,
          "Median age of females at first marriage": 29.4,
          "Median age of females at first childbirth": 31.4
        },
        {
          "Category": 2019,
          "Median age of females at first marriage": 29.9,
          "Median age of females at first childbirth": 31.9
        },
        {
          "Category": 2020,
          "Median age of females at first marriage": 30.4,
          "Median age of females at first childbirth": 32.3
        },
        {
          "Category": 2021,
          "Median age of females at first marriage": 30.6,
          "Median age of females at first childbirth": 32.6
        }
      ];
  
      chart.data.forEach(function (o) {
      
        o.Category = "" + o.Category;
        o["Median age of females at first marriage"] = o["Median age of females at first marriage"] || undefined;
        o["Median age of females at first childbirth"] = o["Median age of females at first childbirth"] || undefined;
    });
  
    chart.events.on("ready", function () {
      dateAxis.zoom({ start: 0, end: 1 });
    });
    
    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
    ["Median age of females at first marriage",
    "Median age of females at first childbirth"
    ].forEach(function (elem) {

  
    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = elem;
    series.tooltipText = elem + ": [bold font-size: 20]{valueY}"
    series.dataFields.dateX = "Category";
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

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

    /*var range1 = dateAxis.axisRanges.create();
    range1.date = new Date(2011, 8, 8);
    range1.endDate = new Date(2012, 3, 4);
    range1.axisFill.fill = "#6c757d";
    range1.axisFill.fillOpacity = 0.2;

    var range2 = dateAxis.axisRanges.create();
    range2.date = new Date(2015, 8, 24);
    range2.endDate = new Date(2016, 10, 2);
    range2.axisFill.fill = "#6c757d";
    range2.axisFill.fillOpacity = 0.2;*/

    var range = valueAxis.axisRanges.create();
    range.value = 30.5;
    range.grid.stroke = "#adb5bd";
    range.grid.strokeOpacity = 0.8;
    range.grid.strokeDasharray = "5,2";
    range.grid.strokeWidth = 2;

    range.label.text = "Ideal Age at First Childbirth";
    range.label.inside = true;
    range.label.rotation = 0;
    range.label.horizontalCenter = "right";
    range.label.verticalCenter = "bottom";
    range.label.fill = '#6c757d';

    var title = chart.titles.create();
    title.text = "Median Age of Females at First Marriage and Childbirth";
    title.align = "center"
    title.fill = '#6c757d'
    title.paddingBottom = 10;
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 10;
    
    }); // end am4core.ready()