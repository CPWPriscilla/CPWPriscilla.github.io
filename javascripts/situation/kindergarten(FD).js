am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_myTheme);
    // Themes end

    am4core.options.onlyShowOnViewport = false;
    am4core.options.queue = false;
    
    // Create chart instance
    var chart = am4core.create("chartdivgtfd", am4charts.PieChart);
    chart.logo.disabled = true;

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "Change";
    
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
    pieSeries.labels.template.bent = false;
    pieSeries.labels.template.radius = am4core.percent(-32);
    pieSeries.labels.template.padding(0,0,0,0);
    pieSeries.labels.template.text = "{category}:\n[bold font-size: 20]{value.percent}%";
    pieSeries.labels.template.propertyFields.fill = "text_color";
    pieSeries.labels.template.textAlign = 'middle';

    pieSeries.slices.template.tooltipText = "{category}:\n[bold font-size: 20]{value.percent}%";
    
    pieSeries.ticks.template.disabled = true;

    pieSeries.slices.template.propertyFields.isActive = "pulled";

    pieSeries.labels.template.events.on("ready", hideSmall);
    pieSeries.labels.template.events.on("visibilitychanged", hideSmall);

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    function hideSmall(ev) {
      if (ev.target.dataItem && (ev.target.dataItem.values.value.percent < 1)) {
        ev.target.hide();
      }
      else {
        ev.target.show();
      }
    }
    
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
    title.text = "Change of Application Number\nin Full-day Classes";
    title.align = "center"
    title.fill = '#6c757d'
    title.fontWeight = 600;
    title.fontSize = 20;
    title.marginTop = 10;
    title.marginBottom = 20;
    title.textAlign = 'middle';
    
    chart.data = [{
      "Change": "Increased",
      "litres": 0,
    },{
      "Change": "Decreased",
      "litres": 71,
      text_color: "#000000",
      //"pulled": true
    },{
      "Change": "Unchanged",
      "litres": 16,
      text_color: "#ffffff",
    },{
      "Change": "N/A",
      "litres": 13,
      text_color: "#000000"
    }];
    
    }); // end am4core.ready()