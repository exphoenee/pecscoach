import { useParams, Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import { getPostBySlug } from '../loadBlog'

export default function BlogPage() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="container py-5 text-center">
        <h2>A bejegyzés nem található</h2>
        <Link to="/" className="more">Vissza a főoldalra</Link>
      </div>
    )
  }

  return (
    <article className="blog-article">
      <Link to="/#blog-section" className="blog-back-link">&larr; Vissza a bloghoz</Link>
      <h2>{post.title}</h2>
      {post.image && (
        <img
          className="blog-hero-image"
          src={post.image}
          alt={post.title}
          style={{ maxWidth: '400px' }}
        />
      )}
      <Markdown>{post.content}</Markdown>
    </article>
  )
}
