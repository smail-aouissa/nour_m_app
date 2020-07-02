<template>
    <div class="col-lg-12 col-md-12">
        <div class="related-products-area">
            <div class="container">
                <div class="section-title">
                    <h2><span class="dot"></span> Produits connexes</h2>
                </div>

                <div class="row">
                    <ProductItem
                        v-for="product in relatedProducts"
                        :product="product"
                        :key="product.id"
                        @clicked="toggle(product)"
                        :className="`col-lg-3 col-md-6 col-6`">
                    </ProductItem>
                </div>
            </div>
        </div>
        <QuckView />
    </div>
</template>

<script>
import ProductItem from '../landing-one/ProductItem';
import { mutations } from '../../utils/sidebar-util';
import QuckView from '../modals/QuckView';
export default {
    components: {
        ProductItem, QuckView
    },
    props: {
        relatedProducts: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        toggle(product) {
            mutations.toggleQuickView(product)
        }
    },
}
</script>