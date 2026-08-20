import { useState } from "react";
import { motion } from "framer-motion";
import { cafeConfig } from "../config/cafeConfig";

export default function MenuPage() {
  const categories = cafeConfig?.categories || [];
  const menuItems = cafeConfig?.menuItems || [];
  
  const [activeTab, setActiveTab] = useState(categories[0]?.id || "espresso");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeTab
  );

  return (
    <div className="pt-28 md:pt-36 pb-16 md:py-24 px-5 md:px-12 max-w-7xl mx-auto">
      
      <div className="text-left mb-8 md:mb-12 border-b border-[var(--border-color)] pb-6 md:pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--accent-highlight)] font-bold block mb-2">
            Katalog
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[var(--text-main)] font-[var(--font-heading)]">
            Kahve & Eşlikçi Menüsü
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-[11px] md:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border rounded-[var(--card-radius)] ${
                activeTab === cat.id
                  ? "bg-[var(--btn-bg)] text-[var(--btn-text)] border-[var(--btn-bg)] shadow-sm"
                  : "bg-[var(--bg-card)] text-[var(--text-main)] border-[var(--border-color)] hover:border-[var(--text-main)]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="regent-card p-4 flex flex-col justify-between group"
          >
            <div className="h-48 md:h-56 w-full overflow-hidden bg-[var(--bg-primary)] mb-3 relative rounded-[var(--card-radius)]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="text-left flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline mb-1.5">
                  <h3 className="font-bold text-xs md:text-sm text-[var(--text-main)] uppercase tracking-wider">{item.name}</h3>
                  <span className="text-xs font-black text-[var(--text-main)] ml-2 shrink-0">{item.price}</span>
                </div>
                <p className="text-[11px] md:text-xs text-[var(--text-muted)] leading-relaxed font-normal mb-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[var(--border-color)] flex justify-between items-center">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-[var(--accent-highlight)]">
                  {item.tag}
                </span>
                <span className="text-[9px] md:text-[10px] font-semibold text-[var(--text-muted)]">
                  Taze Hazırlanır
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}