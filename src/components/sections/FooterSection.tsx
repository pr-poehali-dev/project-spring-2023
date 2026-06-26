import { Waves } from "lucide-react"
import { Button } from "@/components/ui/button"

const FooterSection = () => {
  return (
    <footer className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Waves className="w-6 h-6" />
                <span className="text-xl font-semibold">Maldives Voyage</span>
              </div>
              <p className="text-white/80 leading-relaxed text-pretty">
                Мы создаем незабываемые путешествия и показываем, в каком прекрасном мире мы живем!
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-16">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ТУР</h3>
                <ul className="space-y-3">
                  {["Галерея", "Цены"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Команда", "Отзывы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ДРУГОЕ</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#faq"
                      onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }) }}
                      className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-white/10 pt-12 mb-12">
            <div className="max-w-md">
              <h3 className="text-lg font-semibold mb-4">Новости туров и спецпредложения</h3>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Введите ваш email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                />
                <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
              </div>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/60 text-sm text-center">© 2026 Maldives Voyage</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
