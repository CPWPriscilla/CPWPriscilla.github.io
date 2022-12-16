am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme1);
    // Themes end

    am4core.options.onlyShowOnViewport = true;
    am4core.options.queue = false;
    
    // Create chart instance
    var chart = am4core.create("govperformance", am4charts.XYChart);
    
    // Add data
    chart.data = [
        {
          "Chartdate": "2000-01-11",
          "Date": "11/01/2000 - 05/06/2000",
          "Netvalue": "-7.8%"
        },
        {
          "Chartdate": "2000-07-06",
          "Date": "06/07/2000 - 12/12/2000",
          "Netvalue": "-20.3%"
        },
        {
          "Chartdate": "2001-01-17",
          "Date": "17/01/2001 - 05/06/2001",
          "Netvalue": "-6.6%"
        },
        {
          "Chartdate": "2001-07-03",
          "Date": "03/07/2001 - 09/12/2001",
          "Netvalue": "-23.8%"
        },
        {
          "Chartdate": "2002-01-02",
          "Date": "02/01/2002 - 05/06/2002",
          "Netvalue": "-14.0%"
        },
        {
          "Chartdate": "2002-07-02",
          "Date": "02/07/2002 - 18/12/2002",
          "Netvalue": "-31.2%"
        },
        {
          "Chartdate": "2003-01-20",
          "Date": "20/01/2003 - 18/06/2003",
          "Netvalue": "-40.1%"
        },
        {
          "Chartdate": "2003-07-04",
          "Date": "04/07/2003 - 23/12/2003",
          "Netvalue": "-42.8%"
        },
        {
          "Chartdate": "2004-01-26",
          "Date": "26/01/2004 - 24/06/2004",
          "Netvalue": "-33.8%"
        },
        {
          "Chartdate": "2004-07-26",
          "Date": "26/07/2004 - 23/12/2004",
          "Netvalue": "-21.6%"
        },
        {
          "Chartdate": "2005-01-24",
          "Date": "24/01/2005 - 23/06/2005",
          "Netvalue": "0.3%"
        },
        {
          "Chartdate": "2005-07-25",
          "Date": "25/07/2005 - 19/12/2005",
          "Netvalue": "36.5%"
        },
        {
          "Chartdate": "2006-01-16",
          "Date": "16/01/2006 - 21/06/2006",
          "Netvalue": "40.7%"
        },
        {
          "Chartdate": "2006-07-14",
          "Date": "14/07/2006 - 20/12/2006",
          "Netvalue": "26.9%"
        },
        {
          "Chartdate": "2007-01-22",
          "Date": "22/01/2007 - 21/06/2007",
          "Netvalue": "35.2%"
        },
        {
          "Chartdate": "2007-07-23",
          "Date": "23/07/2007 - 24/12/2007",
          "Netvalue": "39.5%"
        },
        {
          "Chartdate": "2008-01-16",
          "Date": "16/01/2008 - 20/06/2008",
          "Netvalue": "33.4%"
        },
        {
          "Chartdate": "2008-07-14",
          "Date": "14/07/2008 - 18/12/2008",
          "Netvalue": "-3.1%"
        },
        {
          "Chartdate": "2009-01-19",
          "Date": "19/01/2009 - 21/06/2009",
          "Netvalue": "-3.2%"
        },
        {
          "Chartdate": "2009-07-20",
          "Date": "20/07/2009 - 17/12/2009",
          "Netvalue": "-0.3%"
        },
        {
          "Chartdate": "2010-01-18",
          "Date": "18/01/2010 - 22/06/2010",
          "Netvalue": "-9.7%"
        },
        {
          "Chartdate": "2010-07-19",
          "Date": "19/07/2010 - 22/12/2010",
          "Netvalue": "-3.5%"
        },
        {
          "Chartdate": "2011-01-18",
          "Date": "18/01/2011 - 29/06/2011",
          "Netvalue": "-17.8%"
        },
        {
          "Chartdate": "2011-07-21",
          "Date": "21/07/2011 - 28/12/2011",
          "Netvalue": "-25.8%"
        },
        {
          "Chartdate": "2012-01-12",
          "Date": "12/01/2012 - 25/06/2012",
          "Netvalue": "-25.6%"
        },
        {
          "Chartdate": "2012-07-09",
          "Date": "09/07/2012 - 28/12/2012",
          "Netvalue": "-16.4%"
        },
        {
          "Chartdate": "2013-01-02",
          "Date": "02/01/2013 - 19/06/2013",
          "Netvalue": "-14.8%"
        },
        {
          "Chartdate": "2013-07-02",
          "Date": "02/07/2013 - 19/12/2013",
          "Netvalue": "-24.9%"
        },
        {
          "Chartdate": "2014-01-02",
          "Date": "02/01/2014 - 19/06/2014",
          "Netvalue": "-16.1%"
        },
        {
          "Chartdate": "2014-07-07",
          "Date": "07/07/2014 - 22/12/2014",
          "Netvalue": "-20.0%"
        },
        {
          "Chartdate": "2015-01-02",
          "Date": "02/01/2015 - 25/06/2015",
          "Netvalue": "-18.8%"
        },
        {
          "Chartdate": "2015-07-06",
          "Date": "06/07/2015 - 21/12/2015",
          "Netvalue": "-23.2%"
        },
        {
          "Chartdate": "2016-01-04",
          "Date": "04/01/2016 - 23/06/2016",
          "Netvalue": "-26.1%"
        },
        {
          "Chartdate": "2016-07-04",
          "Date": "04/07/2016 - 22/12/2016",
          "Netvalue": "-25.0%"
        },
        {
          "Chartdate": "2017-01-03",
          "Date": "03/01/2017 - 22/06/2017",
          "Netvalue": "-20.7%"
        },
        {
          "Chartdate": "2017-07-03",
          "Date": "03/07/2017 - 19/12/2017",
          "Netvalue": "3.9%"
        },
        {
          "Chartdate": "2018-01-03",
          "Date": "03/01/2018 - 21/06/2018",
          "Netvalue": "-6.6%"
        },
        {
          "Chartdate": "2018-07-03",
          "Date": "03/07/2018 - 20/12/2018",
          "Netvalue": "-4.6%"
        },
        {
          "Chartdate": "2019-01-21",
          "Date": "21/01/2019 - 20/06/2019",
          "Netvalue": "-26.3%"
        },
        {
          "Chartdate": "2019-07-17",
          "Date": "17/07/2019 - 18/12/2019",
          "Netvalue": "-62.4%"
        },
        {
          "Chartdate": "2020-01-16",
          "Date": "16/01/2020 - 18/06/2020",
          "Netvalue": "-55.7%"
        },
        {
          "Chartdate": "2020-07-20",
          "Date": "20/07/2020 - 22/12/2020",
          "Netvalue": "-45.8%"
        },
        {
          "Chartdate": "2021-01-18",
          "Date": "18/01/2021 - 25/06/2021",
          "Netvalue": "-40.3%"
        },
        {
          "Chartdate": "2021-07-19",
          "Date": "19/07/2021 - 14/12/2021",
          "Netvalue": "-31.8%"
        },
        {
          "Chartdate": "2022-01-17",
          "Date": "17/01/2022 - 24/06/2022",
          "Netvalue": "-43.0%"
        },
        {
          "Chartdate": "2022-07-04",
          "Date": "04/07/2022 - 10/11/2022",
          "Netvalue": "-1.0%"
        }
      ];
  
      chart.data.forEach(function (o) {
      
        o.Category = "" + o.Category;
        o["Date"] = o["Date"] || undefined;
        o["Netvalue"] = o["Netvalue"] || undefined;
  
    });
  
    chart.events.on("ready", function () {
      dateAxis.zoom({ start: 0, end: 1 });
    });
    
    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "dd-MM-yyyy";
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Value";
  
    [
      "Netvalue"
      ].forEach(function (elem) {
    
    
      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = elem;
      series.tooltipText = elem + ": {valueY}"
      series.dataFields.dateX = "Chartdate";
      series.dataFields.realdate = "Date";
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
      series.tooltipText = "{realdate}\nNet Value\n[bold font-size: 20]{valueY}[/]";
      series.tooltip.background.fillOpacity = 0.5;
    
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
      //chart.scrollbarY = new am4core.Scrollbar();
      //chart.scrollbarY.parent = chart.leftAxesContainer;
      //chart.scrollbarY.toBack();
      
      // Create a horizontal scrollbar with previe and place it underneath the date axis
      //chart.scrollbarX.series.push(series);
      //chart.scrollbarX.parent = chart.bottomAxesContainer;
      //chart.scrollbarX = new am4charts.XYChartScrollbar();
      //chart.scrollbarX = new am4core.Scrollbar();
      //chart.scrollbarX.parent = chart.bottomAxesContainer;
    
      valueAxis.cursorTooltipEnabled = false;
      dateAxis.cursorTooltipEnabled = false;
    
      chart.zoomOutButton.background.fill = am4core.color("#df4e71");
      chart.zoomOutButton.icon.stroke = am4core.color("#fff");
      chart.zoomOutButton.icon.strokeWidth = 2;
      chart.zoomOutButton.background.states.getKey("hover").properties.fill = am4core.color("#f7b6b0");
      chart.zoomOutButton.background.states.getKey("down").properties.fill = am4core.color("#f7b6b0");
      
      dateAxis.start = 0;
      dateAxis.keepSelection = true;
      
      });
  
  
    var title = chart.titles.create();
    title.text = "Net Satisfaction With The Performance of HKSAR Government\n(Half-yearly average)";
    title.align = "center"
    title.fill = '#6c757d'
    title.paddingBottom = 10;
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 10;
    title.textAlign = "middle";
    
    }); // end am4core.ready()