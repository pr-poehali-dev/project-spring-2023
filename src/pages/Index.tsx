import HeroSection from "@/components/sections/HeroSection"
import ProgramSection from "@/components/sections/ProgramSection"
import FaqSection from "@/components/sections/FaqSection"
import FooterSection from "@/components/sections/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen text-white relative" style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/196da1e6-b0ea-4748-a01f-bf4592c087ac.JPG)", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      <HeroSection />
      <ProgramSection />
      <FaqSection />
      <FooterSection />
    </div>
  )
}

export default Index