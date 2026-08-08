import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cafeConfig } from "../config/cafeConfig";

export default function Home() {
  const info = cafeConfig?.info || {};
  const images = cafeConfig?.images || {};
  const workshops = cafeConfig?.workshops || [];

  return (
    <div className="pt-28 md:pt-36">
      
      <section className="pb-16 px-5 md:px-12 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 text-left space-y-4 md:space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent-highlight)] block"
            >
              {info.tagline}
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--text-main)] tracking-tight leading-[1.05]"
            >
              Nitelikli Kahve & Özel Demleme Çözümleri.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base text-[var(--text-muted)] font-normal leading-relaxed max-w-xl"
            >
              {info.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link 
                to="/menu" 
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-[var(--btn-bg)] text-[var(--btn-text)] text-xs font-extrabold uppercase tracking-widest hover:opacity-85 transition-opacity"
              >
                ☕ Kahve Menümüz
              </Link>
              <Link 
                to="/workshops" 
                className="w-full sm:w-auto text-center px-8 py-3.5 border border-[var(--text-main)] text-[var(--text-main)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--text-main)] hover:text-[var(--bg-primary)] transition-all"
              >
                🏺 Mağaza & Atölye
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 h-[280px] sm:h-[360px] md:h-[420px] regent-card overflow-hidden relative"
          >
            <img 
              src={images.heroBg} 
              alt="Bloom & Brew Kafe" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-[var(--bg-card)]/90 backdrop-blur-md p-3 md:p-4 border border-[var(--border-color)] text-left">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[var(--accent-highlight)] block">Nitelikli Kavrum</span>
              <span className="text-xs md:text-sm font-bold text-[var(--text-main)]">Single Origin Demlemeler & Artisan Lezzetler</span>
            </div>
          </motion.div>

        </div>
      </section>

      <section className="py-16 md:py-24 px-5 md:px-12 max-w-7xl mx-auto border-b border-[var(--border-color)]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12"
        >
          <div>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-highlight)] block mb-2">
              Topluluk & Zanaat
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[var(--text-main)]">
              Atölyeler & Tasarım Mağaza
            </h2>
          </div>
          <Link to="/workshops" className="text-xs font-bold uppercase tracking-widest text-[var(--accent-highlight)] hover:underline mt-3 md:mt-0">
            Tüm Atölyeleri Gör &rarr;
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {workshops.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="regent-card p-4 group flex flex-col justify-between h-[380px] md:h-[410px]"
            >
              <div className="h-48 md:h-56 w-full overflow-hidden bg-[var(--bg-primary)] mb-3 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[var(--bg-card)] text-[9px] font-bold uppercase tracking-wider text-[var(--text-main)] border border-[var(--border-color)]">
                  {item.tag}
                </span>
              </div>
              
              <div className="text-left flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-xs md:text-sm text-[var(--text-main)] uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <span className="text-xs font-black text-[var(--accent-highlight)] ml-2 shrink-0">{item.price}</span>
                  </div>
                  <p className="text-[11px] md:text-xs text-[var(--text-muted)] font-normal mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[var(--text-main)] pt-2.5 border-t border-[var(--border-color)] flex items-center justify-between">
                  <span>{item.date || "Stokta Var"}</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}