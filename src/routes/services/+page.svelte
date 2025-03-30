<script lang="ts">
    import { t } from 'svelte-i18n';
    import { onMount } from 'svelte';

    // Function to set the document title
    function setDocumentTitle(title: string) {
        document.title = title;
    }

    // Set the document title when the component mounts
    onMount(() => {
        setDocumentTitle($t('menu.services.title'));
    });

    let services = [
        "contracts",
        "procurations",
        "certificates",
        "jugements",
        "bilans",
        "technical",
        "work",
        "education",
        "civil",
        "notarial",
        "official",
        "cars",
        "fiscal",
        "genealogic",
        "expertise",
        "penal",
        "judiciary",
        "commercial",
        "invoice",
    ];

</script>

<style>
    h1 {
        color: #333;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.5;
        margin-bottom: 1rem;
    }

    ol {
        list-style-type: decimal;
        padding-left: 20px;
    }

    li {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
</style>

<h1>{$t('services.title')}</h1>

<p>{$t('services.description')}</p>
<p>{$t('services.example_text')}</p>

<ol>
    {#each services as service}
        <li>{$t(`services.${service}`)}</li>
    {/each}
</ol>
