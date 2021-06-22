<script context="module">
    export async function load({ page, fetch }) {
        const slug = page.params.slug
        let data
        try {
            const {htmlData} = await fetch(`/articles/${slug}.json`).then((r) => r.json())
            data = htmlData
        } catch (err) {
            data = ''
        }

        return {
            props: { data }
        };
    }
</script>

<script>
    import {fade} from 'svelte/transition'
    import marked from 'marked'
    import MarkedMetaData from 'marked-metadata'

    export let data

    onMount(() => {
        if (!data?.length) {
            const md = new MarkedMetaData(`static/posts/devenir-developpeur.md`)
            data = marked(md.markdown())
        }
    })
</script>

<div class="articleWrapper" in:fade>
    {@html data}
</div>

<style>
    .articleWrapper {
        padding : .5rem;
        max-width: 40rem;
        margin : auto;
        margin-top : 0;
    }
</style>