const blogModules = import.meta.glob('/src/content/blog/*.md', { eager: true, query: '?raw', import: 'default' })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  for (const line of match[1].split('\n')) {
    const sep = line.indexOf(':')
    if (sep === -1) continue
    let value = line.slice(sep + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    data[line.slice(0, sep).trim()] = value
  }

  return { data, content: match[2].trimStart() }
}

export function getAllPosts() {
  return Object.entries(blogModules).map(([filepath, raw]) => {
    const slug = filepath.split('/').pop().replace('.md', '')
    const { data, content } = parseFrontmatter(raw)
    return { slug, ...data, content }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const all = getAllPosts()
  return all.find(p => p.slug === slug) || null
}
