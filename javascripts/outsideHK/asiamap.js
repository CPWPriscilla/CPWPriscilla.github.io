am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    am4core.options.onlyShowOnViewport = true;
    
    // Create map instance
    var chart = am4core.create("asiamap", am4maps.MapChart);
    chart.geodata = am4geodata_worldLow;
    chart.projection = new am4maps.projections.Miller();
    
    // Colors
    var color1 = chart.colors.getIndex(0);
    
    chart.homeGeoPoint = {
      latitude: 30,
      longitude: 110
    }
    chart.homeZoomLevel = 2;
    chart.minZoomLevel = 1.5;

    var title = chart.titles.create();
    title.text = "Birth Rate in Various Places in 2021";
    title.align = "center"
    title.fill = '#6c757d'
    title.fontWeight = 600;
    title.fontSize = 18;
    title.marginTop = 10;
    title.marginBottom = 10;
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;
    polygonSeries.calculateVisualCenter = true;
    polygonSeries.mapPolygons.template.tooltipPosition = "fixed";
    
    // Zoom control
    chart.zoomControl = new am4maps.ZoomControl();

    var homeButton = new am4core.Button();
    homeButton.events.on("hit", function() {
      chart.goHome();
    });

    homeButton.icon = new am4core.Sprite();
    homeButton.padding(7, 5, 7, 5);
    homeButton.width = 30;
    homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
    homeButton.marginBottom = 10;
    homeButton.parent = chart.zoomControl;
    homeButton.insertBefore(chart.zoomControl.plusButton);

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    //polygonTemplate.fill = am4core.color("#004216");
    polygonTemplate.polygon.fillOpacity = 0.5;
    polygonTemplate.tooltipPosition = "fixed";
    polygonTemplate.interactionsEnabled = false;
    polygonTemplate.propertyFields.interactionsEnabled = "hoverable";
    polygonTemplate.propertyFields.fill = "fill";
    
    polygonSeries.data = [{
      "id":"HK",
      "title": "Hong Kong",
      "fill":am4core.color("#0f3460"),
    },{
      "id":"TW",
      "title": "Taiwan",
      "fill":am4core.color("#0f3460"),
    },{
      "id":"CN",
      "title": "Mainland China",
      "fill":am4core.color("#0f3460"),
    },{
      "id":"SG",
      "title": "Singapore",
      "fill":am4core.color("#0f3460"),
    },{
      "id":"JP",
      "title": "Japan",
      "fill":am4core.color("#0f3460"),
    },{
      "id":"KR",
      "title": "South Korea",
      "fill":am4core.color("#0f3460"),
    }];

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#0f3460");

    // Pins
    var imageSeries1 = chart.series.push(new am4maps.MapImageSeries());
    var imageTemplate1 = imageSeries1.mapImages.template;
    imageTemplate1.propertyFields.longitude = "longitude";
    imageTemplate1.propertyFields.latitude = "latitude";
    imageTemplate1.nonScaling = true;
    
    // Creating a pin bullet
    var pin = imageTemplate1.createChild(am4plugins_bullets.PinBullet);
    
    // Configuring pin appearance
    pin.background.fill = am4core.color("#0f3460");
    pin.background.pointerBaseWidth = 1;
    pin.background.pointerLength = 100;
    pin.background.propertyFields.pointerLength = "length";
    pin.background.fillOpacity = 0.5;
    pin.circle.fill = pin.background.fill;
    pin.circle.fillOpacity = 0.5;
    pin.label = new am4core.Label();
    pin.label.text = "{value}";
    pin.label.fill = am4core.color("#fff");

    
    var label = pin.createChild(am4core.Label);
    label.text = "{title}";
    label.fontWeight = "bold";
    label.propertyFields.dy = "length";
    label.verticalCenter = "middle";
    label.fill = am4core.color("#0f3460");
    label.adapter.add("dy", function(dy) {
      return (20 + dy) * -1;
    });
    
    // Creating a "heat rule" to modify "radius" of the bullet based
    // on value in data
    imageSeries1.heatRules.push({
      "target": pin.background,
      "property": "radius",
      "min": 20,
      "max": 30,
      "dataField": "value"
    });
    
    imageSeries1.heatRules.push({
      "target": label,
      "property": "dx",
      "min": 30,
      "max": 40,
      "dataField": "value"
    });
    
    imageSeries1.heatRules.push({
      "target": label,
      "property": "paddingBottom",
      "min": 0,
      "max": 10,
      "dataField": "value"
    });
    
    // Pin data
    imageSeries1.data = [{
      "latitude": 40,
      "longitude": 95,
      "value": 1.94,
      "title": "Asia",
      "length": 80
    }, {
      "latitude": 0,
      "longitude": 25,
      "value": 4.31,
      "title": "Africa",
      "length": 40
    }, {
      "latitude": 43,
      "longitude": 5,
      "value": 1.48,
      "title": "Europe",
      "length": 100
    }, {
      "latitude": 54.526476,
      "longitude": -105.254937,
      "value": 1.64,
      "title": "North America",
      "length": 80
    }, {
      "latitude": -8.783195,
      "longitude": -55.491477,
      "value": 1.81,
      "title": "South America",
      "length": 80
    }, {
      "latitude": -22.735910,
      "longitude": 140.018765,
      "value": 2.15,
      "title": "Oceania",
      "length": 80
    }];
    
    // Add image series
    var imageSeries2 = chart.series.push(new am4maps.MapImageSeries());
    imageSeries2.dataFields.value = "value";
    //imageSeries2.mapImages.template.propertyFields.longitude = "longitude";
    //imageSeries2.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries2.mapImages.template.tooltipText = "{title}: {pop}";
    imageSeries2.mapImages.template.propertyFields.url = "url";
    imageSeries2.mapImages.template.propertyFields.href = "href";

    imageSeries2.tooltip.background.fill = am4core.color("#e94560");
    imageSeries2.tooltip.getFillFromObject = false;
    imageSeries2.tooltip.background.fillOpacity = 0.5;
    imageSeries2.tooltip.background.stroke = am4core.color("#fff");
    imageSeries2.tooltip.label.fill = am4core.color("#fff")


    var circle = imageSeries2.mapImages.template.createChild(am4core.Circle);
    circle.radius = 5;
    circle.fill = am4core.color("#df4e71");
    circle.nonScaling = true;
    circle.applyOnClones = true;
    
    var circle2 = imageSeries2.mapImages.template.createChild(am4core.Circle);
    //circle2.radius = 3;
    circle2.fill = am4core.color("#df4e71");
  
    
    
    circle2.events.on("inited", function(event){
      animateBullet(event.target);
    })
    
    
    function animateBullet(circle) {
        var animation = circle.animate([{ property: "scale", from: 1 / chart.zoomLevel, to: 3 / chart.zoomLevel }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
        animation.events.on("animationended", function(event){
          animateBullet(event.target.object);
        })
    }

    imageSeries2.heatRules.push({
      target: circle,
      property: "radius",
      min:4, 
      max:6,
      dataField: "value"
      });
  
    imageSeries2.heatRules.push({
      target: circle2,
      property: "radius",
      min:4, 
      max:6,
      dataField: "value"
    });
    var colorSet = new am4core.ColorSet();
    
    imageSeries2.data = [{
        "id":"HK",
        "title": "Hong Kong",
        "value":0.77,
        "pop":0.77,
        //"latitude": 22.3193,
        //"longitude": 114.1694,
        "length": 50,
        "hoverable": true
        //"color":colorSet.next()
      },{
        "id":"TW",
        "title": "Taiwan",
        "value": 0.98,
        "pop":0.98, 
        //"latitude": 23.6978,
        //"longitude": 120.9605,
        "length": 80,
        "hoverable": true
        //"color":colorSet.next()
      },{
        "id":"CN",
        "title": "Mainland China",
        "value": 1.15,
        "pop": 1.15, 
        //"latitude": 39.916668,
        //"longitude": 116.383331,
        "length": 120,
        "hoverable": true,
        //"color":colorSet.next()
      },{
        "id":"SG",
        "title": "Singapore",
        "value":1.12,
        "pop":1.12,
        //"latitude": 1.3521,
        //"longitude": 103.8198,
        "length": 150,
        "hoverable": true
        //"color":colorSet.next()
      },{
        "id":"JP",
        "title": "Japan",
        "value": 1.3,
        "pop": 1.3,
        //"latitude": 36.2048,
        //"longitude": 138.2529,
        "length": 100,
        "hoverable": true
        //"color":colorSet.next()
      },{
        "id":"KR",
        "title": "South Korea",
        "value":0.81,
        "pop":0.81,
        //"latitude": 35.9078,
        //"longitude": 127.7660,
        "length": 50,
        "hoverable": true
        //"color":colorSet.next()
      }];

      var imageTemplate2 = imageSeries2.mapImages.template;
      imageTemplate2.nonScaling = false;
      imageTemplate2.applyOnClones = true;

      imageTemplate2.adapter.add("tooltipY", function(tooltipY, target) {
        return -target.children.getIndex(0).radius;
      })

      imageTemplate2.adapter.add("latitude", function(latitude, target) {
        var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
        if(polygon){
          return polygon.visualLatitude;
        }
        return latitude;
      })
      
      imageTemplate2.adapter.add("longitude", function(longitude, target) {
        var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
        if(polygon){
          return polygon.visualLongitude;
        }
        return longitude;
      })

    }); // end am4core.ready()