import { cafeConfig } from "../config/cafeConfig";

export default function ContactPage() {
  const { info } = cafeConfig;

  return (
    <div className="pt-28 md:pt-36 pb-16 md:py-24 px-5 md:px-12 max-w-7xl mx-auto space-y-16">
      
      <div className="text-left border-b border-[var(--border-color)] pb-6 md:pb-8">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-highlight)] block mb-2">
          Ulaşım & Ziyaret
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[var(--text-main)]">
          İletişim, Konum & Çalışma Alanı
        </h1>
        <p className="text-xs md:text-sm text-[var(--text-muted)] max-w-xl mt-3">
          Kahve içmek, seramik atölyelerimize katılmak veya laptopunuzla sessizce çalışmak için Alsancak'taki alanımıza davetlisiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="regent-card p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-highlight)] block mb-3">📍 Adres & Konum</span>
            <h3 className="font-bold text-sm text-[var(--text-main)] mb-2">{info.name}</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">{info.address}</p>
          </div>
          <span className="text-[11px] font-semibold text-[var(--text-muted)] pt-3 border-t border-[var(--border-color)]">
            🚶 Alsancak Garı'na 5 dk yürüme mesafesinde
          </span>
        </div>

        <div className="regent-card p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-highlight)] block mb-3">⏱️ Çalışma Saatleri</span>
            <p className="text-xs text-[var(--text-main)] font-semibold leading-relaxed mb-2">{info.hours}</p>
            <p className="text-[11px] text-[var(--text-muted)]">Mutfak ve sıcak tatlı servisi kapanıştan 30 dk önce sona erer.</p>
          </div>
          <a href={`tel:${info.phone}`} className="text-xs font-extrabold text-[var(--text-main)] hover:text-[var(--accent-highlight)] transition-colors pt-3 border-t border-[var(--border-color)] block">
            📞 {info.phone}
          </a>
        </div>

        <div className="regent-card p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-highlight)] block mb-3">📶 Çalışma Alanı & Wi-Fi</span>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3">
              500 Mbps Fiber altyapı, her masada bağımsız priz soketleri ve gürültüsüz çalışma ortamı.
            </p>
          </div>
          <div className="pt-3 border-t border-[var(--border-color)]">
            <span className="text-[11px] font-bold text-[var(--text-main)]">Wi-Fi Ağ Şifresi: <code className="text-[var(--accent-highlight)]">{info.wifiCode}</code></span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        <div className="lg:col-span-7 regent-card p-4 min-h-[350px] flex flex-col justify-between">
          <div className="w-full h-full min-h-[300px] bg-[var(--bg-primary)] overflow-hidden relative">
            <iframe 
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.939223788914!2d27.1408333!3d38.4380556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI2JzE3LjAiTiAyN8KwMDgnMjcuMCJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str" 
              className="w-full h-full border-0 grayscale opacity-85 hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="lg:col-span-5 regent-card p-6 md:p-8 text-left flex flex-col justify-between space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-highlight)] block mb-1">
              Bize Ulaşın
            </span>
            <h3 className="text-lg font-extrabold text-[var(--text-main)] mb-4">
              Atölyeler veya Özel Etkinlikler İçin Mesaj Gönderin
            </h3>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input 
                type="text" 
                placeholder="Adınız Soyadınız" 
                className="w-full px-3.5 py-2.5 text-xs bg-[var(--bg-primary)] text-[var(--text-main)] border border-[var(--border-color)] outline-none focus:border-[var(--accent)] transition-colors"
              />
              <input 
                type="email" 
                placeholder="E-posta Adresiniz" 
                className="w-full px-3.5 py-2.5 text-xs bg-[var(--bg-primary)] text-[var(--text-main)] border border-[var(--border-color)] outline-none focus:border-[var(--accent)] transition-colors"
              />
              <textarea 
                rows="3" 
                placeholder="Mesajınız..." 
                className="w-full px-3.5 py-2.5 text-xs bg-[var(--bg-primary)] text-[var(--text-main)] border border-[var(--border-color)] outline-none focus:border-[var(--accent)] transition-colors resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full py-3 bg-[var(--btn-bg)] text-[var(--btn-text)] text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>

      </div>

    </div>
  );
}