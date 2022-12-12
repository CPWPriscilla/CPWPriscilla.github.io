am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create map instance
    var chart = am4core.create("test", am4maps.MapChart);
    chart.geodata = am4geodata_worldLow;
    chart.projection = new am4maps.projections.Miller();
    
    // Colors
    var color1 = chart.colors.getIndex(0);
    
    chart.homeGeoPoint = {
      latitude: 28,
      longitude: 100
    }
    chart.homeZoomLevel = 3;
    chart.minZoomLevel = 3;
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["antarctica"];
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
    polygonTemplate.tooltipText = "{pop}";
   //polygonTemplate.interactionsEnabled = false;
    //polygonTemplate.propertyFields.interactionsEnabled = "hoverable";
    
    // Create hover state and set alternative fill color
    var polygonHoverState = polygonTemplate.states.create("hover");
    polygonHoverState.transitionDuration = 1400;
    polygonHoverState.properties.fill = am4core.color("#0f3460")
    // Creating a "heat rule" to modify "radius" of the bullet based
    // on value in data

    polygonSeries.data = [{
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
        "hoverable": true
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
    
     // Add image series
     var imageSeries = chart.series.push(new am4maps.MapImageSeries());
     imageSeries.dataFields.value = "value";
     imageSeries.dataFields.id = "id";

     imageSeries.tooltip.background.fill = am4core.color("#0f3460");
     imageSeries.tooltip.background.fillOpacity = 0.2;
     imageSeries.tooltip.background.stroke = am4core.color("#e94560");
     imageSeries.tooltip.showInViewport = false;
     imageSeries.mapImages.template.propertyFields.url = "url";
     
     var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
     circle.radius = 5;
     circle.fill = am4core.color("#e94560");
     circle.nonScaling = true;
     circle.applyOnClones = true;
     
     var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
     //circle2.radius = 3;
     circle2.fill = am4core.color("#e94560");
   
     
     
     circle2.events.on("inited", function(event){
       animateBullet(event.target);
     })
     
     
     function animateBullet(circle) {
         var animation = circle.animate([{ property: "scale", from: 1 / chart.zoomLevel, to: 3 / chart.zoomLevel }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
         animation.events.on("animationended", function(event){
           animateBullet(event.target.object);
         })
     }
  
     imageSeries.heatRules.push({
      target: circle,
      property: "radius",
      min:4, 
      max:6,
      dataField: "value"
    });
   
     imageSeries.heatRules.push({
       target: circle2,
       property: "radius",
       min:4, 
       max:6,
       dataField: "value"
     });
     var colorSet = new am4core.ColorSet();
     
     imageSeries.data = [{
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
         "hoverable": true
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
  
       var imageTemplate = imageSeries.mapImages.template;
      imageTemplate.nonScaling = false;
      imageTemplate.applyOnClones = true;
      var imageHoverState = imageTemplate.states.create("hover");
      imageHoverState.properties.fillOpacity = 1;
    imageTemplate.tooltipText = "{title}: {pop}";
    
    

      imageTemplate.adapter.add("tooltipY", function(tooltipY, target) {
        return -target.children.getIndex(0).radius;
      })
  
       imageTemplate.adapter.add("latitude", function(latitude, target) {
        var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
        if(polygon){
          return polygon.visualLatitude;
         }
         return latitude;
      })
      
      imageTemplate.adapter.add("longitude", function(longitude, target) {
        var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
        if(polygon){
          return polygon.visualLongitude;
         }
         return longitude;
      })
 

    }); // end am4core.ready()