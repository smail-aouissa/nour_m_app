<template>
    <div>
        <div class="modal-backdrop" v-if="isPanelOpen"></div>
        <!-- Start Shopping Cart Modal -->
        <transition name="slide-fade">
            <div v-if="isPanelOpen" class="modal right shoppingCartModal" id="shoppingCartModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <button type="button" class="close" @click="closeSidebarPanel"><span aria-hidden="true">&times;</span></button>

                        <div 
                            class="modal-body"
                            v-if="cart && cart.length > 0">
                            <h3>Mon Panier ({{cart.length}})</h3>

                            <div class="product-cart-content">

                                <div 
                                    class="product-cart"
                                    v-for="cart in cart">
                                    <div class="product-image">
                                        <nuxt-link :to="`/product#${cart.id}`">
                                            <img  :src="cart.image" alt="Image de produit" />
                                        </nuxt-link>
                                    </div>

                                    <div class="product-content">
                                        <h3>
                                            <nuxt-link :to="`/product#${cart.id}`">{{cart.label}}</nuxt-link>
                                        </h3>
                                        <div class="d-flex align-items-center">
                                            <span v-if="cart.color" :style="`background-color: ${cart.color.code};height: 12px;width: 12px;border-radius: 30px;`"></span>
                                            <span v-else>Non défini</span>
                                            <span class="mx-1">/</span>
                                            <span v-if="cart.size">{{cart.size.label || 'Non défini'}}</span>
                                            <span v-else>Non défini</span>
                                        </div>
                                        <div class="product-price">
                                            <span>{{cart.quantity}}</span>
                                            <span>x</span>
                                            <span class="price">{{cart.price}} DZD</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="product-cart-subtotal mt-2">
                                <span>Sous-total</span>

                                <span class="subtotal">{{cartTotal}} DZD</span>
                            </div>

                            <div @click="closeSidebarPanel" class="product-cart-btn">
                                <nuxt-link to="/checkout" class="btn btn-primary">Passer à la caisse</nuxt-link>
                                <nuxt-link to="/cart" class="btn btn-light">Voir Panier d'achat</nuxt-link>
                            </div>
                        </div>
                        <div class="modal-body" v-else>
                            <h3>Vide!</h3>
                            <div class="product-cart-btn">
                                <div @click="closeSidebarPanel" class="btn btn-primary">Continuer vos achats</div>
                                <nuxt-link to="/" class="btn btn-light">Aller vers la page d'accueil</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="isPanelOpen" @click="closeSidebarPanel" style="width: 100%; height: 100vh"></div>
            </div>
        </transition>
        <!-- End Shopping Cart Modal -->
    </div>
</template>

<script>
import { store, mutations } from '../utils/sidebar-util';
export default {
    name: 'SidebarPanel',
    methods: {
        closeSidebarPanel: mutations.toggleNav
    },
    computed: {
        isPanelOpen(){
            return store.isNavOpen
        },
        cart(){
            return this.$store.getters.cart
        },
        cartTotal(){
            return this.$store.getters.totalAmount
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles/_transitions.scss";
</style>