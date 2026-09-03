import { useEffect, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { EASE } from '../ui'

export default function StickyCta() {
  const [visible, setVisible] = useState(false)
  const [popup, setPopup] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (!shown && !e.relatedTarget && e.clientY < 10) {
        setPopup(true)
        setShown(true)
      }
    }
    document.addEventListener('mouseout', onLeave)
    return () => document.removeEventListener('mouseout', onLeave)
  }, [shown])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setPopup(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div
        className={`fixed bottom-3 left-3 right-3 z-40 flex gap-2.5 transition-all duration-300 sm:bottom-6 sm:left-auto sm:right-6 ${
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <a
          href="tel:+74951503200"
          className="flex flex-1 items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3.5 text-[14px] font-medium text-gray-900 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] sm:flex-none"
        >
          Позвонить
        </a>
        <a
          href="#calc"
          className="group flex flex-1 items-center justify-center gap-3 rounded-full bg-[#F26522] py-3.5 pl-6 pr-3 text-[14px] font-medium text-white shadow-[0_10px_30px_-12px_rgba(242,101,34,0.9)] sm:flex-none"
        >
          Посчитать потери
          <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform group-hover:-rotate-45 ${EASE}`}>
            <ArrowRight size={13} className="text-[#F26522]" />
          </span>
        </a>
      </div>

      {popup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setPopup(false)}
        >
          <div className="relative w-full max-w-[440px] rounded-2xl bg-white p-8">
            <button
              type="button"
              onClick={() => setPopup(false)}
              aria-label="Закрыть"
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-900"
            >
              <X size={20} />
            </button>
            <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.16em] text-[#F26522]">Не уходите просто так</p>
            <h3 className="mb-3 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-gray-900">
              Пришлём расчёт ваших потерь на комиссии
            </h3>
            <p className="mb-6 text-[14px] leading-[1.55] text-gray-600">
              Оставьте телефон — посчитаем на ваших цифрах и покажем, за сколько окупится свой магазин.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setPopup(false)
              }}
              className="flex flex-col gap-3"
            >
              <input
                required
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className="rounded-xl border border-gray-200 px-4 py-3.5 text-[15px] outline-none focus:border-gray-900"
              />
              <button type="submit" className="rounded-full bg-[#F26522] py-3.5 text-[15px] font-medium text-white">
                Получить расчёт
              </button>
            </form>
            <p className="mt-3 text-center text-[12px] text-gray-500">Прототип — форма ничего не отправляет</p>
          </div>
        </div>
      )}
    </>
  )
}
