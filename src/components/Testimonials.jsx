import { useEffect, useRef } from 'react'

const testimonials = [
  {
    text: 'Jó szívvel ajánlom Nórit. Úgy tud kérdezni és hallgatni, hogy jó megérkezni hozzá minden alkalommal. Beszélgetőpartnere nem direkt útmutatást kap, hanem ennél sokkal többet: saját magához jut egyre közelebb, az, aki rábízza magát a beszélgetések során. Jó vele együtt gondolkodni. Profi, "kísérő" egy önmagunk mélyebb megismeréséhez vezető úton.',
    name: 'Wochner Tímea',
  },
  {
    text: 'Nórát egy melegszívű, nyílt, támogató személyként ismertem meg. A vele való beszélgetések által új nézőpontokat ismertem meg, sok kérdésre másként tekintek, mint korábban.',
    name: 'Gergely',
  },
  {
    text: 'Nórit 2019 őszén kerestem fel. Könnyed volt a vele való közös munka, hamar egymásra tudtunk hangolódni. Az őszintesége, a rugalmassága és a biztonságos közeg, amit nyújtott lehetővé tette, hogy rövid idő alatt az életem különböző területein lévő elakadásaimat feloldjam; hogy másként tekintsek magamra; hogy kihozzam magamból mindazt, amire valójában képes vagyok. Mindig hálás leszek neki azért, hogy már nem félek repülni.',
    name: 'Zsanett',
  },
  {
    text: 'Akkor fordultam Nórihoz amikor úgy éreztem megerősítésre volt szükségem addig végzett munkámmal és az életemmel kapcsolatban. Nemcsak megerősítést kaptam, hanem sok kérdés és belekérdezés által segített tükröt tartani magam elé, melybe együtt könnyebb volt belenézni. Segített abban, hogy a megerősítést ne mindig kívülről várjam, mintegy visszaigazolást, hanem higgyek a tudásomban, a hozzáállásomban és magamban.',
    name: 'Mayerné Háhner Anita',
  },
]

export default function Testimonials() {
  const glideRef = useRef(null)

  useEffect(() => {
    if (!window.Glide || !glideRef.current) return
    const slider = new window.Glide('#testimonials-glider', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      gap: 20,
      autoplay: 4000,
      hoverpause: true,
      animationDuration: 500,
      breakpoints: {
        1200: { perView: 2 },
        800: { perView: 1 },
      },
    })
    slider.mount()
    return () => slider.destroy()
  }, [])

  return (
    <section id="testimony-section" className="testimony-section">
      <div className="container">
        <div className="position-relative">
          <div className="testimony-bg" />
          <div id="testimonials-glider" className="glide" data-aos="fade" ref={glideRef}>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {testimonials.map((t) => (
                  <li key={t.name} className="testimony-card glide__slide" data-aos="fade">
                    <div className="testimony-wrap py-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <div className="quotation" />
                      </div>
                      <div className="text">
                        <p className="mb-4">{t.text}</p>
                        <div className="d-flex align-items-center">
                          <div className="pl-3">
                            <p className="name">{t.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                &larr;
              </button>
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                &rarr;
              </button>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]" />
          </div>
        </div>
      </div>
    </section>
  )
}
