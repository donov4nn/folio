<script>
	import { fly } from 'svelte/transition'
    export let y = 0
    export let duration = 0
    export let classes = ""
    const promise = new Promise(res => setTimeout(res, duration))
</script>

{#await promise then value}
    <div class="wrapperParallax {classes}" in:fly="{{ y, duration }}">
        <slot />
    </div>
{/await}

<style>
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    .wrapperParallax {
        margin-top : 1rem;
        overflow-x: hidden;
        overflow-y: auto;
        perspective: 2px;
        border-radius: .5rem;
        box-shadow : 0 0 0 .1rem #2F5389;
        scrollbar-width: none;
    }
</style>