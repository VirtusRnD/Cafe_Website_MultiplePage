export const cafeConfig = {
  // 🎨 AKTİF TEMA SEÇİMİ (Aşağıdaki Onepage temalarından birini yazabilirsiniz):
  // "regent-classic" | "espresso-roastery" | "botanical-garden" | "matcha-oat" | "nordic-minimal"
  theme: "matcha-oat",

  info: {
    name: "Bloom & Brew",
    tagline: "Nitelikli Çekirdek & Artisan Demlemeler",
    subtitle: "Taze kavrulmuş specialty kahveler, fırından yeni çıkmış sıcak Fransız kruvasanları ve gün boyu sessiz çalışma alanları.",
    phone: "+90 (232) 444 0 900",
    address: "Alsancak Sevgi Yolu No:12, İzmir",
    hours: "Hafta İçi: 07:30 - 22:00 | Hafta Sonu: 08:30 - 23:00",
    wifiCode: "bloombrew2026",
  },

  images: {
    heroBg: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
    coffeeStory: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
    roastingProcess: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=1000&auto=format&fit=crop",
    community: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop",
  },

  story: {
    title: "Çekirdekten Bardağa Nitelikli Kahve Yolculuğu",
    description: "Bloom & Brew'da kahve basit bir içecek değil, topraktan bardağa uzanan hassas bir zanaattır. Çekirdeklerimizi haftalık olarak kendi kavrum profillerimizle hazırlıyor ve artisan lezzetlerle sunuyoruz.",
  },

  workshops: [
    {
      id: "ceramic_workshop",
      title: "Kahve Kupası Seramik Boyama Atölyesi",
      description: "Kendi seramik kupanızı tasarlayın ve fırınlayalım. Tüm malzemeler ve kahve ikramı dahildir.",
      tag: "🎨 Atölye Etkinliği",
      price: "450 ₺",
      date: "Her Cumartesi 14:00",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "handmade_mug",
      title: "El Yapımı Seramik Kupa Serisi",
      description: "Yerel seramik sanatçıları tarafından Bloom & Brew için özel üretilmiş taş kupa serisi.",
      tag: "🏺 Mağaza Ürünü",
      price: "320 ₺",
      date: "Stokta Mevcut",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "thermos_bottle",
      title: "Mat Çelik Termos (500 ml)",
      description: "12 saat sıcak ve soğuk korumalı, sızdırmaz minimal seyahat termosu.",
      tag: "☕ Aksesuar",
      price: "580 ₺",
      date: "Stokta Mevcut",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "v60_barista_class",
      title: "Evde V60 Demleme Eğitimi",
      description: "Doğru öğütüm, su sıcaklığı ve pour-over teknikleriyle iyi kahve demlemeyi öğrenin.",
      tag: "🎓 Barista Eğitimi",
      price: "350 ₺",
      date: "Her Pazar 11:00",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
    }
  ],

  categories: [
    { id: "espresso", name: "Espresso Bar" },
    { id: "pour_over", name: "Pour-Over & Filtre" },
    { id: "cold_coffee", name: "Cold Brew & Soğuk İçecekler" },
    { id: "bakery", name: "Artisan Fırın & Tatlılar" },
  ],

  menuItems: [
    { id: 1, category: "espresso", name: "Single Origin Flat White", price: "125 ₺", description: "Çift shot Etiyopya Yirgacheffe espresso ve ipeksi mikro süt köpüğü.", image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop", tag: "SCA 86+ Puan" },
    { id: 2, category: "espresso", name: "Iced Caramel Macchiato", price: "135 ₺", description: "Vanilya şurubu, soğuk süt, espresso ve ev yapımı karamel.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop", tag: "İmza Lezzet" },
    { id: 3, category: "pour_over", name: "V60 Hand Brew (Etiyopya)", price: "140 ₺", description: "Japon Hario V60 ile demlenen narenciye ve yasemin notalı filtre kahve.", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop", tag: "Manuel Demleme" },
    { id: 4, category: "cold_coffee", name: "24-Hour Cold Brew", price: "135 ₺", description: "24 saat ağır suyla demlenmiş düşük asiditeli soğuk kahve.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop", tag: "İmza Demleme" },
    { id: 5, category: "bakery", name: "Antep Fıstıklı Çıtır Kruvasan", price: "185 ₺", description: "%100 Fransız tereyağlı katlar ve hakiki Antep fıstığı dolgusu.", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop", tag: "Günlük Fırından" },
    { id: 6, category: "bakery", name: "Akışkan San Sebastian Cheesecake", price: "175 ₺", description: "İçi ipeksi akışkan, üzeri karamelize fırınlanmış cheesecake.", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop", tag: "Çikolata Eşlikli" },
  ]
};