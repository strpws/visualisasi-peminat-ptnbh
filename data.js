// SNBT-UTBK PTN-BH applicant data + geographic coordinates
// Generated from data.txt

const PROVINCES = [
  "Aceh", "Bali", "Banten", "Bengkulu", "DI Yogyakarta", "DKI Jakarta",
  "Gorontalo", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur",
  "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah",
  "Kalimantan Timur", "Kalimantan Utara", "Kepulauan Bangka Belitung",
  "Kepulauan Riau", "Lampung", "Maluku", "Maluku Utara",
  "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Papua", "Papua Barat",
  "Riau", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tengah",
  "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat",
  "Sumatera Selatan", "Sumatera Utara"
];

const PROVINCE_COORDS = {
  "Aceh":                       { lat: 5.5483,  lng: 95.3238  },
  "Bali":                       { lat: -8.4095, lng: 115.1889 },
  "Banten":                     { lat: -6.4058, lng: 106.0640 },
  "Bengkulu":                   { lat: -3.8004, lng: 102.2655 },
  "DI Yogyakarta":              { lat: -7.7956, lng: 110.3695 },
  "DKI Jakarta":                { lat: -6.2088, lng: 106.8456 },
  "Gorontalo":                  { lat: 0.5375,  lng: 123.0568 },
  "Jambi":                      { lat: -1.6101, lng: 103.6131 },
  "Jawa Barat":                 { lat: -6.9175, lng: 107.6191 },
  "Jawa Tengah":                { lat: -7.0051, lng: 110.4381 },
  "Jawa Timur":                 { lat: -7.2575, lng: 112.7521 },
  "Kalimantan Barat":           { lat: -0.0263, lng: 109.3425 },
  "Kalimantan Selatan":         { lat: -3.3194, lng: 114.5908 },
  "Kalimantan Tengah":          { lat: -2.2088, lng: 113.9213 },
  "Kalimantan Timur":           { lat: -0.5022, lng: 117.1536 },
  "Kalimantan Utara":           { lat: 2.8466,  lng: 117.3805 },
  "Kepulauan Bangka Belitung":  { lat: -2.1410, lng: 106.1167 },
  "Kepulauan Riau":             { lat: 0.9183,  lng: 104.4621 },
  "Lampung":                    { lat: -5.4500, lng: 105.2667 },
  "Maluku":                     { lat: -3.6954, lng: 128.1814 },
  "Maluku Utara":               { lat: 0.7833,  lng: 127.3667 },
  "Nusa Tenggara Barat":        { lat: -8.5833, lng: 116.1167 },
  "Nusa Tenggara Timur":        { lat: -10.1772,lng: 123.6070 },
  "Papua":                      { lat: -2.5337, lng: 140.7181 },
  "Papua Barat":                { lat: -0.8650, lng: 134.0640 },
  "Riau":                       { lat: 0.5333,  lng: 101.4500 },
  "Sulawesi Barat":             { lat: -2.6839, lng: 118.8932 },
  "Sulawesi Selatan":           { lat: -5.1477, lng: 119.4327 },
  "Sulawesi Tengah":            { lat: -0.8917, lng: 119.8707 },
  "Sulawesi Tenggara":          { lat: -3.9886, lng: 122.5127 },
  "Sulawesi Utara":             { lat: 1.4748,  lng: 124.8421 },
  "Sumatera Barat":             { lat: -0.9471, lng: 100.4172 },
  "Sumatera Selatan":           { lat: -2.9909, lng: 104.7565 },
  "Sumatera Utara":             { lat: 3.5952,  lng: 98.6722  }
};

const UNIVERSITIES = [
  "INSTITUT PERTANIAN BOGOR",
  "INSTITUT TEKNOLOGI BANDUNG",
  "INSTITUT TEKNOLOGI SEPULUH NOPEMBER",
  "UNIVERSITAS AIRLANGGA",
  "UNIVERSITAS ANDALAS",
  "UNIVERSITAS BRAWIJAYA",
  "UNIVERSITAS DIPONEGORO",
  "UNIVERSITAS GADJAH MADA",
  "UNIVERSITAS HASANUDDIN",
  "UNIVERSITAS INDONESIA",
  "UNIVERSITAS NEGERI JAKARTA",
  "UNIVERSITAS NEGERI MALANG",
  "UNIVERSITAS NEGERI PADANG",
  "UNIVERSITAS NEGERI SEMARANG",
  "UNIVERSITAS NEGERI SURABAYA",
  "UNIVERSITAS NEGERI YOGYAKARTA",
  "UNIVERSITAS PADJADJARAN",
  "UNIVERSITAS PENDIDIKAN INDONESIA",
  "UNIVERSITAS SEBELAS MARET",
  "UNIVERSITAS SRIWIJAYA",
  "UNIVERSITAS SUMATERA UTARA",
  "UNIVERSITAS SYIAH KUALA"
];

const UNIVERSITY_COORDS = {
  "INSTITUT PERTANIAN BOGOR":            { lat: -6.5594, lng: 106.7240, short: "IPB",     city: "Bogor" },
  "INSTITUT TEKNOLOGI BANDUNG":          { lat: -6.8915, lng: 107.6107, short: "ITB",     city: "Bandung" },
  "INSTITUT TEKNOLOGI SEPULUH NOPEMBER": { lat: -7.2820, lng: 112.7951, short: "ITS",     city: "Surabaya" },
  "UNIVERSITAS AIRLANGGA":               { lat: -7.2682, lng: 112.7582, short: "UNAIR",   city: "Surabaya" },
  "UNIVERSITAS ANDALAS":                 { lat: -0.9136, lng: 100.4609, short: "UNAND",   city: "Padang" },
  "UNIVERSITAS BRAWIJAYA":               { lat: -7.9527, lng: 112.6151, short: "UB",      city: "Malang" },
  "UNIVERSITAS DIPONEGORO":              { lat: -7.0507, lng: 110.4381, short: "UNDIP",   city: "Semarang" },
  "UNIVERSITAS GADJAH MADA":             { lat: -7.7713, lng: 110.3779, short: "UGM",     city: "Yogyakarta" },
  "UNIVERSITAS HASANUDDIN":              { lat: -5.1340, lng: 119.4882, short: "UNHAS",   city: "Makassar" },
  "UNIVERSITAS INDONESIA":               { lat: -6.3635, lng: 106.8266, short: "UI",      city: "Depok" },
  "UNIVERSITAS NEGERI JAKARTA":          { lat: -6.1955, lng: 106.8758, short: "UNJ",     city: "Jakarta" },
  "UNIVERSITAS NEGERI MALANG":           { lat: -7.9587, lng: 112.6149, short: "UM",      city: "Malang" },
  "UNIVERSITAS NEGERI PADANG":           { lat: -0.8980, lng: 100.3520, short: "UNP",     city: "Padang" },
  "UNIVERSITAS NEGERI SEMARANG":         { lat: -7.0508, lng: 110.3956, short: "UNNES",   city: "Semarang" },
  "UNIVERSITAS NEGERI SURABAYA":         { lat: -7.3056, lng: 112.7146, short: "UNESA",   city: "Surabaya" },
  "UNIVERSITAS NEGERI YOGYAKARTA":       { lat: -7.7733, lng: 110.3833, short: "UNY",     city: "Yogyakarta" },
  "UNIVERSITAS PADJADJARAN":             { lat: -6.9277, lng: 107.7666, short: "UNPAD",   city: "Jatinangor" },
  "UNIVERSITAS PENDIDIKAN INDONESIA":    { lat: -6.8607, lng: 107.5907, short: "UPI",     city: "Bandung" },
  "UNIVERSITAS SEBELAS MARET":           { lat: -7.5586, lng: 110.8543, short: "UNS",     city: "Surakarta" },
  "UNIVERSITAS SRIWIJAYA":               { lat: -3.2154, lng: 104.6493, short: "UNSRI",   city: "Palembang" },
  "UNIVERSITAS SUMATERA UTARA":          { lat: 3.5650,  lng: 98.6552,  short: "USU",     city: "Medan" },
  "UNIVERSITAS SYIAH KUALA":             { lat: 5.5732,  lng: 95.3691,  short: "USK",     city: "Banda Aceh" }
};

// COUNTS[university] = [count_for_province_0, count_for_province_1, ...]
// Province order matches the PROVINCES array above (alphabetical).
const COUNTS = {
  "INSTITUT PERTANIAN BOGOR":            [307,85,5886,305,294,9015,34,380,34266,2537,1236,197,147,114,194,25,267,281,1003,35,42,179,84,69,41,1037,25,371,68,90,49,1826,790,2744],
  "INSTITUT TEKNOLOGI BANDUNG":          [316,213,2150,171,446,3285,50,306,13653,2220,1829,213,183,92,354,40,149,499,493,70,62,212,140,122,45,754,19,483,88,125,171,901,709,1872],
  "INSTITUT TEKNOLOGI SEPULUH NOPEMBER": [121,469,1222,83,322,1568,23,118,3427,2470,21836,131,275,132,661,40,62,632,207,48,24,282,192,87,53,476,7,428,58,95,82,434,313,1344],
  "UNIVERSITAS AIRLANGGA":               [253,558,1672,211,724,2280,109,286,5501,4835,41213,424,584,358,954,142,185,514,660,166,103,815,761,252,95,769,49,828,211,259,252,810,654,2261],
  "UNIVERSITAS ANDALAS":                 [187,1,199,773,32,261,4,1846,555,73,83,11,8,4,12,3,44,748,89,7,8,8,9,11,4,3404,3,16,1,7,2,28581,347,2642],
  "UNIVERSITAS BRAWIJAYA":               [241,764,3234,277,810,4720,102,373,8938,5035,40233,564,786,530,1192,175,220,761,779,159,124,1015,539,239,120,1142,50,764,211,238,170,1030,710,3721],
  "UNIVERSITAS DIPONEGORO":              [134,144,4243,307,1708,5126,44,411,12231,46243,3421,329,261,380,389,51,207,789,952,66,59,238,228,119,57,902,21,285,67,83,79,848,785,3303],
  "UNIVERSITAS GADJAH MADA":             [457,533,2935,469,22915,3728,111,624,10224,21333,7455,871,527,377,1079,116,338,781,1537,220,177,932,611,321,123,1693,99,984,343,368,324,1678,1547,3450],
  "UNIVERSITAS HASANUDDIN":              [8,16,126,5,75,187,321,21,413,109,283,33,66,21,514,377,13,51,13,286,259,237,202,750,315,45,1958,37341,1395,2123,262,35,23,320],
  "UNIVERSITAS INDONESIA":               [480,317,10619,478,1034,34320,109,605,37882,4697,3459,504,347,204,578,60,388,640,1667,203,164,597,308,161,52,1349,67,1347,186,286,389,2298,1629,3715],
  "UNIVERSITAS NEGERI JAKARTA":          [100,15,5997,155,137,28893,27,158,20280,1276,723,83,28,30,53,7,199,96,403,37,35,59,113,28,8,259,9,112,13,54,37,656,241,1317],
  "UNIVERSITAS NEGERI MALANG":           [52,190,580,51,139,664,27,85,1651,1372,35719,144,321,237,538,129,88,237,193,61,54,740,546,130,80,205,28,196,88,84,24,169,161,802],
  "UNIVERSITAS NEGERI PADANG":           [261,0,109,1115,8,181,1,2795,317,52,61,8,3,10,3,4,38,421,76,4,2,21,5,3,1,3186,1,9,3,1,1,45386,382,2829],
  "UNIVERSITAS NEGERI SEMARANG":         [28,29,932,84,471,1063,10,116,3898,29779,1199,96,59,222,76,15,96,266,274,20,11,72,79,60,32,171,8,58,19,29,15,126,208,671],
  "UNIVERSITAS NEGERI SURABAYA":         [55,146,573,64,177,881,20,109,2008,2728,55144,92,183,186,369,77,54,217,176,68,34,296,492,102,42,256,11,191,60,81,36,205,164,1364],
  "UNIVERSITAS NEGERI YOGYAKARTA":       [222,114,1460,537,18738,1341,60,545,5497,16868,3121,462,267,328,441,145,423,453,1000,104,95,644,497,187,101,939,73,417,189,218,96,745,1021,1882],
  "UNIVERSITAS PADJADJARAN":             [302,152,5095,386,422,6946,63,495,55492,2441,1349,329,230,155,323,49,343,583,1146,86,78,231,177,142,59,1106,26,472,142,127,173,1672,1072,2503],
  "UNIVERSITAS PENDIDIKAN INDONESIA":    [77,25,2389,100,76,1856,12,123,47039,784,382,68,36,29,73,8,270,132,277,10,13,55,39,8,9,211,9,77,26,27,19,335,209,699],
  "UNIVERSITAS SEBELAS MARET":           [125,124,2039,288,3710,2280,46,311,6336,59998,8629,290,204,253,321,63,217,359,823,63,53,285,266,156,90,520,30,306,88,144,82,649,649,1407],
  "UNIVERSITAS SRIWIJAYA":               [49,4,231,655,63,194,3,1149,537,174,188,16,8,14,12,4,744,242,987,7,3,14,5,11,4,304,2,28,5,4,7,425,36461,1515],
  "UNIVERSITAS SUMATERA UTARA":          [1923,6,142,103,29,175,1,330,467,69,82,43,19,19,22,0,30,748,74,4,2,10,5,23,21,2853,2,19,4,3,6,741,136,54792],
  "UNIVERSITAS SYIAH KUALA":             [32133,1,34,26,15,63,0,41,158,36,45,13,1,1,4,1,10,60,34,0,5,6,0,2,3,272,0,7,1,2,1,772,42,3983]
};

// Province totals nationwide (from "Total" rows in data.txt)
const PROVINCE_TOTALS = {
  "Aceh": 37831, "Bali": 3906, "Banten": 51867, "Bengkulu": 6643,
  "DI Yogyakarta": 52345, "DKI Jakarta": 109027, "Gorontalo": 1177,
  "Jambi": 11227, "Jawa Barat": 270770, "Jawa Tengah": 205129,
  "Jawa Timur": 227690, "Kalimantan Barat": 4921, "Kalimantan Selatan": 4543,
  "Kalimantan Tengah": 3696, "Kalimantan Timur": 8162, "Kalimantan Utara": 1531,
  "Kepulauan Bangka Belitung": 4385, "Kepulauan Riau": 9510, "Lampung": 12863,
  "Maluku": 1724, "Maluku Utara": 1407, "Nusa Tenggara Barat": 6948,
  "Nusa Tenggara Timur": 5298, "Papua": 2983, "Papua Barat": 1355,
  "Riau": 21853, "Sulawesi Barat": 2497, "Sulawesi Selatan": 44739,
  "Sulawesi Tengah": 3266, "Sulawesi Tenggara": 4448, "Sulawesi Utara": 2277,
  "Sumatera Barat": 90322, "Sumatera Selatan": 48253, "Sumatera Utara": 99136
};

// Maps each polygon name in the bundled GeoJSON (current 38 provinces, via
// the `PROVINSI` property) to the data.js province keys. SNBT 2024 data still
// uses the pre-2022 34-province layout, so the four new Papua splits (Papua
// Barat Daya, Papua Pegunungan, Papua Selatan, Papua Tengah) read from their
// original parent's value — the choropleth shades the whole region uniformly
// and the tooltip flags the aggregation.
const GEO_TO_PROVINCES = {
  "Aceh":                       ["Aceh"],
  "Bali":                       ["Bali"],
  "Banten":                     ["Banten"],
  "Bengkulu":                   ["Bengkulu"],
  "Daerah Istimewa Yogyakarta": ["DI Yogyakarta"],
  "DKI Jakarta":                ["DKI Jakarta"],
  "Gorontalo":                  ["Gorontalo"],
  "Jambi":                      ["Jambi"],
  "Jawa Barat":                 ["Jawa Barat"],
  "Jawa Tengah":                ["Jawa Tengah"],
  "Jawa Timur":                 ["Jawa Timur"],
  "Kalimantan Barat":           ["Kalimantan Barat"],
  "Kalimantan Selatan":         ["Kalimantan Selatan"],
  "Kalimantan Tengah":          ["Kalimantan Tengah"],
  "Kalimantan Timur":           ["Kalimantan Timur"],
  "Kalimantan Utara":           ["Kalimantan Utara"],
  "Kepulauan Bangka Belitung":  ["Kepulauan Bangka Belitung"],
  "Kepulauan Riau":             ["Kepulauan Riau"],
  "Lampung":                    ["Lampung"],
  "Maluku":                     ["Maluku"],
  "Maluku Utara":               ["Maluku Utara"],
  "Nusa Tenggara Barat":        ["Nusa Tenggara Barat"],
  "Nusa Tenggara Timur":        ["Nusa Tenggara Timur"],
  "Papua":                      ["Papua"],
  "Papua Barat":                ["Papua Barat"],
  "Papua Barat Daya":           ["Papua Barat"],   // 2022 split
  "Papua Pegunungan":           ["Papua"],         // 2022 split
  "Papua Selatan":              ["Papua"],         // 2022 split
  "Papua Tengah":               ["Papua"],         // 2022 split
  "Riau":                       ["Riau"],
  "Sulawesi Barat":             ["Sulawesi Barat"],
  "Sulawesi Selatan":           ["Sulawesi Selatan"],
  "Sulawesi Tengah":            ["Sulawesi Tengah"],
  "Sulawesi Tenggara":          ["Sulawesi Tenggara"],
  "Sulawesi Utara":             ["Sulawesi Utara"],
  "Sumatera Barat":             ["Sumatera Barat"],
  "Sumatera Selatan":           ["Sumatera Selatan"],
  "Sumatera Utara":             ["Sumatera Utara"]
};

// Helpers
function countFor(university, province) {
  const idx = PROVINCES.indexOf(province);
  return COUNTS[university]?.[idx] ?? 0;
}

function universityTotal(university) {
  return COUNTS[university].reduce((a, b) => a + b, 0);
}
