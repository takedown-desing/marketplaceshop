import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { CheckList, Container, EASE } from '../ui'

export default function Lead() {
  const [sent, setSent] = useState(false)

  return (
    <section id="lead" className="bg-white pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-32">
      <Container>
        <div className="grid gap-10 rounded-[22px] bg-[#F5F5F5] p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <div>
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.16em] text-[#F26522]">Бесплатно</p>
            <h2 className="mb-6 text-[clamp(1.6rem,3.4vw,2.8rem)] font-medium leading-[1.1] tracking-[-0.025em] text-gray-900">
              Рассчитаем точную стоимость за 20 минут
            </h2>
            <p className="mb-8 max-w-[46ch] text-[15px] leading-[1.6] text-gray-600 sm:text-[17px]">
              Оставьте ссылку на свой магазин на маркетплейсе — посмотрим ассортимент заранее и придём на звонок с
              готовым расчётом, а не с вопросами.
            </p>
            <CheckList
              items={[
                'Перезвоним в течение 5 минут в рабочее время',
                'Скажем точную цену и срок по вашему каталогу',
                'Покажем похожие магазины из нашего портфолио',
              ]}
            />
          </div>

          {sent ? (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                <Check size={26} className="text-emerald-600" />
              </span>
              <h3 className="text-[20px] font-semibold text-gray-900">Заявка принята</h3>
              <p className="mt-2 text-[14px] text-gray-500">Это прототип — форма ничего не отправляет</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="flex flex-col gap-3"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <input required placeholder="Имя" className="rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] outline-none focus:border-gray-900" />
                <input required type="tel" placeholder="Телефон" className="rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] outline-none focus:border-gray-900" />
              </div>
              <input type="url" placeholder="Ссылка на магазин на маркетплейсе" className="rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] outline-none focus:border-gray-900" />
              <textarea
                placeholder="Комментарий: сколько товаров, какие площадки"
                className="min-h-[100px] resize-y rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] outline-none focus:border-gray-900"
              />
              <label className="flex gap-3 py-2 text-[13px] leading-[1.45] text-gray-500">
                <input required type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#F26522]" />
                Соглашаюсь на обработку персональных данных на условиях Политики и Согласия
              </label>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F26522] py-3 pl-6 pr-3 text-[15px] font-medium text-white transition-colors hover:bg-[#e05a1a]"
              >
                Отправить заявку
                <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform group-hover:-rotate-45 ${EASE}`}>
                  <ArrowRight size={14} className="text-[#F26522]" />
                </span>
              </button>
              <p className="text-center text-[12px] text-gray-500">Перезвоним в течение 5 минут в рабочее время</p>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
