import Carousel from "./Components/Carousel"
import CategoryGrid from "./Components/CategoryGrid"
import OurPartners from "./Components/OurPartners"
import PromoSection from "./Components/PromoSection"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Carousel />
      <CategoryGrid />
      <PromoSection />
      <OurPartners />
    </div>
  )
}
