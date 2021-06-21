<script>
    import {onMount} from 'svelte'
    export let speed = 4
    let text

    onMount(() => {
        text = document.querySelector('.typewriterText').textContent
    })
</script>

<p>
    <span class="typewriterText" style="--typewriterSpeed: {speed}s;--typewriterChar: {(text?.length)}">
        <slot />
    </span>
</p>

<style>
    p {
        position : relative;
        font-family: "Source Code Pro";
        display : flex;
    }
    .typewriterText::before,
    .typewriterText::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .typewriterText::before {
        background: var(--bgcolor);
        height: 2.5rem;
        animation: typewriter var(--typewriterSpeed)
        steps(var(--typewriterChar)) 1s forwards;
    }
    .typewriterText::after {
        width: 0.125em;
        height: 2.5rem;
        background: rgb(124, 116, 116);
        animation: typewriter var(--typewriterSpeed)
            steps(var(--typewriterChar)) 1s forwards,
            blink 750ms steps(var(--typewriterChar)) infinite;
    }
    @media (max-width: 566px) {
        .typewriterText::after , .typewriterText::before {
            height : 1.5rem;
        }
    }
</style>