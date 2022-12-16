am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  am4core.unuseTheme(am4themes_myTheme1);
  am4core.unuseTheme(am4themes_myTheme2);
  am4core.useTheme(am4themes_myTheme3);
  // Themes end

  am4core.options.onlyShowOnViewport = true;
  am4core.options.queue = false;
  
  // Create chart instance
  var chart = am4core.create("fpahkpolicy", am4charts.XYChart);
  chart.logo.disabled = true;
  // Add data
  chart.data = [{
    "category": "Child Care Subsidy/ Education Subsidy",
    "value": 56.6,
    "color": "#ffffff",
  }, {
    "category": "Housing Subsidy",
    "value": 55.3,
    "color": "#ffffff",
  }, {
    "category": "Medical Subsidy",
    "value": 55,
    "color": "#ffffff",
  }, {
    "category": "Free Education For Toddler",
    "value": 55,
    "color": "#ffffff",
  }, {
    "category": "Improving Educational Quality",
    "value": 53.9,
    "color": "#000000",
  }];
  
  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 30;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.verticalCenter = "middle";
  categoryAxis.tooltip.disabled = true;
  categoryAxis.renderer.minHeight = 1;
  categoryAxis.renderer.inside = true;

  let labelTemplate = categoryAxis.renderer.labels.template;
  labelTemplate.fill = "#ced4da"
  labelTemplate.rotation = -90;
  labelTemplate.horizontalCenter = "left";
  labelTemplate.verticalCenter = "middle";
  labelTemplate.dy = 0; // moves it a bit down;
  labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.minWidth = 50;
  valueAxis.min = 0;
  valueAxis.max = 100;
  
  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.sequencedInterpolation = true;
  series.dataFields.valueY = "value";
  series.dataFields.categoryX = "category";
  series.tooltipText = "{categoryX}:\n[bold font-size: 20]{valueY}%";
  series.columns.template.strokeWidth = 0;
  
  series.tooltip.pointerOrientation = "vertical";
  
  series.columns.template.column.cornerRadiusTopLeft = 10;
  series.columns.template.column.cornerRadiusTopRight = 10;
  series.columns.template.column.fillOpacity = 1;
  
  // on hover, make corner radiuses bigger
  var hoverState = series.columns.template.column.states.create("hover");
  hoverState.properties.cornerRadiusTopLeft = 0;
  hoverState.properties.cornerRadiusTopRight = 0;
  hoverState.properties.fillOpacity = 1;
  
  series.columns.template.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });

  var title = chart.titles.create();
  title.text = "Top 5 Effective Measures\nFor Encouraging Childbearing Picked By Females\n(FPAHK)";
  title.textAlign = "middle";
  title.align = "center"
  title.fill = '#6c757d'
  title.paddingBottom = 10;
  title.fontWeight = 600;
  title.fontSize = 20;
  title.marginTop = 10;
  title.marginBottom = 10;
  
  // Cursor
  chart.cursor = new am4charts.XYCursor();
  
  }); // end am4core.ready()