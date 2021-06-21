<script>
	import TypeWriter from '$lib/TypeWriter.svelte'
    import Fa from 'svelte-fa/src/fa.svelte'
	import { fade } from 'svelte/transition'

    export let icon
    export let text
    export let speed
    export let title

    const promise = new Promise(res => setTimeout(res, (speed * 1000) + 200))
</script>

<svelte:head>
    <title>Donovan - {title}</title>
</svelte:head>

<h1>
    {#await promise then value}
        <span in:fade class="popAfter"><Fa {icon} /></span>
    {/await}
    <TypeWriter {speed} {icon}>{text}</TypeWriter>
</h1>

<style>
    h1 {
        margin-top : 0rem;
        margin : 0 auto;
        position: relative;
    }

    .popAfter {
        position : absolute;
        left : -3rem;
        top : .1rem;
    }

    @media (max-width: 566px) {
        h1 {
            font-size: 1.2rem;
        }

        .popAfter {
            left : -2rem;
        }
    }
</style>