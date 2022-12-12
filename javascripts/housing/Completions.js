am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    am4core.options.onlyShowOnViewport = true;
    
    // Create chart instance
    var chart = am4core.create("chartdivcompletions", am4charts.XYChart);
    
    // Add data
    chart.data = [{
      "year": "2011",
      "AD": 1220,
      "Forecast Completions": 10670,
      "strokeWidth": 0,
      "Actual Completions": 9450
    }, {
      "year": "2012",
      "AD": 2960,
      "Forecast Completions": 11890,
      "strokeWidth": 0,
      "Actual Completions": 10150
    }, {
      "year": "2013",
      "AD": 8260,
      "Forecast Completions": 13550,
      "strokeWidth": 0,
      "Actual Completions": 8250
    }, {
      "year": "2014",
      "AD":10150,
      "Forecast Completions": 17610,
      "strokeWidth": 0,
      "Actual Completions": 15720
    }, {
      "year": "2015",
      "AD": 12160,
      "Forecast Completions": 13290,
      "strokeWidth": 0,
      "Actual Completions": 11280
    }, {
      "year": "2016",
      "AD": 15765,
      "Forecast Completions": 18200,
      "strokeWidth": 0,
      "Actual Completions": 14595
    }, {
      "year": "2017",
      "AD": 15096,
      "Forecast Completions": 17122,
      "strokeWidth": 0,
      "Actual Completions": 17791
    }, {
      "year": "2018",
      "AD": 12258,
      "Forecast Completions": 18130,
      "strokeWidth": 0,
      "Actual Completions": 20968
    }, {
      "year": "2019",
      "AD": 19030,
      "Forecast Completions": 20415,
      "strokeWidth": 0,
      "Actual Completions": 13643
    }, {
      "year": "2020",
      "AD": 18996,
      "Forecast Completions": 20854,
      "strokeWidth": 0,
      "Actual Completions": 20888
    }, {
      "year": "2021",
      "Forecast Completions": 18228,
      "strokeWidth": 3,
      "columnDash": "5,5",
      "fillOpacity": 0.6,
      "additional": "(projection)"
    }, {
      "year": "2022",
      "Forecast Completions": 19984,
      "strokeWidth": 3,
      "columnDash": "5,5",
      "fillOpacity": 0.6,
      "additional": "(projection)"
    }];
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    //dateAxis.renderer.grid.template.location = 0;
    //dateAxis.renderer.minGridDistance = 30;

    
    var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = "No. of Units";
    
    // Create series
    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.dataFields.valueY = "Forecast Completions";
    series1.dataFields.dateX = "year";
    series1.yAxis = valueAxis1;
    series1.name = "Estimated Completions";
    series1.tooltipText = "{name}\n[bold font-size: 20]{valueY}[/]";
    series1.fill = "#F8D9D6";
    series1.clustered = false;
    series1.toBack();
    series1.columns.template.propertyFields.fillOpacity = "fillOpacity";
    series1.columns.template.propertyFields.strokeWidth = "strokeWidth";
    series1.columns.template.propertyFields.strokeDasharray = "columnDash";
    series1.stroke = "#F8D9D6";
    
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "Actual Completions";
    series2.dataFields.dateX = "year";
    series2.yAxis = valueAxis1;
    series2.name = "Actual Completions";
    series2.tooltipText = "{name}\n[bold font-size: 20]{valueY}[/]";    
    series2.fill = chart.colors.getIndex(0).lighten(0.5);
    series2.strokeWidth = 0;
    series2.clustered = false;
    series2.columns.template.width = am4core.percent(40);

    var series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "AD";
    series3.dataFields.dateX = "year";
    series3.name = "Aggregate Difference";
    series3.strokeWidth = 2;
    series3.tensionX = 0.7;
    series3.yAxis = valueAxis1;
    series3.tooltipText = "{name}\n[bold font-size: 20]{valueY}[/]";
    
    var bullet3 = series3.bullets.push(new am4charts.CircleBullet());
    bullet3.circle.radius = 3;
    bullet3.circle.strokeWidth = 2;
    bullet3.circle.fill = am4core.color("#fff");
    
    series1.tooltip.background.fillOpacity = 0.3;
    series2.tooltip.background.fillOpacity = 0.3;
    series3.tooltip.background.fillOpacity = 0.3;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    //chart.cursor.snapToSeries = series;
    
    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";

    chart.zoomOutButton.background.fill = am4core.color("#F8D9D6");
    chart.zoomOutButton.icon.stroke = am4core.color("#fff");
    chart.zoomOutButton.icon.strokeWidth = 2;
    chart.zoomOutButton.background.states.getKey("hover").properties.fill = am4core.color("#f7b6b0");
    chart.zoomOutButton.background.states.getKey("down").properties.fill = am4core.color("#f7b6b0");
    
    /* Add scrollbar
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series2);
    chart.scrollbarX.series.push(series3);
    chart.scrollbarX.parent = chart.bottomAxesContainer;*/

    var title = chart.titles.create();
    title.text = "Overall Forecast and Actual Completions of Private Domestic Units from 2011 Upon Present";
    title.align = "center"
    title.fill = '#6c757d'
    title.paddingBottom = 10;
    title.fontWeight = 600;
    title.fontSize = 18;
    title.marginTop = 10;
    title.marginBottom = 10;
    
    }); // end am4core.ready()