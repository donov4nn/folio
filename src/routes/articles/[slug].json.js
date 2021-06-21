import marked from 'marked'
import MarkedMetaData from 'marked-metadata'

export async function get({ params }) {
    const { slug } = params;

    const md = new MarkedMetaData(`src/posts/${slug}.md`)
    md.defineTokens('<!--', '-->')
    const metadata = md.metadata()
    const htmlData = marked(md.markdown())
    const body = JSON.stringify({ htmlData, metadata })

    return {
        body
    }
}