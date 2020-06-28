<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Accueil</nuxt-link></li>
                    <li>404 introuvable</li>
                </ul>
            </div>
        </div>

        <section class="error-area ptb-60">
            <div class="container">
                <div class="error-content">
                    <img src="../assets/img/404.png" alt="error">

                    <h3>Page non trouvée</h3>
                    <p>La page que vous recherchez a peut-être été supprimée si son nom a changé ou est temporairement indisponible.</p>

                    <nuxt-link to="/" class="btn btn-light">Aller à la page d'accueil</nuxt-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error-layout'
}
</script>