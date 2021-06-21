<script context="module">
	export async function load({ fetch }) {
		const posts = await fetch(`/articles.json`).then((r) => r.json())

		console.log(posts)
		return {
			props: { posts }
		}
	}
</script>

<script>
	import PageTitle from '$lib/PageTitle.svelte'
    import {faNewspaper} from '@fortawesome/free-solid-svg-icons'
	import PopIn from '$lib/PopIn.svelte'

	export let posts

	$: console.log(posts)
</script>

<PageTitle  title="Articles"
			text="Mes articles :"
			icon={faNewspaper}
			speed={0.5} />

<PopIn duration={100} y={200} >
	{#each posts as post}
		 <a href="/articles/{post.post}">{post.post} ({post.metadata.date})</a>
	{/each}
</PopIn>

<style>
</style>