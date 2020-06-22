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

        <div id="products-filter" class="products-collections-listing row">
            <ProductItem
                v-for="(product, index) in productsList"
                :product="product"
                :key="index"
                @clicked="toggle(product)"
                className="col-lg-6 col-md-6 products-col-item"
            ></ProductItem>
            
        </div>

        <!--nav class="woocommerce-pagination">
            <ul>
                <li><a href="#" class="page-numbers current">1</a></li>
                <li><span class="page-numbers">2</span></li>
                <li><a href="#" class="page-numbers">3</a></li>
                <li><a href="#" class="page-numbers">4</a></li>
                <li><span class="page-numbers dots">…</span></li>
                <li><a href="#" class="page-numbers">11</a></li>
                <li><a href="#" class="page-numbers">12</a></li>
                <li><a href="#" class="next page-numbers"><i class="fas fa-chevron-right"></i></a></li>
            </ul>
        </nav-->

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