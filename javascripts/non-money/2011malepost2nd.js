am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    am4core.options.onlyShowOnViewport = false;
    am4core.options.queue = false;

    var iconPath = "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"
    
    
    
    var chart = am4core.create("11Mpost2nd", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    //chart.logo.disabled = true;
    chart.paddingLeft = 0;
    chart.tooltipText = "[bold font-size: 20]1.09 [/][font-size: 12] Males per Female"
    chart.showTooltipOn = "always";
    chart.tooltip.getFillFromObject = false;
    chart.tooltip.background.fill = "#0f3460";
    
    chart.data = [{
        "name": "Male",
        "value1": 1090,
        "value2": 1090,
    }];
    
    var series1 = chart.series.push(new am4charts.PictorialStackedSeries());
    series1.dataFields.value = "value1";
    series1.dataFields.category = "name";
    series1.alignLabels = true;
    series1.slices.template.tooltipText = "{category}: [bold font-size: 20]{value}";
    series1.tooltip.disabled = true;

    series1.maskSprite.path = iconPath;
    series1.ticks.template.locationX = 1;
    series1.ticks.template.locationY = 0.5;
    series1.ticks.template.disabled = true;
    series1.labels.template.disabled = true;
    series1.MarginRight = 5;

    var series2 = chart.series.push(new am4charts.PictorialStackedSeries());
    series2.dataFields.value = "value2";
    series2.dataFields.category = "name";
    series2.alignLabels = true;
    series2.slices.template.tooltipText = "{category}: [bold font-size: 20]{value}";
    series2.tooltip.disabled = true;

    series2.maskSprite.path = iconPath;
    series2.ticks.template.locationX = 1;
    series2.ticks.template.locationY = 0.5;
    series2.ticks.template.disabled = true;
    series2.labels.template.disabled = true;
    
    // this makes the fills to start and end at certain location instead of taking whole picture
    series2.endLocation = 0.91;
    series2.startLocation = 1;
    // this makes initial fill animation
    series2.hiddenState.properties.endLocation = 0.09;
    series2.ticks.template.locationX = 0.7;

    series2.slicesContainer.background.fill = am4core.color("#676767")
    series2.slicesContainer.background.fillOpacity = 0.2;

    var topContainer = chart.chartContainer.createChild(am4core.Container);
    topContainer.layout = "absolute";
    topContainer.toBack();
    topContainer.paddingBottom = 15;
    topContainer.width = am4core.percent(100);

    var axisTitle = topContainer.createChild(am4core.Label);
    axisTitle.text = "2011";
    axisTitle.align = "left";
    axisTitle.paddingLeft = 10;
    axisTitle.fill='#6c757d';
    axisTitle.marginBottom = 10;
    axisTitle.fontWeight = 600;
    axisTitle.fontSize = 20;


    }); // end am4core.ready()