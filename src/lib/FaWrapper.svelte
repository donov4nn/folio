<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    export let faIcon
    let icon

    $: (import('@fortawesome/free-solid-svg-icons'))
        .then(module => icon = module[faIcon] || '')
</script>

<Fa {icon} />