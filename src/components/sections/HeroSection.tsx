import { Waves, Anchor } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/7777f37c-f8bf-40a4-91e4-e509afcb1503.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <Waves className="w-5 h-5" />
          <span className="font-medium text-balance">Maldives Voyage</span>
        </div>

        {/* Navigation Links — center */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1">
          {[
            { label: "Тур", href: "#" },
            { label: "Программа", href: "#program" },
            { label: "Дайвинг", href: "#video" },
            { label: "Вопросы", href: "#faq" },
            { label: "Контакты", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); document.querySelector(item.href === '#' ? 'body' : item.href)?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
        {/* Badge */}
        <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <span className="text-sm font-medium">Авторский тур на Мальдивы · группа до 12 человек</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Откройте бирюзовый рай.</h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
          Погружения на лучших рифах, снорклинг с черепахами и скатами, знакомство с культурой островов — авторский тур на Мальдивы с дайвингом и русскоговорящим гидом.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
            Забронировать тур
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
          >
            Смотреть программу
          </Button>
        </div>

        {/* Footer Note */}
        <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <Anchor className="w-4 h-4" />
          <span className="text-sm font-medium">Всё включено · безопасность с сертифицированными дайв-инструкторами</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection