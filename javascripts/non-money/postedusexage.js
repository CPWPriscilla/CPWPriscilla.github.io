am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.unuseTheme(am4themes_myTheme2)
    am4core.useTheme(am4themes_myTheme1);
    // Themes end

    am4core.options.onlyShowOnViewport = true;
    am4core.options.queue = false;
    
     // Create chart instance
    var chart = am4core.create("postedusexage", am4charts.XYChart);
    
    // Add data
    chart.data = [{
      "age": "15-19",
      "female": 24.3,
      "male": 19.5
    },{
      "age": "20-29",
      "female": 229.2,
      "male": 190.6
    },{
      "age": "30-39",
      "female": 233.4,
      "male": 204.9
    },{
      "age": "40-49",
      "female": 170.8,
      "male": 164.4
    }];
    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "age";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.title.text = "Age Group";
    //categoryAxis.title.fontWeight = 800;
    
    var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
    valueAxis.renderer.opposite = false;
    
    
    // Create series
    function createSeries(field, name) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "age";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold font-size: 20]{valueX}[/]";
      series.columns.template.height = am4core.percent(100);
      series.sequencedInterpolation = true;

      var valueLabel = series.bullets.push(new am4charts.LabelBullet());
      valueLabel.label.text = "{valueX}";
      valueLabel.label.horizontalCenter = "left";
      valueLabel.label.dx = 10;
      valueLabel.label.hideOversized = false;
      valueLabel.label.truncate = false;
    
      var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
      categoryLabel.label.text = "{name}";
      categoryLabel.label.horizontalCenter = "right";
      categoryLabel.label.dx = -10;
      categoryLabel.label.fill = am4core.color("#fff");
      categoryLabel.label.hideOversized = false;
      categoryLabel.label.truncate = false;
    }

    createSeries("male", "Male");
    createSeries("female", "Female");

    var label1 = chart.chartContainer.createChild(am4core.Label);
    label1.text = "Thousands";
    label1.align = "right";
    label1.fontSize = 15;

    var title = chart.titles.create();
    title.text = "Population Aged Below 50 with Academic Degree Level in 2021";
    title.align = "center"
    title.fill = '#6c757d'
    title.paddingBottom = 10;
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 10;
    
    }); // end am4core.ready()