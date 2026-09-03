import { CheckList, Container, Pending, SectionBadge, SectionSubtitle, SectionTitle } from '../ui'
import { FEATURES_INCLUDED, INTEGRATIONS, MIGRATION_STEPS, PAGES_INCLUDED, PRICE } from '../content'

export default function Included() {
  return (
    <section className="overflow-hidden bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
      <Container>
        <SectionBadge number={3} label="Состав работ" />
        <SectionTitle className="mb-10 sm:mb-14">Что входит за {PRICE}</SectionTitle>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6 sm:p-8">
            <h3 className="mb-5 text-[17px] font-semibold text-gray-900">Страницы сайта</h3>
            <CheckList items={PAGES_INCLUDED} />
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 sm:p-8">
            <h3 className="mb-5 text-[17px] font-semibold text-gray-900">Функционал</h3>
            <CheckList items={FEATURES_INCLUDED} />
          </div>
        </div>
        <Pending>Состав уточняется — ждём подтверждения от заказчика</Pending>

        {/* Перенос товаров — ключевое функциональное отличие оффера */}
        <SectionSubtitle className="mb-3 mt-16 sm:mt-24">Перенесём товары с маркетплейса</SectionSubtitle>
        <p className="mb-8 max-w-[62ch] text-[15px] leading-[1.6] text-gray-600 sm:mb-10 sm:text-[17px]">
          Вручную ничего переносить не нужно. Каталог заберём из вашего личного кабинета.
        </p>
        <ol className="grid gap-5 sm:gap-6 lg:grid-cols-3">
          {MIGRATION_STEPS.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl bg-[#F5F5F5] p-6 sm:p-8">
              <span className="absolute right-6 top-5 text-[44px] font-medium leading-none tracking-[-0.03em] text-gray-300">
                {i + 1}
              </span>
              <h3 className="mb-3 pr-14 text-[17px] font-semibold text-gray-900">{step.title}</h3>
              <p className="text-[14px] leading-[1.6] text-gray-600 sm:text-[15px]">{step.text}</p>
            </li>
          ))}
        </ol>

        {/* Интеграции */}
        <SectionSubtitle className="mb-8 mt-16 sm:mb-10 sm:mt-24">Интеграции</SectionSubtitle>
        <div className="flex flex-col gap-7">
          {INTEGRATIONS.map((group) => (
            <div key={group.group}>
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.12em] text-gray-400">{group.group}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-gray-200 px-4 py-2 text-[14px] font-medium text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
