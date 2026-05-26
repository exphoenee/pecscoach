import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Coaching from './components/Coaching'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import BlogSection from './components/BlogSection'
import BlogPage from './components/BlogPage'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ToTopArrow from './components/ToTopArrow'

function HomePage() {
  const aosRef = useRef(null)

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init()
      window.AOS.refresh()
    }
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Coaching />
      <Services />
      <Testimonials />
      <BlogSection />
      <Contact />
      <Footer />
      <ToTopArrow />
    </>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const target = location.hash.replace('#', '')
        const el = document.getElementById(target)
        if (el) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 100
          el.scrollIntoView({ behavior: 'smooth' })
          setTimeout(() => window.scrollBy(0, -headerHeight), 100)
        }
      }, 300)
    }
  }, [location])

  if (location.pathname.startsWith('/admin')) {
    window.location.href = '/admin/index.html'
    return null
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:slug" element={<BlogPage />} />
    </Routes>
  )
}
