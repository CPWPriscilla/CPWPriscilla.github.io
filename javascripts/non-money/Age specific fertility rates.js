am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme2);
    // Themes end

    am4core.options.onlyShowOnViewport = true;
    am4core.options.queue = false;
    
    // Create chart instance
    var chart = am4core.create("agespecfr", am4charts.XYChart);
    
    // Add data
    chart.data = 
    [
      {
        "Year": 1981,
        "15 - 19": 11.7,
        "20 - 24": 85.9,
        "25 - 29": 153,
        "30 - 34": 97.3,
        "35 - 39": 34.4,
        "40 - 44": 6.8,
        "45 - 49": 0.7
      },
      {
        "Year": 1986,
        "15 - 19": 7,
        "20 - 24": 48.6,
        "25 - 29": 111.9,
        "30 - 34": 78.5,
        "35 - 39": 26.9,
        "40 - 44": 4,
        "45 - 49": 0.3
      },
      {
        "Year": 1991,
        "15 - 19": 6.5,
        "20 - 24": 39.1,
        "25 - 29": 97.4,
        "30 - 34": 81.2,
        "35 - 39": 30.4,
        "40 - 44": 4.5,
        "45 - 49": 0.3
      },
      {
        "Year": 1996,
        "15 - 19": 5.9,
        "20 - 24": 37.1,
        "25 - 29": 80.7,
        "30 - 34": 78.6,
        "35 - 39": 31.8,
        "40 - 44": 5,
        "45 - 49": 0.2
      },
      {
        "Year": 2001,
        "15 - 19": 4.3,
        "20 - 24": 29.1,
        "25 - 29": 57.2,
        "30 - 34": 61.7,
        "35 - 39": 29.3,
        "40 - 44": 4.7,
        "45 - 49": 0.2
      },
      {
        "Year": 2006,
        "15 - 19": 3.2,
        "20 - 24": 25,
        "25 - 29": 56.5,
        "30 - 34": 71.6,
        "35 - 39": 35.1,
        "40 - 44": 5.2,
        "45 - 49": 0.3
      },
      {
        "Year": 2011,
        "15 - 19": 3.2,
        "20 - 24": 26.6,
        "25 - 29": 63.6,
        "30 - 34": 86.6,
        "35 - 39": 51.8,
        "40 - 44": 8.7,
        "45 - 49": 0.4
      },
      {
        "Year": 2012,
        "15 - 19": 2.8,
        "20 - 24": 21.1,
        "25 - 29": 64.5,
        "30 - 34": 99.7,
        "35 - 39": 57.5,
        "40 - 44": 10.8,
        "45 - 49": 0.4
      },
      {
        "Year": 2013,
        "15 - 19": 2.8,
        "20 - 24": 18.3,
        "25 - 29": 55,
        "30 - 34": 85.3,
        "35 - 39": 52.4,
        "40 - 44": 10.7,
        "45 - 49": 0.5
      },
      {
        "Year": 2014,
        "15 - 19": 3.1,
        "20 - 24": 19.6,
        "25 - 29": 60.9,
        "30 - 34": 94.9,
        "35 - 39": 56.9,
        "40 - 44": 11.3,
        "45 - 49": 0.6
      },
      {
        "Year": 2015,
        "15 - 19": 2.9,
        "20 - 24": 19.3,
        "25 - 29": 59.2,
        "30 - 34": 91.8,
        "35 - 39": 55.2,
        "40 - 44": 10.9,
        "45 - 49": 0.6
      },
      {
        "Year": 2016,
        "15 - 19": 2.7,
        "20 - 24": 17.8,
        "25 - 29": 59.1,
        "30 - 34": 93,
        "35 - 39": 57.3,
        "40 - 44": 11.4,
        "45 - 49": 0.7
      },
      {
        "Year": 2017,
        "15 - 19": 2.7,
        "20 - 24": 17,
        "25 - 29": 54.4,
        "30 - 34": 86.2,
        "35 - 39": 54.6,
        "40 - 44": 11.2,
        "45 - 49": 0.7
      },
      {
        "Year": 2018,
        "15 - 19": 2.2,
        "20 - 24": 15.4,
        "25 - 29": 50.6,
        "30 - 34": 85.1,
        "35 - 39": 52.2,
        "40 - 44": 10.8,
        "45 - 49": 0.8
      },
      {
        "Year": 2019,
        "15 - 19": 1.9,
        "20 - 24": 14.5,
        "25 - 29": 48.2,
        "30 - 34": 85.6,
        "35 - 39": 52,
        "40 - 44": 10.9,
        "45 - 49": 0.7
      },
      {
        "Year": 2020,
        "15 - 19": 1.7,
        "20 - 24": 11.6,
        "25 - 29": 36.6,
        "30 - 34": 72.3,
        "35 - 39": 45.1,
        "40 - 44": 9.4,
        "45 - 49": 0.6
      },
      {
        "Year": 2021,
        "15 - 19": 1.3,
        "20 - 24": 9,
        "25 - 29": 29.4,
        "30 - 34": 63.8,
        "35 - 39": 42.3,
        "40 - 44": 8.7,
        "45 - 49": 0.4
      }
    ];
  
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
    title.text = "Age Specific Fertility Rates";
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

    var topContainer = chart.chartContainer.createChild(am4core.Container);
    topContainer.layout = "absolute";
    topContainer.toBack();
    topContainer.paddingBottom = 15;
    topContainer.width = am4core.percent(100);

    var axisTitle = topContainer.createChild(am4core.Label);
    axisTitle.text = "Number of live births per 1 000 women";
    axisTitle.align = "left";
    axisTitle.paddingLeft = 10;
    
    }); // end am4core.ready()