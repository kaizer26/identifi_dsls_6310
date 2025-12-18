var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DaftarSampelSLSSUPAS25_1 = new ol.format.GeoJSON();
var features_DaftarSampelSLSSUPAS25_1 = format_DaftarSampelSLSSUPAS25_1.readFeatures(json_DaftarSampelSLSSUPAS25_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaftarSampelSLSSUPAS25_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaftarSampelSLSSUPAS25_1.addFeatures(features_DaftarSampelSLSSUPAS25_1);
var lyr_DaftarSampelSLSSUPAS25_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaftarSampelSLSSUPAS25_1, 
                style: style_DaftarSampelSLSSUPAS25_1,
                popuplayertitle: 'Daftar Sampel SLS SUPAS 25',
                interactive: true,
                title: '<img src="styles/legend/DaftarSampelSLSSUPAS25_1.png" /> Daftar Sampel SLS SUPAS 25'
            });
var format_DaftarSampelSLSSAKERNAS0825_2 = new ol.format.GeoJSON();
var features_DaftarSampelSLSSAKERNAS0825_2 = format_DaftarSampelSLSSAKERNAS0825_2.readFeatures(json_DaftarSampelSLSSAKERNAS0825_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaftarSampelSLSSAKERNAS0825_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaftarSampelSLSSAKERNAS0825_2.addFeatures(features_DaftarSampelSLSSAKERNAS0825_2);
var lyr_DaftarSampelSLSSAKERNAS0825_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaftarSampelSLSSAKERNAS0825_2, 
                style: style_DaftarSampelSLSSAKERNAS0825_2,
                popuplayertitle: 'Daftar Sampel SLS SAKERNAS 0825',
                interactive: true,
                title: '<img src="styles/legend/DaftarSampelSLSSAKERNAS0825_2.png" /> Daftar Sampel SLS SAKERNAS 0825'
            });
var format_DaftarSampelSLSUBINAN1225_3 = new ol.format.GeoJSON();
var features_DaftarSampelSLSUBINAN1225_3 = format_DaftarSampelSLSUBINAN1225_3.readFeatures(json_DaftarSampelSLSUBINAN1225_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaftarSampelSLSUBINAN1225_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaftarSampelSLSUBINAN1225_3.addFeatures(features_DaftarSampelSLSUBINAN1225_3);
var lyr_DaftarSampelSLSUBINAN1225_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaftarSampelSLSUBINAN1225_3, 
                style: style_DaftarSampelSLSUBINAN1225_3,
                popuplayertitle: 'Daftar Sampel SLS UBINAN 1225',
                interactive: true,
                title: '<img src="styles/legend/DaftarSampelSLSUBINAN1225_3.png" /> Daftar Sampel SLS UBINAN 1225'
            });
var format_DaftarSampelSLSSNLIK_4 = new ol.format.GeoJSON();
var features_DaftarSampelSLSSNLIK_4 = format_DaftarSampelSLSSNLIK_4.readFeatures(json_DaftarSampelSLSSNLIK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaftarSampelSLSSNLIK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaftarSampelSLSSNLIK_4.addFeatures(features_DaftarSampelSLSSNLIK_4);
var lyr_DaftarSampelSLSSNLIK_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaftarSampelSLSSNLIK_4, 
                style: style_DaftarSampelSLSSNLIK_4,
                popuplayertitle: 'Daftar Sampel SLS SNLIK',
                interactive: true,
                title: '<img src="styles/legend/DaftarSampelSLSSNLIK_4.png" /> Daftar Sampel SLS SNLIK'
            });
var format_BatasSLS_5 = new ol.format.GeoJSON();
var features_BatasSLS_5 = format_BatasSLS_5.readFeatures(json_BatasSLS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasSLS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasSLS_5.addFeatures(features_BatasSLS_5);
var lyr_BatasSLS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasSLS_5, 
                style: style_BatasSLS_5,
                popuplayertitle: 'Batas SLS',
                interactive: true,
                title: '<img src="styles/legend/BatasSLS_5.png" /> Batas SLS'
            });
var format_BatasDesa_6 = new ol.format.GeoJSON();
var features_BatasDesa_6 = format_BatasDesa_6.readFeatures(json_BatasDesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_6.addFeatures(features_BatasDesa_6);
var lyr_BatasDesa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_6, 
                style: style_BatasDesa_6,
                popuplayertitle: 'Batas Desa',
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_6.png" /> Batas Desa'
            });
var format_BatasKecamatan_7 = new ol.format.GeoJSON();
var features_BatasKecamatan_7 = format_BatasKecamatan_7.readFeatures(json_BatasKecamatan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_7.addFeatures(features_BatasKecamatan_7);
var lyr_BatasKecamatan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_7, 
                style: style_BatasKecamatan_7,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_7.png" /> Batas Kecamatan'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_DaftarSampelSLSSUPAS25_1.setVisible(true);lyr_DaftarSampelSLSSAKERNAS0825_2.setVisible(true);lyr_DaftarSampelSLSUBINAN1225_3.setVisible(true);lyr_DaftarSampelSLSSNLIK_4.setVisible(true);lyr_BatasSLS_5.setVisible(true);lyr_BatasDesa_6.setVisible(true);lyr_BatasKecamatan_7.setVisible(false);
var layersList = [lyr_GoogleHybrid_0,lyr_DaftarSampelSLSSUPAS25_1,lyr_DaftarSampelSLSSAKERNAS0825_2,lyr_DaftarSampelSLSUBINAN1225_3,lyr_DaftarSampelSLSSNLIK_4,lyr_BatasSLS_5,lyr_BatasDesa_6,lyr_BatasKecamatan_7];
lyr_DaftarSampelSLSSUPAS25_1.set('fieldAliases', {'fid': 'fid', 'idsls': 'idsls', 'idsubsls': 'idsubsls', 'kdprov': 'kdprov', 'nmprov': 'nmprov', 'kdkab': 'kdkab', 'nmkab': 'nmkab', 'kdkec': 'kdkec', 'nmkec': 'nmkec', 'kddesa': 'kddesa', 'nmdesa': 'nmdesa', 'kdsls': 'kdsls', 'kdsubsls': 'kdsubsls', 'nmsls': 'nmsls', 'is_konsenrtasi': 'is_konsenrtasi', 'gid': 'gid', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'BTT': 'BTT', 'BKU': 'BKU', 'TOTAL_MUATAN': 'TOTAL_MUATAN', });
lyr_DaftarSampelSLSSAKERNAS0825_2.set('fieldAliases', {'fid': 'fid', 'idsls': 'idsls', 'idsubsls': 'idsubsls', 'kdprov': 'kdprov', 'nmprov': 'nmprov', 'kdkab': 'kdkab', 'nmkab': 'nmkab', 'kdkec': 'kdkec', 'nmkec': 'nmkec', 'kddesa': 'kddesa', 'nmdesa': 'nmdesa', 'kdsls': 'kdsls', 'kdsubsls': 'kdsubsls', 'nmsls': 'nmsls', 'is_konsenrtasi': 'is_konsenrtasi', 'gid': 'gid', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'BTT': 'BTT', 'BKU': 'BKU', 'TOTAL_MUATAN': 'TOTAL_MUATAN', });
lyr_DaftarSampelSLSUBINAN1225_3.set('fieldAliases', {'fid': 'fid', 'idsls': 'idsls', 'idsubsls': 'idsubsls', 'kdprov': 'kdprov', 'nmprov': 'nmprov', 'kdkab': 'kdkab', 'nmkab': 'nmkab', 'kdkec': 'kdkec', 'nmkec': 'nmkec', 'kddesa': 'kddesa', 'nmdesa': 'nmdesa', 'kdsls': 'kdsls', 'kdsubsls': 'kdsubsls', 'nmsls': 'nmsls', 'is_konsenrtasi': 'is_konsenrtasi', 'gid': 'gid', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'BTT': 'BTT', 'BKU': 'BKU', 'TOTAL_MUATAN': 'TOTAL_MUATAN', });
lyr_DaftarSampelSLSSNLIK_4.set('fieldAliases', {'fid': 'fid', 'idsls': 'idsls', 'idsubsls': 'idsubsls', 'kdprov': 'kdprov', 'nmprov': 'nmprov', 'kdkab': 'kdkab', 'nmkab': 'nmkab', 'kdkec': 'kdkec', 'nmkec': 'nmkec', 'kddesa': 'kddesa', 'nmdesa': 'nmdesa', 'kdsls': 'kdsls', 'kdsubsls': 'kdsubsls', 'nmsls': 'nmsls', 'is_konsenrtasi': 'is_konsenrtasi', 'gid': 'gid', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'BTT': 'BTT', 'BKU': 'BKU', 'TOTAL_MUATAN': 'TOTAL_MUATAN', });
lyr_BatasSLS_5.set('fieldAliases', {'fid': 'fid', 'idsls': 'idsls', 'idsubsls': 'idsubsls', 'kdprov': 'kdprov', 'nmprov': 'nmprov', 'kdkab': 'kdkab', 'nmkab': 'nmkab', 'kdkec': 'kdkec', 'nmkec': 'nmkec', 'kddesa': 'kddesa', 'nmdesa': 'nmdesa', 'kdsls': 'kdsls', 'kdsubsls': 'kdsubsls', 'nmsls': 'nmsls', 'is_konsenrtasi': 'is_konsenrtasi', 'gid': 'gid', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'BTT': 'BTT', 'BKU': 'BKU', 'TOTAL_MUATAN': 'TOTAL_MUATAN', });
lyr_BatasDesa_6.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kddesa': 'kddesa', 'iddesa': 'iddesa', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'layer': 'layer', 'path': 'path', 'idkec': 'idkec', });
lyr_BatasKecamatan_7.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'layer': 'layer', 'path': 'path', 'idkec': 'idkec', });
lyr_DaftarSampelSLSSUPAS25_1.set('fieldImages', {'fid': 'Range', 'idsls': 'TextEdit', 'idsubsls': 'TextEdit', 'kdprov': 'TextEdit', 'nmprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmkec': 'TextEdit', 'kddesa': 'TextEdit', 'nmdesa': 'TextEdit', 'kdsls': 'TextEdit', 'kdsubsls': 'TextEdit', 'nmsls': 'TextEdit', 'is_konsenrtasi': 'Range', 'gid': 'Range', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'BTT': 'Range', 'BKU': 'Range', 'TOTAL_MUATAN': 'Range', });
lyr_DaftarSampelSLSSAKERNAS0825_2.set('fieldImages', {'fid': 'Range', 'idsls': 'TextEdit', 'idsubsls': 'TextEdit', 'kdprov': 'TextEdit', 'nmprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmkec': 'TextEdit', 'kddesa': 'TextEdit', 'nmdesa': 'TextEdit', 'kdsls': 'TextEdit', 'kdsubsls': 'TextEdit', 'nmsls': 'TextEdit', 'is_konsenrtasi': 'Range', 'gid': 'Range', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'BTT': 'Range', 'BKU': 'Range', 'TOTAL_MUATAN': 'Range', });
lyr_DaftarSampelSLSUBINAN1225_3.set('fieldImages', {'fid': 'Range', 'idsls': 'TextEdit', 'idsubsls': 'TextEdit', 'kdprov': 'TextEdit', 'nmprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmkec': 'TextEdit', 'kddesa': 'TextEdit', 'nmdesa': 'TextEdit', 'kdsls': 'TextEdit', 'kdsubsls': 'TextEdit', 'nmsls': 'TextEdit', 'is_konsenrtasi': 'Range', 'gid': 'Range', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'BTT': 'Range', 'BKU': 'Range', 'TOTAL_MUATAN': 'Range', });
lyr_DaftarSampelSLSSNLIK_4.set('fieldImages', {'fid': 'Range', 'idsls': 'TextEdit', 'idsubsls': 'TextEdit', 'kdprov': 'TextEdit', 'nmprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmkec': 'TextEdit', 'kddesa': 'TextEdit', 'nmdesa': 'TextEdit', 'kdsls': 'TextEdit', 'kdsubsls': 'TextEdit', 'nmsls': 'TextEdit', 'is_konsenrtasi': 'Range', 'gid': 'Range', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'BTT': 'Range', 'BKU': 'Range', 'TOTAL_MUATAN': 'Range', });
lyr_BatasSLS_5.set('fieldImages', {'fid': 'Range', 'idsls': 'TextEdit', 'idsubsls': 'TextEdit', 'kdprov': 'TextEdit', 'nmprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmkec': 'TextEdit', 'kddesa': 'TextEdit', 'nmdesa': 'TextEdit', 'kdsls': 'TextEdit', 'kdsubsls': 'TextEdit', 'nmsls': 'TextEdit', 'is_konsenrtasi': 'Range', 'gid': 'Range', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'BTT': 'Range', 'BKU': 'Range', 'TOTAL_MUATAN': 'Range', });
lyr_BatasDesa_6.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kddesa': 'TextEdit', 'iddesa': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'idkec': 'TextEdit', });
lyr_BatasKecamatan_7.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'idkec': 'TextEdit', });
lyr_DaftarSampelSLSSUPAS25_1.set('fieldLabels', {'fid': 'hidden field', 'idsls': 'hidden field', 'idsubsls': 'inline label - visible with data', 'kdprov': 'hidden field', 'nmprov': 'hidden field', 'kdkab': 'hidden field', 'nmkab': 'hidden field', 'kdkec': 'hidden field', 'nmkec': 'hidden field', 'kddesa': 'hidden field', 'nmdesa': 'hidden field', 'kdsls': 'hidden field', 'kdsubsls': 'hidden field', 'nmsls': 'inline label - visible with data', 'is_konsenrtasi': 'hidden field', 'gid': 'hidden field', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'BTT': 'hidden field', 'BKU': 'hidden field', 'TOTAL_MUATAN': 'hidden field', });
lyr_DaftarSampelSLSSAKERNAS0825_2.set('fieldLabels', {'fid': 'hidden field', 'idsls': 'hidden field', 'idsubsls': 'inline label - visible with data', 'kdprov': 'hidden field', 'nmprov': 'hidden field', 'kdkab': 'hidden field', 'nmkab': 'hidden field', 'kdkec': 'hidden field', 'nmkec': 'hidden field', 'kddesa': 'hidden field', 'nmdesa': 'hidden field', 'kdsls': 'hidden field', 'kdsubsls': 'hidden field', 'nmsls': 'inline label - visible with data', 'is_konsenrtasi': 'hidden field', 'gid': 'hidden field', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'BTT': 'hidden field', 'BKU': 'hidden field', 'TOTAL_MUATAN': 'hidden field', });
lyr_DaftarSampelSLSUBINAN1225_3.set('fieldLabels', {'fid': 'hidden field', 'idsls': 'hidden field', 'idsubsls': 'inline label - visible with data', 'kdprov': 'hidden field', 'nmprov': 'hidden field', 'kdkab': 'hidden field', 'nmkab': 'hidden field', 'kdkec': 'hidden field', 'nmkec': 'hidden field', 'kddesa': 'hidden field', 'nmdesa': 'hidden field', 'kdsls': 'hidden field', 'kdsubsls': 'hidden field', 'nmsls': 'inline label - visible with data', 'is_konsenrtasi': 'hidden field', 'gid': 'hidden field', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'BTT': 'hidden field', 'BKU': 'hidden field', 'TOTAL_MUATAN': 'hidden field', });
lyr_DaftarSampelSLSSNLIK_4.set('fieldLabels', {'fid': 'hidden field', 'idsls': 'hidden field', 'idsubsls': 'inline label - visible with data', 'kdprov': 'hidden field', 'nmprov': 'hidden field', 'kdkab': 'hidden field', 'nmkab': 'hidden field', 'kdkec': 'hidden field', 'nmkec': 'hidden field', 'kddesa': 'hidden field', 'nmdesa': 'hidden field', 'kdsls': 'hidden field', 'kdsubsls': 'hidden field', 'nmsls': 'inline label - visible with data', 'is_konsenrtasi': 'hidden field', 'gid': 'hidden field', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'BTT': 'hidden field', 'BKU': 'hidden field', 'TOTAL_MUATAN': 'hidden field', });
lyr_BatasSLS_5.set('fieldLabels', {'fid': 'hidden field', 'idsls': 'hidden field', 'idsubsls': 'header label - always visible', 'kdprov': 'hidden field', 'nmprov': 'hidden field', 'kdkab': 'hidden field', 'nmkab': 'hidden field', 'kdkec': 'hidden field', 'nmkec': 'inline label - visible with data', 'kddesa': 'hidden field', 'nmdesa': 'inline label - visible with data', 'kdsls': 'hidden field', 'kdsubsls': 'hidden field', 'nmsls': 'inline label - visible with data', 'is_konsenrtasi': 'hidden field', 'gid': 'hidden field', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'BTT': 'hidden field', 'BKU': 'hidden field', 'TOTAL_MUATAN': 'hidden field', });
lyr_BatasDesa_6.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'kdprov': 'hidden field', 'kdkab': 'hidden field', 'kdkec': 'hidden field', 'kddesa': 'hidden field', 'iddesa': 'hidden field', 'nmprov': 'hidden field', 'nmkab': 'hidden field', 'nmkec': 'header label - always visible', 'nmdesa': 'header label - always visible', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'idkec': 'hidden field', });
lyr_BatasKecamatan_7.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'kdprov': 'hidden field', 'kdkab': 'hidden field', 'kdkec': 'hidden field', 'nmprov': 'hidden field', 'nmkab': 'hidden field', 'nmkec': 'header label - always visible', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'idkec': 'hidden field', });
lyr_BatasKecamatan_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});