<script>
    import '$lib/i18n/i18n.js';
    import Logo from '$lib/assets/agata-logo.png';

    import { t } from 'svelte-i18n';
    import LocaleSelector from './LocaleSelector.svelte';

    // Define the routes with translation keys
    let routes = [
        { nameKey: 'menu.home.title', path: '/' },
        { nameKey: 'menu.about.title', path: '/about' },
        { nameKey: 'menu.services.title', path: '/services' },
        { nameKey: 'menu.contact.title', path: '/contact' }
    ];
</script>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        background-color: #f8f9fa;
        border-bottom: 1px solid #ddd;
    }

    .logo {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        color: #333;
    }

    nav {
        display: flex;
        gap: 1.5rem;
    }

    a {
        text-decoration: none;
        color: #007bff;
        font-weight: 500;
    }

    a:hover {
        text-decoration: underline;
    }
</style>

<header>
    <a href="/" class="logo"><img src={Logo} alt="Logo" width="70"></a>
    <nav>
        {#each routes as route}
            <!-- Use $t() dynamically to translate the name -->
            <a href={route.path}>{$t(route.nameKey)}</a>
        {/each}
    </nav>
    <LocaleSelector />
</header>