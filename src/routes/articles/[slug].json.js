import marked from 'marked'
import MarkedMetaData from 'marked-metadata'

export function get({ params }) {
    const { slug } = params;
    let body
    const md = new MarkedMetaData(`static/posts/${slug}.md`) ?? null
    md.defineTokens('<!--', '-->')
    const metadata = md.metadata()
    const htmlData = marked(md.markdown())
    body = JSON.stringify({ htmlData, metadata })
    return { body }
}