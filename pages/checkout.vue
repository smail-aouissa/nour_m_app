<template>
    <div>
        <Checkout-one-item v-if="id"/>
        <CheckoutItems v-else />
    </div>
</template>

<script>
import CheckoutItems from '../components/cart/CheckoutItems';
import CheckoutOneItem from "~/components/cart/CheckoutOneItem";
export default {
    components: {
        CheckoutOneItem,
        CheckoutItems
    },
    data(){
        return {
            id: this.$route.query.product
        }
    }
}
</script>