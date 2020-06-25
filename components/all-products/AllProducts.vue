<template>
    <div class="col-lg-8 col-md-12">
        <div class="products-filter-options">
            <div class="row align-items-center">
                <div class="col d-flex">
                    <p>Total des produits: {{ productsList.length }}</p>
                </div>

                <div class="col d-flex">
                    <span>Trier par:</span>

                    <div class="products-ordering-list">
                        <select v-model="filter">
                            <option value="date">Date</option>
                            <option value="price">Prix</option>
                            <option value="az">Nom (A-Z)</option>
                            <option value="za">Nom (Z-A)</option>
                            <option value="rating">Évaluation</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="productsList && productsList.length > 0"
             id="products-filter" class="products-collections-listing row">
            <ProductItem
                    v-for="(product, index) in productsList"
                    :product="product"
                    :key="index"
                    @clicked="toggle(product)"
                    className="col-lg-6 col-md-6 products-col-item">
            </ProductItem>
        </div>

        <div v-else class="products-collections-listing row">
            <div class="d-flex flex-column align-items-center mt-5"
                 style="width: 100%">
                <img src="../../assets/images/no-product.png" />
                <span>Aucun produit trouvé!</span>
            </div>
        </div>

        <QuckView />
    </div>
</template>

<script>
import QuckView from '../modals/QuckView';
import { mutations } from '../../utils/sidebar-util';
import ProductItem from '../landing-one/ProductItem';
export default {
    components: {
        QuckView,
        ProductItem
    },
    props:{
        products: {
            type: Array,
            default: () => [],
        }
    },
    data(){
        return {
            filter: 'date',
        }
    },
    methods: {
        toggle(product) {
            mutations.toggleQuickView(product);
        }
    },
    computed: {
        productsList(){
            if(this.filter === 'date')
                return [...this.products].sort( (a,b) => a.createdAt - b.createdAt );
            else if(this.filter === 'price')
                return [...this.products].sort( (a,b) => a.price - b.price );
            else if(this.filter === 'az')
                return [...this.products].sort( (a,b) => a.name.localeCompare(b.name) );
            else if(this.filter === 'za')
                return [...this.products].sort( (a,b) => b.name.localeCompare(a.name) );
            else if(this.filter === 'rating')
                return [...this.products].sort( (a,b) => a.rating - b.rating );
            return this.products
        }
    },
}
</script>