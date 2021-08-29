import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgGalery } from '../../../utils/mockImages';

// ----------------------------------------------------------------------

const TITLE_NAME = [
  'Ripple Yatırımcıları Dikkat: “Şimdi Bu Seviyeler Yaklaşıyor!',
  'Bu 3 Altcoin Yatırımcısına Çok Fazla Kazandırdı! Bugün En Fazla Yükselen Altcoinler!',
  '50 Bin Doları Kıran Bitcoin İçin Tahmin: Aralık’ta Bu Seviyelerdeyiz!',
  'Ödeme devi Visa kriptonun bu çılgınlığına dahil oldu!',
  'Bloomberg Uzmanı, Bombayı Patlattı: Altın ve Bitcoin Yatırımcılarını Ne Bekliyor?',
  'Popüler Analist Bitcoin (BTC)’in Son 10 Yıllık Verilerine Göre Bir Tahminde Bulundu!',
  'Dogecoin fiyat analizi: DOGE’da kısa vadeli görünüm',
  'Bir haftada yüzde 30 tırmanan yıldız altcoin parlıyor! Yükseliş sürecek mi?',
  'Anthony Pompliano Bitcoin (BTC)’In 50 Bin Dolar Seviyesini Geçmesini Değerlendirdi!',
  'Shiba Inu Neden Yükselmiyor? Dogecoin Hakkında Analistler Ne Diyor?',
  'Cardano 10% oranında yükseldi',
  'BlackRock iki büyük kripto madencilik şirketine yatırım yaptı',
  'Araştırma: Amerikalı yatırımcılar kredi kartıyla kripto para almak istiyor',
  'Minneapolis Fed Başkanı’ndan kripto para açıklaması',
  'Hackerlar, Japon kripto borsası Liquidden 94 milyon dolar çaldı',
  'PSV Eindhoven, sponsorluk ödemesini Bitcoin ile aldı'
];

// ----------------------------------------------------------------------

const NewsTitle = [...Array(16)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgGalery(setIndex),
    name: TITLE_NAME[index],
    status: sample(['popüler', 'son dakika', '', ''])
  };
});

export default NewsTitle;
