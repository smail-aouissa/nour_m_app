<template>
    <div class="col-lg-6 col-md-6">
        <div class="product-details-content">
            <h3>{{product.name}}</h3>

            <div class="price">
                <span class="new-price">${{product.price - (product.offerPrice || 0 )}}</span>
            </div>

            <div class="product-review">
                <div class="rating">
                    <i v-for="n in Math.floor(product.rating || 5)" class="fas fa-star"></i>
                </div>
                <div class="rating-count">Avis: {{ Math.floor(product.rating || 5) }} / 5</div>
            </div>

            <ul class="product-info">
                <li><span>Disponibilité:</span> <a>en stock ({{product.stock || 1 }} produits)</a></li>
                <li><span>Type de produit:</span> <a>{{ product.category ? product.category.name : '-' }}</a></li>
            </ul>

            <div class="product-color-switch">
                <h4>Couleurs:</h4>

                <ul>
                    <li v-for="(color, key) in product.colors" :key="key" @click="selectedColor = color" :class="{'active' : selectedColor && selectedColor.id === color.id }">
                        <a title="Couleur">
                            <span :style="`background-color: ${color.color}`"></span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="product-size-wrapper">
                <h4>Taille:</h4>

                <ul>
                    <li v-for="(size, key) in product.sizes" @click="selectedSize = size" :key="key" :class="{'active': selectedSize && selectedSize === size }">
                        <a>{{size}}</a>
                    </li>
                </ul>
            </div>

            <div class="product-add-to-cart">
                <div class="input-counter">
                    <span @click="decreaseQuantity()" class="minus-btn"><i class="fas fa-minus"></i></span>
                    {{quantity}}
                    <span @click="increaseQuantity()" class="plus-btn"><i class="fas fa-plus"></i></span>
                </div>

                <button v-if="getExistPId" type="submit" class="btn btn-danger" @click="addToCart()">
                    <i class="fas fa-cart-plus"></i> Déja ajouté
                </button>

                <button v-else type="submit" class="btn btn-primary" @click="addToCart(product)">
                    <i class="fas fa-cart-plus"></i> Ajouter au panier
                </button>
            </div>

            <div class="wishlist-compare-btn">
                <a href="#" class="btn btn-light"><i class="far fa-heart"></i> Ajouter au favoris</a>
            </div>

            <div class="buy-checkbox-btn">
                <div class="item">
                    <a href="#" class="btn btn-primary">Achetez-le maintenant!</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            getExistPId: false,
            quantity: 1,
            selectedColor: null,
            selectedSize: null
        }
    },
    props: ['product'],
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        addToCart(){
            if(!this.selectedColor || !this.selectedSize){
                this.$toast.warning("Vous devez sélectionner la couleur et la taille");
                return;
            }

            const product = [{
                id: this.product.id,
                name: this.product.name,
                price: this.product.price,
                image: this.product.images[0],
                quantity: this.product.quantity,
                color: this.selectedColor,
                size: this.selectedSize
            }]

            if(this.cart && this.cart.length > 0){
                let id = this.id 
                let cartIndex = this.cart.findIndex(cart => {
                    return cart.id == id
                })

                if(cartIndex == -1){
                    this.$store.dispatch('addToCart', product);
                    this.$toast("Ajouté au panier", {
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.$store.dispatch('updateCart', {
                        id, unit: 1, cart: this.cart, color: this.selectedColor, size: this.selectedSize
                    });
                    this.getExistPId = true
                    this.$toast.info("Déjà ajouté au panier avec mise à jour");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Ajouté au panier",{
                    icon: 'fas fa-cart-plus'
                });
            }
        },
        increaseQuantity(){
            if(this.quantity > this.product.stock){
                this.$toast.error("Vous ne pouvez pas ajouter plus de " + this.item.stock,{
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
    }
}
</script>