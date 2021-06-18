<script>
	import TypeWriter from '$lib/TypeWriter.svelte'

    export let icon
    export let text
    export let speed
    export let title
</script>

<svelte:head>
    <title>Donovan - {title}</title>
</svelte:head>

<h1><TypeWriter {speed} {icon}>{text}</TypeWriter></h1>

<style>
    h1 {
        margin-top : 0rem;
        margin : 0 auto;
    }

    @media (max-width: 566px) {
        h1 {
            font-size: 1.2rem;
        }
    }
</style>