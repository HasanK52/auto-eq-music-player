// Gerekli Firebase kütüphanelerini projemize dahil ediyoruz.
import * as functions from "firebase-functions";
import * as logger from "firebase-functions/logger";

/**
 * 'getEQSettings' isminde yeni bir bulut fonksiyonu tanımlıyoruz.
 * Bu fonksiyon, birisi özel HTTPS linkine istek attığında tetiklenecek şekilde ayarlandı.
 */
export const getEQSettings = functions.https.onRequest((request, response) => {
  // Birisi bu linke istek attığında, Firebase loglarına bir mesaj yazıyoruz.
  // Bu, fonksiyonumuzun çalışıp çalışmadığını kontrol etmemiz için harika bir yoldur.
  logger.info(">>> EQ ayarları için bir test isteği geldi!");

  // Gelen isteğe CEVAP olarak bir JSON objesi gönderiyoruz.
  // Şimdilik bu cevap her zaman aynı, yani statik ("aptal" bir cevap).
  // Amacımız sadece sistemin çalıştığını görmek.
  response.json({
    "profile": "Rock",
    "source": "static-test"
  });
});