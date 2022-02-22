require([
      "esri/Map",
      "esri/layers/FeatureLayer",
      "esri/views/MapView",
      "dojo/domReady!"
    ], function(Map, FeatureLayer, MapView) {

    var map = new Map({
        basemap: "gray"
    });
    
    
    var view = new MapView({
        container: "viewDiv",
        map: map,
        center:[-91.1, 38.6],
        zoom: 9
    });

    var template = { // autocasts as new PopupTemplate()
        title: "ESN: {ESN}",
        content: [{
            type: "fields",
            fieldInfos: [{
                fieldName: "MUNICIPALITY ",
                label: "Municipality: ",
                visible: true
            },
            {
                fieldName: "PSAP ",
                label: "Public-Safety Answering Point: ",
                visible: true
            }]
         }]
    };

    var symbol = {
        type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
        url: "https://cdn.iconscout.com/icon/premium/png-256-thumb/hockey-240-984443.png",
        width: "64px",
        height: "64px"
    };
    
    var renderer = {
      type: "simple",  // autocasts as new SimpleRenderer()
      symbol: symbol
    };
  
    var featureLayer = new FeatureLayer({
        url: "http://maps.stlouisco.com/arcgis/rest/services/OpenData/OpenData/FeatureServer/3",
        outFields: ["*"],
        popupTemplate: template,
        renderer:renderer
    });
  
    map.add(featureLayer);

    featureLayer.renderer = {
        type: "simple",  // autocasts as new SimpleRenderer()
        symbol: {
            type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
            size: 6,
            color: "green",
            outline: {  // autocasts as new SimpleLineSymbol()
                width: 0.5,
                color: "white"
            }
        }
    };
});
