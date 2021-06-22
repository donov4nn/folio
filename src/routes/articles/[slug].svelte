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
    import {onMount} from 'svelte'
    import {page} from '$app/stores'
    export let data

    onMount(async () => {
        if (!data?.length) {
            let text = await fetch(`/posts/${$page.params.slug}.md`).then(r => r.text())
            data = marked(text)
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