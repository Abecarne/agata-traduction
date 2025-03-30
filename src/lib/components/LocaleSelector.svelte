<script lang="ts">
    import { onMount } from 'svelte';
    import { locale } from 'svelte-i18n';

    // Define the available locales
    const locales = [
        { code: 'fr', label: 'Français' },
        { code: 'pl', label: 'Polski' },
    ];

    // Function to change the locale
    const changeLocale = (newLocale: string) => {
        $locale = newLocale;
    };
    // Set the document title when the component mounts
    onMount(() => {
        changeLocale('fr');
    });

</script>

<style>
    .locale-selector {
        display: flex;
        align-items: center;
    }

    select {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
    }

    select:focus {
        outline: none;
        border-color: #007bff;
    }
</style>

<div class="locale-selector">
    <select on:change={(event) => changeLocale((event.target as HTMLSelectElement).value)} bind:value={$locale}>
        {#each locales as { code, label }}
            <option value={code}>{label}</option>
        {/each}
    </select>
</div>