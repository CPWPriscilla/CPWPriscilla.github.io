am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme2);
    // Themes end

    am4core.options.onlyShowOnViewport = true;
    
    // Create chart instance
    var chart = am4core.create("LFparticipationrate", am4charts.XYChart);
    
    // Add data
    chart.data = 
        [
          {
            "Year": 2001,
            "15 - 19": 14.7,
            "20 - 24": 68.5,
            "25 - 29": 84.4,
            "30 - 34": 72.6,
            "35 - 39": 62.9,
            "40 - 44": 58.1,
            "45 - 49": 54.9
          },
          {
            "Year": 2006,
            "15 - 19": 12.9,
            "20 - 24": 66.7,
            "25 - 29": 84.5,
            "30 - 34": 75.5,
            "35 - 39": 69.2,
            "40 - 44": 65.1,
            "45 - 49": 61.3
          },
          {
            "Year": 2011,
            "15 - 19": 9.1,
            "20 - 24": 59.4,
            "25 - 29": 84.2,
            "30 - 34": 75.2,
            "35 - 39": 69,
            "40 - 44": 68.7,
            "45 - 49": 66.9
          },
          {
            "Year": 2012,
            "15 - 19": 9.6,
            "20 - 24": 59.8,
            "25 - 29": 83.9,
            "30 - 34": 75.2,
            "35 - 39": 70.2,
            "40 - 44": 69.6,
            "45 - 49": 67.2
          },
          {
            "Year": 2013,
            "15 - 19": 11.5,
            "20 - 24": 61.9,
            "25 - 29": 83.3,
            "30 - 34": 76.3,
            "35 - 39": 70.3,
            "40 - 44": 70.9,
            "45 - 49": 69.6
          },
          {
            "Year": 2014,
            "15 - 19": 12.5,
            "20 - 24": 59.3,
            "25 - 29": 83.4,
            "30 - 34": 76.3,
            "35 - 39": 70.9,
            "40 - 44": 70.2,
            "45 - 49": 70.6
          },
          {
            "Year": 2015,
            "15 - 19": 12.7,
            "20 - 24": 61.8,
            "25 - 29": 82.8,
            "30 - 34": 75.8,
            "35 - 39": 70.2,
            "40 - 44": 70.5,
            "45 - 49": 71.4
          },
          {
            "Year": 2016,
            "15 - 19": 12.2,
            "20 - 24": 61.9,
            "25 - 29": 83.6,
            "30 - 34": 74.9,
            "35 - 39": 69.1,
            "40 - 44": 69.6,
            "45 - 49": 70.9
          },
          {
            "Year": 2017,
            "15 - 19": 11.7,
            "20 - 24": 60,
            "25 - 29": 84.3,
            "30 - 34": 76.7,
            "35 - 39": 70.3,
            "40 - 44": 70.7,
            "45 - 49": 70.2
          },
          {
            "Year": 2018,
            "15 - 19": 11.9,
            "20 - 24": 58.3,
            "25 - 29": 84.5,
            "30 - 34": 77.1,
            "35 - 39": 70.8,
            "40 - 44": 71.1,
            "45 - 49": 70.1
          },
          {
            "Year": 2019,
            "15 - 19": 11.6,
            "20 - 24": 57.8,
            "25 - 29": 85.3,
            "30 - 34": 75.5,
            "35 - 39": 71.3,
            "40 - 44": 69.7,
            "45 - 49": 69.5
          },
          {
            "Year": 2020,
            "15 - 19": 7.2,
            "20 - 24": 56,
            "25 - 29": 85.4,
            "30 - 34": 76.4,
            "35 - 39": 70.2,
            "40 - 44": 68.8,
            "45 - 49": 69.5
          },
          {
            "Year": 2021,
            "15 - 19": 7.8,
            "20 - 24": 56,
            "25 - 29": 86.6,
            "30 - 34": 77.8,
            "35 - 39": 69.8,
            "40 - 44": 68.8,
            "45 - 49": 69.7
          }];
  
      chart.data.forEach(function (o) {
      
        o.Year = "" + o.Year;
        o["15 - 19"] = o["15 - 19"] || undefined;
        o["20 - 24"] = o["20 - 24"] || undefined;
        o["25 - 29"] = o["25 - 29"] || undefined;
        o["30 - 34"] = o["30 - 34"] || undefined;
        o["35 - 39"] = o["35 - 39"] || undefined;
        o["40 - 44"] = o["40 - 44"] || undefined;
        o["45 - 49"] = o["45 - 49"] || undefined;
    });
  
    chart.events.on("ready", function () {
      dateAxis.zoom({ start: 0, end: 1 });
    });
    
    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy";
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
    ["15 - 19", "20 - 24", "25 - 29", "30 - 34", "35 - 39", "40 - 44","45 - 49"
    ].forEach(function (elem) {

  
    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = elem;
    series.tooltipText = elem + ": [bold font-size: 20]{valueY}"
    series.dataFields.dateX = "Year";
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
    chart.cursor.maxTooltipDistance = 5;
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
      
    chart.legend = new am4charts.Legend();

    var title = chart.titles.create();
    title.text = "Local Female Labour Force Paricipation Rate";
    title.align = "center"
    title.fill = '#6c757d'
    title.paddingBottom = 10;
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 10;

    var label1 = chart.chartContainer.createChild(am4core.Label);
    label1.text = "Age Group\n";
    label1.align = "center";
    label1.fontSize = 15;
    label1.marginTop = 20;
    
    }); // end am4core.ready()