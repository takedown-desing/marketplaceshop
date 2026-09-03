import { useState } from 'react'
import { Shader, ChromaFlow, FilmGrain, FlutedGlass, Swirl } from 'shaders/react'
import ShaderFallback from './ShaderFallback'

/**
 * Слой шейдеров поверх светлого фона первого экрана.
 * Грузится отдельным чанком: движок весит несколько мегабайт и не должен
 * задерживать первый экран. Если видеокарта или браузер не тянут WebGL,
 * показываем статичный градиент — пустым первый экран не остаётся.
 */
export default function ShaderBackdrop() {
  const [failed, setFailed] = useState(false)

  if (failed) return <ShaderFallback />

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <Shader className="h-full w-full" onUnavailable={() => setFailed(true)}>
        <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
        <ChromaFlow
          baseColor="#ffffff"
          downColor="#ff5f03"
          leftColor="#ff5f03"
          rightColor="#ff5f03"
          upColor="#ff5f03"
          momentum={13}
          radius={3.5}
        />
        <FlutedGlass
          aberration={0.61}
          angle={31}
          frequency={8}
          highlight={0.12}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrain strength={0.05} />
      </Shader>
    </div>
  )
}
