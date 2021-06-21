import fs from 'fs'
import MarkedMetaData from 'marked-metadata'

export function get() {
    let posts = fs.readdirSync('src/posts')
                    .filter(fileName => /.+\.md$/.test(fileName))
                    .map(post => {
                        console.log(post)
                        const md = new MarkedMetaData(`src/posts/${post}`)
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