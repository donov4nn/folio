<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faBars, faHome} from '@fortawesome/free-solid-svg-icons'
    import {clickOutside} from '$lib/clickOutside.js'
	import { fade } from 'svelte/transition';

    let toggleClassNavbar = false

    function handleClickBurger() {
        toggleClassNavbar = !toggleClassNavbar
    }

    function handleClickNavBar(e) {
        if (e.toElement.matches('a')) {
            toggleClassNavbar = false
        }
    }
</script>

<navbar class:toggleClassNavbar use:clickOutside={() => toggleClassNavbar = false} on:click={handleClickNavBar}>
    <span on:click={handleClickBurger} class="popOutIcon"><Fa icon={faBars} /></span>
    <a href="/" ><Fa icon={faHome} /></a>
    <a href="/projects">Projets</a>
    <a href="/articles">Articles</a>
    <a href="/cv">CV</a>
    <a href="/contact">Contact</a>
</navbar>

<style>
    .toggleClassNavbar > a {
        display : flex;
    }
    .popOutIcon {
        display : none;
    }
    navbar {
        width : 100%;
        height : 4rem;
        display : flex;
        align-items: center;
        justify-content: space-around;
        /* box-shadow: 0 0 0 .2rem #2F5389; */
        color : #ffffff;
        max-width : 40rem;
        margin : auto;
    }

    navbar > a, .popOutIcon {
        background : #2F5389;
        width : 20%;
        height : 100%;
        max-height: 3rem;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        border-radius: 1rem;
        margin : 1rem;
        /* letter-spacing: -.1rem; */
        /* text-transform: uppercase; */
    }

    a:hover, .popOutIcon:hover   {
        background : #101C2E;
        /* box-shadow: 0 0 0 .5rem rgba(236, 236, 236, 0.164); */
        /* transform:
            translate3d(0px, .1rem, 0px)
            rotateX(-10deg)
            rotateZ(-5deg); */
    }

    @media (max-width: 566px) {
        navbar {
            flex-direction: column;
            height : auto;
        }

        navbar > a, .popOutIcon {
            padding : .5rem;
            width : 100%;
            justify-content: left;
            border-radius: 0rem;
            margin : 0rem;
        }

        navbar > a {
            display : none;
        }

        .popOutIcon {
            display : flex;
            cursor : pointer;
            font-size : 2.3rem;
            height : 4rem;
        }
    }
</style>