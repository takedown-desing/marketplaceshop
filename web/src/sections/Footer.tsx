import { Container } from '../ui'
import { NAV } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white pb-10 pt-14 sm:pt-16">
      <Container>
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-[11px] font-bold tracking-tight text-white">
              МС
            </span>
            <p className="mt-4 max-w-[34ch] text-[14px] leading-[1.55] text-gray-600">
              Интернет-магазины под ключ для селлеров маркетплейсов. Москва, работаем по всей России.
            </p>
          </div>

          <nav>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">Разделы</p>
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="mb-2 block text-[14px] text-gray-600 hover:text-gray-900">
                {item.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">Контакты</p>
            <a href="tel:+74951503200" className="mb-2 block text-[14px] text-gray-600 hover:text-gray-900">
              +7 (495) 150-32-00
            </a>
            <a href="#" className="mb-2 block text-[14px] text-gray-600 hover:text-gray-900">
              Telegram
            </a>
            <p className="mb-2 text-[14px] text-gray-600">Москва, ул. Флотская, 5к2, офис 601</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-gray-200 pt-6 text-[13px] text-gray-500">
          <span>© 2026. Прототип лендинга, не боевая версия</span>
          <span>Реквизиты юрлица — добавим после получения</span>
        </div>
      </Container>
    </footer>
  )
}
