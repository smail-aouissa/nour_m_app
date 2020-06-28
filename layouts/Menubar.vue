<template>
    <div>
        <!-- Start Navbar Area -->
        <div :class="['navbar-area', {'is-sticky': isSticky}]" class="">
            <div class="comero-nav">
                <div class="container desk">
                    <nav class="navbar navbar-expand-md navbar-light ">
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
                </div>
                <!-- Header Mobile -->
                <div class="mobile">
                    <div style="width: 100vw;height: 20px" class="d-flex justify-content-between">
                        <div class="d-flex justify-content-center align-items-center">
                            <nuxt-link to="/">
                                <img class="mx-2" src="../assets/img/logo.png" style="height: 50px" alt="logo">
                            </nuxt-link>
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <nuxt-link style="color: black" to="/cart">
                                <i class="fas fa-shopping-bag mr-3" style="font-size: 28px"></i>
                            </nuxt-link>
                            <a class="mr-3" @click="burger()">
                                <i class="fas fa-bars" style="font-size: 28px"></i>
                            </a>
                        </div>
                        <div style="position: fixed; z-index: 10">
                            <span id="burger"></span>
                            <i id="quit" class="fas fa-times" @click="quit()"></i>
                            <div class="elementToFadeInAndOut overflow-auto" v-if="manuOpend" id="links" @click="quit()">
                                <nuxt-link v-for="(category , key) in allCategories" :key="key" to="/about">{{category.label}}</nuxt-link>
                                <nuxt-link to="/wishlist">Favoris</nuxt-link>
                                <nuxt-link to="/about">A propos</nuxt-link>
                                <nuxt-link to="/contact">Contact</nuxt-link>
                            </div>
                        </div>
                    </div>
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
            manuOpend: false,
        }
    },
    mounted(){
        window.addEventListener('scroll', () => {
            this.checkScroll();
        })
    },
    computed: {
        cart(){
            return this.$store.getters.cart
        },
        allCategories(){
            let all = [...this.categories];
            this.categories.forEach((category)=> {
                if(category.children && category.children.length){
                    all.concat(category.children);
                }
            })
            return this.categories
        }
    },
    methods: {
        toggle() {
            mutations.toggleNav()
        },
        checkScroll(){
            let scrollPos = window.scrollY;
            if(scrollPos >= 100 && !this.manuOpend){
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }
        },
        burger(){
            var burger = document.getElementById('burger');
            var links = document.getElementById('links');
            var quit = document.getElementById('quit');
            burger.style.padding = '0px 0px 210vw 200vw';
            quit.style.display = 'inline';
            this.manuOpend = true;
        },
        quit(){
            var burger = document.getElementById('burger');
            var links = document.getElementById('links');
            var quit = document.getElementById('quit');
            burger.style.padding = '0px';
            quit.style.display = 'none';
            this.manuOpend = false;
            this.checkScroll();
        }
    }
}

</script>

<style scoped>
    .elementToFadeInAndOut {
        opacity: 1;
        animation: fade 2s;
    }

    @keyframes fade {
        0%,100% { opacity: 0 }
        100% { opacity: 1 }
    }

    @media screen and (max-width : 1920px){
        .mobile{
            display: none;
        }
    }
    @media screen and (max-width : 768px){
        .desk{
            display: none;
        }
        .mobile{
            display: block;
        }
    }

    h1 { position: absolute; top: 100px; left: 100px; }
    #burger{
        position: fixed;
        right: 0;
        top: 0;
        color: white;
        background: linear-gradient(45deg, #2c3e50 10%, #222222);
        font-size: 22px;
        padding: 0px;
        border-radius: 0% 0% 0% 100%;
        transition: 1s;
        cursor: pointer;
    }

    #quit{
        position: fixed;
        top: 0;
        color: white;
        font-size: 22px;
        padding: 16px;
        display: none;
        cursor: pointer;
    }

    #links{
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 80vh;
        justify-content: center;
        z-index: 100;
    }

    #links a{
        text-align: center;
        text-decoration: none;
        color: white;
        font-size: 2em;
        padding: 5px 0px;
        z-index: 10;
    }
</style>