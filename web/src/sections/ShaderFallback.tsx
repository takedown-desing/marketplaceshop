/**
 * Статичная замена шейдеру: показывается, пока грузится движок,
 * и остаётся навсегда, если браузер или видеокарта не тянут WebGL.
 * Лежит отдельным файлом, чтобы тяжёлый чанк шейдеров не втягивался
 * в основной бандл через общий импорт.
 */
export default function ShaderFallback() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10"
      style={{
        background:
          'radial-gradient(60% 55% at 22% 38%, rgba(255,95,3,0.16), transparent 70%), radial-gradient(50% 50% at 80% 25%, rgba(255,255,255,0.9), transparent 72%)',
      }}
    />
  )
}
