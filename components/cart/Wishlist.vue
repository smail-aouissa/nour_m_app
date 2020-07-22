<template>
    <!-- Start Cart Area -->
		<section class="cart-area ptb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <form>
                            <div class="cart-table table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Produit</th>
                                            <th scope="col">Nom</th>
                                            <th scope="col">Prix</th>
                                            <th scope="col">Option</th>
                                        </tr>
                                    </thead>

                                    <tbody v-if="wishlist && wishlist.length > 0">

                                        <tr v-for="(wishlist, i) in wishlist" :key="i">
                                            <td class="product-thumbnail">
                                                <a href="#">
                                                    <img :src="getImage(wishlist.photos)" alt="image de produit" style="height: 100px; object-fit: cover" />
                                                </a>
                                            </td>

                                            <td class="product-name">
                                                <nuxt-link :to="`/product/${wishlist.id}`">
                                                    {{wishlist.label}}
                                                </nuxt-link>
                                                <ul>
                                                    <li>Catégorie: <strong>{{ wishlist.category ?
                                                        wishlist.category.label : 'Non défini' }}</strong></li>
                                                </ul>
                                            </td>

                                            <td class="product-price">
                                                <span class="unit-amount">{{wishlist.price}}
                                                    <span style="font-size: 11px"> DZD</span>
                                                </span>
                                            </td>

                                            <td class="product-subtotal">
                                                <a href="javascript:void(0)" @click="removeItemFromWishlist(wishlist.id)" class="remove"><i class="far fa-trash-alt mx-3"></i></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div v-if="!wishlist || wishlist.length === 0"
                                     class="w-100 d-flex align-items-center justify-content-center my-5">
                                    Vous n'avez aucun produit dans votre favoris
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
		<!-- End Cart Area -->
</template>

<script>
export default {
    name:   'wishlist',
    computed: {
        wishlist(){
            return this.$store.getters.wishlist
        },
    }, 
    methods: {
        removeItemFromWishlist(id){
            this.$store.dispatch('deleteWishlist', id)
        },
        getImage(photos){
            console.log(photos)
            return Array.isArray(photos) && photos.hasOwnProperty(0) ? (photos[0].thumb || photos[0].full) : null;
        }
    },
}
</script>