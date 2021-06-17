<script>
    import Fa from '$lib/FaWrapper.svelte'
</script>

<navbar>
    <a href="/" ><Fa faIcon={"faHome"} /></a>
    <a href="/projects">Réalisations</a>
    <a href="/articles">Articles</a>
    <a href="/cv">CV</a>
    <a href="/contact">Contact</a>
</navbar>

<style>
    navbar {
        width : 100%;
        height : 4rem;
        display : flex;
        align-items: center;
        justify-content: space-around;
        box-shadow: 0 0 0 .1rem rgba(128, 128, 128, 0.164);
        min-width : 20rem;
    }

    navbar > a {
        background : #332f2f8f;
        width : 20%;
        height : 100%;
        display : flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: .1rem;
    }

    a:hover {
        box-shadow: 0 0 0 .4rem rgba(128, 128, 128, 0.164);
    }
</style>