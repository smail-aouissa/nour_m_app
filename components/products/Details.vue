<template>
    <div class="col-lg-6 col-md-6">
        <div class="product-details-content">
            <h3>{{product.label}}</h3>

            <div class="price">
                <span class="new-price">
                    <span class="old-price" v-if="product.offerPrice >0">
                        {{product.price}}
                        <span class="new-price">{{product.offerPrice}}</span>
                    </span>
                    <span v-else >{{product.price}}</span> 
                    
                    <span style="font-size: 12px"> DZD</span>
                </span>
            </div>

            <div class="product-review">
                <div class="rating">
                    <i v-for="n in Math.floor(product.rating || 5)" class="fas fa-star"></i>
                </div>
                <div class="rating-count">Avis: {{ Math.floor(product.rating || 5) }} / 5</div>
            </div>

            <ul class="product-info">
                <li>
                    <span>Disponibilité:</span>
                    <a v-if="stock">
                        <span v-if="(+ stock) >=1 " style="color:green">en stock</span>
                        <span v-if="(+ stock) <1 " style="color:red">en rupture</span>
                        <!-- en stock ( {{ stock }} produits ) -->
                    </a>
                    <a v-else>Veuillez sélectionner la taille et la couleur</a>
                </li>
                <li>
                    <span>Type de produit:</span>
                    <a>{{ product.category ? product.category.label : '-' }}</a>
                </li>
            </ul>

            <div v-if="product.colors && product.colors.length > 0" class="product-color-switch">
                <h4>Couleurs:</h4>

                <ul>
                    <li v-for="(color, key) in product.colors" :key="key" @click="selectColor(color)" :class="{'active' : selectedColor && selectedColor.id === color.id }">
                        <a title="Couleur">
                            <span :style="`background-color: ${color.code}`"></span>
                        </a>
                    </li>
                </ul>
            </div>

            <div v-if="product.sizes && product.sizes.length > 0" class="product-size-wrapper">
                <h4>Taille:</h4>

                <ul>
                    <li v-for="(size, key) in product.sizes" @click="selectSize(size)" :key="key" :class="{'active': selectedSize && selectedSize === size }">
                        <a>{{size.label}}</a>
                    </li>
                </ul>
            </div>
            <div v-else style="height: 100px"></div>

            <div class="product-add-to-cart">
                <div class="input-counter">
                    <span @click="decreaseQuantity()" class="minus-btn"><i class="fas fa-minus"></i></span>
                    {{quantity}}
                    <span @click="increaseQuantity()" class="plus-btn"><i class="fas fa-plus"></i></span>
                </div>

                <button v-if="getExistPId"
                        :class="{'btn-disabled': cantBuy  }"
                        type="submit"
                        class="btn btn-danger"
                        @click="addToCart()">
                    <i class="fas fa-cart-plus"></i> Déja ajouté
                </button>

                <button v-else type="submit"
                        :class="{'btn-disabled': cantBuy }"
                        class="btn btn-primary"
                        @click="addToCart(product)">
                    <i class="fas fa-cart-plus"></i> Ajouter au panier
                </button>
            </div>

            <div class="wishlist-compare-btn">
                <a href="javascript:void(0)" class="btn btn-light" @click="addToWishlist(product)"><i class="far fa-heart"></i> Ajouter au favoris</a>
            </div>

            <div class="buy-checkbox-btn">
                <div class="item">
                    <a href="javascript:void(0)" @click="buyProduct" class="btn btn-primary">Achetez-le maintenant!</a>
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
            selectedSize: null,
            selectedVariation: null
        }
    },
    props: ['product'],
    computed: {
        cart(){
            return this.$store.getters.cart
        },
        wishlist(){
            return this.$store.getters.wishlist
        },
        stock(){
            if(this.selectedColor && this.selectedSize){
                this.selectedVariation = this.product.variations.find( p => p.color_product_id == this.selectedColor.id && p.product_size_id == this.selectedSize.id)
                return this.selectedVariation ? this.selectedVariation.quantity : 0;
            }
            else if(this.selectedColor && this.color_is_selected ){
                this.selectedVariation = this.product.variations.find( p => p.color_product_id == this.selectedColor.id)
                return this.selectedVariation ? this.selectedVariation.quantity : 0;
            }
            else if(this.selectedSize && this.size_is_selected){
                this.selectedVariation = this.product.variations.find( p => p.product_size_id == this.selectedSize.id)
                return this.selectedVariation ? this.selectedVariation.quantity : 0;
            }
            else if(!this.selectedColor && !this.selectedSize && this.product.variations && !this.product.variations[0]?.color_product_id && !this.product.variations[0]?.product_size_id  ){
                this.selectedVariation = this.product.variations[0];
                return this.selectedVariation ? this.selectedVariation.quantity : 0;
            }
            else{
                return 0;
            }
        },
        cantBuy(){
            return this.stock === 0 || (this.product.sizes && this.product.sizes.length > 0 && !this.selectedSize) || (this.product.colors && this.product.colors.length >0 && !this.selectedColor);
            // return this.stock === 0 && this.product.sizes && this.product.sizes.length > 0 && this.product.colors && this.product.colors.length > 0;
        }
    },
    methods: {
        size_is_selected(){
           
            if(this.product.sizes && this.product.sizes.length > 0 && !this.selectedSize){
           

                this.$toast.error("Vous devez d'abord sélectionner la taille ",{
                    icon: 'fas fa-exclamation-triangle'
                });
                return false;
            }
            return true;

        },
        color_is_selected(){
            
            if (this.product.colors && this.product.colors.length >0 && !this.selectedColor){
           
                this.$toast.error("Vous devez d'abord sélectionner la couleur",{
                    icon: 'fas fa-exclamation-triangle'
                });
                return false;

            }
            return true;

        },
        addToCart(){
            if(!this.color_is_selected() || !this.size_is_selected()){
                return
            }
            else if (this.stock <1){
                this.$toast.error("Rupture de stock",{
                    icon: 'fas fa-exclamation-triangle'
                });
                return;
            }

            if(this.product.offerPrice >0){
                var price=this.product.offerPrice;
            }else{
                var price=this.product.price;
            }
            const product = [{
                id: this.product.id,
                label: this.product.label,
                price: price,
                image: this.getImage(this.product.photos),
                quantity: this.quantity,
                color: this.selectedColor,
                size: this.selectedSize,
                category: this.product.category,
                stock: this.stock,
                variation: this.selectedVariation,
            }]

            if(this.cart && this.cart.length > 0){
                let id = this.id
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
                    this.getExistPId = true
                    this.$toast.info("Produit déjà ajouté au panier");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Ajouté au panier",{
                    icon: 'fas fa-cart-plus'
                });
            }
        },
        addToWishlist(item){
            let index = this.wishlist.findIndex(w => w.id == item.id)
            if(index == -1){
                this.$store.dispatch('addToWishlist', item);
                this.$toast("Produit ajouté au favoris", {
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.$toast.info("Produit déjà ajouté au favoris!");
            }

        },
        increaseQuantity(){
            if(!this.color_is_selected() || !this.size_is_selected()){
                return
            }
            if(this.stock === 0){
                this.$toast.error("Rupture de stock",{
                    icon: 'fas fa-cart-plus'
                });
            }
            else if((this.quantity >= this.stock) || (this.quantity>4)){
                this.$toast.error("Vous ne pouvez pas ajouter plus de produit",{
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
            this.quantity=1;
            //if(size.quantity) this.stock = size.quantity;
        },
        selectColor(color){
            this.selectedColor = color;
            this.quantity=1;
            //if(color.quantity) this.stock = color.quantity;
            if(color.photo) this.$emit('changed-photo',color.photo)
        },
        buyProduct(){
            if(!this.color_is_selected() || !this.size_is_selected()){
                return
            }
            else if (this.stock <1){
                this.$toast.error("Rupture de stock",{
                    icon: 'fas fa-exclamation-triangle'
                });
                return;
            }

            const product = [{
                id: this.product.id,
                label: this.product.label,
                price: this.product.price,
                image: this.getImage(this.product.photos),
                quantity: this.quantity,
                color: this.selectedColor,
                size: this.selectedSize,
                variation: this.selectedVariation,
            }]
            this.$store.dispatch('setProduct', product)
            this.$router.push('/checkout?product='+this.product.id)
        }
    }
}
</script>