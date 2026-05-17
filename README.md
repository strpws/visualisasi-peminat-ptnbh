# Visualisasi Peminat PTN-BH (SNBT-UTBK 2024)

Visualisasi interaktif aliran pendaftar SNBT-UTBK 2024 antara 34 provinsi asal dan 22 universitas PTN-BH tujuan. Menggunakan globe 3D dengan tampilan editorial: peta provinsi diberi shading choropleth berdasarkan jumlah peminat, dan aliran pendaftar digambar sebagai busur lengkung yang lebarnya proporsional terhadap kontribusi pendaftar.

Proyek ini tanpa build step: cukup satu file HTML, satu file data JavaScript, dan satu file GeoJSON. Semua library di-load dari CDN.

## Fitur

- **Dua mode tampilan**:
  - *Per Universitas*: pilih satu PTN-BH, lihat dari provinsi mana saja peminatnya berasal.
  - *Per Provinsi*: pilih satu provinsi, lihat ke PTN-BH mana saja peminatnya tersebar.
- **Choropleth provinsi** dengan binning sextile (6 kelas non-nol) yang dihitung ulang setiap render, sehingga provinsi dengan nilai kecil (sekitar 1 persen) tetap terlihat berwarna biru meski Jawa Barat mendominasi skala absolut. Kelas teratas memakai navy gelap agar provinsi-provinsi dominan (umumnya Jabar, Jateng, Jatim, DKI) terpisah secara visual dari kelompok tinggi lainnya.
- **Busur lengkung dengan lebar variabel**: lebar tiap busur menggambarkan share kontribusi terhadap pool universitas tujuan, bukan jumlah pendaftar mentah, sehingga universitas besar dan kecil tetap bisa dibandingkan secara proporsional.
- **Label provinsi otomatis** untuk 10 asal/tujuan terbesar, dengan tooltip rinci pada hover.
- **Panel statistik** yang menampilkan total pendaftar, kampus utama, jumlah provinsi asal, dan daftar 10 terbesar. Bisa di-collapse.
- **Auto-rotate lambat** yang berhenti ketika pengguna mulai berinteraksi.

## Cara menjalankan

Karena halaman ini mengambil GeoJSON lokal lewat `fetch()`, browser modern memblokir akses jika dibuka langsung lewat `file://`. Jalankan static server sederhana dari folder proyek:

```bash
# Pakai Python
python -m http.server 5500

# atau pakai Node
npx serve

# atau VS Code Live Server, dsb.
```

Lalu buka `http://127.0.0.1:5500/index.html` (atau port yang muncul).

Sebagai fallback, kalau static server tidak tersedia, kode akan otomatis mencoba mengambil GeoJSON cadangan dari CDN.

## Struktur file

```
.
├── index.html                       Halaman utama (UI + logika globe).
├── data.js                          Data peminat, koordinat, dan mapping GeoJSON.
├── data.txt                         Sumber mentah (teks) yang dipakai untuk membangun data.js.
├── data.xlsx                        Sumber mentah (spreadsheet).
├── indonesia-38-provinces.geojson   Peta 38 provinsi terkini (171 KB).
└── README.md
```

## Sumber data

- **Peminat SNBT-UTBK 2024**: data jumlah pendaftar per provinsi asal ke setiap PTN-BH, tersedia dalam `data.txt` dan `data.xlsx`. Hanya mencakup 22 universitas berstatus PTN-BH per 2024.
- **Peta provinsi**: `indonesia-38-provinsi.geojson` berisi 38 provinsi sesuai pembagian administratif terkini (termasuk hasil pemekaran Papua tahun 2022).

## Catatan teknis

### Ketidaksesuaian 34 vs 38 provinsi

Data SNBT 2024 masih memakai pembagian 34 provinsi (pra-pemekaran Papua), sedangkan GeoJSON memakai 38 provinsi. Empat provinsi baru hasil pemekaran 2022 (Papua Barat Daya, Papua Pegunungan, Papua Selatan, Papua Tengah) tidak punya nilai tersendiri di data, jadi tiap-tiap polygon-nya mengambil nilai dari provinsi induknya (Papua atau Papua Barat). Tooltip pada polygon-polygon ini menampilkan catatan "Data agregat sebagai ..." agar pembaca tahu sumber datanya.

Mapping ini ada di `GEO_TO_PROVINCES` di `data.js`.

### Ring winding GeoJSON

GeoJSON 38 provinsi mengikuti standar RFC 7946 (exterior ring berorientasi counter-clockwise). Library yang dipakai globe.gl (`three-conic-polygon-geometry`) memperlakukan ring CCW sebagai lubang dan mengisi area di luar polygon, sehingga peta jadi rusak (seluruh dunia kecuali area provinsi yang terisi warna). Untuk mengatasinya ada helper `rewindToClockwise()` di `index.html` yang membalik orientasi tiap ring saat load. Jalan sekali, sekitar 150 ring, tidak terasa.

### Posisi universitas yang berdekatan

Sebagian universitas berada di kota yang sama (UB dan UM di Malang, UGM dan UNY di Yogyakarta, ITS, UNAIR, dan UNESA di Surabaya). Untuk menghindari busur dan titik yang saling menumpuk, fungsi `spreadOverlappingUnis()` di `index.html` menyebarkan titik-titik tersebut secara radial pada radius kecil. Koordinat asli di `data.js` tidak diubah; penyebaran hanya untuk keperluan tampilan.

### Busur tapered

Busur antarprovinsi tidak memakai arc bawaan globe.gl. Sebagai gantinya dibangun custom mesh berbentuk tabung yang melengkung di sepanjang jalur great-circle (interpolasi slerp), dengan radius penuh dari titik asal hingga puncak lalu meruncing ke titik tujuan. Implementasi ada di `buildTaperedArc()` di `index.html`.

## Library

- [globe.gl](https://github.com/vasturiano/globe.gl) untuk rendering globe.
- [three.js](https://threejs.org/) sebagai engine 3D di baliknya.

Keduanya di-load dari unpkg CDN, tanpa dependensi npm di sisi proyek.

## Lisensi

Belum ditentukan. Data peminat bersumber dari publikasi SNPMB 2024.
