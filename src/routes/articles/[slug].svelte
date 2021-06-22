<script context="module">
    export async function load({ page, fetch }) {
        const slug = page.params.slug
        const {htmlData} = await fetch(`/articles/${slug}.json`).then((r) => r.json())

        return {
            props: { htmlData }
        };
    }
</script>

<script>
    import {fade} from 'svelte/transition'
    export let htmlData
</script>

<div class="articleWrapper" in:fade>
    {@html htmlData}
</div>

<style>
    .articleWrapper {
        padding : .5rem;
        max-width: 40rem;
        margin : auto;
        margin-top : 0;
    }
</style>