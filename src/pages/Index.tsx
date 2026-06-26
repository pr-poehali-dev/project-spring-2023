import HeroSection from "@/components/sections/HeroSection"
import ProgramSection from "@/components/sections/ProgramSection"
import FaqSection from "@/components/sections/FaqSection"
import FooterSection from "@/components/sections/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen text-white relative" style={{ backgroundImage: "url(https://cdn.poehali.dev/projects/735094ac-5d55-4396-a0f0-fe0e0cd97aa4/bucket/bf3586b5-2d80-47ee-b0c5-3135e281fa48.JPG)", backgroundSize: "cover", backgroundPosition: "center top", backgroundAttachment: "fixed", imageRendering: "crisp-edges" }}>
      <HeroSection />
      <ProgramSection />
      <FaqSection />
      <FooterSection />
    </div>
  )
}

export default Index