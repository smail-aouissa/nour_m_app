<template>
    <div>
        <!-- Start Page Title Area -->
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Accueil</nuxt-link></li>
                    <li>Catégorie</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->

        <!-- Start Collections Area -->
        <section class="products-collections-area ptb-60">
            <div class="container">
                <div class="section-title">
                    <h2><span class="dot"></span> Produits de la catégorie</h2>
                </div>
                <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                    <div class="row">
                        <Sidebar :type="type"
                                 :sections="sections"
                                 :colors="colors"
                                 :sizes="sizes"
                                 :top-products="topProduct"
                                 @changed-filter="loadProducts"/>
                        <AllProducts :products="products" />
                    </div>
                </div>
                <div v-if="endOfScroll" class="section-title">
                    <h2>Vous êtes tous rattrapés</h2>
                </div>
            </div>
        </section>
        <!-- End Collections Area -->
    </div>
</template>

<script>
import Sidebar from '../../components/all-products/Sidebar';
import AllProducts from '../../components/all-products/AllProducts';
export default {
    components: {
        Sidebar, AllProducts
    },
    data(){
        return {
            id: this.$route.params.id,
            busy: false,
            type: {
                name: 'Catégorie',
                url : '/category',
            },
            sections: [], // section => category or collection
            colors: [],
            sizes: [],
            prices: [],
            products: [],
            filter: {},
            page: 1,
            endOfScroll: false,
        }
    },
    computed:{
        topProduct(){
            return [...this.products].sort(() => 0.5 - Math.random()).slice(0, 3);
        }
    },
    mounted() {
        this.loadCategory();
        this.loadProducts(this.filter);
    },
    methods: {
        loadCategory(){
            this.$axios.$get('/categories').then(response => {
                this.sections = response.sections;
                this.colors = response.colors;
                this.sizes = response.sizes;
            }).catch(error => {
                console.log(error)
            })
        },
        loadProducts(data){
            this.filter = data;

            if(this.id && this.id >= 0){
                this.page = 1;
                this.$axios.$post(`/category/${this.$route.params.id}?page=${this.page}`, this.filter ).then(response => {
                    this.products = response.products.data;
                    this.page = response.current_page + 1;

                    if(!response.next_page_url){
                        this.busy = true;
                        this.endOfScroll = true;
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        loadMore(){
            // axios add
            this.busy = true;
            console.log('test')
            this.$axios.$post(`/category/${this.$route.params.id}?page=${this.page}`, this.filter ).then(response => {
                let products = response.products.data;
                for (var i = 0; i < products.length ; i++) {
                    this.products.push(products[i]);
                }
                //this.products.concat(this.$store.state.products.all)

                this.page = response.current_page;
                if(!response.next_page_url){
                    this.busy = true;
                    this.endOfScroll = true;
                }else{
                    setTimeout(() => {
                        this.busy = false;
                    }, 500);
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>