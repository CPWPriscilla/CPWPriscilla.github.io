am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.unuseTheme(am4themes_myTheme3);
    // Themes end

    am4core.options.onlyShowOnViewport = false;
    
    // Create chart instance
    var chart = am4core.create("chartdivgtcl", am4charts.PieChart);
    chart.logo.disabled = true;
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "type";
    pieSeries.slices.template.propertyFields.fill = "color";
    
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
    
    // var selected;
    //  var types = [
    //{
    //   type: "Necessary\n (Click Me)",
    //   tooltip: "Necessary",
    //   percent: 11,
    //   votes: "~25",
    //   pulled: true,
    //   color: "#e07b8d",
    //   text_color: "#000000",
    //   subs:[{
    //         type: "This Year",
    //         percent: 0
    //       },{
    //         type: "Next Year",
    //         percent: 4,
    //         votes: "~9",
    //       },{
    //         type: "Year After Next",
    //         percent: 7,
    //         votes: "~16",
    //       }]
    // }
    chart.data = [
    {
      type: "Unnecessary",
      tooltip: "Unnecessary",
      percent: 33,
      votes: "~78",
      color: "#528aae",
      text_color: "#000000",
    },{
      type: "Next Year",
      tooltip: "Next Year",
      percent: 4,
      votes: "~9",
      pulled: true,
      color: "#e07b8d",
      text_color: "#000000"
    },{
      type: "Year After Next",
      tooltip: "Year After Next",
      percent: 7,
      votes: "~16",
      pulled: true,
      color: "#e07b8d",
      text_color: "#000000",
    },{
      type: "No Opinion",
      tooltip: "No Opinion",
      percent: 56,
      votes: "~132",
      color: "#2e5984",
      text_color: "#ffffff",
    }];
    
    
    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);
    
    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
      // category the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];
      pieSeries.labels.template.adapter.add("radius", function(radius, target) {
        if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
          return 0;
        }
        return radius;
      });
      
    
    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = false;
    pieSeries.labels.template.radius = am4core.percent(-40);
    pieSeries.labels.template.padding(0,0,0,0);
    pieSeries.labels.template.text = "{category}:\n[bold font-size: 20]{votes} ({value.percent}%)";
    pieSeries.labels.template.propertyFields.fill = "text_color";
    pieSeries.labels.template.textAlign = 'right';
    pieSeries.labels.template.wrap = true;

    pieSeries.labels.template.adapter.add("radius", function(radius, target) {
      if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
        return 0;
      }
      return radius;
    });
    
    pieSeries.labels.template.adapter.add("fill", function(color, target) {
      if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
        return am4core.color("#000");
      }
      return color;
    });
    
    pieSeries.slices.template.tooltipText = "{category}:\n[bold font-size: 20]{votes} ({value.percent}%)";
    
    pieSeries.ticks.template.disabled = true;

    pieSeries.slices.template.propertyFields.isActive = "pulled";

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    pieSeries.labels.template.events.on("ready", hideSmall);
    pieSeries.labels.template.events.on("visibilitychanged", hideSmall);
    
    // Create a base filter effect (as if it's not there) for the hover to return to
    var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;
    
    // Create hover state
    var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists
    
    // Slightly shift the shadow and make it more prominent on hover
    var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.2;
    hoverShadow.blur = 10;

    function hideSmall(ev) {
      if (ev.target.dataItem && (ev.target.dataItem.values.value.percent < 1)) {
        ev.target.hide();
      }
      else {
        ev.target.show();
      }
  }
    
    // Add a legend
    //chart.legend = new am4charts.Legend();

    var title = chart.titles.create();
    title.text = "Possibility of Closure in 3 Years\n(Half-day & Full-day)";
    title.align = "center"
    title.fill = '#6c757d'
    title.fontWeight = 600;
    title.fontSize = 18;
    title.marginTop = 10;
    title.marginBottom = 15;
    title.textAlign = 'middle';
    

    chart.data = generateChartData();


    function generateChartData() {
      var chartData = [];
      for (var i = 0; i < types.length; i++) {
        if (i == selected) {
          for (var x = 0; x < types[i].subs.length; x++) {
            chartData.push({
              type: types[i].subs[x].type,
              percent: types[i].subs[x].percent,
              color: types[i].color,
              text_color: types[i].text_color,
              pulled: true
            });
          }
        } else {
          chartData.push({
            type: types[i].type,
            percent: types[i].percent,
            color: types[i].color,
            text_color: types[i].text_color,
            id: i
          });
        }
      }
      return chartData;}

    pieSeries.slices.template.events.on("hit", function(event) {
      if (event.target.dataItem.dataContext.id != undefined) {
        selected = event.target.dataItem.dataContext.id;
      } else {
        selected = undefined;
      }
      chart.data = generateChartData();
    });
    
    }); // end am4core.ready()