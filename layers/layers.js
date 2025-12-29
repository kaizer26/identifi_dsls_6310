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
var format_DaftarSampelSLSSAKERNAS250825_2 = new ol.format.GeoJSON();
var features_DaftarSampelSLSSAKERNAS250825_2 = format_DaftarSampelSLSSAKERNAS250825_2.readFeatures(json_DaftarSampelSLSSAKERNAS250825_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaftarSampelSLSSAKERNAS250825_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaftarSampelSLSSAKERNAS250825_2.addFeatures(features_DaftarSampelSLSSAKERNAS250825_2);
var lyr_DaftarSampelSLSSAKERNAS250825_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaftarSampelSLSSAKERNAS250825_2, 
                style: style_DaftarSampelSLSSAKERNAS250825_2,
                popuplayertitle: 'Daftar Sampel SLS SAKERNAS25 0825',
                interactive: true,
                title: '<img src="styles/legend/DaftarSampelSLSSAKERNAS250825_2.png" /> Daftar Sampel SLS SAKERNAS25 0825'
            });
var format_DaftarSampelSLSSAKERNAS261225_3 = new ol.format.GeoJSON();
var features_DaftarSampelSLSSAKERNAS261225_3 = format_DaftarSampelSLSSAKERNAS261225_3.readFeatures(json_DaftarSampelSLSSAKERNAS261225_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaftarSampelSLSSAKERNAS261225_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaftarSampelSLSSAKERNAS261225_3.addFeatures(features_DaftarSampelSLSSAKERNAS261225_3);
var lyr_DaftarSampelSLSSAKERNAS261225_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaftarSampelSLSSAKERNAS261225_3, 
                style: style_DaftarSampelSLSSAKERNAS261225_3,
                popuplayertitle: 'Daftar Sampel SLS SAKERNAS26 1225',
                interactive: true,
                title: '<img src="styles/legend/DaftarSampelSLSSAKERNAS261225_3.png" /> Daftar Sampel SLS SAKERNAS26 1225'
            });
var format_DaftarSampelSLSUBINAN1225_4 = new ol.format.GeoJSON();
var features_DaftarSampelSLSUBINAN1225_4 = format_DaftarSampelSLSUBINAN1225_4.readFeatures(json_DaftarSampelSLSUBINAN1225_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaftarSampelSLSUBINAN1225_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaftarSampelSLSUBINAN1225_4.addFeatures(features_DaftarSampelSLSUBINAN1225_4);
var lyr_DaftarSampelSLSUBINAN1225_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaftarSampelSLSUBINAN1225_4, 
                style: style_DaftarSampelSLSUBINAN1225_4,
                popuplayertitle: 'Daftar Sampel SLS UBINAN 1225',
                interactive: true,
                title: '<img src="styles/legend/DaftarSampelSLSUBINAN1225_4.png" /> Daftar Sampel SLS UBINAN 1225'
            });
var format_DaftarSampelSLSSNLIK_5 = new ol.format.GeoJSON();
var features_DaftarSampelSLSSNLIK_5 = format_DaftarSampelSLSSNLIK_5.readFeatures(json_DaftarSampelSLSSNLIK_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaftarSampelSLSSNLIK_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaftarSampelSLSSNLIK_5.addFeatures(features_DaftarSampelSLSSNLIK_5);
var lyr_DaftarSampelSLSSNLIK_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaftarSampelSLSSNLIK_5, 
                style: style_DaftarSampelSLSSNLIK_5,
                popuplayertitle: 'Daftar Sampel SLS SNLIK',
                interactive: true,
                title: '<img src="styles/legend/DaftarSampelSLSSNLIK_5.png" /> Daftar Sampel SLS SNLIK'
            });
var format_BatasSLS202501_6 = new ol.format.GeoJSON();
var features_BatasSLS202501_6 = format_BatasSLS202501_6.readFeatures(json_BatasSLS202501_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasSLS202501_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasSLS202501_6.addFeatures(features_BatasSLS202501_6);
var lyr_BatasSLS202501_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasSLS202501_6, 
                style: style_BatasSLS202501_6,
                popuplayertitle: 'Batas SLS (202501)',
                interactive: true,
                title: '<img src="styles/legend/BatasSLS202501_6.png" /> Batas SLS (202501)'
            });
var format_BatasSLS202601_7 = new ol.format.GeoJSON();
var features_BatasSLS202601_7 = format_BatasSLS202601_7.readFeatures(json_BatasSLS202601_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasSLS202601_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasSLS202601_7.addFeatures(features_BatasSLS202601_7);
var lyr_BatasSLS202601_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasSLS202601_7, 
                style: style_BatasSLS202601_7,
                popuplayertitle: 'Batas SLS (202601)',
                interactive: true,
                title: '<img src="styles/legend/BatasSLS202601_7.png" /> Batas SLS (202601)'
            });
var format_BatasDesa_8 = new ol.format.GeoJSON();
var features_BatasDesa_8 = format_BatasDesa_8.readFeatures(json_BatasDesa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_8.addFeatures(features_BatasDesa_8);
var lyr_BatasDesa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_8, 
                style: style_BatasDesa_8,
                popuplayertitle: 'Batas Desa',
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_8.png" /> Batas Desa'
            });
var format_BatasKecamatan_9 = new ol.format.GeoJSON();
var features_BatasKecamatan_9 = format_BatasKecamatan_9.readFeatures(json_BatasKecamatan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_9.addFeatures(features_BatasKecamatan_9);
var lyr_BatasKecamatan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_9, 
                style: style_BatasKecamatan_9,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_9.png" /> Batas Kecamatan'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_DaftarSampelSLSSUPAS25_1.setVisible(false);lyr_DaftarSampelSLSSAKERNAS250825_2.setVisible(true);lyr_DaftarSampelSLSSAKERNAS261225_3.setVisible(true);lyr_DaftarSampelSLSUBINAN1225_4.setVisible(false);lyr_DaftarSampelSLSSNLIK_5.setVisible(false);lyr_BatasSLS202501_6.setVisible(false);lyr_BatasSLS202601_7.setVisible(false);lyr_BatasDesa_8.setVisible(true);lyr_BatasKecamatan_9.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_DaftarSampelSLSSUPAS25_1,lyr_DaftarSampelSLSSAKERNAS250825_2,lyr_DaftarSampelSLSSAKERNAS261225_3,lyr_DaftarSampelSLSUBINAN1225_4,lyr_DaftarSampelSLSSNLIK_5,lyr_BatasSLS202501_6,lyr_BatasSLS202601_7,lyr_BatasDesa_8,lyr_BatasKecamatan_9];
lyr_DaftarSampelSLSSUPAS25_1.set('fieldAliases', {'gid': 'gid', 'luas': 'luas', 'idsls': 'idsls', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'subsls': 'subsls', 'sumber': 'sumber', 'periode': 'periode', 'idsubsls': 'idsubsls', 'fid': 'fid', });
lyr_DaftarSampelSLSSAKERNAS250825_2.set('fieldAliases', {'gid': 'gid', 'luas': 'luas', 'idsls': 'idsls', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'subsls': 'subsls', 'sumber': 'sumber', 'periode': 'periode', 'idsubsls': 'idsubsls', 'fid': 'fid', });
lyr_DaftarSampelSLSSAKERNAS261225_3.set('fieldAliases', {'fid': 'fid', 'idsls': 'idsls', 'idsubsls': 'idsubsls', 'kdprov': 'kdprov', 'nmprov': 'nmprov', 'kdkab': 'kdkab', 'nmkab': 'nmkab', 'kdkec': 'kdkec', 'nmkec': 'nmkec', 'kddesa': 'kddesa', 'nmdesa': 'nmdesa', 'kdsls': 'kdsls', 'kdsubsls': 'kdsubsls', 'nmsls': 'nmsls', 'is_konsenrtasi': 'is_konsenrtasi', 'gid': 'gid', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'BTT': 'BTT', 'BKU': 'BKU', 'TOTAL_MUATAN': 'TOTAL_MUATAN', });
lyr_DaftarSampelSLSUBINAN1225_4.set('fieldAliases', {'fid': 'fid', 'idsls': 'idsls', 'idsubsls': 'idsubsls', 'kdprov': 'kdprov', 'nmprov': 'nmprov', 'kdkab': 'kdkab', 'nmkab': 'nmkab', 'kdkec': 'kdkec', 'nmkec': 'nmkec', 'kddesa': 'kddesa', 'nmdesa': 'nmdesa', 'kdsls': 'kdsls', 'kdsubsls': 'kdsubsls', 'nmsls': 'nmsls', 'is_konsenrtasi': 'is_konsenrtasi', 'gid': 'gid', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'BTT': 'BTT', 'BKU': 'BKU', 'TOTAL_MUATAN': 'TOTAL_MUATAN', });
lyr_DaftarSampelSLSSNLIK_5.set('fieldAliases', {'gid': 'gid', 'luas': 'luas', 'idsls': 'idsls', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'subsls': 'subsls', 'sumber': 'sumber', 'periode': 'periode', 'idsubsls': 'idsubsls', 'fid': 'fid', });
lyr_BatasSLS202501_6.set('fieldAliases', {'gid': 'gid', 'luas': 'luas', 'idsls': 'idsls', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'subsls': 'subsls', 'sumber': 'sumber', 'periode': 'periode', 'idsubsls': 'idsubsls', 'fid': 'fid', });
lyr_BatasSLS202601_7.set('fieldAliases', {'fid': 'fid', 'idsls': 'idsls', 'idsubsls': 'idsubsls', 'kdprov': 'kdprov', 'nmprov': 'nmprov', 'kdkab': 'kdkab', 'nmkab': 'nmkab', 'kdkec': 'kdkec', 'nmkec': 'nmkec', 'kddesa': 'kddesa', 'nmdesa': 'nmdesa', 'kdsls': 'kdsls', 'kdsubsls': 'kdsubsls', 'nmsls': 'nmsls', 'is_konsenrtasi': 'is_konsenrtasi', 'gid': 'gid', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'BTT': 'BTT', 'BKU': 'BKU', 'TOTAL_MUATAN': 'TOTAL_MUATAN', });
lyr_BatasDesa_8.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kddesa': 'kddesa', 'iddesa': 'iddesa', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmdesa': 'nmdesa', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'layer': 'layer', 'path': 'path', 'idkec': 'idkec', });
lyr_BatasKecamatan_9.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'luas': 'luas', 'sumber': 'sumber', 'periode': 'periode', 'layer': 'layer', 'path': 'path', 'idkec': 'idkec', });
lyr_DaftarSampelSLSSUPAS25_1.set('fieldImages', {'gid': 'Range', 'luas': 'TextEdit', 'idsls': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'subsls': '', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'idsubsls': 'TextEdit', 'fid': 'Range', });
lyr_DaftarSampelSLSSAKERNAS250825_2.set('fieldImages', {'gid': 'Range', 'luas': 'TextEdit', 'idsls': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'subsls': '', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'idsubsls': 'TextEdit', 'fid': 'Range', });
lyr_DaftarSampelSLSSAKERNAS261225_3.set('fieldImages', {'fid': 'Range', 'idsls': 'TextEdit', 'idsubsls': 'TextEdit', 'kdprov': 'TextEdit', 'nmprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmkec': 'TextEdit', 'kddesa': 'TextEdit', 'nmdesa': 'TextEdit', 'kdsls': 'TextEdit', 'kdsubsls': 'TextEdit', 'nmsls': 'TextEdit', 'is_konsenrtasi': 'Range', 'gid': 'Range', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'BTT': 'Range', 'BKU': 'Range', 'TOTAL_MUATAN': 'Range', });
lyr_DaftarSampelSLSUBINAN1225_4.set('fieldImages', {'fid': 'Range', 'idsls': 'TextEdit', 'idsubsls': 'TextEdit', 'kdprov': 'TextEdit', 'nmprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmkec': 'TextEdit', 'kddesa': 'TextEdit', 'nmdesa': 'TextEdit', 'kdsls': 'TextEdit', 'kdsubsls': 'TextEdit', 'nmsls': 'TextEdit', 'is_konsenrtasi': 'Range', 'gid': 'Range', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'BTT': 'Range', 'BKU': 'Range', 'TOTAL_MUATAN': 'Range', });
lyr_DaftarSampelSLSSNLIK_5.set('fieldImages', {'gid': 'Range', 'luas': 'TextEdit', 'idsls': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'subsls': '', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'idsubsls': 'TextEdit', 'fid': 'Range', });
lyr_BatasSLS202501_6.set('fieldImages', {'gid': 'Range', 'luas': 'TextEdit', 'idsls': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'subsls': '', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'idsubsls': 'TextEdit', 'fid': 'Range', });
lyr_BatasSLS202601_7.set('fieldImages', {'fid': 'Range', 'idsls': 'TextEdit', 'idsubsls': 'TextEdit', 'kdprov': 'TextEdit', 'nmprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmkec': 'TextEdit', 'kddesa': 'TextEdit', 'nmdesa': 'TextEdit', 'kdsls': 'TextEdit', 'kdsubsls': 'TextEdit', 'nmsls': 'TextEdit', 'is_konsenrtasi': 'Range', 'gid': 'Range', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'BTT': 'Range', 'BKU': 'Range', 'TOTAL_MUATAN': 'Range', });
lyr_BatasDesa_8.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kddesa': 'TextEdit', 'iddesa': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmdesa': 'TextEdit', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'idkec': 'TextEdit', });
lyr_BatasKecamatan_9.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'luas': 'TextEdit', 'sumber': 'TextEdit', 'periode': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'idkec': 'TextEdit', });
lyr_DaftarSampelSLSSUPAS25_1.set('fieldLabels', {'gid': 'hidden field', 'luas': 'hidden field', 'idsls': 'hidden field', 'kdkab': 'hidden field', 'kdkec': 'hidden field', 'kdsls': 'hidden field', 'nmkab': 'hidden field', 'nmkec': 'hidden field', 'nmsls': 'inline label - visible with data', 'kddesa': 'hidden field', 'kdprov': 'hidden field', 'nmdesa': 'header label - visible with data', 'nmprov': 'hidden field', 'subsls': 'no label', 'sumber': 'hidden field', 'periode': 'hidden field', 'idsubsls': 'inline label - visible with data', 'fid': 'hidden field', });
lyr_DaftarSampelSLSSAKERNAS250825_2.set('fieldLabels', {'gid': 'hidden field', 'luas': 'hidden field', 'idsls': 'hidden field', 'kdkab': 'hidden field', 'kdkec': 'hidden field', 'kdsls': 'hidden field', 'nmkab': 'hidden field', 'nmkec': 'hidden field', 'nmsls': 'inline label - visible with data', 'kddesa': 'hidden field', 'kdprov': 'hidden field', 'nmdesa': 'header label - visible with data', 'nmprov': 'hidden field', 'subsls': 'no label', 'sumber': 'hidden field', 'periode': 'hidden field', 'idsubsls': 'inline label - visible with data', 'fid': 'hidden field', });
lyr_DaftarSampelSLSSAKERNAS261225_3.set('fieldLabels', {'fid': 'hidden field', 'idsls': 'hidden field', 'idsubsls': 'inline label - visible with data', 'kdprov': 'hidden field', 'nmprov': 'hidden field', 'kdkab': 'hidden field', 'nmkab': 'hidden field', 'kdkec': 'hidden field', 'nmkec': 'hidden field', 'kddesa': 'hidden field', 'nmdesa': 'header label - visible with data', 'kdsls': 'hidden field', 'kdsubsls': 'hidden field', 'nmsls': 'inline label - visible with data', 'is_konsenrtasi': 'hidden field', 'gid': 'hidden field', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'BTT': 'inline label - visible with data', 'BKU': 'inline label - visible with data', 'TOTAL_MUATAN': 'inline label - visible with data', });
lyr_DaftarSampelSLSUBINAN1225_4.set('fieldLabels', {'fid': 'hidden field', 'idsls': 'hidden field', 'idsubsls': 'inline label - visible with data', 'kdprov': 'hidden field', 'nmprov': 'hidden field', 'kdkab': 'hidden field', 'nmkab': 'hidden field', 'kdkec': 'hidden field', 'nmkec': 'hidden field', 'kddesa': 'hidden field', 'nmdesa': 'header label - visible with data', 'kdsls': 'hidden field', 'kdsubsls': 'hidden field', 'nmsls': 'inline label - visible with data', 'is_konsenrtasi': 'hidden field', 'gid': 'hidden field', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'BTT': 'hidden field', 'BKU': 'hidden field', 'TOTAL_MUATAN': 'hidden field', });
lyr_DaftarSampelSLSSNLIK_5.set('fieldLabels', {'gid': 'hidden field', 'luas': 'hidden field', 'idsls': 'hidden field', 'kdkab': 'hidden field', 'kdkec': 'hidden field', 'kdsls': 'hidden field', 'nmkab': 'hidden field', 'nmkec': 'hidden field', 'nmsls': 'inline label - visible with data', 'kddesa': 'hidden field', 'kdprov': 'hidden field', 'nmdesa': 'header label - visible with data', 'nmprov': 'hidden field', 'subsls': 'no label', 'sumber': 'hidden field', 'periode': 'hidden field', 'idsubsls': 'inline label - visible with data', 'fid': 'hidden field', });
lyr_BatasSLS202501_6.set('fieldLabels', {'gid': 'hidden field', 'luas': 'hidden field', 'idsls': 'hidden field', 'kdkab': 'hidden field', 'kdkec': 'hidden field', 'kdsls': 'hidden field', 'nmkab': 'hidden field', 'nmkec': 'inline label - visible with data', 'nmsls': 'inline label - visible with data', 'kddesa': 'hidden field', 'kdprov': 'hidden field', 'nmdesa': 'inline label - visible with data', 'nmprov': 'hidden field', 'subsls': 'no label', 'sumber': 'hidden field', 'periode': 'hidden field', 'idsubsls': 'header label - always visible', 'fid': 'hidden field', });
lyr_BatasSLS202601_7.set('fieldLabels', {'fid': 'hidden field', 'idsls': 'hidden field', 'idsubsls': 'header label - always visible', 'kdprov': 'hidden field', 'nmprov': 'hidden field', 'kdkab': 'hidden field', 'nmkab': 'hidden field', 'kdkec': 'hidden field', 'nmkec': 'inline label - visible with data', 'kddesa': 'hidden field', 'nmdesa': 'inline label - visible with data', 'kdsls': 'hidden field', 'kdsubsls': 'hidden field', 'nmsls': 'inline label - visible with data', 'is_konsenrtasi': 'hidden field', 'gid': 'hidden field', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'BTT': 'inline label - visible with data', 'BKU': 'inline label - visible with data', 'TOTAL_MUATAN': 'inline label - visible with data', });
lyr_BatasDesa_8.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'kdprov': 'hidden field', 'kdkab': 'hidden field', 'kdkec': 'hidden field', 'kddesa': 'hidden field', 'iddesa': 'hidden field', 'nmprov': 'hidden field', 'nmkab': 'hidden field', 'nmkec': 'header label - always visible', 'nmdesa': 'header label - always visible', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'idkec': 'hidden field', });
lyr_BatasKecamatan_9.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'kdprov': 'hidden field', 'kdkab': 'hidden field', 'kdkec': 'hidden field', 'nmprov': 'hidden field', 'nmkab': 'hidden field', 'nmkec': 'header label - always visible', 'luas': 'hidden field', 'sumber': 'hidden field', 'periode': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'idkec': 'hidden field', });
lyr_BatasKecamatan_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});