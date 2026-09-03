import type { ReactNode } from 'react'
import {
  ArrowRight, BarChart3, Bell, Boxes, Check as CheckGlyph, ClipboardList, Code2, CreditCard,
  Download, FileCheck2, FileText, FolderTree, Gauge, Globe, Home, Images, LayoutGrid, LifeBuoy,
  Megaphone, MessageSquare, Minus, Package, Palette, PartyPopper, Percent, Plug, Receipt, Rocket,
  Scale, SearchX, ShieldCheck, ShoppingCart, SlidersHorizontal, Smartphone, Swords, Tag, Ticket,
  Truck, Undo2, Users, Wallet, X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IconName } from './content'

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
        <CheckGlyph size={11} strokeWidth={2.6} className="text-emerald-600" />
      ) : (
        <Minus size={11} strokeWidth={2.6} className="text-red-500" />
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

/* ────────────────────────────────────────────────────────────────
   Иконки. Берём готовый набор lucide-react и подключаем только то,
   что реально используется, — весь набор в бандл не тянем.
   ──────────────────────────────────────────────────────────────── */

const ICONS: Record<string, LucideIcon> = {
  BarChart3, Bell, Boxes, Check: CheckGlyph, ClipboardList, Code2, CreditCard, Download, FileCheck2,
  FileText, FolderTree, Gauge, Globe, Home, Images, LayoutGrid, LifeBuoy, Megaphone, MessageSquare,
  Minus, Package, Palette, PartyPopper, Percent, Plug, Receipt, Rocket, Scale, SearchX, ShieldCheck,
  ShoppingCart, SlidersHorizontal, Smartphone, Swords, Tag, Ticket, Truck, Undo2, Users, Wallet, X,
}

export function Icon({ name, size = 16, className = '' }: { name: IconName; size?: number; className?: string }) {
  const Cmp = ICONS[name] ?? CheckGlyph
  return <Cmp size={size} className={className} strokeWidth={2} aria-hidden="true" />
}

/** Иконка в квадратной подложке — единый приём для всех перечислений. */
export function IconTile({
  name,
  tone = 'neutral',
  size = 'md',
}: {
  name: IconName
  tone?: 'neutral' | 'accent' | 'good' | 'bad'
  size?: 'sm' | 'md' | 'lg'
}) {
  const box =
    size === 'lg' ? 'h-11 w-11 rounded-[13px]' : size === 'sm' ? 'h-7 w-7 rounded-[8px]' : 'h-9 w-9 rounded-[10px]'
  const px = size === 'lg' ? 20 : size === 'sm' ? 14 : 17
  const skin = {
    neutral: 'bg-gray-100 text-gray-500',
    accent: 'bg-[#F26522]/10 text-[#F26522]',
    good: 'bg-emerald-50 text-emerald-600',
    bad: 'bg-red-50 text-red-500',
  }[tone]
  return (
    <span className={`flex shrink-0 items-center justify-center ${box} ${skin}`}>
      <Icon name={name} size={px} />
    </span>
  )
}

/** Круглая пометка «да / нет» для сравнительных таблиц. */
export function Verdict({ ok }: { ok: boolean }) {
  return (
    <span
      className={`mt-[1px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full ${
        ok ? 'bg-emerald-600 text-white' : 'bg-red-100 text-red-500'
      }`}
      aria-hidden="true"
    >
      {ok ? <CheckGlyph size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
    </span>
  )
}

/** Перечисление с тематической иконкой на каждый пункт. */
export function IconList({
  items,
  tone = 'neutral',
}: {
  items: [string, IconName][]
  tone?: 'neutral' | 'accent' | 'good'
}) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map(([label, icon]) => (
        <li key={label} className="flex items-center gap-3 text-[14.5px] leading-[1.45] text-gray-700 sm:text-[15px]">
          <IconTile name={icon} tone={tone} size="sm" />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  )
}

/** Перечисление «этого нет» — минус в круге, без тематических иконок. */
export function MinusList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-[14.5px] leading-[1.45] text-gray-500 sm:text-[15px]">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400">
            <Minus size={14} strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
