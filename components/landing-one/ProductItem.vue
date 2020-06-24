<template>
    <div 
        :class="className" v-if="product">
        <div class="single-product-box">
            <div class="product-image">
                <nuxt-link v-if="product.photos" :to="`/products-details/${product.id}`">
                    <img v-if="getImage(product.photos)" :src="getImage(product.photos)"/>
                    <img v-else src="../../assets/images/category-no-image.jpg"/>
                    <img v-if="getImageHover(product.photos)" :src="getImageHover(product.photos)"/>
                </nuxt-link>

                <ul>
                    <li>
                        <a
                            href="javascript:void(0)"
                            title="Aperçu rapide"
                            v-b-tooltip.hover
                            @click.prevent="quickView"
                        >
                            <i class="far fa-eye"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            title="Ajouter à la liste de souhaits"
                            v-b-tooltip.hover
                            @click.prevent="addToWishlist(product)"
                        >
                            <i class="far fa-heart"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="product-content">
                <h3>
                    <nuxt-link :to="`/products-details/${product.id}`">{{product.label}}</nuxt-link>
                </h3>

                <div class="product-price">
                    <span
                        class="old-price"
                        v-if="product.offerPrice"
                    >
                        {{product.price - (product.offerPrice || 0) }} <span style="font-size: 10px">DZD</span>
                    </span>
                    <span class="new-price">{{product.price}} <span style="font-size: 12px">DZD</span></span>
                </div>

                <div class="rating">
                    <i v-for="n in Math.floor(product.rating || 5)" class="fas fa-star"></i>
                </div>

                <a
                    v-if="getExistPId === product.id"
                    href="javascript:void(0)"
                    class="btn btn-light added-btn"
                    @click="addToCart(product)">
                    Déja ajouté!
                </a>

                <a
                    v-else
                    href="javascript:void(0)"
                    class="btn btn-light"
                    @click="addToCart(product)">
                    Ajouter au panier
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    data(){
        return {
            getExistPId: null,
        }
    },
    props: ['product', 'className'],
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        quickView(e){
            this.$emit('clicked')
        },
        addToCart(item){
            const product = [{
                id: item.id,
                label: item.label,
                price: item.price - ( item.offerPrice || 0 ),
                image: this.getImage(item.photos),
                quantity: 1,
                color: null,
                size: null,
            }]

            if(this.cart.length > 0){
                let id = item.id 
                this.getExistPId = id
                let cartIndex = this.cart.findIndex(cart => cart.id == id)

                if(cartIndex == -1){
                    this.$store.dispatch('addToCart', product);
                    this.$toast("Ajouté au panier", {
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.$toast.info("Produit déjà ajouté au panier!");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Ajouté au panier",{
                    icon: 'fas fa-cart-plus'
                });
            }
        },
        addToWishlist(item){
            const product = [{
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1,
                color: null,
                size: null,
            }]

            // TODO: wishlist cookies
        },
        getImage(photos){
            return Array.isArray(photos) && photos.hasOwnProperty(0) ? photos[0].full : null;
        },
        getImageHover(photos){
            return Array.isArray(photos) && photos.hasOwnProperty(1) ? photos[1].full : null;
        },
    }
}
</script>