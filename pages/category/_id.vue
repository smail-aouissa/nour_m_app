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
                                 :section="section"
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
            busy: false,
            type: {
                name: 'Catégorie',
                url : '/category'
            },
            sections: [], // section => category or collection
            colors: [],
            sizes: [],
            section: {
                url: this.$route.params.id,
            },
            products: [],
            filter: {},
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
        this.loadProducts();
    },
    methods: {
        loadCategory(){
            this.sections = [
                { name: 'Category A', url: 'category-a'},
                { name: 'Category B', url: 'category-b'},
                { name: 'Category C', url: 'category-c'},
            ];
            this.colors = [
                { id: 1, color : '#2980b9'},
                { id: 2, color : '#e74c3c'},
                { id: 3, color : '#53a744'}
            ];
            this.sizes = ['S' , 'M', 'L', 'XL'];
            this.section = {
                id: 1,
                url: this.$route.params.id,
            }

        },
        loadProducts(data){
            // axios filter
            this.filter = data;
            this.products = [...this.$store.state.products.all];
        },
        loadMore(){
            // axios add
            this.busy = true;

            let p = [...this.$store.state.products.all]
            for (var i = 0; i < p.length ; i++) {
                this.products.push(p[i]);
            }

            //this.products.concat(this.$store.state.products.all)

            setTimeout(() => {
                // if the end stop it with busy true;
                //this.busy = false;
                //this.endOfScroll = true;
            }, 500);
        }
    }
}
</script>