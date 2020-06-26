(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{362:function(t,e,n){"use strict";n.r(e);var r={computed:{cart:function(){return this.$store.getters.cart},cartTotal:function(){return this.$store.getters.totalAmount}},methods:{removeItemFromCart:function(t){this.$store.dispatch("deleteCart",t)},onIncrement:function(t){this.$store.dispatch("updateCart",{id:t,unit:1,cart:this.cart})},onDecrement:function(t,e){e>1?this.$store.dispatch("updateCart",{id:t,unit:-1,cart:this.cart}):(this.removeItemFromCart(t),this.$toast.warning("Item deleted!"))}}},c=n(12),l={components:{CartItems:Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cart-area ptb-60"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 col-md-12"},[n("form",[n("div",{staticClass:"cart-table table-responsive"},[n("table",{staticClass:"table table-bordered"},[t._m(0),t._v(" "),t.cart&&t.cart.length>0?n("tbody",t._l(t.cart,(function(e,i){return n("tr",{key:i},[n("td",{staticClass:"product-thumbnail"},[n("nuxt-link",{attrs:{to:"/product#"+e.id}},[n("img",{attrs:{src:e.image,alt:"image de produit"}})])],1),t._v(" "),n("td",{staticClass:"product-name"},[n("nuxt-link",{attrs:{to:"/product#"+e.id}},[t._v("\n                                                    "+t._s(e.label)+"\n                                                ")]),t._v(" "),n("ul",[e.color&&e.color.code?n("li",{staticClass:"d-flex align-items-center"},[t._v("\n                                                        Couleur:\n                                                        "),n("span",{staticClass:"mx-2",style:"background-color: "+e.color.code+";height: 12px;width: 12px;border-radius: 30px;"})]):t._e(),t._v(" "),e.size&&e.size.label?n("li",[t._v("Taille:"),n("strong",[t._v(t._s(e.size.label))])]):t._e(),t._v(" "),n("li",[t._v("Catégorie: "),n("strong",[t._v(t._s(e.category?e.category.label:"Non défini"))])])])],1),t._v(" "),n("td",{staticClass:"product-price"},[n("span",{staticClass:"unit-amount"},[t._v(t._s(e.price)+"\n                                                    "),n("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])])]),t._v(" "),n("td",{staticClass:"product-quantity"},[n("div",{staticClass:"input-counter"},[n("span",{staticClass:"minus-btn",on:{click:function(n){return t.onDecrement(e.id,e.quantity)}}},[n("i",{staticClass:"fas fa-minus"})]),t._v("\n                                                    "+t._s(e.quantity)+"\n                                                    "),n("span",{staticClass:"plus-btn",on:{click:function(n){return t.onIncrement(e.id)}}},[n("i",{staticClass:"fas fa-plus"})])])]),t._v(" "),n("td",{staticClass:"product-subtotal"},[n("span",{staticClass:"subtotal-amount"},[t._v(t._s(e.price*e.quantity)+"\n                                                    "),n("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])]),t._v(" "),n("a",{staticClass:"remove",attrs:{href:"javascript:void(0)"},on:{click:function(n){return t.removeItemFromCart(e.id)}}},[n("i",{staticClass:"far fa-trash-alt"})])])])})),0):t._e()])]),t._v(" "),n("div",{staticClass:"cart-buttons"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-7 col-md-7"},[n("div",{staticClass:"continue-shopping-box"},[n("nuxt-link",{staticClass:"btn btn-light",attrs:{to:"/"}},[t._v("Continuer vos achats")])],1)]),t._v(" "),n("div",{staticClass:"col-lg-5 col-md-5 text-right"},[n("div",{staticClass:"cart-totals"},[n("h3",[t._v("Total du panier")]),t._v(" "),n("ul",[n("li",[t._v("Sous-total "),n("span",[t._v(t._s(parseFloat(t.cartTotal).toFixed(2))+" "),n("span",[t._v(" DZD")])])]),t._v(" "),t._m(1),t._v(" "),n("li",[t._v("Total "),n("span",[n("b",[t._v(t._s(parseFloat(t.cartTotal+0).toFixed(2)))]),t._v(" "),n("span",[t._v(" DZD")])])])]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-light",attrs:{to:"/checkout"}},[t._v("Passer à la caisse")])],1)])])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Produit")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Nom")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Prix d'unité")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Quantité")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Total")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Livraison "),e("span",[this._v("Prochaine étape")])])}],!1,null,null,null).exports}},o=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"page-title-area"},[e("div",{staticClass:"container"},[e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/"}},[this._v("Accueil")])],1),this._v(" "),e("li",[this._v("Panier")])])])]),this._v(" "),e("CartItems")],1)}),[],!1,null,null,null);e.default=o.exports}}]);