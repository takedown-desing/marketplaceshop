import { CheckList, Container, Pending, RollButton, SectionBadge, SectionTitle } from '../ui'
import { FACTS } from '../content'

export default function About() {
  return (
    <section className="overflow-hidden bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <Container>
        <SectionBadge number={10} label="О нас" borderClass="border-gray-300" />
        <SectionTitle className="mb-10 sm:mb-14 lg:mb-20">Не фрилансер, а агентство с офисом</SectionTitle>

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_48%] xl:gap-16">
          <div>
            <p className="mb-8 max-w-[54ch] text-[15px] leading-[1.65] text-gray-700 sm:text-[17px]">
              Работаем с 2015 года. Юрлицо, договор, офис в Москве — можно приехать и посмотреть в глаза. После запуска
              магазин не бросаем: ведём поддержку, рекламу и продвижение.
            </p>
            <CheckList
              items={[
                'Договор и закрывающие документы',
                'Свои разработчики, дизайнеры и SEO-специалисты',
                'Поддержка, реклама и продвижение после запуска',
              ]}
            />
            <div className="mt-8">
              <RollButton href="#lead">Обсудить проект</RollButton>
            </div>
            <p className="mt-8 text-[14px] leading-[1.6] text-gray-600">
              Москва, ул. Флотская, д. 5, к. 2, офис 601 — м. Речной вокзал
              <br />
              <a href="tel:+74951503200" className="text-gray-900 hover:underline">
                +7 (495) 150-32-00
              </a>
            </p>
            <Pending>ИНН и ОГРН добавим после получения реквизитов</Pending>
          </div>

          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {FACTS.map((fact, i) => (
              <div
                key={fact.label}
                className={`p-6 sm:p-7 ${i % 2 === 0 ? 'border-r border-gray-200' : ''} ${i < 2 ? 'border-b border-gray-200' : ''}`}
              >
                <p className="mb-2 text-[clamp(1.6rem,3vw,2.2rem)] font-medium leading-none tracking-[-0.03em] text-gray-900">
                  {fact.value}
                </p>
                <p className="text-[13px] leading-[1.45] text-gray-600">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
