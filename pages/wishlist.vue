<template>
    <div>
        <!-- Start Page Title Area -->
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Accueil</nuxt-link></li>
                    <li>Favoris</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->
        <wishlist></wishlist>
    </div>
</template>

<script>
import Wishlist from '../components/cart/Wishlist';
export default {
    components: {
        Wishlist
    }
}
</script>