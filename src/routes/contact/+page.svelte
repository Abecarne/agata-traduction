<script lang="ts">
    import { t } from 'svelte-i18n';
    import { onMount } from 'svelte';

    // Function to set the document title
    function setDocumentTitle(title: string) {
        document.title = title;
    }

    // Set the document title when the component mounts
    onMount(() => {
        setDocumentTitle($t('menu.contact.title'));
    });
</script>

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: auto;
    }

    label {
        margin-bottom: 0.5rem;
    }

    input, select, textarea {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 0.5rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>

<h1>{$t('menu.contact.description')}</h1>

<!-- Add a form with contact infos and a selector -->
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <select id="type" name="type" required>
        <option value="trad">Traduction assermentée</option>
        <option value="inter">Interprétation</option>
    </select>

    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>

    <label for="file">File:</label>
    <input type="file" id="file" name="file" accept=".pdf, .doc, .docx, .png, .jpg, .jpeg">

    <button type="submit">Submit</button>
</form>