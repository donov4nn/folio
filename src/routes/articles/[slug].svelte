<script context="module">
    export async function load({ page, fetch }) {
        const slug = page.params.slug
        const {htmlData, metadata} = await fetch(`/articles/${slug}.json`).then((r) => r.json())

        return {
            props: { htmlData, metadata }
        };
    }
</script>

<script>
    export let metadata
    export let htmlData
</script>

<div class="articleWrapper">
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