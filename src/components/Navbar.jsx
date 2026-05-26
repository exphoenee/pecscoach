import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Rólam', target: 'about' },
  { label: 'Mi a coaching?', target: 'coaching' },
  { label: 'Miben segíthetek?', target: 'services' },
  { label: 'Ajánlások', target: 'testimony-section' },
  { label: 'Blog', target: 'blog-section' },
  { label: 'Kapcsolat', target: 'appointment-section' },
]

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  function handleClick(target) {
    setExpanded(false)
    if (location.pathname !== '/') {
      navigate(`/#${target}`)
    } else {
      const el = document.getElementById(target)
      if (el) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 100
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setTimeout(() => {
          window.scrollBy(0, -headerHeight)
        }, 100)
      }
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-light" id="navbar" data-aos="fade-right" data-aos-duration="1000">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(v => !v)}
          aria-controls="hamburger-nav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="hamburger-nav">
          <ul className="navbar-nav m-auto">
            {navItems.map((item, i) => (
              <li className="nav-item" key={item.target} data-aos="fade-right" data-aos-delay={400 + i * 100}>
                <a
                  className="scrollTo nav-link"
                  href={`/#${item.target}`}
                  onClick={e => {
                    e.preventDefault()
                    handleClick(item.target)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
