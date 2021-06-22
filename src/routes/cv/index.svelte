<script>
	import PageTitle from '$lib/PageTitle.svelte'
    import {faFile} from '@fortawesome/free-solid-svg-icons'
	import {fade} from 'svelte/transition'
</script>

<PageTitle  title="CV"
			text="Mon CV :"
			icon={faFile}
			speed={0.3} />

<div class="cvWrapper" in:fade>
	<div class="header">
		<h1>Donovan Michel</h1>
		<h2>Développeur web</h2>
	</div>
	<div class="main">
		<div class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae officiis itaque enim? Ea ullam hic praesentium earum aliquid, deleniti nostrum error provident ipsa placeat debitis qui quam quod maxime, quo iusto deserunt quas nesciunt rerum reprehenderit ipsum, consectetur soluta cum. Vitae id ad fuga veritatis excepturi delectus nam quaerat quod!</div>
		<div class="experiences">
			<h3>Expérience</h3>
			<div class="item">
				<div class="date">2020 - Aujourd'hui</div>
				<div class="titre">Développeur full-stack Axon'Cable</div>
				<div class="explication">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, voluptatem? Iste repudiandae ad corporis qui suscipit, rem repellendus reprehenderit laboriosam?</div>
			</div>
			<div class="item">
				<div class="date">2020 - Aujourd'hui</div>
				<div class="titre">Développeur full-stack Axon'Cable</div>
				<div class="explication">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, voluptatem? Iste repudiandae ad corporis qui suscipit, rem repellendus reprehenderit laboriosam?</div>
			</div>
		</div>
		<div class="formation">
			<h3>Formation</h3>
			<div class="item">
				<div class="date">2020 - Aujourd'hui</div>
				<div class="titre">Développeur full-stack Axon'Cable</div>
				<div class="explication">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, voluptatem? Iste repudiandae ad corporis qui suscipit, rem repellendus reprehenderit laboriosam?</div>
			</div>
		</div>
	</div>
	<div class="side">
		<section>
			<h3>Coordonnées</h3>
			<p>dono.m51@gmail.com</p>
			<p>06 72 39 47 09</p>
		</section>
		<section>
			<p>Montmirail 51210</p>
		</section>
		<section>
			<h3>Compétences</h3>
			<p>Back-end : </p>
			<p>Front-end : </p>
		</section>
	</div>
</div>

<style>
	.cvWrapper {
		overflow: auto;
	}

	.header, .main, .side {
		padding : 1rem;
	}

	.cvWrapper, .item {
		display : flex;
		flex-wrap: wrap;
	}

	.item .titre {
		padding-left: 1rem;
		font-weight: 600;
		margin-bottom: .3rem;
	}

	.item {
		margin-bottom: 1rem;
	}

	.main {
		flex : 80%;
	}

	.side {
		flex : 20%;
		border : solid .1rem #aac7f1;
	}

	.experience, .description, .header, .experiences > h3, .formation > h3 {
		margin-bottom: 1rem;
	}

	.side > section {
		margin-bottom: 2rem;
	}

	.experiences, .formation {
		border-top: .1rem solid #aac7f1;
		padding-top: .5rem;
	}

	.header {
		margin-bottom: 0;
		padding-bottom: 0;
		width : 100%;
	}

	@media (max-width: 566px) {
		.cvWrapper {
			margin : 0 .5rem;
		}
	}
</style>