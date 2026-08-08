import { Link } from "react-router-dom";
import { cafeConfig } from "../config/cafeConfig";

export default function Footer() {
  const { info } = cafeConfig;

  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border-color)] py-10 px-5 md:px-12 text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-[var(--border-color)]">
        
        <div className="space-y-1 max-w-sm">
          <Link to="/" className="text-base font-black tracking-widest uppercase text-[var(--text-main)] font-[var(--font-heading)]">
            {info.name}
          </Link>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            {info.tagline} — Nitelikli Çekirdek & Artisan Demleme Sanatı.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">
          <Link to="/" className="hover:text-[var(--accent-highlight)] transition-colors">Ana Sayfa</Link>
          <Link to="/story" className="hover:text-[var(--accent-highlight)] transition-colors">Felsefe</Link>
          <Link to="/menu" className="hover:text-[var(--accent-highlight)] transition-colors">Menü</Link>
          <Link to="/workshops" className="hover:text-[var(--accent-highlight)] transition-colors">Atölyeler</Link>
          <Link to="/contact" className="hover:text-[var(--accent-highlight)] transition-colors">Konum & Ulaşım</Link>
        </div>

        <div className="text-xs space-y-1">
          <span className="text-[var(--text-muted)] block">Alsancak, İzmir</span>
          <a href={`tel:${info.phone}`} className="font-extrabold text-[var(--text-main)] hover:text-[var(--accent-highlight)] transition-colors block">
            {info.phone}
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[var(--text-muted)] gap-3">
        <p>© 2026 {info.name}. Tüm hakları saklıdır.</p>
        <p className="font-semibold text-[var(--text-main)]">Nitelikli Kahve & Zanaat Atölyeleri</p>
      </div>
    </footer>
  );
}