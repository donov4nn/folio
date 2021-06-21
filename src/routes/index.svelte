<script context="module">
</script>

<script>
	import PageTitle from '$lib/PageTitle.svelte'
	import PopIn from '$lib/PopIn.svelte'
</script>

<PageTitle  title="Accueil"
			text="Bienvenue sur mon site."
			speed={1} />

<PopIn duration={2300} y={200} >
	<p>Bonjour, je suis Donovan Michel un développeur Fullstack. Lorem ipsum dolor sit amet.</p>
</PopIn>

<style>
	p {
		padding : 1rem;
	}
</style>
