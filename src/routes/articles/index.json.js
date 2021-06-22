import fs from 'fs'
import MarkedMetaData from 'marked-metadata'

export function get() {
    let posts = fs.readdirSync('static/posts')
                    .filter(fileName => /.+\.md$/.test(fileName))
                    .map(post => {
                        const md = new MarkedMetaData(`static/posts/${post}`)
                        md.defineTokens('<!--', '-->')
                        const metadata = md.metadata()
                        post = post.replace(/\.md$/, '')
                        return {
                            post, metadata
                        }
                    })

    let body = JSON.stringify(posts)

    return {
        body
    }
}