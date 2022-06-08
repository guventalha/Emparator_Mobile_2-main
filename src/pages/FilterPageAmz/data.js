const CATDATA = [
    {
      catName: 'Bebek',
      catCode: 20279,
      state: toggleBebek,
      setState: setToggleBebek,
    },
    {
      catName: 'Kitap',
      catCode: 20327,
      state: toggleKitap,
      setState: setToggleKitap,
    },
    {
      catName: 'Bilgisayar',
      catCode: 20299,
      state: toggleBilgisayar,
      setState: setToggleBilgisayar,
    },
    {
      catName: 'Elektronik',
      catCode: 20280,
      state: toggleElektronik,
      setState: setToggleElektronik,
    },
    {
      catName: 'Moda',
      catCode: 20282,
      state: toggleModa,
      setState: setToggleModa,
    },
    {
      catName: 'Sağlık ve Kişisel Bakım',
      catCode: 20284,
      state: toggleSaglik,
      setState: setToggleSaglik,
    },
    {
      catName: 'Ev ve Yaşam',
      catCode: 20281,
      state: toggleEv,
      setState: setToggleEv,
    },
    {
      catName: 'Yapı Market',
      catCode: 20277,
      state: toggleYapi,
      setState: setToggleYapi,
    },
    {
      catName: 'Ofis ve Kırtasiye',
      catCode: 20300,
      state: toggleOfis,
      setState: setToggleOfis,
    },
    {
      catName: 'Spor ve Outdoor',
      catCode: 20292,
      state: toggleSpor,
      setState: setToggleSpor,
    },
    {
      catName: 'Oyuncak',
      catCode: 20288,
      state: toggleOyuncak,
      setState: setToggleOyuncak,
    },
    {
      catName: 'Video ve Oyun Konsolu',
      catCode: 20322,
      state: toggleVideo,
      setState: setToggleVideo,
    },
    {
      catName: 'Evcil Hayvan Ürünleri',
      catCode: 20289,
      state: toggleEvcil,
      setState: setToggleEvcil,
    },
    {
      catName: 'Bahçe',
      catCode: 20283,
      state: toggleBahce,
      setState: setToggleBahce,
    },
    {
      catName: 'Müzik Enstrümanları ve DJ',
      catCode: 20285,
      state: toggleMüzik,
      setState: setToggleMüzik,
    },
    {
      catName: 'Gıda Ürünleri',
      catCode: 20291,
      state: toggleGida,
      setState: setToggleGida,
    },
];

const FILTERDATA = [
    {
      name: 'Min. Fiyat',
      logo: 'lira-sign',
      state: minFiyat,
      setState: setMinFiyat,
    },
    {
      name: 'Max. Fiyat',
      logo: 'lira-sign',
      state: maxFiyat,
      setState: setMaxFiyat,
    },
    {
      name: 'Min. Satış',
      logo: 'tags',
      state: minSatis,
      setState: setMinSatis,
    },
    {
      name: 'Max. Satış',
      logo: 'tags',
      state: maxSatis,
      setState: setMaxSatis,
    },
    {
      name: 'Min. Ciro',
      logo: 'wallet',
      state: minCiro,
      setState: setMinCiro,
    },
    {
      name: 'Max. Ciro',
      logo: 'wallet',
      state: maxCiro,
      setState: setMaxCiro,
    },
    {
      name: 'Min. Yorum',
      logo: 'comment',
      state: minYorum,
      setState: setMinYorum,
    },
    {
      name: 'Max. Yorum',
      logo: 'comment',
      state: maxYorum,
      setState: setMaxYorum,
    },
    {
      name: 'Min. Puan',
      logo: 'star',
      state: minPuan,
      setState: setMinPuan,
    },
    {
      name: 'Max. Puan',
      logo: 'star',
      state: maxPuan,
      setState: setMaxPuan,
    },
];

export { CATDATA, FILTERDATA }