<script>
    import "../app.css";
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    
    import '$lib/i18n/i18n.js';
    import { locale, t } from 'svelte-i18n';
</script>

<style>
    main {
        min-width: 100%;
        min-height: calc(100vh - 200px);
        padding: 3rem;
        background-color: #f8f9fa;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 768px) {
        main {
            padding: 1rem;
        }
    }
    @media (max-width: 480px) {
        main {
            padding: 0.5rem;
        }
    }
</style>

<Header />

<main>
    <slot>
    </slot>
</main>

<Footer />
