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

    let isMenuOpen = false;
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

    .burger {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background: transparent;
        border: none;
        cursor: pointer;
    }
    .burger div {
        width: 30px;
        height: 3px;
        background-color: #333;
        margin: 3px 0;
        transition: all 0.3s ease;
    }
    .burger:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        nav {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 0;
            background-color: #f8f9fa;
            width: 100%;
            padding: 1rem;
            border-top: 1px solid #ddd;
        }

        nav.open {
            display: flex;
        }

        .burger {
            display: flex;
        }
    }
    @media (max-width: 480px) {
        header {
            padding: 0.5rem 1rem;
        }

        .logo img {
            width: 50px;
        }
    }

</style>

<header >
    <a href="/" class="logo"><img src={Logo} alt="Logo" width="70"></a>

    <!-- Burger menu toggle -->
    <button 
        class="burger" 
        on:click={() => (isMenuOpen = !isMenuOpen)} 
        aria-expanded={isMenuOpen} 
        aria-label="Toggle menu">
        <div></div>
        <div></div>
        <div></div>
    </button>

    <!-- Mobile navigation menu -->
    <nav class={isMenuOpen ? 'open' : ''}>
        {#each routes as route}
            <a href={route.path} on:click={() => (isMenuOpen = false)}>{$t(route.nameKey)}</a>
        {/each}
        <LocaleSelector />
    </nav>
</header>