/*************************************************
 * loadData.js
 * Load GeoJSON dari Firestore
 *************************************************/

// ===== ICON MARKER KECIL =====
const smallMarkerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [18, 28],
  iconAnchor: [9, 28],
  popupAnchor: [0, -26]
});

// ===== LAYER KHUSUS MARKER =====
const markerLayer = L.layerGroup();

// ===== LOAD DATA =====
function loadTaggingData() {
  db.collection(COLLECTION_NAME).get().then(snapshot => {
    snapshot.forEach(doc => {
      const d = doc.data();

      // =====================
      // POINT (MARKER)
      // =====================
      if (
        d.type === "Point" &&
        Array.isArray(d.geometry) &&
        d.geometry.length === 2
      ) {
        const marker = L.marker(
          [d.geometry[1], d.geometry[0]],
          { icon: smallMarkerIcon }
        ).bindPopup(
          `<b>${d.properties?.nama || ""}</b><br>${d.properties?.keterangan || ""}`
        );

        markerLayer.addLayer(marker);
      }

      // =====================
      // POLYGON
      // =====================
      if (d.type === "Polygon" && typeof d.geometry === "string") {
        let coords;

        try {
          coords = JSON.parse(d.geometry);
        } catch (e) {
          console.warn("Polygon gagal parse:", doc.id);
          return;
        }

        if (!Array.isArray(coords)) return;

        L.polygon(
          coords.map(ring =>
            ring.map(c => [c[1], c[0]])
          )
        )
          .bindPopup(
            `<b>${d.properties?.nama || ""}</b><br>${d.properties?.keterangan || ""}`
          )
          .addTo(map);
      }
    });

    // kontrol awal marker
    updateMarkerVisibility();
  });
}

// ===== KONTROL VISIBILITAS MARKER =====
function updateMarkerVisibility() {
  if (map.getZoom() >= 15) {
    if (!map.hasLayer(markerLayer)) {
      map.addLayer(markerLayer);
    }
  } else {
    if (map.hasLayer(markerLayer)) {
      map.removeLayer(markerLayer);
    }
  }
}

// ===== EVENT ZOOM =====
map.on("zoomend", updateMarkerVisibility);

// ===== JALANKAN SAAT MAP SIAP =====
map.whenReady(loadTaggingData);
