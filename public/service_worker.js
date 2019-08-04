// キャッシュファイルの指定
var CACHE_NAME = 'todouhukenQuizCaches';
var urlsToCache = [
  '/favicon.ico',
  'img/td01_hokkaido_black.jpg',
  'img/td02_aomori_black.jpg',
  'img/td03_iwate_black.jpg',
  'img/td04_miyagi_black.jpg',
  'img/td05_akita_black.jpg',
  'img/td06_yamagata_black.jpg',
  'img/td07_hukushima_black.jpg',
  'img/td08_ibaraki_black.jpg',
  'img/td09_tochigi_black.jpg',
  'img/td10_gunma_black.jpg',
  'img/td11_saitama_black.jpg',
  'img/td12_chiba_black.jpg',
  'img/td13_tokyo_black.jpg',
  'img/td14_kanagawa_black.jpg',
  'img/td15_niigata_black.jpg',
  'img/td16_toyama_black.jpg',
  'img/td17_ishikawa_black.jpg',
  'img/td18_hukui_black.jpg',
  'img/td19_yamanashi_black.jpg',
  'img/td20_nagano_black.jpg',
  'img/td21_gihu_black.jpg',
  'img/td22_shizuoka_black.jpg',
  'img/td23_aichi_black.jpg',
  'img/td24_mie_black.jpg',
  'img/td25_shiga_black.jpg',
  'img/td26_kyoto_black.jpg',
  'img/td27_oosaka_black.jpg',
  'img/td28_hyogo_black.jpg',
  'img/td29_nara_black.jpg',
  'img/td30_wakayama_black.jpg',
  'img/td31_tottori_black.jpg',
  'img/td32_shimane_black.jpg',
  'img/td33_okayama_black.jpg',
  'img/td34_hiroshima_black.jpg',
  'img/td35_yamaguchi_black.jpg',
  'img/td36_tokushima_black.jpg',
  'img/td37_kagawa_black.jpg',
  'img/td38_ehime_black.jpg',
  'img/td39_kouchi_black.jpg',
  'img/td40_hukuoka_black.jpg',
  'img/td41_saga_black.jpg',
  'img/td42_nagasaki_black.jpg',
  'img/td43_kumamoto_black.jpg',
  'img/td44_ooita_black.jpg',
  'img/td45_miyazaki_black.jpg',
  'img/td46_kagoshima_black.jpg',
  'img/td47_okinawa_black.jpg'
];

// インストール処理
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        return response ? response : fetch(event.request);
      })
  );
});
