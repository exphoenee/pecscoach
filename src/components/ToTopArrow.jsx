import { useState, useEffect } from 'react'

export default function ToTopArrow() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 1000)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    const header = document.querySelector('header')
    const headerHeight = header?.offsetHeight || 100
    window.scrollTo({ top: headerHeight, left: 0, behavior: 'smooth' })
  }

  return (
    <div
      id="toTopArrow"
      className={visible ? '' : 'hide-btn'}
      onClick={scrollToTop}
    >
      <img src="/media/double-up-arrow.png" alt="toTopArrow" />
    </div>
  )
}
