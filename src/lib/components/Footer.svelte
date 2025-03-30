<script>
    export let phone = "+33 6 60 02 80 15";
    export let email = "example@example.com";
    export let address = "24 Avenue de Verdun, 59350 Saint-André-lez-Lille, France";

    import { t } from 'svelte-i18n';

</script>

<footer class="footer">
    <div class="contact-info">
        <p>{$t("footer.phone")}: {phone}</p>
        <p>{$t("footer.email")}: <a href="mailto:{email}">{email}</a></p>
        <p>{$t("footer.address")}: {address}</p>
        <p>{$t('footer.text')}</p>
    </div>
</footer>

<style>
    .footer {
        background-color: #f8f9fa;
        padding: 1rem;
        text-align: center;
        border-top: 1px solid #ddd;
    }

    .contact-info p {
        margin: 0.5rem 0;
    }

    .contact-info a {
        color: #007bff;
        text-decoration: none;
    }

    .contact-info a:hover {
        text-decoration: underline;
    }
</style>