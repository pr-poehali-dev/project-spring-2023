import { useState } from "react"
import { Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Нужен ли опыт дайвинга для участия в туре?",
    answer:
      "Нет, опыт не обязателен. Для новичков мы проводим вводные погружения с инструктором на мелководье и можем организовать сертификацию PADI прямо на месте. Опытные дайверы смогут исследовать рифы и затонувшие объекты на глубине. Программа гибко подстраивается под ваш уровень.",
  },
  {
    question: "Что входит в стоимость тура?",
    answer:
      "В стоимость включены проживание в виллах у океана, все трансферы (включая катер и гидросамолёт), питание, снаряжение для дайвинга и снорклинга, экскурсии к местным островам, сопровождение русскоговорящего гида и страховка. Авиабилеты до Мале и личные расходы оплачиваются отдельно.",
  },
  {
    question: "Какие экскурсии и активности входят в программу?",
    answer:
      "Вас ждут погружения на лучших рифах Мальдив, снорклинг с морскими черепахами и скатами, посещение обитаемого местного острова со знакомством с культурой и кухней, морская прогулка на закате и наблюдение за дельфинами. Программа сочетает приключения и спокойный отдых.",
  },
  {
    question: "Как забронировать место?",
    answer:
      "Группы ограничены 12 участниками, туры проводятся круглый год с лучшим сезоном с ноября по апрель. Бронируйте за 2-4 месяца через форму на сайте. Предоплата 30% закрепляет ваше место, полная оплата — за 30 дней до вылета.",
  },
]

const photos = [
  "https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/d8006019-12f2-455d-88ef-0aba5d37fb7c.JPG",
  "https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/2fab5d35-6142-44d5-9407-0fbbd82b499a.JPG",
  "https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/1b192955-2139-466b-afe8-d08736d48973.JPG",
  "https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/956a3509-103e-4b2c-bbe5-9aee71125d07.JPG",
  "https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/73a09c20-a6aa-46fb-bdd0-0617cfedb3dd.jpg",
  "https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/4e2a9d03-0b90-47c7-9f28-af6c9bd9b959.jpg",
  "https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/df4638ad-98f5-4eb0-9a90-6c5e0739e8e2.JPG",
  "https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/23a4f0b6-0b52-4b16-be6d-acfe731b297f.JPG",
]

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о туре: от уровня подготовки для дайвинга до того, что входит в стоимость и как забронировать место.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Scroll Strip */}
      <section className="relative z-10 py-12 overflow-hidden">
        <style>{`
          @keyframes scroll-photos {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .photo-strip {
            display: flex;
            animation: scroll-photos 30s linear infinite;
            width: max-content;
          }
          .photo-strip:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="photo-strip">
          {[...photos, ...photos].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-3 rounded-2xl overflow-hidden cursor-pointer"
              style={{ width: '320px', height: '240px' }}
              onClick={() => setLightbox(src)}
            >
              <img
                src={src}
                alt={`Фото ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Фото"
            className="max-w-[90vw] max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-8 text-white/70 hover:text-white text-4xl font-light leading-none"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Отправить запрос</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше полное имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Расскажите о датах и пожеланиях по туру..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    По вопросам бронирования, индивидуальных дат или подбора тура под вашу компанию — напишите нам. Мы отвечаем в течение одного рабочего дня.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/4e2a9d03-0b90-47c7-9f28-af6c9bd9b959.jpg"
                      alt="Наталия Дзагоева"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Наталия Дзагоева</h4>
                      <p className="text-gray-600">PADI Instructor</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FaqSection