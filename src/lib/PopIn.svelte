<script>
	import { fly } from 'svelte/transition'
    export let duration = 2000
    export let y = 200
    const promise = new Promise(res => setTimeout(res, duration))
</script>

{#await promise then value}
    <div in:fly="{{ y, duration }}">
        <slot />
    </div>
{/await}

<style>
    div {
        font-size: 1.3rem;
        width : 100%;
    }
    @media (max-width: 566px) {
        div {
            font-size : 1rem;
        }
    }
</style>