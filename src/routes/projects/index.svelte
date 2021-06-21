<script context="module">
</script>

<script>
	import PageTitle from '$lib/PageTitle.svelte'
    import {faTools} from '@fortawesome/free-solid-svg-icons'
	import ParallaxeLayer from '$lib/ParallaxeLayer.svelte'
</script>

<PageTitle  title="Projets"
			text="Mes projets :"
			icon={faTools}
			speed={1} />

<ParallaxeLayer duration={1700} y={200}>
	<section class="section parallax" style="background : #4d77b6">
		<h1>Projet </h1>
	</section>
	<section class="section parallax" style="background : #0e459c">
		<h1>Projet 2</h1>
	</section>
	<!-- <section class="section static">
		<h1>Projet 2</h1>
	</section> -->
	<section class="section parallax" style="background : #032963">
		<h1>Projet 3</h1>
	</section>
	<section class="section parallax" style="background : teal">
		<h1>Projet 4</h1>
	</section>
</ParallaxeLayer>

<style>
</style>
