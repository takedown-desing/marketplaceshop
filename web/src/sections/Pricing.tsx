import { CheckList, Container, RollButton, SectionBadge, SectionTitle } from '../ui'
import { PRICE, PRICE_EXCLUDES, PRICE_INCLUDES } from '../content'

export default function Pricing() {
  return (
    <section id="price" className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <Container>
        <SectionBadge number={6} label="Стоимость" borderClass="border-gray-300" />
        <SectionTitle className="mb-4">Один тариф, фиксированная цена</SectionTitle>
        <p className="mb-10 max-w-[62ch] text-[15px] leading-[1.6] text-gray-600 sm:mb-14 sm:text-[17px]">
          Без «от» и пересчётов по ходу работы. Что не входит — написали честно рядом.
        </p>

        <div className="grid items-start gap-5 sm:gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-[#F26522] bg-white p-6 sm:p-8 lg:p-10">
            <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#F26522]">
              Интернет-магазин под ключ
            </p>
            <p className="text-[clamp(2.4rem,6vw,4rem)] font-medium leading-none tracking-[-0.03em] text-gray-900">
              {PRICE}
            </p>
            <p className="mb-8 mt-2 text-[15px] text-gray-600">запуск за 10 рабочих дней</p>
            <CheckList items={PRICE_INCLUDES} />
            <div className="mt-8">
              <RollButton>Заказать магазин</RollButton>
            </div>
            <p className="mt-6 border-t border-gray-200 pt-5 text-[13px] text-gray-500">
              Аналогичные решения на рынке — от 110 000 ₽
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10">
            <h3 className="mb-2 text-[19px] font-semibold text-gray-900">Что не входит</h3>
            <p className="mb-6 text-[14px] text-gray-600">
              Считаем отдельно — чтобы фиксированная цена оставалась честной.
            </p>
            <CheckList items={PRICE_EXCLUDES} tone="bad" />
          </div>
        </div>
      </Container>
    </section>
  )
}
