const services = [
  {
    title: 'Kapcsolati problémák',
    image: '/media/service_1.webp',
    items: [
      'családi krízishelyzetek',
      'a szülői szereppel járó nehézségek',
      'gyermeknevelési problémák',
      'visszatérő játszmák',
      'párkapcsolati elakadások',
      'rossz szülői minták',
    ],
  },
  {
    title: 'Szakmai, munkahelyi problémák',
    image: '/media/service_2.webp',
    items: [
      'karrierváltás',
      'vezetőként megélt nehézségek',
      'kommunikációs problémák',
      'szervezeten belül elfoglalt pozíció',
      'vállalkozás indítás',
      'munkavállalás kisgyermekek mellett',
      'szervezeten belüli játszma helyzetek',
      'időgazdálkodás, prioritások',
    ],
  },
  {
    title: 'Önismeret, önelfogadás',
    image: '/media/service_3.webp',
    items: [
      'korábbi élettapasztalatok hatásának feltárása',
      'erősségek feltárása',
      'énidő',
      'belső engedélyek',
      'különböző szerepek közti egyensúly megteremtése',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="heading-section">
          <h2 className="mb-6" data-aos="fade">
            Miben segíthet a coach?
          </h2>
          <div className="row" data-aos="fade">
            {services.map((s) => (
              <div key={s.title} className="col-md-4 d-flex align-items-stretch">
                <div className="services-2 text-center">
                  <div className="icon-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <img
                        className="icon-img img-love"
                        src={s.image}
                        alt={s.title}
                      />
                    </div>
                  </div>
                  <h3>{s.title}</h3>
                  <ul className="services">
                    {s.items.map((item) => (
                      <li key={item}>
                        <div className="flaticon-check" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
