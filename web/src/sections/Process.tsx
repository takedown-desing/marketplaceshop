import { Container, IconTile, SectionBadge, SectionTitle } from '../ui'
import { PROCESS } from '../content'

export default function Process() {
  return (
    <section className="bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
      <Container>
        <SectionBadge number={5} label="Процесс" />
        <SectionTitle className="mb-4">Магазин за 10 рабочих дней</SectionTitle>
        <p className="mb-10 max-w-[62ch] text-[15px] leading-[1.6] text-gray-600 sm:mb-14 sm:text-[17px]">
          Без затянутых согласований: каждый этап закрывается в свой срок.
        </p>

        <ol className="grid overflow-hidden rounded-2xl border border-gray-200 lg:grid-cols-5">
          {PROCESS.map((step) => (
            <li
              key={step.day}
              className="border-b border-gray-200 p-6 last:border-b-0 sm:p-7 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="mb-4">
                <IconTile name={step.icon} tone="accent" size="lg" />
              </div>
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.12em] text-[#F26522]">{step.day}</p>
              <h3 className="mb-2 text-[16px] font-semibold text-gray-900">{step.title}</h3>
              <p className="text-[14px] leading-[1.55] text-gray-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
