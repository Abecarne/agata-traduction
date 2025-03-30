<script lang="ts">
    import { t } from 'svelte-i18n';
    import { onMount } from 'svelte';

    // Function to set the document title
    function setDocumentTitle(title: string) {
        document.title = title;
    }

    // Set the document title when the component mounts
    onMount(() => {
        setDocumentTitle($t('menu.home.title'));
    });
</script>

<h1>{$t('menu.home.description')}</h1>
