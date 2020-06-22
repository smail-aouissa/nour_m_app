import Vue from "vue";

export const store = Vue.observable({
    isNavOpen: false,
    isQuickViewOpen: false,
    item : null
});

// We call toggleNav anywhere we need it in our app
export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    },
    toggleQuickView(item) {
        store.item = item
        store.isQuickViewOpen = !store.isQuickViewOpen
    },
};