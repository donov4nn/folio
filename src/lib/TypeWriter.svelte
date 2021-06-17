<script>
    export let text
    export let speed = 4
</script>

<p><span style="--typewriterSpeed: {speed}s;--typewriterChar: {(text.length)}"
>{text}</span></p>

<style>
    p {
        position : relative;
        font-family: "Source Code Pro";
    }
    span::before,
    span::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    span::before {
        background: var(--bgcolor);
        height: 2rem;
        animation: typewriter var(--typewriterSpeed)
        steps(var(--typewriterChar)) 1s forwards;
    }
    span::after {
        width: 0.125em;
        height: 2rem;
        background: rgb(153, 153, 153);
        animation: typewriter var(--typewriterSpeed)
            steps(var(--typewriterChar)) 1s forwards,
            blink 750ms steps(var(--typewriterChar)) infinite;
    }

</style>