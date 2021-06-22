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
		<div class="description">
			<p>Je suis développeur full-stack depuis maintenant plus d'un an.</p>
			<p>
				Passionné par la programmation et touche à tout,
				je me suis spécialisé dans le back-end, la gestion d'API et la création de pages web modernes.
			</p>
		</div>
		<div class="experiences">
			<h3>Expérience</h3>
			<div class="item">
				<div class="date">2019 - Aujourd'hui</div>
				<div class="titre">Développeur full-stack à Axon'Cable</div>
				<div class="explication">
					<p>Création et maintenance de différents projets : </p>
					<ul>
						<li>Tourax : application de calcul métrique sur bobine</li>
						<li>Page d'accueil de l'environnement de production (rappel de tâches, graphiques ...)</li>
						<li>Trousseau du salarié : gestion des objets prêtés aux collaborateurs</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="formation">
			<h3>Formation</h3>
			<div class="item">
				<div class="date">2017</div>
				<div class="titre">BAC ES</div>
			</div>
			<div class="item">
				<div class="date">2021</div>
				<div class="titre">Diplôme de niveau 5 : développeur web & web mobile</div>
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
			<p>Back-end : C# (ASP.NET Core & Framework), NodeJS, SQL</p>
			<br />
			<p>Front-end : React, Svelte, Vue, Blazor, VanillaJS, JQuery, Bootstrap, Tailwind</p>
		</section>
		<section>
			<p><a href="https://github.com/donov4nn" target="_blank">Github :&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a></p>
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
		margin: 2rem 0;
	}

	.item .explication {
		flex : 100%;
		margin-top : .3rem;
	}

	.main {
		flex : 80%;
	}

	.side {
		flex : 20%;
		/* border : solid .1rem #aac7f1; */
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

	.formation {
		border-bottom: .1rem solid #aac7f1;
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

	ul {
		padding-left : 2rem;
		margin : .4rem 0;
	}

	a {
		align-items: center;
	}
</style>