<script>
	import PageTitle from '$lib/PageTitle.svelte'
    import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
	import PopIn from '$lib/PopIn.svelte'
</script>

<PageTitle  title="Contact"
			text="Me contacter :"
			icon={faEnvelope}
			speed={1.5} />

<PopIn duration={100} y={200} >
	<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dono.m51@gmail.com" target="_blank">dono.m51@gmail.com</a>
</PopIn>

<style>
	a {
		margin : auto;
		font-size:8vw;
		width: fit-content;
		padding : 1rem;
		text-decoration: underline;
	}

	a:hover {
		text-decoration: none;
	}
</style>