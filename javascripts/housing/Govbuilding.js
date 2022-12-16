am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    am4core.options.onlyShowOnViewport = true;
    am4core.options.queue = false;
    
    // Create chart instance
    var chart = am4core.create("chartdivgovbuilding", am4charts.RadarChart);
    chart.logo.disabled = true;

    // Add data
    chart.data = [ {
      "category": "Other SSFs",
      "name1": "Estimated Completions of Other SSFs",
      "name2": "Actual Completions of Other SSFs",
      "value": 5000,
      "full": 28500,
      "percent": 17.5
    },{
      "category": "PRH / GSH",
      "name1": "Estimated Completions of PRH / GSH",
      "name2": "Actual Completions of PRH / GSH",
      "value": 6300,
      "full": 67100,
      "percent": 9
    }, {
      "category": "Total",
      "name1": "Total Estimated Completions",
      "name2": "Total Completions",
      "value": 11300,
      "full": 95600,
      "percent": 11.8
    }];
    
    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);
    
    // Set number format
    //chart.numberFormatter.numberFormat = "#.#'%'";
    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
      return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;
    
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    //valueAxis.max = 100;
    valueAxis.strictMinMax = true;

    
    // Create series
    var series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.tooltipText = "{name1} in five-year period: \n[bold font-size: 20]{full} units[/]";
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;
    
    var series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{name2} in 2020/21: \n[bold font-size: 20]{value} units ({percent}%)[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;

    
    series2.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    series1.tooltip.background.fillOpacity = 0.7;
    series1.tooltip.getFillFromObject = false;
    series1.tooltip.background.fill = "grey";
    series2.tooltip.background.fillOpacity = 0.7;

    chart.zoomOutButton.background.fill = am4core.color("#F8D9D6");
    chart.zoomOutButton.icon.stroke = am4core.color("#fff");
    chart.zoomOutButton.icon.strokeWidth = 2;
    chart.zoomOutButton.background.states.getKey("hover").properties.fill = am4core.color("#f7b6b0");
    chart.zoomOutButton.background.states.getKey("down").properties.fill = am4core.color("#f7b6b0");

    // Add cursor
    chart.cursor = new am4charts.RadarCursor();

    var title = chart.titles.create();
    title.text = "Completions of Governmment's Housing in Five-year Period";
    title.align = "center"
    title.fill = '#6c757d'
    title.fontWeight = 600;
    title.fontSize = 18;
    title.marginTop = 10;
    title.marginBottom = 0;

    var label1 = chart.chartContainer.createChild(am4core.Label);
    label1.text = "No. of Units\n";
    label1.align = "center";
    label1.fontSize = 15;
    
    });