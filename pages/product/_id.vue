<template>
    <div>
        <!-- Start Page Title Area -->
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Accueil</nuxt-link></li>
                    <li>{{product.label}}</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->

        <!-- Start Products Details Area -->
        <section class="products-details-area ptb-60">
            <div class="container">
                <div class="row">
                    <ProductImages v-if="product.photos" :photo="photo" :photos="product.photos" />
                    <Details @changed-photo="changedPhoto" :product = "product"/>
                    <DetailsInfo :description="product.description" />
                    <RelatedProducts @reload="reloadProduct" :related-products="relatedProducts"/>
                </div>
            </div>
        </section>
        <loader v-if="loading"></loader>
    </div>
</template>



<script>
import ProductImages from '~/components/products/ProductImages';
import Details from '~/components/products/Details';
import DetailsInfo from '~/components/products/DetailsInfo';
import RelatedProducts from '~/components/products/RelatedProducts';
import Loader from "~/components/common/Loader";
export default {
    components: {
        Loader,
        ProductImages, Details, DetailsInfo, RelatedProducts
    },
    data(){
        return {
            loading: true,
            product:{
                id: this.$route.hash.substring(1),
            },
            relatedProducts: [],
            photo: null,
        }
    },
    computed:{
        id(){
            let path = this.$route.path.split('/')
            if(/^\d+$/.test(path[path.length - 1])){
                return path[path.length - 1]
            }
            return null;
        },
    },
    mounted() {
        this.loadProduct();
        window.scrollTo(0,0);
    },
    methods: {
        loadProduct(){
            if(!this.id) this.$router.push('/')

            this.$axios.$get('/product/'+ this.id).then(response => {
                this.product = response.product;
                this.relatedProducts = response.relatedProducts;
                this.loading = false;
            }).catch(error => {
                this.loading = false;
            })
        },
        changedPhoto(photo){
            this.photo = photo;
        },
        reloadProduct(id){

        }
    }
}
</script>