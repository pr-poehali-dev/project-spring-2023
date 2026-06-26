import { Sparkles, ShieldCheck, Wallet, Fish } from "lucide-react"

const ProgramSection = () => {
  return (
    <>
      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Expert-Led Tours */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Авторская программа</h3>
              <p className="text-white/80 leading-relaxed">Маршрут от гида, влюблённого в Мальдивы, и местных экспертов.</p>
            </div>

            {/* World-Class Safety */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Безопасный дайвинг</h3>
              <p className="text-white/80 leading-relaxed">Сертифицированные PADI инструкторы и проверенное снаряжение.</p>
            </div>

            {/* All-Inclusive Package */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Всё включено</h3>
              <p className="text-white/80 leading-relaxed">Виллы у океана, питание, снаряжение и все трансферы.</p>
            </div>

            {/* Eco-Friendly Caving */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Живая природа</h3>
              <p className="text-white/80 leading-relaxed">Черепахи, скаты, дельфины и яркие коралловые рифы.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="program" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Программа путешествия</h2>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Прилет и заселение</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Встреча в аэропорту Мале, трансфер на катере или гидросамолёте и заселение в виллу у океана. Знакомство с группой и гидом.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Культура островов</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Поездка на обитаемый местный остров: знакомство с традициями, дегустация мальдивской кухни и общение с жителями.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Дайвинг и рифы</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Погружения на лучших рифах с инструктором, снорклинг с черепахами и скатами. Для новичков — вводный курс на мелководье.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Отдых и закаты</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Морская прогулка на закате с наблюдением за дельфинами, спокойный отдых на белоснежных пляжах и тёплое прощание с океаном.
                  </p>
                </div>
              </div>
            </div>




          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="relative z-10 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 relative">
            <div className="aspect-video bg-black/40 flex items-center justify-center relative overflow-hidden">
              <iframe
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/qIEN6HJPGCA?autoplay=1&mute=1&loop=1&playlist=qIEN6HJPGCA&controls=0&showinfo=0&modestbranding=1"
                title="Дайвинг на Мальдивах"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                <p className="text-2xl md:text-3xl font-light text-white drop-shadow-lg">
                  Подводный мир Мальдив — коралловые рифы, черепахи и скаты
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProgramSection