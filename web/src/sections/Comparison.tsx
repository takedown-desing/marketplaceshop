import { Container, RollButton, SectionBadge, SectionTitle } from '../ui'
import { COMPARISON } from '../content'

export default function Comparison() {
  return (
    <section id="compare" className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <Container>
        <SectionBadge number={2} label="Ядро вопроса" borderClass="border-gray-300" />
        <SectionTitle className="mb-4">Маркетплейс против своего магазина</SectionTitle>
        <p className="mb-10 max-w-[62ch] text-[15px] leading-[1.6] text-gray-600 sm:mb-14 sm:text-[17px]">
          Девять пунктов, по которым площадка решает за вас — и по которым в своём магазине решаете вы.
        </p>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="hidden grid-cols-[1.05fr_1fr_1fr] border-b border-gray-200 bg-gray-50 md:grid">
            <div className="px-5 py-4 text-[13px] font-semibold text-gray-500">Что решается</div>
            <div className="border-l border-gray-200 px-5 py-4 text-[13px] font-semibold text-red-600">Маркетплейс</div>
            <div className="border-l border-gray-200 px-5 py-4 text-[13px] font-semibold text-emerald-700">Свой магазин</div>
          </div>

          {COMPARISON.map((row) => (
            <div
              key={row.name}
              className="grid border-b border-gray-200 last:border-b-0 md:grid-cols-[1.05fr_1fr_1fr]"
            >
              <div className="px-5 py-4 text-[14px] font-semibold text-gray-900 sm:text-[15px]">{row.name}</div>
              <div className="border-t border-gray-200 bg-red-50/60 px-5 py-4 text-[14px] leading-[1.5] text-red-900 md:border-l md:border-t-0">
                <span className="font-semibold text-red-600 md:hidden">Маркетплейс — </span>
                {row.mp}
              </div>
              <div className="border-t border-gray-200 bg-emerald-50/60 px-5 py-4 text-[14px] leading-[1.5] text-emerald-900 md:border-l md:border-t-0">
                <span className="font-semibold text-emerald-700 md:hidden">Свой магазин — </span>
                {row.own}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <RollButton>Хочу свой магазин</RollButton>
        </div>
      </Container>
    </section>
  )
}
