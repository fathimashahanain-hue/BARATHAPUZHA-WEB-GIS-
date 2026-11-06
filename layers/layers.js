var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WebGISGeologyshp_2 = new ol.format.GeoJSON();
var features_WebGISGeologyshp_2 = format_WebGISGeologyshp_2.readFeatures(json_WebGISGeologyshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WebGISGeologyshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WebGISGeologyshp_2.addFeatures(features_WebGISGeologyshp_2);
var lyr_WebGISGeologyshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WebGISGeologyshp_2, 
                style: style_WebGISGeologyshp_2,
                popuplayertitle: 'WebGIS/Geology.shp',
                interactive: true,
                title: '<img src="styles/legend/WebGISGeologyshp_2.png" /> WebGIS/Geology.shp'
            });
var format_WebGISBharathapuzhashp_3 = new ol.format.GeoJSON();
var features_WebGISBharathapuzhashp_3 = format_WebGISBharathapuzhashp_3.readFeatures(json_WebGISBharathapuzhashp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WebGISBharathapuzhashp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WebGISBharathapuzhashp_3.addFeatures(features_WebGISBharathapuzhashp_3);
var lyr_WebGISBharathapuzhashp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WebGISBharathapuzhashp_3, 
                style: style_WebGISBharathapuzhashp_3,
                popuplayertitle: 'WebGIS/Bharathapuzha.shp',
                interactive: true,
                title: '<img src="styles/legend/WebGISBharathapuzhashp_3.png" /> WebGIS/Bharathapuzha.shp'
            });
var format_WebGISRoadshp_4 = new ol.format.GeoJSON();
var features_WebGISRoadshp_4 = format_WebGISRoadshp_4.readFeatures(json_WebGISRoadshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WebGISRoadshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WebGISRoadshp_4.addFeatures(features_WebGISRoadshp_4);
var lyr_WebGISRoadshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WebGISRoadshp_4, 
                style: style_WebGISRoadshp_4,
                popuplayertitle: 'WebGIS/Road.shp',
                interactive: true,
                title: '<img src="styles/legend/WebGISRoadshp_4.png" /> WebGIS/Road.shp'
            });
var format_waterbody_5 = new ol.format.GeoJSON();
var features_waterbody_5 = format_waterbody_5.readFeatures(json_waterbody_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterbody_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterbody_5.addFeatures(features_waterbody_5);
var lyr_waterbody_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterbody_5, 
                style: style_waterbody_5,
                popuplayertitle: 'water body',
                interactive: false,
                title: '<img src="styles/legend/waterbody_5.png" /> water body'
            });
var format_checkdam_clipped_6 = new ol.format.GeoJSON();
var features_checkdam_clipped_6 = format_checkdam_clipped_6.readFeatures(json_checkdam_clipped_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_checkdam_clipped_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_checkdam_clipped_6.addFeatures(features_checkdam_clipped_6);
var lyr_checkdam_clipped_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_checkdam_clipped_6, 
                style: style_checkdam_clipped_6,
                popuplayertitle: 'check dam_clipped',
                interactive: false,
                title: '<img src="styles/legend/checkdam_clipped_6.png" /> check dam_clipped'
            });
var format_streamclipped_7 = new ol.format.GeoJSON();
var features_streamclipped_7 = format_streamclipped_7.readFeatures(json_streamclipped_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streamclipped_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streamclipped_7.addFeatures(features_streamclipped_7);
var lyr_streamclipped_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_streamclipped_7, 
                style: style_streamclipped_7,
                popuplayertitle: 'stream clipped',
                interactive: false,
                title: '<img src="styles/legend/streamclipped_7.png" /> stream clipped'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_WebGISGeologyshp_2.setVisible(true);lyr_WebGISBharathapuzhashp_3.setVisible(true);lyr_WebGISRoadshp_4.setVisible(true);lyr_waterbody_5.setVisible(true);lyr_checkdam_clipped_6.setVisible(true);lyr_streamclipped_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_WebGISGeologyshp_2,lyr_WebGISBharathapuzhashp_3,lyr_WebGISRoadshp_4,lyr_waterbody_5,lyr_checkdam_clipped_6,lyr_streamclipped_7];
lyr_WebGISGeologyshp_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_WebGISBharathapuzhashp_3.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_WebGISRoadshp_4.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_waterbody_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_checkdam_clipped_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'name1': 'name1', 'Photo': 'Photo', });
lyr_streamclipped_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_WebGISGeologyshp_2.set('fieldImages', {'ROCK_GROUP': '', 'NAME': '', });
lyr_WebGISBharathapuzhashp_3.set('fieldImages', {'PERIMETER': '', 'KERWSDRP_': '', 'KERWSDRP_I': '', 'WSCODE': '', 'WSCODE1': '', 'NRIS': '', 'WSNAME': '', 'AREA': '', });
lyr_WebGISRoadshp_4.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_waterbody_5.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Id': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_checkdam_clipped_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'name1': 'TextEdit', 'Photo': 'TextEdit', });
lyr_streamclipped_7.set('fieldImages', {'fid': '', 'OBJECTID': '', 'ORDER1': '', 'Shape_Leng': '', 'LENGTH': '', });
lyr_WebGISGeologyshp_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_WebGISBharathapuzhashp_3.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'inline label - always visible', 'AREA': 'no label', });
lyr_WebGISRoadshp_4.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_waterbody_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_checkdam_clipped_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'name1': 'no label', 'Photo': 'no label', });
lyr_streamclipped_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_streamclipped_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});