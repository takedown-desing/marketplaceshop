import { Container, Pending, SectionBadge, SectionTitle } from '../ui'

/**
 * Отзывов пока нет, поэтому блок показывает честное пустое состояние.
 * Выдуманные отзывы в нише, где подрядчика проверяют через тот же Telegram,
 * обходятся дороже, чем их отсутствие.
 */
export default function Reviews() {
  return (
    <section className="bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
      <Container>
        <SectionBadge number={9} label="Отзывы" />
        <SectionTitle className="mb-4">Что говорят клиенты</SectionTitle>
        <p className="mb-10 max-w-[62ch] text-[15px] leading-[1.6] text-gray-600 sm:mb-14 sm:text-[17px]">
          Блок готов, ждём реальные отзывы с именем и компанией. Выдуманные ставить не будем.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex min-h-[190px] flex-col gap-3 rounded-2xl border border-dashed border-gray-300 p-6"
            >
              <span className="h-[9px] rounded-full bg-gray-100" />
              <span className="h-[9px] rounded-full bg-gray-100" />
              <span className="h-[9px] w-[62%] rounded-full bg-gray-100" />
              <div className="mt-auto flex items-center gap-3">
                <span className="h-9 w-9 rounded-full bg-gray-100" />
                <span className="text-[13px] text-gray-400">Имя, компания</span>
              </div>
            </div>
          ))}
        </div>
        <Pending>Блокер: нужны 2–3 отзыва от заказчика</Pending>
      </Container>
    </section>
  )
}
