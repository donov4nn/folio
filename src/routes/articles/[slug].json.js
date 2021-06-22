import marked from 'marked'
import MarkedMetaData from 'marked-metadata'

export function get({ params }) {
    const { slug } = params;

    const md = new MarkedMetaData(`static/posts/${slug}.md`)
    md.defineTokens('<!--', '-->')
    const metadata = md.metadata()
    const htmlData = marked(md.markdown())
    const body = JSON.stringify({ htmlData, metadata })

    return {
        body
    }
}