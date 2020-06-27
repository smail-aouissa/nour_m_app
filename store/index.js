// import axios from '@nuxtjs/axios';
import cookies from 'cookie-universal-nuxt';

const state = () => ( {
    cart: [],
    totalAmount: 0,
    totalQuantity: 0,
    orders: [],
    wishlist: [],
    productCheckout: null
});

export const totals = (paylodArr) => {
    const totalAmount = paylodArr.map(cartArr => {
        return cartArr.price * cartArr.quantity
    }).reduce((a, b) => a + b, 0);

    const totalQuantity = paylodArr.map(cartArr => {
        return cartArr.quantity;
    }).reduce((a, b) => a + b, 0);

    return {
        amount: totalAmount.toFixed(2),
        qty: totalQuantity
    }
};
const mutations = {
    'INIT_STORE'(state, payload){
        state.cart = this.$cookies.get('cart') || [];
        state.totalAmount = this.$cookies.get('totalAmount') || 0;
        state.totalQuantity = this.$cookies.get('totalQuantity') || 0;
        state.wishlist = this.$cookies.get('wishlist') || [];
    },
    'GET_ORDER'(state, payload){
        state.orders = payload
    },
    'GET_CART'(state, payload){
        state.cart = payload
        state.totalAmount = totals(payload).amount
        state.totalQuantity = totals(payload).qty
    },
    'ADD_TO_CART'(state, payload){
        state.cart = [...state.cart, ...payload]
        state.totalAmount = totals(state.cart).amount
        state.totalQuantity = totals(state.cart).qty

        this.$cookies.set('cart', state.cart);
        this.$cookies.set('totalAmount', state.totalAmount);
        this.$cookies.set('totalQuantity', state.totalQuantity);
    },
    'DELETE_CART'(state, id){
        const currentCartToDelete = state.cart
        const indexToDelete = currentCartToDelete.findIndex(cart => {
            return cart.id == id
        })

        state.cart = [...currentCartToDelete.slice(0, indexToDelete), ...currentCartToDelete.slice(indexToDelete + 1)]
        state.totalAmount = totals(state.cart).amount
        state.totalQuantity = totals(state.cart).qty

        this.$cookies.set('cart', state.cart);
        this.$cookies.set('totalAmount', state.totalAmount);
        this.$cookies.set('totalQuantity', state.totalQuantity);
    },
    'UPDATE_CART'(state, payload){
        state.cart = payload

        state.totalAmount = totals(payload).amount
        state.totalQuantity = totals(payload).qty

        this.$cookies.set('cart', state.cart);
        this.$cookies.set('totalAmount', state.totalAmount);
        this.$cookies.set('totalQuantity', state.totalQuantity);
    }, 
    'CART_EMPTY'(state){
        state.cart = []
        state.totalAmount = 0
        state.totalQuantity = 0

        this.$cookies.set('cart', state.cart);
        this.$cookies.set('totalAmount', state.totalAmount);
        this.$cookies.set('totalQuantity', state.totalQuantity);
    },

    // WISHLIST
    'ADD_TO_WISHLIST'(state, payload){
        state.wishlist = [...state.wishlist, payload]
        this.$cookies.set('wishlist', state.wishlist);
    },
    'DELETE_WISHLIST'(state, id){
        const currentWishlistToDelete = state.wishlist
        const indexToDelete = currentWishlistToDelete.findIndex(w => {
            return w.id == id
        })

        state.wishlist = [...currentWishlistToDelete.slice(0, indexToDelete), ...currentWishlistToDelete.slice(indexToDelete + 1)]
        this.$cookies.set('wishlist', state.wishlist);
    },

    // PRODUCT
    'SET_PRODUCT'(state, payload){
        state.productCheckout = payload
    },
};

const actions = {
    // getOrder({commit}){
    //     axios.get('c').then(res => {
    //         if(res.data == 'no data'){
    //             return []
    //         }
    //         commit('GET_ORDER', res.data)
    //     })
    // },

    initStore({commit}) {
        commit('INIT_STORE', []);
    },

    // Cart

    addToCart({ commit }, payload){
        commit('ADD_TO_CART', payload)
    },

    deleteCart({ commit }, id){
        commit('DELETE_CART', id)
    },

    updateCart({ commit }, payload){
        const currentCartToUpdate = payload.cart
        const indexToUpdate = currentCartToUpdate.findIndex(cart => {
            return cart.id == payload.id
        })

        const newCart = {
            ...currentCartToUpdate[indexToUpdate],
            quantity: currentCartToUpdate[indexToUpdate].quantity + payload.unit
        }

        const cartUpdate = [...currentCartToUpdate.slice(0, indexToUpdate), newCart, ...currentCartToUpdate.slice(indexToUpdate + 1)]
        commit('UPDATE_CART', cartUpdate)
    }, 
    cartEmpty({commit}){
        commit('CART_EMPTY')
    },

    // Wishlist

    addToWishlist({ commit }, payload){
        commit('ADD_TO_WISHLIST', payload)
    },

    deleteWishlist({ commit }, id){
        commit('DELETE_WISHLIST', id)
    },

    // Product
    setProduct({ commit }, product){
        commit('SET_PRODUCT', product)
    },
};

const getters = {
    cart(state){
        return state.cart
    },
    totalAmount(state){
        return state.totalAmount
    },
    totalQuantity(state){
        return state.totalQuantity
    },
    getOrders(state){
        return state.orders
    },
    wishlist(state){
        return state.wishlist
    },
    productCheckout(state){
        return state.productCheckout
    }
};

export default{
    state, mutations, actions, getters
};