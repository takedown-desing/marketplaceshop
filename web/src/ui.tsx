import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

/** Единое замедление для всех наведений — из дизайн-спеки. */
export const EASE = 'duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]'

/** Ширина контента и горизонтальные отступы, одинаковые во всех секциях. */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
  )
}

/**
 * Номерная плашка секции. Номер здесь не украшение: лендинг читается
 * по порядку — боль, доказательство, продукт, цена, возражения, действие.
 */
export function SectionBadge({
  number,
  label,
  borderClass = 'border-gray-200',
}: {
  number: number
  label: string
  borderClass?: string
}) {
  return (
    <div className="mb-6 flex items-center gap-3 sm:mb-8">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
        {number}
      </span>
      <span
        className={`rounded-full border px-3 py-1 text-[12px] font-medium sm:px-4 sm:py-1.5 sm:text-[13px] ${borderClass}`}
      >
        {label}
      </span>
    </div>
  )
}

/** Крупный заголовок секции — та же шкала, что у заголовка первого экрана. */
export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] ${className}`}
    >
      {children}
    </h2>
  )
}

/** Заголовок поменьше — для секций внутри повествования. */
export function SectionSubtitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 text-[clamp(1.5rem,4vw,3.2rem)] ${className}`}
    >
      {children}
    </h2>
  )
}

/**
 * Кнопка с прокруткой подписи: текст продублирован, на наведении
 * внутренний столбец уезжает ровно на половину своей высоты.
 */
export function RollButton({
  children,
  href = '#lead',
  tone = 'orange',
  size = 'md',
}: {
  children: string
  href?: string
  tone?: 'orange' | 'dark'
  size?: 'sm' | 'md'
}) {
  const dark = tone === 'dark'
  const circle = size === 'sm' ? 'h-6 w-6' : 'h-7 w-7 sm:h-8 sm:w-8'
  const text = size === 'sm' ? 'text-[13px]' : 'text-[13px] sm:text-[14px]'
  const pad = size === 'sm' ? 'pl-5 pr-2 py-2' : 'pl-5 pr-2 py-2 sm:pl-6'

  return (
    <a
      href={href}
      className={`group inline-flex shrink-0 items-center gap-3 rounded-full font-medium text-white transition-colors ${EASE} ${pad} ${text} ${
        dark ? 'bg-gray-900 hover:bg-black' : 'bg-[#F26522] hover:bg-[#e05a1a]'
      }`}
    >
      <span className="flex h-[20px] flex-col overflow-hidden">
        <span className={`transition-transform group-hover:-translate-y-1/2 ${EASE}`}>
          <span className="block h-[20px] leading-[20px]">{children}</span>
          <span className="block h-[20px] leading-[20px]">{children}</span>
        </span>
      </span>
      <span
        className={`flex items-center justify-center rounded-full bg-white transition-transform group-hover:-rotate-45 ${EASE} ${circle}`}
      >
        <ArrowRight size={size === 'sm' ? 12 : 14} className={dark ? 'text-gray-900' : 'text-[#F26522]'} />
      </span>
    </a>
  )
}

/** Галочка и минус для перечислений «входит / не входит». */
export function Check({ tone = 'good' }: { tone?: 'good' | 'bad' }) {
  const good = tone === 'good'
  return (
    <span
      className={`mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[6px] border ${
        good ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'
      }`}
      aria-hidden="true"
    >
      {good ? (
        <svg viewBox="0 0 12 12" className="h-[10px] w-[10px] text-emerald-600">
          <path d="M2 6.2 4.6 8.8 10 3.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 12 12" className="h-[10px] w-[10px] text-red-500">
          <path d="M2.6 6h6.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
    </span>
  )
}

/** Перечисление с галочками. */
export function CheckList({ items, tone = 'good' }: { items: string[]; tone?: 'good' | 'bad' }) {
  return (
    <ul className="flex flex-col gap-[11px]">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[14px] leading-[1.5] text-gray-700 sm:text-[15px]">
          <Check tone={tone} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Жёлтая пометка «здесь ждём данные от заказчика».
 * Оставлена в вёрстке намеренно: пустое место в блоке должно быть видно.
 */
export function Pending({ children }: { children: ReactNode }) {
  return (
    <span className="mt-4 inline-flex items-center gap-2 rounded-lg border border-amber-300/60 bg-amber-50 px-3 py-2 text-[12px] text-amber-800 sm:text-[13px]">
      {children}
    </span>
  )
}
