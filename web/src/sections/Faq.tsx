import { Container, SectionBadge, SectionTitle } from '../ui'
import { FAQ } from '../content'

export default function Faq() {
  return (
    <section id="faq" className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <Container>
        <SectionBadge number={12} label="Вопросы" borderClass="border-gray-300" />
        <SectionTitle className="mb-10 sm:mb-14">Что обычно спрашивают</SectionTitle>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {FAQ.map((item, i) => (
            <details key={item.q} open={i === 0} className="group border-b border-gray-200 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5 text-[16px] font-semibold text-gray-900 marker:hidden group-open:text-[#F26522] sm:text-[17px]">
                {item.q}
                <span className="ml-auto h-[10px] w-[10px] shrink-0 rotate-45 border-b-2 border-r-2 border-gray-400 transition-transform duration-200 group-open:-rotate-135" />
              </summary>
              <p className="max-w-[76ch] px-6 pb-6 text-[15px] leading-[1.6] text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
