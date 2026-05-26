import { useEffect, useRef } from 'react'

const TEXT1 =
  'Minden problémát, amit a gondolatok teremtettek, fel is\nszámolhatnak a gondolatok...'
const TEXT2 =
  '...de soha nem azok a gondolatok, amelyek létrehozták.'

export default function Hero() {
  const mottoRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const motto = containerRef.current
    if (!motto) return
    const textEl = mottoRef.current
    if (!textEl) return

    const interval = setInterval(() => {
      setTimeout(() => {
        motto.classList.add('out')
        setTimeout(() => {
          textEl.innerHTML = textEl.innerHTML === TEXT1 ? TEXT2 : TEXT1
          motto.classList.remove('out')
        }, 500)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section title="Légrádi Nóra - Pécs" className="hero-wrap intro-img">
      <div className="container">
        <div className="title" ref={containerRef}>
          <h2 className="motto-title mb-4" ref={mottoRef}>
            {TEXT1}
          </h2>
        </div>
      </div>
    </section>
  )
}
