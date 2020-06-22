<template>
    <div class="col-lg-4 col-md-12">
        <div class="woocommerce-sidebar-area">

            <div class="collapse-widget collections-list-widget">
                <h3 v-b-toggle.collapse-2 class="collapse-widget-title">
                    <span>{{type.name}}</span>

                    <i class="fas fa-angle-up"></i>
                </h3>
                <b-collapse visible id="collapse-2">
                    <ul class="collections-list-row">
                        <li v-for="(s, key) in sections" :key="key" :class="{'active': section.url ===  s.url }" >
                            <a :href="`${type.url}/${s.url}`">{{ s.name }}</a>
                        </li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget size-list-widget">
                <h3 v-b-toggle.collapse-4 class="collapse-widget-title">
                    Taille

                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-4">
                    <ul class="size-list-row">
                        <li :class="{'active': selectedSize === null }"
                            @click="selectSize(null)">
                            <a>Tous</a>
                        </li>
                        <li v-for="(size, key) in sizes"
                            :key="key"
                            :class="{'active': selectedSize ===size }"
                            @click="selectSize(size)">
                            <a>{{size}}</a>
                        </li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget price-list-widget">
                <h3 v-b-toggle.collapse-5 class="collapse-widget-title">
                    Prix

                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-5">
                    <ul class="price-list-row">
                        <li :class="{'active': isThisPrice(0, 10000)}" @click="selectPrice(0,10000)"><a>0 DZD - 10000 DZD</a></li>
                        <li :class="{'active': isThisPrice(0, 100)}" @click="selectPrice(0,100)"><a>0 DZD - 100 DZD</a></li>
                        <li :class="{'active': isThisPrice(100, 500)}" @click="selectPrice(100,500)"><a>100 DZD - 500 DZD</a></li>
                        <li :class="{'active': isThisPrice(500, 1000)}" @click="selectPrice(500,1000)"><a>500 DZD - 1000 DZD</a></li>
                        <li :class="{'active': isThisPrice(1000, 2000)}" @click="selectPrice(1000,2000)"><a>1000 DZD - 2000 DZD</a></li>
                        <li :class="{'active': isThisPrice(2000, 5000)}" @click="selectPrice(2000,5000)"><a>2000 DZD - 5000 DZD</a></li>
                        <li :class="{'active': isThisPrice(5000, 10000)}" @click="selectPrice(5000,10000)"><a>5000 DZD - 10000 DZD</a></li>
                    </ul>
                </b-collapse>
            </div>

            <div class="collapse-widget color-list-widget">
                <h3 v-b-toggle.collapse-6 class="collapse-widget-title">
                    Couleur

                    <i class="fas fa-angle-up"></i>
                </h3>

                <b-collapse visible id="collapse-6">
                    <div class="d-flex">
                        <div v-for="(color, key) in colors"
                             :key="key"
                             :class="{'active-color': selectedColor && selectedColor.id === color.id}"
                             @click="selectColor(color)"
                             class="sun-quote-pages"
                             :style="`background-color: ${color.color}`">
                        </div>
                    </div>
                </b-collapse>
            </div>

            <div class="collapse-widget aside-products-widget">
                <h3 class="aside-widget-title">
                    Produits populaires
                </h3>

                <div class="aside-single-products"
                     v-for="(product, key) in topProducts" :key="key">
                    <div class="products-image">
                        <a :href="`/products-details/${product.url}`">
                            <img :src="product.image" alt="image">
                        </a>
                    </div>
                    <div class="products-content">
                        <span v-if="product.category"><a :href="`/category/${product.category.url}`">{{product.category.name}}</a></span>
                        <h3><a :href="`/products-details/${product.url}`">{{product.name}}</a></h3>

                        <div class="product-price">
                            <span class="new-price">{{product.price - product.offerPrice}}
                                <span style="font-size: 12px">DZD</span>
                            </span>
                            <span v-if="product.offerPrice" class="old-price">{{product.price}}
                                <span style="font-size: 10px">DZD</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            sections : {
                type: Array,
                default: () => []
            },
            colors: {
                type: Array,
                default: () => []
            },
            sizes: {
                type: Array,
                default: () => []
            },
            type: {
                type: Object,
                default: () => {
                    return {
                        name: 'collection',
                        url : '/collection'
                    }
                }
            },
            topProducts: {
                type: Array,
                default: () => []
            },
            section: Object,
        },
        data(){
            return {
                selectedPrice: {
                    max: 10000,
                    min: 0,
                },
                selectedColor: null,
                selectedSize: null,
            }
        },
        watch:{
            selectedColor(){
                this.changedFilter()
            }
        },
        methods:{
            isThisPrice(min, max){
                if(this.selectedPrice.min === min && this.selectedPrice.max === max)
                    return true;
                return false;
            },
            selectPrice(min, max){
                this.selectedPrice.min = min;
                this.selectedPrice.max = max;
                this.changedFilter();
            }  ,
            selectColor(color){
                this.selectedColor = color;
                this.changedFilter();
            },
            selectSize(size){
                this.selectedSize = size;
                this.changedFilter();
            },
            changedFilter(){
                this.$emit('changed-filter', {
                    price: this.selectedPrice,
                    color: this.selectedColor,
                    size: this.selectedSize,
                })
            }

        },
    }
</script>

<style>
    .sun-quote-pages{
        margin-top: 10px;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        padding: 2px;
        margin-right: 5px;
        border: 2px solid transparent;
        background-clip: content-box;
        transition: transform 0.5s ease, border 0.5s ease;
    }

    .sun-quote-pages:hover {
        border: 2px solid darkslategrey;
        transform: scale(1.2);
    }

    .active-color {
        border: 2px solid darkslategrey;
        transform: scale(1.2);
    }
</style>