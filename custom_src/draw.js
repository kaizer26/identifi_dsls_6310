/*************************************************
 * draw.js (FIX simpanFeature)
 *************************************************/

function initDraw() {
  if (typeof map === "undefined") {
    setTimeout(initDraw, 500);
    return;
  }

  const drawnItems = new L.FeatureGroup();
  map.addLayer(drawnItems);

  const drawControl = new L.Control.Draw({
    edit: { featureGroup: drawnItems },
    draw: {
      polygon: true,
      marker: true,
      polyline: false,
      rectangle: false,
      circle: false,
      circlemarker: false
    }
  });
  map.addControl(drawControl);

  map.on(L.Draw.Event.CREATED, function (e) {
    const layer = e.layer;
    drawnItems.addLayer(layer);

    const popupContent = document.createElement("div");
popupContent.className = "popup-form";
popupContent.innerHTML = `
  <div class="container-fluid p-0">
    <div class="fw-semibold mb-2 d-flex align-items-center gap-2">
      <i class="fas fa-map-marker-alt text-primary"></i>
      <span>Tambah Keterangan</span>
    </div>

    <div class="mb-3">
      <label class="form-label">Kategori</label>
      <select id="kategori" class="form-select form-select-sm">
        <option value="">-- Pilih Kategori --</option>
        <option>Infrastruktur</option>
        <option>Bencana</option>
        <option>Pelayanan Publik</option>
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label">Nama Lokasi</label>
      <input id="nama" class="form-control form-control-sm"
             placeholder="Contoh: Titik Rawan Banjir">
    </div>

    <div class="mb-3">
      <label class="form-label">Keterangan</label>
      <textarea id="ket" class="form-control form-control-sm"
                rows="3"
                placeholder="Tuliskan keterangan singkat..."></textarea>
    </div>

    <button id="btnSimpan" class="btn btn-primary btn-sm w-100">
      <i class="fas fa-save me-1"></i> Simpan
    </button>
  </div>
`;


    layer.bindPopup(popupContent).openPopup();

    popupContent.querySelector("#btnSimpan").addEventListener("click", () => {
      const kategori = popupContent.querySelector("#kategori").value;
      const nama = popupContent.querySelector("#nama").value;
      const ket = popupContent.querySelector("#ket").value;

      const geojson = layer.toGeoJSON();

const isPolygon = geojson.geometry.type === "Polygon";

const data = {
  type: geojson.geometry.type,
  geometry: isPolygon
    ? JSON.stringify(geojson.geometry.coordinates)
    : geojson.geometry.coordinates,
  properties: {
    kategori: kategori || "",
    nama: nama || "",
    keterangan: ket || "",
    dibuat: new Date().toISOString(),
    sumber: "publik"
  }
};

db.collection(COLLECTION_NAME)
  .add(data)
  .then(() => {
    alert("✅ Data tersimpan");
    map.closePopup();
  })
  .catch(err => {
    console.error(err);
    alert("❌ Gagal menyimpan");
  });

    });
  });

  console.log("✅ Draw & save siap");
}

setTimeout(initDraw, 1000);
