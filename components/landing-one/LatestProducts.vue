<template>
    <div>
        <!-- Start All Products Area -->
        <section class="all-products-area pb-60">
            <div class="container">
                <div class="section-title">
                    <h2><span class="dot"></span>Derniers produits</h2>
                </div>

                <div class="row">

                    <ProductItem
                        v-for="(product, index) in products"
                        :product="product"
                        :key="index"
                        @clicked="toggle(product)"
                        :className="`col-lg-3 col-md-6 col-sm-6`"
                    ></ProductItem>
                    
                </div>
            </div>
        </section>
        <!-- End all Products Area -->
        <QuckView/>
    </div>
</template>

<script>
import QuckView from '../modals/QuckView';
import { mutations } from '../../utils/sidebar-util';
import ProductItem from './ProductItem';
export default {
    components: {
        QuckView,
        ProductItem
    },
    props: {
        products: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    methods: {
        toggle(product) {
            mutations.toggleQuickView(product);
        }
    },
}
</script>