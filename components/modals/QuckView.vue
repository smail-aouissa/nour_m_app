<template>
    <div>
        <div class="modal-backdrop" v-if="isQuickViewOpen"></div>
        <transition name="slide-fade">
            <!-- Start Products QuickView Modal Area -->
            <div v-if="isQuickViewOpen && item" class="modal fade productQuickView" id="productQuickView" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <button 
                            type="button" 
                            class="close" 
                            @click="closeQuickView"
                        >
                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                        </button>
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-6">
                                <div class="productQuickView-image">
                                    <img v-if="getImage(item.photos)" :src="getImage(item.photos)" alt="image"/>
                                    <img v-else src="../../assets/images/category-no-image.jpg" alt="image"/>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="product-content">
                                    <h3><a href="#">{{ item.label }}</a></h3>

                                    <div class="price">
                                        <span>{{ item.price - (item.offerPrice || 0) }} DZD</span>
                                    </div>

                                    <div class="product-review">
                                        <div class="rating">
                                            <i v-for="n in Math.floor(item.rating || 5)" class="fas fa-star"></i>
                                        </div>
                                        <a class="rating-count">Avis: {{ Math.floor(item.rating || 5) }} / 5</a>
                                    </div>

                                    <ul class="product-info">
                                        <li><span>Disponibilité:</span> <a>en stock ( {{ stock || 0 }} produits )</a></li>
                                        <li><span>Type de produit:</span> <a>{{ item.category ? item.category.label : '-' }}</a></li>
                                    </ul>

                                    <div v-if="item.colors.length" class="product-color-switch">
                                        <h4>Couleurs:</h4>

                                        <ul>
                                            <li v-for="(color, key) in item.colors" :key="key" @click="selectColor(color)"
                                                :class="{'active' : selectedColor && selectedColor.id === color.id }">
                                                <a title="Couleur">
                                                    <span :style="`background-color: ${color.code}`"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div v-else style="height: 60px"></div>

                                    <div v-if="item.sizes.length" class="product-size-wrapper">
                                        <h4>Taille:</h4>

                                        <ul>
                                            <li v-for="(size, key) in item.sizes" @click="selectSize(size)" :key="key"
                                                :class="{'active': selectedSize && selectedSize.id === size.id }">
                                                <a>{{size.label}}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div v-else style="height: 60px"></div>

                                    <div class="product-add-to-cart">
                                        <!-- <div class="input-counter">
                                            <span @click="decreaseQuantity()" class="minus-btn"><i class="fas fa-minus"></i></span>
                                                {{ quantity }}
                                            <span @click="increaseQuantity()" class="plus-btn"><i class="fas fa-plus"></i></span>
                                        </div>

                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                            :class="{'btn-disabled': cantBuy  }"
                                            @click="addToCart(item)">
                                            <i class="fas fa-cart-plus"></i> Ajouter au panier
                                        </button> -->
                                    </div>

                                    <a href="javascript:void(0)" @click="showProduct" class="view-full-info">Afficher toutes les informations</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- End Products QuickView Modal Area -->
        </transition>
    </div>
</template>

<script>
import { store, mutations } from '../../utils/sidebar-util';
export default {
    name: 'QuckView',
    data() {
        return{
            quantity: 1,
            selectedColor: null,
            selectedSize: null,
            product: null,
        }
    },
    methods: {
        closeQuickView(){
            this.quantity = 1;
            this.selectedColor= null;
            this.selectedSize= null;
            mutations.toggleQuickView();
        },
        addToCart(item){
            if(!this.selectedColor && !this.selectedSize && this.cantBuy){
                this.$toast.error("Vous devez d'abord sélectionner la taille et la couleur",{
                    icon: 'fas fa-exclamation-triangle'
                });
                return;
            }
            else if (this.cantBuy){
                this.$toast.error("Rupture de stock",{
                    icon: 'fas fa-exclamation-triangle'
                });
                return;
            }

            const product = [{
                id: item.id,
                label: item.label,
                price: item.price - ( item.offerPrice || 0 ),
                image: this.getImage(item.photos),
                quantity: this.quantity,
                color: this.selectedColor,
                size: this.selectedSize,
                category: item.category,
                stock: this.stock,
            }]

            if(this.cart.length > 0){
                let id = item.id 
                this.getExistPId = id
                let cartIndex = this.cart.findIndex(cart => {
                    return cart.id == id &&
                        (cart.color && cart.color.id == this.selectedColor.id) &&
                        (cart.size && cart.size.id == this.selectedSize.id)
                })

                if(cartIndex == -1){
                    this.$store.dispatch('addToCart', product);
                    this.$toast("Ajouté au panier", {
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.$toast.info("Produit déjà ajouté au panier");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Ajouté au panier",{
                    icon: 'fas fa-cart-plus'
                });
            }

            this.closeQuickView()
        },
        increaseQuantity(){
            if(this.stock === 0){
                this.$toast.error("Rupture de stock",{
                    icon: 'fas fa-cart-plus'
                });
            }
            else if(this.quantity >= this.stock){
                this.$toast.error("Vous ne pouvez pas ajouter plus de " + this.stock,{
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity++
            }
        },
        decreaseQuantity() {
            if(this.quantity < 2){
                this.$toast.error("Vous ne pouvez pas ajouter moins de 1",{
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity--;
            }
        },
        getImage(photos){
            return Array.isArray(photos) && photos.hasOwnProperty(0) ? photos[0].full : null;
        },
        selectSize(size){
            this.selectedSize = size;
            //if(size.quantity) this.stock = size.quantity;
        },
        selectColor(color){
            this.selectedColor = color;
            //if(color.quantity) this.stock = color.quantity;
        },
        showProduct(){
            this.closeQuickView();
            this.$router.push(`/product/${this.item.id}`);
        }
    },
    computed: {
        isQuickViewOpen(){
            return store.isQuickViewOpen
        },
        cart(){
            return this.$store.getters.cart
        },
        item(){
            /*if(store.item?.colors){
                this.stock = store.item.colors.reduce((a,b) => a + (b.quantity || 0) , 0) ;
            }*/
            return store.item;
        },
        // stock(){
        //     if(this.selectedColor && this.selectedSize){
        //         let variation = this.item.variations.find( i => i.color_product_id == this.selectedColor.id && i.product_size_id == this.selectedSize.id)
        //         return variation ? variation.quantity : 0;
        //     }
        //     else{
        //         return 0;
        //     }
        // },
        cantBuy(){
            return this.stock === 0 && this.item.sizes && this.item.sizes.length > 0 && this.item.colors && this.item.colors.length > 0;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/styles/_transitions.scss";
</style>