am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.unuseTheme(am4themes_myTheme1);
    am4core.unuseTheme(am4themes_myTheme2);
    am4core.useTheme(am4themes_myTheme3);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("psyimpact1", am4charts.XYChart);
    
    // Add data
    chart.data = [{
      "category": "Reduced Social Interaction",
      "value": 78.6
    }, {
      "category": "Worries on Infection Risk of Family / Themselves",
      "value": 75.1
    }, {
      "category": "Reduced Outdoor Activities",
      "value": 74
    }, {
      "category": "Reduced Exercises",
      "value": 66.5
    }, {
      "category": "Worries on the COVID Development",
      "value": 57
    }, {
      "category": "Pressure of Taking Care the Family",
      "value": 41.9
    }, {
      "category": "Working From Home",
      "value": 31.6
    }, {
      "category": "Reduced Income",
      "value": 30.5
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
    labelTemplate.fill = 'white'
    labelTemplate.rotation = -90;
    labelTemplate.horizontalCenter = "left";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.dy = 0; // moves it a bit down;
    labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;
    valueAxis.min = 0;
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";
    series.tooltipText = "{categoryX}: [bold font-size: 20]{valueY}%";
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
    title.text = "Impacts of COVID on Employed People";
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