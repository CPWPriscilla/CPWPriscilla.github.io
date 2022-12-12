am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.unuseTheme(am4themes_myTheme2);
    am4core.useTheme(am4themes_myTheme1);
    // Themes end

    am4core.options.onlyShowOnViewport = true;
    
    // Create chart instance
    var chart = am4core.create("stressor", am4charts.PieChart);
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "index";
    pieSeries.dataFields.category = "Stressor";
    
    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);
    
    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];
    
    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0,0,0,0);
    pieSeries.labels.template.text = "{category}";

    pieSeries.slices.template.tooltipText = "{category}: {value.percent}%";
    
    pieSeries.ticks.template.disabled = true;

    pieSeries.slices.template.propertyFields.isActive = "pulled";

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    
    // Create a base filter effect (as if it's not there) for the hover to return to
    var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;
    
    // Create hover state
    var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists
    
    // Slightly shift the shadow and make it more prominent on hover
    var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.2;
    hoverShadow.blur = 10;
    
    // Add a legend
    //chart.legend = new am4charts.Legend();

    var title = chart.titles.create();
    title.text = "Stressors of People in Hong Kong";
    title.align = "center"
    title.fill = '#6c757d'
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 0;

    var label = chart.createChild(am4core.Label);
    label.text = "Chart source: 360 Global Well-Being Survey, Cigna, 2022";
    label.align = "center";
    label.fontSize = 14;
    label.fontWeight = 400;
    label.fill = "#6c757d";
    
    chart.data = [{
      "Stressor": "Others",
      "index": 4
    },{
      "Stressor": "Personal Financial Situation",
      "index": 34
    },{
      "Stressor": "Future Uncertainty",
      "index": 40,
      //"pulled": true
    },{
      "Stressor": "Heavy Workload",
      "index": 22
    }];

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    }); // end am4core.ready()