import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../loadBlog'

const posts = getAllPosts()

export default function BlogSection() {
  const glideRef = useRef(null)

  useEffect(() => {
    if (!window.Glide || posts.length === 0) return
    const slider = new window.Glide('#blog-glider', {
      type: 'carousel',
      startAt: 0,
      perView: Math.min(3, posts.length),
      autoplay: 10000,
      hoverpause: true,
      animationDuration: 500,
      breakpoints: {
        1400: { perView: Math.min(2, posts.length) },
        850: { perView: 1 },
      },
    })
    slider.mount()
    return () => slider.destroy()
  }, [])

  if (posts.length === 0) return null

  return (
    <section id="blog-section" className="blog-section">
      <div className="container">
        <div className="row justify-content-center mb-5" data-aos="fade">
          <div className="col-md-7 heading-section text-center">
            <div className="subheading">Bejegyzések</div>
            <h2>Coach Blog</h2>
          </div>
        </div>
        <div id="blog-glider" className="glide" data-aos="fade" ref={glideRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="blog-entry-wrapper col-lg-4 col-md-6 col-sm-12 d-flex glide__slide"
                >
                  <div className="blog-entry justify-content-end">
                    <img className="blog-img" src={post.image} alt={post.title} />
                    <h3 className="heading mb-3">{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="more">
                      tovább...
                    </Link>
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
    </section>
  )
}
