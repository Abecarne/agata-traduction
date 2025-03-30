<script lang="ts">
    import { t } from 'svelte-i18n';
    import { onMount } from 'svelte';

    // Function to set the document title
    function setDocumentTitle(title: string) {
        document.title = title;
    }

    // Set the document title when the component mounts
    onMount(() => {
        setDocumentTitle($t('menu.about.title'));
    });
</script>

<style>
    p {
        font-size: 1.2rem;
        line-height: 1.5;
        margin-bottom: 1rem;
    }
</style>

<p>{$t('about.serment')}</p>
<p>{$t('about.master')}</p>
<p>{$t('about.mission')}</p>
