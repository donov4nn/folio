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
	<p>Bonjour, je suis Donovan Michel un développeur Fullstack.</p>
</PopIn>

<style>
	p {
		text-align: center;
		padding : 1rem;
	}
</style>
