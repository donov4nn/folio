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
    <a href="/projects" class:active="{$page.path.includes("/projects")}">Projets</a>
    <a href="/articles" class:active="{$page.path.includes("/articles")}">Articles</a>
    <a href="/cv" class:active="{$page.path.includes("/cv")}">CV</a>
    <a href="/contact" class:active="{$page.path.includes("/contact")}">Contact</a>
</nav>

<style>
    .active {
        position : relative;
        z-index: 1;
    }

    .active:before {
        /* border-bottom: solid .2rem #aac7f1; */
        box-shadow: 0 4px 2px -2px #aac7f1;
        width : 60%;
        content : "";
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        bottom : 0;
        height : 1rem;
    }
/*
    nav > a:first-of-type {
        margin-right: 2rem;
    } */

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
        margin : auto;
        background: linear-gradient(var(--bgcolor), #1d2b3f);
        /* max-width : 40rem; */
    }

    nav > a, .popOutIcon {
        /* background : #2F5389; */
        width : 20%;
        height : 100%;
        max-height: 3rem;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        /* border-radius: .5rem; */
        margin : .1rem;
        margin-top : 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    a:hover, .popOutIcon:hover   {
        background : #101C2E;
        /* transform : translate(0, .2rem); */
        /* transform: perspective(1rem) rotateY(10deg); */
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
        }

        .active:before {
            box-shadow : none;
        }
    }
</style>