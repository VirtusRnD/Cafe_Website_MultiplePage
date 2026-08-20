import { cafeConfig } from "../config/cafeConfig";

export default function StoryPage() {
  const { story, images } = cafeConfig;

  return (
    <div className="pt-28 md:pt-36 pb-16 md:py-24 px-5 md:px-12 max-w-7xl mx-auto space-y-20">
      
      <section className="grid lg:grid-cols-2 gap-10 items-center border-b border-[var(--border-color)] pb-16">
        <div className="h-[360px] md:h-[440px] regent-card overflow-hidden">
          <img src={images.coffeeStory} alt="Demleme Sanatı" className="w-full h-full object-cover" />
        </div>
        <div className="text-left space-y-5">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent-highlight)] font-bold block">
            Demleme Felsefesi
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--text-main)] leading-tight font-[var(--font-heading)]">
            {story.title}
          </h1>
          <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
            {story.description}
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-left space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-highlight)] block">
            Kavrum Standartları
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--text-main)] font-[var(--font-heading)]">
            Hassas Sıcaklık Profillemesi
          </h2>
          <p className="text-xs md:text-sm text-[var(--text-muted)] leading-relaxed">
            Her çekirdek türü kendine özgü bir ısı profili gerektirir. Roastery bünyesinde kavrulan kahvelerimiz haftalık olarak taze paketlenir.
          </p>
        </div>
        <div className="lg:col-span-5 h-[320px] regent-card overflow-hidden">
          <img src={images.roastingProcess} alt="Kavrum" className="w-full h-full object-cover" />
        </div>
      </section>

    </div>
  );
}