import HeroSection from "@/components/sections/HeroSection"
import ProgramSection from "@/components/sections/ProgramSection"
import FaqSection from "@/components/sections/FaqSection"
import FooterSection from "@/components/sections/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      <HeroSection />
      <ProgramSection />
      <FaqSection />
      <FooterSection />
    </div>
  )
}

export default Index
