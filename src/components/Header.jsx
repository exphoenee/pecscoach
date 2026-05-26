import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    if (window.AOS) window.AOS.refresh()
  }, [])

  return (
    <header className="header container-fluid px-md-5 pt-4 pt-md-5">
      <div className="row justify-content-between">
        <div className="col-6 col-xl-3 col-md-3 order-first">
          <div className="social-media">
            <p className="mb-0 d-flex">
              <a
                title="Légárdi Nóra Pécs Coach Facebook oldala"
                href="https://www.facebook.com/pecscoach/"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="socials facebook" />
              </a>
              <a
                title="Légárdi Nóra Pécs Coach LinkedIn oldala"
                href="https://www.linkedin.com/in/n%C3%B3ra-l%C3%A9gr%C3%A1di-4239341ab/"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="socials linkedin" />
              </a>
              <a
                title="Légárdi Nóra Pécs Coach Instagram oldala"
                href="https://www.instagram.com/legradinora/?hl=hu"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="socials instagram" />
              </a>
            </p>
          </div>
        </div>
        <div className="col-12 col-xl-6 col-md-6 order-last order-xl-2 order-md-2" data-aos="zoom-in" data-aos-duration="4000">
          <a className="navbar-brand" href="/">
            <h1>
              Légrádi Nóra
              <small className="title-text">Lifecoach</small>
              <small className="title-text">mentálhigiénés szakember</small>
            </h1>
          </a>
        </div>
        <div className="col-6 col-xl-3 col-md-3 order-2 order-xl-3 order-md-3">
          <div className="socialshare">
            <div data-aos="flip-up" data-aos-delay="1250" className="d-inline-block">
              <iframe
                src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fpecscoach.hu%2F&layout=button_count&size=small"
                width="122"
                height="20"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            <div data-aos="flip-up" data-aos-delay="1350" className="d-inline-block">
              <a
                href="https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fpecscoach.hu%2F"
                target="_blank"
                rel="noreferrer"
                className="linkedin-share"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0a66c2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="li-text">Share</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
