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
    import {page} from '$app/stores'
    export let data
    let promise = fetch(`/posts/${$page.params.slug}.md`)
                        .then(d => d.text())
                        .then(text => marked(text))
</script>

{#if data && data.length}
    <div class="articleWrapper" in:fade>
        {@html data}
    </div>
        {:else}
        {#await promise then value}
            <div class="articleWrapper" in:fade>
                {@html value}
            </div>
        {/await}
    {/if}

<style>
    .articleWrapper {
        padding : .5rem;
        max-width: 40rem;
        margin : auto;
        margin-top : 0;
    }
</style>