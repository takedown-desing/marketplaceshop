import { ArrowRight } from 'lucide-react'
import { Container, SectionBadge, SectionTitle } from '../ui'
import { CASES, type CaseItem } from '../content'

/** Пилюля, разъезжающаяся из круга при наведении на карточку. */
function HoverPill({ label, tone }: { label: string; tone: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <span
      className={`absolute bottom-4 left-4 flex h-9 items-center overflow-hidden rounded-full transition-all duration-300 ease-in-out w-9 group-hover:w-[168px] ${
        dark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center">
        <ArrowRight
          size={14}
          className={`-rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0 ${
            dark ? 'text-white' : 'text-gray-900'
          }`}
        />
      </span>
      <span
        className={`whitespace-nowrap pr-4 text-[13px] font-medium opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100 ${
          dark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {label}
      </span>
    </span>
  )
}

function Card({ item, large }: { item: CaseItem; large?: boolean }) {
  const Wrapper = item.href ? 'a' : 'div'
  return (
    <div>
      <Wrapper
        {...(item.href ? { href: item.href, target: '_blank', rel: 'noopener' } : {})}
        className={`group relative block cursor-pointer overflow-hidden rounded-2xl bg-[#1a1d2e] ${
          large ? 'aspect-[329/246]' : 'aspect-square'
        }`}
      >
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
        <HoverPill label={item.href ? 'Открыть сайт' : 'Смотреть кейс'} tone={large ? 'light' : 'dark'} />
      </Wrapper>
      <p className="mt-4 text-[13px] leading-relaxed text-gray-600 sm:text-[14px]">{item.text}</p>
      <p className="mt-1 flex items-center gap-2 text-[14px] font-semibold text-gray-900 sm:text-[15px]">
        {item.name}
        {item.fresh && (
          <span className="rounded bg-[#F26522] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
            свежий
          </span>
        )}
      </p>
      <p className="text-[12px] uppercase tracking-[0.12em] text-gray-400">{item.category}</p>
    </div>
  )
}

export default function Cases() {
  const [first, second, ...rest] = CASES
  return (
    <section id="cases" className="bg-[#F5F5F5] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <Container>
        <SectionBadge number={4} label="Работы клиентов" borderClass="border-gray-300" />
        <SectionTitle className="mb-10 sm:mb-14 lg:mb-16">Магазины, которые мы запустили</SectionTitle>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-7">
          <Card item={first} large />
          <Card item={second} large />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {rest.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>

        <p className="mt-8 text-[13px] text-gray-500">
          Проверил домены: из старого портфолио живёт только tecona.ru — на остальные ссылок не ставим.
        </p>
      </Container>
    </section>
  )
}
