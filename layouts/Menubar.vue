<template>
    <div>
        <!-- Start Navbar Area -->
        <div :class="['navbar-area', {'is-sticky': isSticky}]">
            <div class="comero-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <nuxt-link class="navbar-brand" to="/">
                            <img src="../assets/img/logo.png" style="height: 50px" alt="logo">
                        </nuxt-link>

                        <!--- toggle for mobile ----->
                        <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                        <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                            <ul class="navbar-nav">

                                <li class="nav-item p-relative">
                                    <nuxt-link to="/" class="nav-link">Accueil</nuxt-link>
                                </li>

                                <li class="nav-item p-relative">
                                    <a class="nav-link">Catégories <i class="fas fa-chevron-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li v-for="(category , key) in categories" :key="key" class="nav-item">
                                            <div class="d-flex justify-content-between">
                                                <nuxt-link :to="`/category/${category.id}`" class="nav-link">{{category.label}}</nuxt-link>
                                                <div v-if="category.children && category.children.length">
                                                    <i style="font-size: 10px" class="fas fa-chevron-right mr-2"></i>
                                                </div>
                                            </div>
                                            <div v-if="category.children && category.children.length">
                                                <ul class="dropdown-menu">
                                                    <li v-for="(cat , key) in category.children" :key="key" class="nav-item">
                                                        <nuxt-link :to="`/category/${cat.id}`" class="nav-link">{{cat.label}}</nuxt-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <nuxt-link to="/cart" class="nav-link">Panier</nuxt-link>
                                </li>

                                <li class="nav-item">
                                    <nuxt-link to="/wishlist" class="nav-link">Favoris</nuxt-link>
                                </li>

                                <li class="nav-item">
                                    <nuxt-link to="/about" class="nav-link">A propos</nuxt-link>
                                </li>

                                <li class="nav-item">
                                    <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                                </li>
                            </ul>

                            <div class="others-option">
                                <div class="option-item">
                                    <a @click.prevent="toggle" href="javascript:void(0)">
                                        Cart({{cart ? cart.length : 0}}) <i class="fas fa-shopping-bag"></i>
                                    </a>
                                </div>
                            </div>
                        </b-collapse>
                    </nav>

                    <!--nav class="navbar navbar-expand-md navbar-light mobile">
                        <div class="btn-show-menu-mobile hamburger hamburger--squeeze">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </div>
                        <nuxt-link class="navbar-brand" to="/">
                            <img src="../assets/img/logo.png" style="height: 50px" alt="logo">
                        </nuxt-link>

                    </nav-->
                </div>
            </div>
        </div>
        <!-- End Navbar Area -->

        <SidebarPanel></SidebarPanel>
    </div>
</template>

<script>
import SidebarPanel from '../layouts/SidebarPanel';
import { mutations } from '../utils/sidebar-util';
export default {
    components: {
        SidebarPanel
    },
    props: ['categories'],
    data(){
        return {
            isSticky: false,
        }
    },
    mounted(){
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            if(scrollPos >= 100){
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    },
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        toggle() {
            mutations.toggleNav()
        }
    }
}
</script>

<style>
    @media screen and (max-width : 1920px){
        .mobile{
            display: none;
        }
    }
    @media screen and (max-width : 600px){
        .desk{
            display: none;
        }
        .mobile{
            display: block;
        }
    }
</style>