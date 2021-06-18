<script>
    import '../app.css';
    import Navbar from '$lib/Navbar.svelte'
</script>

<Navbar />
<main>
    <slot />
</main>

<style>
    main {
        height : calc(100% - 4rem);
        width : 100%;
        padding : 2rem;
        flex-direction: column;
        position : relative;
    }

    @media (max-width: 566px) {
    }
</style>
