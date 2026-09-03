import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Container, EASE, SectionBadge, SectionTitle } from '../ui'
import { QUIZ } from '../content'

const TOTAL = QUIZ.length + 1

export default function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [sent, setSent] = useState(false)

  const pick = (value: string) => {
    setAnswers((prev) => ({ ...prev, [step]: value }))
    window.setTimeout(() => setStep((s) => Math.min(s + 1, TOTAL - 1)), 220)
  }

  return (
    <section className="bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
      <Container>
        <SectionBadge number={11} label="2 минуты" />
        <SectionTitle className="mb-4">Сколько вы теряете на маркетплейсе</SectionTitle>
        <p className="mb-10 max-w-[62ch] text-[15px] leading-[1.6] text-gray-600 sm:mb-14 sm:text-[17px]">
          Ответьте на шесть вопросов — пришлём персональный расчёт и план запуска магазина.
        </p>

        <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10">
          <div className="mb-8 h-[5px] overflow-hidden rounded-full bg-gray-100">
            <span
              className="block h-full rounded-full bg-[#F26522] transition-[width] duration-300"
              style={{ width: `${((step + 1) / TOTAL) * 100}%` }}
            />
          </div>

          {sent ? (
            <div className="py-10 text-center">
              <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                <Check size={26} className="text-emerald-600" />
              </span>
              <h3 className="text-[20px] font-semibold text-gray-900">Спасибо, расчёт отправим в течение 20 минут</h3>
              <p className="mt-2 text-[14px] text-gray-500">Это прототип — форма ничего не отправляет</p>
            </div>
          ) : step < QUIZ.length ? (
            <>
              <p className="mb-6 text-[clamp(1.15rem,2.4vw,1.6rem)] font-semibold tracking-[-0.015em] text-gray-900">
                {QUIZ[step].q}
              </p>
              <div className="mb-8 grid gap-2.5">
                {QUIZ[step].a.map((option) => {
                  const active = answers[step] === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => pick(option)}
                      className={`flex items-center gap-3 rounded-xl border px-5 py-4 text-left text-[15px] transition-colors ${EASE} ${
                        active ? 'border-[#F26522] bg-[#F26522]/[0.07]' : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <span
                        className={`h-[18px] w-[18px] shrink-0 rounded-full border-2 ${
                          active ? 'border-[#F26522] bg-[#F26522]' : 'border-gray-300'
                        }`}
                      />
                      {option}
                    </button>
                  )
                })}
              </div>
            </>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <p className="mb-6 text-[clamp(1.15rem,2.4vw,1.6rem)] font-semibold tracking-[-0.015em] text-gray-900">
                Куда прислать расчёт?
              </p>
              <div className="mb-5 grid gap-3 sm:grid-cols-2">
                <input
                  required
                  placeholder="Как вас зовут"
                  className="rounded-xl border border-gray-200 px-4 py-3 text-[15px] outline-none focus:border-gray-900"
                />
                <input
                  required
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="rounded-xl border border-gray-200 px-4 py-3 text-[15px] outline-none focus:border-gray-900"
                />
              </div>
              <label className="mb-7 flex gap-3 text-[13px] leading-[1.45] text-gray-500">
                <input required type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#F26522]" />
                Согласен на обработку персональных данных на условиях Политики
              </label>
              <button
                type="submit"
                className="group mb-2 inline-flex items-center gap-3 rounded-full bg-[#F26522] py-2 pl-6 pr-2 text-[15px] font-medium text-white"
              >
                Получить расчёт
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform group-hover:-rotate-45 ${EASE}`}
                >
                  <ArrowRight size={14} className="text-[#F26522]" />
                </span>
              </button>
            </form>
          )}

          {!sent && (
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-6">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className={`rounded-full border border-gray-200 px-5 py-2.5 text-[14px] text-gray-700 transition-colors hover:border-gray-400 ${
                  step === 0 ? 'invisible' : ''
                }`}
              >
                Назад
              </button>
              {step < QUIZ.length && (
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(TOTAL - 1, s + 1))}
                  className="rounded-full bg-gray-900 px-5 py-2.5 text-[14px] text-white"
                >
                  Дальше
                </button>
              )}
              <span className="ml-auto text-[13px] tabular-nums text-gray-400">
                {step + 1} / {TOTAL}
              </span>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
