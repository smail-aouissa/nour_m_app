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
                        <li v-for="(section, key) in sections" :key="key" :class="{'active': parseInt(currentId) === section.id }" >
                            <a :href="`${type.url}/${section.id}`">{{ section.label }}</a>
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
                        <li v-for="(size, key) in sizes"
                            :key="key"
                            :class="{'active': includeSize(size)}"
                            @click="selectSize(size)">
                            <a>{{size.label}}</a>
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
                        <li v-for="(price, key) in prices" :key="key"
                            :class="{'active': includePrice(price)}"
                            @click="selectPrice(price)">
                            <a>{{price.min}} DZD - {{price.max}} DZD</a>
                        </li>
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
                             :class="{'active-color': includeColor(color)}"
                             @click="selectColor(color)"
                             class="sun-quote-pages"
                             :style="`background-color: ${color.code}`">
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
        },
        data(){
            return {
                currentId: this.$route.params.id,
                prices:[
                    {id : 0, min : 0 , max: 100 },
                    {id : 1, min : 100 , max: 500 },
                    {id : 2, min : 500 , max: 1000 },
                    {id : 3, min : 1000 , max: 2000 },
                    {id : 4, min : 2000 , max: 5000 },
                    {id : 5, min : 5000 , max: 10000 },
                ],
                selectedPrice: [],
                selectedColor: [],
                selectedSize: [],
            }
        },
        watch:{
            selectedColor(){
                this.changedFilter()
            }
        },
        methods:{
            // Price
            selectPrice(price){
                if(this.includePrice(price)){
                    let index = this.selectedPrice.indexOf(price);
                    this.selectedPrice.splice(index,1)
                } else
                    this.selectedPrice.push(price);
                this.changedFilter();
            } ,
            includePrice(price){
                if(this.selectedPrice.indexOf(price) > -1)
                    return true;
                return false;
            },

            // Color
            selectColor(color){
                if(this.includeColor(color)){
                    let index = this.selectedColor.indexOf(color);
                    this.selectedColor.splice(index,1)
                } else
                    this.selectedColor.push(color);
                this.changedFilter();
            },
            includeColor(color){
                if(this.selectedColor.indexOf(color) > -1)
                    return true;
                return false;
            },

            // Size
            selectSize(size){
                if(this.includeSize(size)){
                    let index = this.selectedSize.indexOf(size);
                    this.selectedSize.splice(index,1)
                } else
                    this.selectedSize.push(size);
                this.changedFilter();
            },
            includeSize(size){
                if(this.selectedSize.indexOf(size) > -1)
                    return true;
                return false;
            },

            changedFilter(){
                this.$emit('changed-filter', {
                    prices: this.selectedPrice,
                    colors: this.selectedColor,
                    sizes: this.selectedSize,
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