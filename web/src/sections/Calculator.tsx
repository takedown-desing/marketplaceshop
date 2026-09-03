import { useMemo, useState } from 'react'
import { Container, RollButton, SectionBadge, SectionSubtitle } from '../ui'

const rub = (n: number) => Math.round(n).toLocaleString('ru-RU') + ' ₽'

/** Своя площадка забирает эквайринг и доставку — примерно 6 % оборота. */
const OWN_SHOP_COST = 0.06

export default function Calculator() {
  const [turnover, setTurnover] = useState(1_500_000)
  const [commission, setCommission] = useState(38)

  const money = useMemo(() => {
    const rate = commission / 100
    return {
      lossYear: turnover * rate * 12,
      lossMonth: turnover * rate,
      keepMp: turnover * (1 - rate),
      keepOwn: turnover * (1 - OWN_SHOP_COST),
    }
  }, [turnover, commission])

  return (
    <section id="calc" className="bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
      <Container>
        <SectionBadge number={1} label="Считаем на ваших цифрах" />
        <SectionSubtitle className="mb-10 sm:mb-14">
          Сколько вы отдаёте площадке за год
        </SectionSubtitle>

        <div className="grid gap-6 rounded-2xl border border-gray-200 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div className="flex flex-col gap-6">
            <p className="text-[15px] leading-[1.6] text-gray-600">
              Поставьте свой оборот и ставку, по которой площадка забирает деньги вместе с логистикой, хранением и
              штрафами. Справа сразу увидите годовую сумму.
            </p>

            <label className="block">
              <span className="mb-2 block text-[14px] font-medium text-gray-700">
                Оборот на маркетплейсе, ₽ в месяц
              </span>
              <input
                type="number"
                min={50000}
                step={50000}
                value={turnover}
                onChange={(e) => setTurnover(Math.max(0, Number(e.target.value) || 0))}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[16px] text-gray-900 outline-none focus:border-gray-900"
              />
            </label>

            <label className="block">
              <span className="mb-2 flex items-center justify-between text-[14px] font-medium text-gray-700">
                Комиссия площадки
                <span className="tabular-nums text-[#F26522]">{commission} %</span>
              </span>
              <input
                type="range"
                min={10}
                max={60}
                value={commission}
                onChange={(e) => setCommission(Number(e.target.value))}
                className="w-full accent-[#F26522]"
              />
            </label>
          </div>

          <div className="rounded-2xl bg-[#F5F5F5] p-6 text-center sm:p-8">
            <p className="mb-2 text-[14px] text-gray-600">Уходит площадке за год</p>
            <p className="mb-1 text-[clamp(2rem,5vw,3.4rem)] font-medium leading-none tracking-[-0.03em] text-gray-900 tabular-nums">
              {rub(money.lossYear)}
            </p>
            <p className="mb-6 text-[14px] text-gray-600">
              это {rub(money.lossMonth)} каждый месяц
            </p>

            <div className="mb-6 grid grid-cols-2 gap-3 text-left">
              <div className="rounded-xl bg-white p-4">
                <span className="block text-[12px] text-gray-600">На маркетплейсе остаётся</span>
                <span className="mt-1 block text-[15px] font-medium tabular-nums text-gray-900">
                  {rub(money.keepMp)}
                </span>
              </div>
              <div className="rounded-xl bg-white p-4">
                <span className="block text-[12px] text-gray-600">В своём магазине</span>
                <span className="mt-1 block text-[15px] font-medium tabular-nums text-[#F26522]">
                  {rub(money.keepOwn)}
                </span>
              </div>
            </div>

            <RollButton>Получить полный расчёт</RollButton>
            <p className="mt-4 text-[12px] text-gray-500">
              Расчёт приблизительный: свой магазин забирает около 6 % на эквайринг и доставку
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
