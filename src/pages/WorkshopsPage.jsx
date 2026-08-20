import { cafeConfig } from "../config/cafeConfig";

export default function WorkshopsPage() {
  return (
    <div className="pt-28 md:pt-36 pb-16 md:py-24 px-5 md:px-12 max-w-7xl mx-auto">
      
      <div className="text-left mb-8 md:mb-12 border-b border-[var(--border-color)] pb-6 md:pb-8">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-highlight)] block mb-2">
          Topluluk & Tasarım
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[var(--text-main)] font-[var(--font-heading)]">
          Atölyeler & Seramik Mağaza
        </h1>
        <p className="text-xs md:text-sm text-[var(--text-muted)] max-w-xl mt-3">
          Haftalık seramik boyama etkinliklerimiz, baristalık eğitimlerimiz ve el yapımı taş kupa koleksiyonlarımız.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {cafeConfig.workshops.map((item) => (
          <div key={item.id} className="regent-card p-4 group flex flex-col justify-between h-[410px]">
            <div className="h-56 w-full overflow-hidden bg-[var(--bg-primary)] mb-3 relative rounded-[var(--card-radius)]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[var(--bg-card)]/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-wider text-[var(--text-main)] border border-[var(--border-color)] rounded-[var(--card-radius)]">
                {item.tag}
              </span>
            </div>
            
            <div className="text-left flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-xs md:text-sm text-[var(--text-main)] uppercase">
                    {item.title}
                  </h3>
                  <span className="text-xs font-black text-[var(--accent-highlight)] ml-2">{item.price}</span>
                </div>
                <p className="text-[11px] md:text-xs text-[var(--text-muted)] font-normal mt-1 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[var(--text-main)] pt-2.5 border-t border-[var(--border-color)] flex items-center justify-between">
                <span>{item.date || "Stokta Var"}</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}