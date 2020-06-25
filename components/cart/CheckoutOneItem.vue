<template>
    <div>
        <!-- Start Page Title Area -->
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Accueil</nuxt-link></li>
                    <li>Check-out</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->

        <!-- Start Checkout Area -->
		<section class="checkout-area ptb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="user-actions">
                            <i class="fas fa-info"></i>
                            <span class="mx-2">Veuillez vérifier vos données avant de passer la commande</span>
                        </div>
                    </div>
                </div>

                <form>
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="billing-details">
                                <h3 class="title">Détails de la facturation</h3>

                                <div class="row">
                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>Nom Complet <span class="required">*</span></label>
                                            <input type="text" id="fullName" v-model="personDetails.fullName" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Téléphone <span class="required">*</span></label>
                                            <input type="text" id="phone" v-model="personDetails.phone" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <label>Addresse Email</label>
                                            <input type="email" id="email" v-model="personDetails.email" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>Adresse <span class="required">*</span></label>
                                            <input type="text" id="address" v-model="personDetails.address" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>Wilaya <span class="required">*</span></label>
                                            <select @change="loadTowns" type="text" id="province" v-model="personDetails.province" class="form-control">
                                                <option selected :value="null">Sélécionner une wilaya</option>
                                                <option v-for="(p , key) in provinces" :key="key" :value="p">
                                                    {{p.name}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div v-if="towns.length " class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <label>Ville <span class="required"></span></label>
                                            <select type="text" id="town" v-model="personDetails.town" class="form-control">
                                                <option selected :value="null">Sélécionner une ville</option>
                                                <option v-for="(t , key) in towns" :key="key" :value="t">
                                                    {{t.name}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12">
                            <div class="order-details">
                                <h3 class="title">Votre commande</h3>

                                <div class="order-table table-responsive">
                                    <table v-if="product && product.length" class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Produit</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr>
                                                <td class="product-name">
                                                    <a href="#">{{product[0].label}}</a>
                                                </td>

                                                <td class="product-total">
                                                    <span class="subtotal-amount">
                                                        {{product[0].price * product[0].quantity}}
                                                        <span style="font-size: 11px"> DZD</span>
                                                    </span>
                                                </td>
                                            </tr>
                                            
                                            <tr>
                                                <td class="order-subtotal">
                                                    <span>Sous-total</span>
                                                </td>

                                                <td class="order-subtotal-price">
                                                    <span class="order-subtotal-amount">
                                                        {{(product[0].price * product[0].quantity).toFixed(2)}}
                                                        <span style="font-size: 11px"> DZD</span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="order-shipping">
                                                    <span>Livraison</span>
                                                </td>

                                                <td class="shipping-price">
                                                    <span v-if="personDetails.province">{{ (personDetails.province.price || 0.00).toFixed(2) }} <span style="font-size: 11px"> DZD</span></span>
                                                    <span v-else>0.00 <span style="font-size: 11px"> DZD</span></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="total-price">
                                                    <span>Total de la commande</span>
                                                </td>

                                                <td class="product-subtotal">
                                                    <span class="subtotal-amount">
                                                        {{( (product[0].price * product[0].quantity) +
                                                        (personDetails.province ? (personDetails.province.price || 0) : 0)).toFixed(2)}}
                                                        <span style="font-size: 11px"> DZD</span>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="payment-method">
                                    <p>
                                        <input type="radio" id="eddahabia" name="radio-group" disabled>
                                        <label for="eddahabia">
                                            <span>Carte Eddahabia</span>
                                        </label>
                                    </p>
                                    <p>
                                        <input type="radio" id="cib" name="radio-group" disabled>
                                        <label for="cib">
                                            <span>Carte CIB</span>
                                        </label>
                                    </p>
                                    <p>
                                        <input type="radio" id="cash-on-delivery" name="radio-group" checked>
                                        <label for="cash-on-delivery">En espèces (Cash)</label>
                                    </p>
                                </div>

                                <a href="javascript:void(0)" @click="add" class="btn btn-primary order-btn">Passer la commande</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
		<!-- End Checkout Area -->
    </div>
</template>

<script>
export default {
    name: 'checkout-one-item',
    data(){
        return{
            personDetails: {
                fullName: '',
                address: '',
                email: '',
                phone: '',
                province: null,
                town: null,
            },
            provinces: [],
            towns: [],
        }
    },
    computed:{
        product(){
            return this.$store.getters.productCheckout;
        }
    },
    mounted() {
        this.loadProvinces();
    },
    methods: {
        loadProvinces(){
            this.$axios.$get('/provinces').then(response => {
                this.provinces = response.provinces;
            }).catch(error => {
                console.log(error)
            })
        },
        loadTowns(){
            if(this.personDetails.province)
                this.$axios.$get('/province/'+this.personDetails.province.id).then(response => {
                    this.towns = response.towns;
                }).catch(error => {
                    console.log(error)
                })
        },
        async add(){
            if(this.personDetails.fullName.length < 4){
                this.$toast.error(`Veuillez vérifier votre nom (4 caractère au minimum).`);
                return;
            }else if( !/^0(5|6|7)[0-9]{8}$/.test( this.personDetails.phone) ){
                this.$toast.error(`Numéro de téléphone invalide.`);
                return ;
            } else if( this.personDetails.address.length < 4 ){
                this.$toast.error(`Veuillez vérifier votre adresse (4 caractère au minimum).`);
                return ;
            } else if( this.personDetails.address.length < 3 ){
                this.$toast.error(`Veuillez vérifier votre wilaya (3 caractère au minimum).`);
                return ;
            }else if( !this.personDetails.province ){
                this.$toast.error(`Veuillez sélectionner votre wilaya`);
                return ;
            }

            const cartData = {
                details: this.personDetails,
                items: this.product
            }
            await this.passOrder(cartData);
        },

        passOrder(data){
            this.$axios.$post('/order', data).then(response => {
                this.$toast.success(`Votre commande a été envoyée avec succés.`, {
                    icon: 'fas fa-cart-plus'
                });
                this.$store.dispatch('cartEmpty')
                this.$router.push("/");
            }).catch((error) => {
                this.$toast.error(`Erreur lors de la creation de la commande.`);
            })
        }
    }
}
</script>