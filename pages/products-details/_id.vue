<template>
    <div>
        <!-- Start Page Title Area -->
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Accueil</nuxt-link></li>
                    <li>{{product.name}}</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->

        <!-- Start Products Details Area -->
        <section class="products-details-area ptb-60">
            <div class="container">
                <div class="row">
                    <ProductImages v-if="product.images" :images="product.images" />
                    <Details :product = "product"/>
                    <DetailsInfo />
                    <RelatedProducts :related-products="relatedProducts"/>
                </div>
            </div>
        </section>
    </div>
</template>



<script>
import ProductImages from '../../components/products/ProductImages';
import Details from '../../components/products/Details';
import DetailsInfo from '../../components/products/DetailsInfo';
import RelatedProducts from '../../components/products/RelatedProducts';
export default {
    components: {
        ProductImages, Details, DetailsInfo, RelatedProducts
    },
    data(){
        return {
            product:{
                id: this.$route.params.id || 1,
            },
            relatedProducts: []
        }
    },
    mounted() {
        this.loadProduct();
    },
    methods: {
        loadProduct(){
            this.product = {
                id: 1,
                url: 'product-xxx-1',
                name: 'Linen crochet trim t-shirt',
                price: 191.00,
                offer: true,
                offerPrice: 3,
                images: ['https://www.bolster-vue.envytheme.com/_nuxt/img/d77a195.jpg', 'https://www.bolster-vue.envytheme.com//_nuxt/img/f523084.jpg'],
                rating: 3,
                stock: 12,
                category: { name: 'T-shirt', url : 'category-n'},
                colors: [ { id: 1, color : '#2980b9' , image: 'https://www.bolster-vue.envytheme.com/_nuxt/img/ae3d1e0.jpg' }, { id: 2, color : '#e74c3c' , image: 'https://www.bolster-vue.envytheme.com//_nuxt/img/af16d15.jpg' }] ,
                sizes: ['S', 'L','XL'] ,
            };
            this.relatedProducts = this.$store.state.products.all.filter(product => product.id !== parseInt(this.id)).slice(0, 4)
        }
    }
}
</script>