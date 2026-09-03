import Hero from './sections/Hero'
import Calculator from './sections/Calculator'
import Comparison from './sections/Comparison'
import Included from './sections/Included'
import Cases from './sections/Cases'
import Process from './sections/Process'
import Pricing from './sections/Pricing'
import Platforms from './sections/Platforms'
import Bonuses from './sections/Bonuses'
import Reviews from './sections/Reviews'
import About from './sections/About'
import Quiz from './sections/Quiz'
import Faq from './sections/Faq'
import Lead from './sections/Lead'
import Footer from './sections/Footer'
import StickyCta from './sections/StickyCta'

/**
 * Порядок секций повторяет утверждённую структуру:
 * боль → доказательство → продукт → цена → снятие возражений → действие.
 */
export default function App() {
  return (
    <main className="bg-white">
      <Hero />
      <Calculator />
      <Comparison />
      <Included />
      <Cases />
      <Process />
      <Pricing />
      <Platforms />
      <Bonuses />
      <Reviews />
      <About />
      <Quiz />
      <Faq />
      <Lead />
      <Footer />
      <StickyCta />
    </main>
  )
}
