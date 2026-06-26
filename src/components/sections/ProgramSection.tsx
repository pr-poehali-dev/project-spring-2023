import { Sparkles, ShieldCheck, Wallet, Fish } from "lucide-react"
import { Button } from "@/components/ui/button"

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

            {/* Timeline */}
            <div className="relative mb-4" style={{ height: '160px' }}>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 160"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                    <path d="M0,0 L0,7 L7,3.5 Z" fill="white" />
                  </marker>
                </defs>

                {/* Волнистая пунктирная линия со стрелкой — 10 волн от x=20 до x=980 */}
                <path
                  d="M20,80 C42,50 68,50 90,80 C112,110 138,110 160,80 C182,50 208,50 230,80 C252,110 278,110 300,80 C322,50 348,50 370,80 C392,110 418,110 440,80 C462,50 488,50 510,80 C532,110 558,110 580,80 C602,50 628,50 650,80 C672,110 698,110 720,80 C742,50 768,50 790,80 C812,110 838,110 860,80 C882,50 908,50 930,80 C952,110 968,100 980,80"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="10 7"
                  markerEnd="url(#arrowhead)"
                />

                {/* 10 кружочков равномерно: x = 20, 118, 216 ... шаг 96, каждый на волне */}
                {[
                  { x: 20,  y: 80  },
                  { x: 116, y: 80  },
                  { x: 212, y: 80  },
                  { x: 308, y: 80  },
                  { x: 404, y: 80  },
                  { x: 500, y: 80  },
                  { x: 596, y: 80  },
                  { x: 692, y: 80  },
                  { x: 788, y: 80  },
                  { x: 884, y: 80  },
                ].map((pt, i) => {
                  const isTop = i % 2 === 0
                  return (
                    <g key={i}>
                      <circle cx={pt.x} cy={pt.y} r="7" fill="#0B0F12" stroke="white" strokeWidth="2.5" />
                      <text
                        x={pt.x}
                        y={isTop ? pt.y - 16 : pt.y + 26}
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.75)"
                        fontSize="12"
                        fontFamily="Georgia, 'Times New Roman', serif"
                        fontStyle="italic"
                      >
                        {i + 1} день
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            {/* Check Availability Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Проверить наличие мест
              </Button>
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