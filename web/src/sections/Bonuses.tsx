import { Container, Pending, SectionBadge, SectionTitle } from '../ui'
import { BONUSES } from '../content'

export default function Bonuses() {
  return (
    <section className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <Container>
        <SectionBadge number={8} label="Сверх работ" borderClass="border-gray-300" />
        <SectionTitle className="mb-4">Что даём в подарок</SectionTitle>
        <p className="mb-10 max-w-[62ch] text-[15px] leading-[1.6] text-gray-600 sm:mb-14 sm:text-[17px]">
          То, на что обычно уходит отдельный бюджет и неделя поиска подрядчиков.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {BONUSES.map((bonus) => (
            <div key={bonus.title} className="rounded-2xl bg-white p-6 sm:p-7">
              <span className="mb-4 inline-block rounded-md border border-amber-300/60 bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700">
                экономия — ₽
              </span>
              <h3 className="mb-2 text-[17px] font-semibold text-gray-900">{bonus.title}</h3>
              <p className="text-[14px] leading-[1.55] text-gray-600">{bonus.text}</p>
            </div>
          ))}
        </div>
        <Pending>Суммы экономии проставим, когда заказчик подтвердит состав бонусов</Pending>
      </Container>
    </section>
  )
}
