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
                                            <th scope="col">Prix d'unité</th>
                                            <th scope="col">Quantité</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>

                                    <tbody v-if="cart && cart.length > 0">

                                        <tr v-for="(cart, i) in cart" :key="i">
                                            <td class="product-thumbnail">
                                                <nuxt-link :to="`/products-details/${cart.id}`">
                                                    <img :src="cart.image" alt="image de produit" />
                                                </nuxt-link>
                                            </td>

                                            <td class="product-name">
                                                <nuxt-link :to="`/products-details/${cart.id}`">
                                                    {{cart.label}}
                                                </nuxt-link>
                                                <ul>
                                                    <li v-if="cart.color && cart.color.code " class="d-flex align-items-center">
                                                        Couleur:
                                                        <span class="mx-2" :style="`background-color: ${cart.color.code};height: 12px;width: 12px;border-radius: 30px;`"></span>
                                                    </li>
                                                    <li v-if="cart.size && cart.size.label">Taille:<strong>{{ cart.size.label  }}</strong></li>
                                                    <li>Catégorie: <strong>{{ cart.category ? cart.category.label : 'Non défini' }}</strong></li>
                                                </ul>
                                            </td>

                                            <td class="product-price">
                                                <span class="unit-amount">{{cart.price}}
                                                    <span style="font-size: 11px"> DZD</span>
                                                </span>
                                            </td>

                                            <td class="product-quantity">
                                                <div class="input-counter">
                                                    <span @click="onDecrement(cart.id, cart.quantity)" class="minus-btn"><i class="fas fa-minus"></i></span>
                                                    {{cart.quantity}}
                                                    <span @click="onIncrement(cart.id)" class="plus-btn"><i class="fas fa-plus"></i></span>
                                                </div>
                                            </td>

                                            <td class="product-subtotal">
                                                <span class="subtotal-amount">{{cart.price * cart.quantity}}
                                                    <span style="font-size: 11px"> DZD</span>
                                                </span>

                                                <a href="javascript:void(0)" @click="removeItemFromCart(cart.id)" class="remove"><i class="far fa-trash-alt"></i></a>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>

                            <div class="cart-buttons">
                                <div class="row">
                                    <div class="col-lg-7 col-md-7">
                                        <div class="continue-shopping-box">
                                            <nuxt-link to="/" class="btn btn-light">Continuer vos achats</nuxt-link>
                                        </div>
                                    </div>

                                    <div class="col-lg-5 col-md-5 text-right">
                                        <div class="cart-totals">
                                            <h3>Total du panier</h3>

                                            <ul>
                                                <li>Sous-total <span>{{parseFloat(cartTotal).toFixed(2)}} <span> DZD</span>  </span></li>
                                                <li>Livraison <span>Prochaine étape</span></li>
                                                <li>Total <span><b>{{parseFloat(cartTotal + 0).toFixed(2)}}</b> <span> DZD</span> </span></li>
                                            </ul>
                                            <nuxt-link to="/checkout" class="btn btn-light">Passer à la caisse</nuxt-link>
                                        </div>
                                    </div>
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
    computed: {
        cart(){
            return this.$store.getters.cart
        },
        cartTotal(){
            return this.$store.getters.totalAmount
        }
    }, 
    methods: {
        removeItemFromCart(id){
            this.$store.dispatch('deleteCart', id)
        },
        onIncrement(id){
            this.$store.dispatch('updateCart', {
                id,
                unit: 1,
                cart: this.cart
            })
        },
        onDecrement(id, quantity){
            if (quantity > 1) {
                this.$store.dispatch('updateCart', {
                    id,
                    unit: -1,
                    cart: this.cart
                })
            } else {
                this.removeItemFromCart(id);
                this.$toast.warning("Item deleted!");
            }
        },
    }
}
</script>