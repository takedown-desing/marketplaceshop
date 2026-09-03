import { Container, SectionBadge, SectionTitle, Verdict } from '../ui'
import { PLATFORMS } from '../content'

export default function Platforms() {
  return (
    <section className="bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
      <Container>
        <SectionBadge number={7} label="Частый вопрос" />
        <SectionTitle className="mb-4">А чем это лучше бесплатных платформ</SectionTitle>
        <p className="mb-10 max-w-[62ch] text-[15px] leading-[1.6] text-gray-600 sm:mb-14 sm:text-[17px]">
          Яндекс КИТ и InSales действительно дешевле на старте. Разница — в том, кому принадлежит магазин.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[720px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-gray-400">
                  Что важно
                </th>
                {PLATFORMS.columns.map((col, i) => (
                  <th
                    key={col}
                    className={`whitespace-nowrap border-l border-gray-200 px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] ${
                      i === 0 ? 'text-[#F26522]' : 'text-gray-400'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PLATFORMS.rows.map((row) => (
                <tr key={row.name} className="border-t border-gray-200">
                  <td className="px-5 py-4 align-top text-gray-900">{row.name}</td>
                  {row.values.map((value, i) => (
                    <td
                      key={value + i}
                      className={`border-l border-gray-200 px-5 py-4 align-top ${
                        i === 0 ? 'bg-[#F26522]/[0.06] font-medium' : ''
                      } ${
                        row.good[i] === true
                          ? 'text-emerald-700'
                          : row.good[i] === false
                            ? 'text-red-600'
                            : 'text-gray-700'
                      }`}
                    >
                      <span className="flex gap-2.5">
                        {typeof row.good[i] === 'boolean' && <Verdict ok={row.good[i] as boolean} />}
                        <span>{value}</span>
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-[13px] leading-relaxed text-gray-500">
          Цитата из раздела «Вопрос-ответ» Яндекс&nbsp;КИТ: «Домен, клиентская база и все данные по заказам — ваши. На
          стороне Яндекса остаётся только код сайта».
        </p>
      </Container>
    </section>
  )
}
