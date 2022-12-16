am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme3);
    // Themes end
    
    am4core.options.onlyShowOnViewport = true;
    am4core.options.queue = false;

    var chart = am4core.create("HKMDAfactors", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.data = [
      {
        category: "Housing Shortage",
        SA: 60,
        A: 26.7,
        D: 6.3,
        SD: 2.4,
        NA: 4.6
      },
      {
        category: "Heavy Workload",
        SA: 51,
        A: 34.1,
        D: 10.6,
        SD: 3.3,
        NA: 1
      },
      {
        category: "Financial Pressure",
        SA: 56.5,
        A: 28.2,
        D: 3.5,
        SD: 0.4,
        NA: 11.4
      },
      {
        category: "Serious Pandemic",
        SA: 27.1,
        A: 43.9,
        D: 20.4,
        SD: 1.6,
        NA: 7
      },
      {
        category: "Insufficient Child Care Resources",
        SA: 27.1,
        A: 43.9,
        D: 20.8,
        SD: 1.6,
        NA: 6.6
      },
      {
        category: "The Pursuit of Freedom",
        SA: 18.8,
        A: 37.3,
        D: 26.3,
        SD: 2.4,
        NA: 15.2
      }
    ];
    
    chart.colors.step = 2;
    chart.padding(30, 30, 10, 30);
    chart.legend = new am4charts.Legend();
    chart.legend.marginTop = 40;

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;

    categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
      if (target.dataItem && target.dataItem.index & 2 == 2) {
        return dy + 30;
      }
      return dy;
    });
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.calculateTotals = true;
    valueAxis.renderer.minWidth = 50;
    
    
    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText =
      "{name}:\n[bold font-size: 20]{valueY.totalPercent.formatNumber('#.00')}%";
    series1.name = "Strong Agree";
    series1.dataFields.categoryX = "category";
    series1.dataFields.valueY = "SA";
    series1.dataFields.valueYShow = "totalPercent";
    series1.dataItems.template.locations.categoryX = 0.5;
    series1.stacked = true;
    series1.tooltip.pointerOrientation = "vertical";
    
    var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
    bullet1.interactionsEnabled = false;
    bullet1.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet1.label.fill = am4core.color("#ffffff");
    bullet1.locationY = 0.5;
    
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.columns.template.width = am4core.percent(80);
    series2.columns.template.tooltipText =
      "{name}:\n[bold font-size: 20]{valueY.totalPercent.formatNumber('#.00')}%";
    series2.name = "Agree";
    series2.dataFields.categoryX = "category";
    series2.dataFields.valueY = "A";
    series2.dataFields.valueYShow = "totalPercent";
    series2.dataItems.template.locations.categoryX = 0.5;
    series2.stacked = true;
    series2.tooltip.pointerOrientation = "vertical";
    
    var bullet2 = series2.bullets.push(new am4charts.LabelBullet());
    bullet2.interactionsEnabled = false;
    bullet2.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet2.locationY = 0.5;
    bullet2.label.fill = am4core.color("#ffffff");
    
    var series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.columns.template.width = am4core.percent(80);
    series3.columns.template.tooltipText =
      "{name}:\n[bold font-size: 20]{valueY.totalPercent.formatNumber('#.00')}%";
    series3.name = "Disagree";
    series3.dataFields.categoryX = "category";
    series3.dataFields.valueY = "D";
    series3.dataFields.valueYShow = "totalPercent";
    series3.dataItems.template.locations.categoryX = 0.5;
    series3.stacked = true;
    series3.tooltip.pointerOrientation = "vertical";

    var bullet3 = series3.bullets.push(new am4charts.LabelBullet());
    bullet3.interactionsEnabled = false;
    bullet3.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet3.locationY = 0.5;
    bullet3.label.fill = am4core.color("#ffffff");
    
    var series4 = chart.series.push(new am4charts.ColumnSeries());
    series4.columns.template.width = am4core.percent(80);
    series4.columns.template.tooltipText =
      "{name}:\n[bold font-size: 20]{valueY.totalPercent.formatNumber('#.00')}%";
    series4.name = "Strongly Disagree";
    series4.dataFields.categoryX = "category";
    series4.dataFields.valueY = "SD";
    series4.dataFields.valueYShow = "totalPercent";
    series4.dataItems.template.locations.categoryX = 0.5;
    series4.stacked = true;
    series4.tooltip.pointerOrientation = "vertical";

    var bullet4 = series4.bullets.push(new am4charts.LabelBullet());
    bullet4.interactionsEnabled = false;
    bullet4.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet4.locationY = 0.5;
    bullet4.label.fill = am4core.color("#ffffff");

    var series5 = chart.series.push(new am4charts.ColumnSeries());
    series5.columns.template.width = am4core.percent(80);
    series5.columns.template.tooltipText =
      "{name}:\n[bold font-size: 20]{valueY.totalPercent.formatNumber('#.00')}%";
    series5.name = "No Opinion";
    series5.dataFields.categoryX = "category";
    series5.dataFields.valueY = "NA";
    series5.dataFields.valueYShow = "totalPercent";
    series5.dataItems.template.locations.categoryX = 0.5;
    series5.stacked = true;
    series5.tooltip.pointerOrientation = "vertical";

    var bullet5 = series5.bullets.push(new am4charts.LabelBullet());
    bullet5.interactionsEnabled = false;
    bullet5.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet5.locationY = 0.5;
    bullet5.label.fill = am4core.color("#ffffff");

    chart.zoomOutButton.background.fill = am4core.color("#F8D9D6");
    chart.zoomOutButton.icon.stroke = am4core.color("#fff");
    chart.zoomOutButton.icon.strokeWidth = 2;
    chart.zoomOutButton.background.states.getKey("hover").properties.fill = am4core.color("#f7b6b0");
    chart.zoomOutButton.background.states.getKey("down").properties.fill = am4core.color("#f7b6b0");
    
    var title = chart.titles.create();
    title.text = "Major Influential Factors In Birth Giving";
    title.textAlign = "middle";
    title.align = "center"
    title.fill = '#6c757d'
    title.paddingBottom = 10;
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 10;
    
}); // end am4core.ready()