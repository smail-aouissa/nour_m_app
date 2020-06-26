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
                    <RelatedProducts :related-products="relatedProducts"/>
                </div>
            </div>
        </section>
    </div>
</template>



<script>
import ProductImages from '../components/products/ProductImages';
import Details from '../components/products/Details';
import DetailsInfo from '../components/products/DetailsInfo';
import RelatedProducts from '../components/products/RelatedProducts';
export default {
    components: {
        ProductImages, Details, DetailsInfo, RelatedProducts
    },
    data(){
        return {
            product:{
                id: this.$route.hash.substring(1),
            },
            relatedProducts: [],
            photo: null,
        }
    },
    mounted() {
        if(!/^\d+$/.test(this.product.id)){
            this.$router.push('/')
        }
        this.loadProduct();
    },
    methods: {
        loadProduct(){
            if(!this.product.id) this.$router.push('/')

            this.$axios.$get('/product/'+ this.product.id).then(response => {
                this.product = response.product;
                this.relatedProducts = response.relatedProducts;
            }).catch(error => {
                console.log(error)
            })
        },
        changedPhoto(photo){
            this.photo = photo;
        }
    }
}
</script>