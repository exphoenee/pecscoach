import { useState } from 'react'

export default function Footer() {
  const [showImpressum, setShowImpressum] = useState(false)
  const [showCookie, setShowCookie] = useState(false)
  const [showCollapse, setShowCollapse] = useState({})

  function toggleCollapse(id) {
    setShowCollapse((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <footer>
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-12 col-md">
            <div className="footer-widget mb-4">
              <h2 className="heading-2 logo">Közösségi média</h2>
              <ul className="footer-social list-unstyled mt-2">
                <li>
                  <a
                    title="Légárdi Nóra Pécs Coach Facebook oldala"
                    href="https://www.facebook.com/pecscoach/"
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="socials facebook" />
                  </a>
                </li>
                <li>
                  <a
                    title="Légárdi Nóra Pécs Coach LinkedIn oldala"
                    href="https://www.linkedin.com/in/n%C3%B3ra-l%C3%A9gr%C3%A1di-4239341ab/"
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="socials linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    title="Légárdi Nóra Pécs Coach Instagram oldala"
                    href="https://www.instagram.com/legradinora/?hl=hu"
                    target="_blank"
                    rel="noreferrer"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="socials instagram" />
                  </a>
                </li>
              </ul>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <button
                      className="callopsebutton"
                      onClick={() => setShowImpressum(true)}
                    >
                      Impresszum
                    </button>
                  </li>
                  <li>
                    <button
                      className="callopsebutton"
                      onClick={() => setShowCookie(true)}
                    >
                      Süti kezelési tájékoztató
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md">
            <div className="footer-widget mb-4 ms-md-4">
              <h2 className="heading-2">Külső hivatkozások</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.coachingcentrum.hu/">Coaching Centrum</a>
                </li>
                <li>
                  <a href="https://www.coachfederation.hu/">ICF Hungary</a>
                </li>
                <li>
                  <a href="http://www.emcchu.org/">EMCC Maygarország</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md">
            <div className="footer-widget mb-4">
              <h2 className="heading-2">Elérhetőség</h2>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li>
                    <div className="text">+36 30 3483495</div>
                  </li>
                  <li>
                    <div className="text">
                      <a href="mailto:info@pecscoach.hu">info@pecscoach.hu</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 py-5 bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="webforsol-copyrigth">
                <a href="http://www.webforsol.hu/">WebforSol</a> 2020&copy;
              </p>
            </div>
          </div>
        </div>
      </div>

      {showImpressum && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={() => setShowImpressum(false)}>
          <div className="modal-dialog modal-lg" role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content text-dark">
              <div className="modal-header">
                <h4 className="modal-title w-100">Impresszum</h4>
                <button type="button" className="btn-close" onClick={() => setShowImpressum(false)} aria-label="Close" />
              </div>
              <div className="modal-body">
                <div id="accordion" className="CallopseContainer">
                  <div className="card-header" id="headingOne">
                    <h4 className="mb-0">
                      <button
                        className="callopsebutton collapsed"
                        onClick={() => toggleCollapse('collapseOne')}
                      >
                        Honlapot készítette
                      </button>
                    </h4>
                  </div>
                  <div className={`collapse ${showCollapse.collapseOne ? 'show' : ''}`}>
                    <div className="card-body">
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Üzemeltető:</span> Bozzay Viktor
                        egyéni vállalkozó - WebforSol fantázianéven
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Székhely:</span> 7632 Pécs Gyöngyös
                        utca 3.
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Eléhetőség:</span>{' '}
                        viktor.bozzay@enforsol.hu
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Adószám:</span> 68689481-1-22 (alanyi
                        adómentes)
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Kamara:</span> Pécs-Baranyai
                        Kereskedelmi és Iparakamarai
                      </p>
                      <p>
                        Kamari tagságot igazoló iktatószám 83760463/5/2019/PBKIK
                      </p>
                      <p>
                        Nyilvántartásba vétel 52107713 számon az egyéni vállalkozók
                        nyilvántartásában 2018. 01. 08. Belügyminisztérium Okmányfelügyeleti
                        Főosztály.
                      </p>
                      <p>
                        A nyilvántartásba történő bejegyzésre a közigazgatási hatósági eljárás és
                        szolgáltatás általános szabályairól szóló 2004. évi CXL. törvény 82.§ (2)
                        bekezdése és a 86. § (3) bekezdése alapján került sor.
                      </p>
                    </div>
                  </div>
                  <div className="card-header" id="headingSEO">
                    <h4 className="mb-0">
                      <button
                        className="callopsebutton collapsed"
                        onClick={() => toggleCollapse('collapseSEO')}
                      >
                        SEO-t készítette
                      </button>
                    </h4>
                  </div>
                  <div className={`collapse ${showCollapse.collapseSEO ? 'show' : ''}`}>
                    <div className="card-body">
                      <p className="SEOInfo">
                        <span style={{ fontWeight: 'bold' }}>SEO:</span> Bozzay Viktor - WebforSol
                      </p>
                      <a
                        href="https://freetools.seobility.net/en/seocheck/pecscoach.hu"
                        className="SEOInfo"
                      >
                        <img src="/media/widget.png" alt="Seobility Score for pecscoach.hu" />
                      </a>
                    </div>
                  </div>
                  <div className="card-header" id="headingTwo">
                    <h4 className="mb-0">
                      <button
                        className="callopsebutton"
                        onClick={() => toggleCollapse('collapseTwo')}
                      >
                        Tárhelyszolgáltató adatai
                      </button>
                    </h4>
                  </div>
                  <div className={`collapse ${showCollapse.collapseTwo ? 'show' : ''}`}>
                    <div className="card-body">
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Tárhelyszolgáltató:</span> DiMa.hu Kft.
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Honlap:</span>{' '}
                        <a href="https://www.dima.hu/">www.dima.hu</a>
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Elérhetősége:</span> 4032 Debrecen,
                        Békessy Béla u. 9. C. épület 3. emelet 10. ajtó
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>e-mail:</span>{' '}
                        <a href="mailto:info@dima.hu">info@dima.hu</a>
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Adószáma:</span> 14079665-2-09
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Cégjegyzékszáma:</span> 09-09-014017
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Nyilvántartásba vevő hatósága:</span>{' '}
                        Nemzeti Adatvédelmi és Információszabadság Hatóság
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Nyilvántartásba vétel száma:</span>{' '}
                        NAIH-82568
                      </p>
                    </div>
                  </div>
                  <div className="card-header" id="headingThree">
                    <h4 className="mb-0">
                      <button
                        className="callopsebutton"
                        onClick={() => toggleCollapse('collapseThree')}
                      >
                        Licenszek
                      </button>
                    </h4>
                  </div>
                  <div className={`collapse ${showCollapse.collapseThree ? 'show' : ''}`}>
                    <div className="card-body">
                      <div className="Licence">
                        <p style={{ fontWeight: 'bold' }}>Icons made by</p>
                        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                          Freepik
                        </a>
                        <p style={{ fontWeight: 'bold' }}>from</p>
                        <a href="https://www.flaticon.com/" title="Flaticon">
                          www.flaticon.com
                        </a>
                      </div>
                      <div className="Licence">
                        <p style={{ fontWeight: 'bold' }}>
                          <a href="https://www.getbootstrap.com/" title="Bootstrap">
                            Bootstrap
                          </a>
                        </p>
                        <p>licensed MIT, docs CC BY 5.0</p>
                      </div>
                      <div className="Licence">
                        <p style={{ fontWeight: 'bold' }}>
                          <a href="https://glidejs.com/" title="Glide">
                            Glide Carousel
                          </a>
                        </p>
                        <p>Released under the MIT License Copyright &copy; 2013-2021 Jędrzej Chałubek</p>
                      </div>
                      <div className="Licence">
                        <p style={{ fontWeight: 'bold' }}>
                          <a href="https://www.colorlib.com/" title="Colorlib">
                            Colorlib
                          </a>
                        </p>
                        <p>under the MIT license.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn send-button btn-sm"
                  onClick={() => setShowImpressum(false)}
                >
                  Bezár
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCookie && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={() => setShowCookie(false)}>
          <div className="modal-dialog modal-lg" role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content text-dark">
              <div className="modal-header">
                <h4 className="modal-title w-100">Süti kezelési tájékoztató</h4>
                <button type="button" className="btn-close" onClick={() => setShowCookie(false)} aria-label="Close" />
              </div>
              <div className="modal-body">
                <p>
                  Ez az oldal cookie-kat, rövid adatfájlokat használ, amiket a felhasználó
                  számítógépén a honlap elhelyez. A cookie célja, hogy az adott internetes
                  szolgáltatás használatát megkönnyítse, kényelmesebbé tegye. Az Európai Bizottság
                  irányelvei alapján, ez a honlap csak olyan cookie-kat használ, melyek a
                  szolgáltatás használatához elengedhetetlenül szükségesek, ilyen cookie-k esetén
                  elegendő a felhasználó tájékoztatása. Kijelentjük továbbá, hogy cookie-kban a
                  felhasználó személyes adatait nem tároljuk.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn send-button btn-sm"
                  onClick={() => setShowCookie(false)}
                >
                  Elfogadom
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
