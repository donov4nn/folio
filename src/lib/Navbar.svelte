<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faBars, faHome} from '@fortawesome/free-solid-svg-icons'
    import {clickOutside} from '$lib/clickOutside.js'
    import { page } from '$app/stores';

    let toggleClassNavbar = false

    function handleClickBurger() {
        toggleClassNavbar = !toggleClassNavbar
    }

    function handleClickNavBar(e) {
        if (e.toElement.matches('a')) toggleClassNavbar = false
    }
</script>

<nav class:toggleClassNavbar use:clickOutside={() => toggleClassNavbar = false} on:click={handleClickNavBar}>
    <span on:click={handleClickBurger} class="popOutIcon"><Fa icon={faBars} /></span>
    <a href="/" class:active="{$page.path === "/"}"><Fa icon={faHome} /></a>
    <a href="/projects" class:active="{$page.path === "/projects"}">Projets</a>
    <a href="/articles" class:active="{$page.path === "/articles"}">Articles</a>
    <a href="/cv" class:active="{$page.path === "/cv"}">CV</a>
    <a href="/contact" class:active="{$page.path === "/contact"}">Contact</a>
</nav>

<style>
    .active {
        box-shadow: 0 0 0 .2rem #aac7f1;
    }
    .toggleClassNavbar > a {
        display : flex;
    }
    .popOutIcon {
        display : none;
    }
    nav {
        width : 100%;
        height : 4rem;
        display : flex;
        align-items: center;
        justify-content: space-around;
        color : #ffffff;
        max-width : 40rem;
        margin : auto;
    }

    nav > a, .popOutIcon {
        background : #2F5389;
        width : 20%;
        height : 100%;
        max-height: 3rem;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        border-radius: 1rem;
        margin : 1rem;
    }

    a:hover, .popOutIcon:hover   {
        background : #101C2E;
    }

    @media (max-width: 566px) {
        nav {
            flex-direction: column;
            height : auto;
        }

        nav > a, .popOutIcon {
            padding : .5rem;
            width : 100%;
            justify-content: left;
            border-radius: 0rem;
            margin : 0rem;
        }

        nav > a {
            display : none;
        }

        .popOutIcon {
            display : flex;
            cursor : pointer;
            font-size : 2.3rem;
            height : 4rem;
        }

        .active {
            background : #aac7f1;
            box-shadow: none;
        }
    }
</style>