(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{320:function(t,e,r){"use strict";r.r(e);r(62);var o=r(23),n={data:function(){return{personDetails:{fullName:"",address:"",email:"",phone:"",province:null,town:null},provinces:[],towns:[],ordered:!1}},computed:{cart:function(){return this.$store.getters.cart},total:function(){return this.$store.getters.totalAmount||0},cartTotal:function(){return console.log(this.$store.getters.totalAmount),console.log(this.personDetails.province&&this.personDetails.province.price||0),console.log(this.$store.getters.totalAmount+(this.personDetails.province&&this.personDetails.province.price||0)),this.$store.getters.totalAmount+(this.personDetails.province&&this.personDetails.province.price||0)}},mounted:function(){this.loadProvinces()},methods:{loadProvinces:function(){var t=this;this.$axios.$get("/provinces").then((function(e){t.provinces=e.provinces})).catch((function(t){console.log(t)}))},loadTowns:function(){var t=this;this.personDetails.province&&this.$axios.$get("/province/"+this.personDetails.province.id).then((function(e){t.towns=e.towns})).catch((function(t){console.log(t)}))},add:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.personDetails.fullName.length<4)){e.next=5;break}return t.$toast.error("Veuillez vérifier votre nom (4 caractère au minimum)."),e.abrupt("return");case 5:if(/^0(5|6|7)[0-9]{8}$/.test(t.personDetails.phone)){e.next=10;break}return t.$toast.error("Numéro de téléphone invalide."),e.abrupt("return");case 10:if(!(t.personDetails.address.length<4)){e.next=15;break}return t.$toast.error("Veuillez vérifier votre adresse (4 caractère au minimum)."),e.abrupt("return");case 15:if(!(t.personDetails.address.length<3)){e.next=20;break}return t.$toast.error("Veuillez vérifier votre wilaya (3 caractère au minimum)."),e.abrupt("return");case 20:if(t.personDetails.province){e.next=23;break}return t.$toast.error("Veuillez sélectionner votre wilaya"),e.abrupt("return");case 23:return r={details:t.personDetails,items:t.cart},e.next=26,t.passOrder(r);case 26:case"end":return e.stop()}}),e)})))()},passOrder:function(data){var t=this;1!=this.ordered&&(this.cart.length<1?this.$toast.error("votre panier est vide."):(this.ordered=!0,this.$axios.$post("/order",data).then((function(e){t.$toast.success("Votre commande a été envoyée avec succés.",{icon:"fas fa-cart-plus"}),t.$store.dispatch("cartEmpty"),t.$router.push("/")})).catch((function(e){t.$toast.error("Erreur lors de la creation de la commande.")}))))}}},l=r(11),c=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-title-area"},[r("div",{staticClass:"container"},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("Accueil")])],1),t._v(" "),r("li",[t._v("Check-out")])])])]),t._v(" "),r("section",{staticClass:"checkout-area ptb-60"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("form",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 col-md-12"},[r("div",{staticClass:"billing-details"},[r("h3",{staticClass:"title"},[t._v("Détails de la facturation")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 col-md-6"},[r("div",{staticClass:"form-group"},[t._m(1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.fullName,expression:"personDetails.fullName"}],staticClass:"form-control",attrs:{type:"text",id:"fullName"},domProps:{value:t.personDetails.fullName},on:{input:function(e){e.target.composing||t.$set(t.personDetails,"fullName",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"form-group"},[t._m(2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.phone,expression:"personDetails.phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone"},domProps:{value:t.personDetails.phone},on:{input:function(e){e.target.composing||t.$set(t.personDetails,"phone",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Addresse Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.email,expression:"personDetails.email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.personDetails.email},on:{input:function(e){e.target.composing||t.$set(t.personDetails,"email",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-12 col-md-6"},[r("div",{staticClass:"form-group"},[t._m(3),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.address,expression:"personDetails.address"}],staticClass:"form-control",attrs:{type:"text",id:"address"},domProps:{value:t.personDetails.address},on:{input:function(e){e.target.composing||t.$set(t.personDetails,"address",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-12 col-md-6"},[r("div",{staticClass:"form-group"},[t._m(4),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.province,expression:"personDetails.province"}],staticClass:"form-control",attrs:{type:"text",id:"province"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.personDetails,"province",e.target.multiple?r:r[0])},t.loadTowns]}},[r("option",{attrs:{selected:""},domProps:{value:null}},[t._v("Sélécionner une wilaya")]),t._v(" "),t._l(t.provinces,(function(p,e){return r("option",{key:e,domProps:{value:p}},[t._v("\n                                                    "+t._s(p.name)+"\n                                                ")])}))],2)])]),t._v(" "),t.towns.length?r("div",{staticClass:"col-lg-12 col-md-6"},[r("div",{staticClass:"form-group"},[t._m(5),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.town,expression:"personDetails.town"}],staticClass:"form-control",attrs:{type:"text",id:"town"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.personDetails,"town",e.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:""},domProps:{value:null}},[t._v("Sélécionner une ville")]),t._v(" "),t._l(t.towns,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v("\n                                                    "+t._s(e.name)+"\n                                                ")])}))],2)])]):t._e()])])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-12"},[r("div",{staticClass:"order-details"},[r("h3",{staticClass:"title"},[t._v("Votre commande")]),t._v(" "),r("div",{staticClass:"order-table table-responsive"},[r("table",{staticClass:"table table-bordered"},[t._m(6),t._v(" "),r("tbody",[t._l(t.cart,(function(e,i){return r("tr",{key:i},[r("td",{staticClass:"product-name"},[r("a",{attrs:{href:"#"}},[t._v(t._s(e.label))])]),t._v(" "),r("td",{staticClass:"product-total"},[r("span",{staticClass:"subtotal-amount"},[t._v("\n                                                        "+t._s(e.price*e.quantity)+"\n                                                        "),r("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])])])])})),t._v(" "),r("tr",[t._m(7),t._v(" "),r("td",{staticClass:"order-subtotal-price"},[r("span",{staticClass:"order-subtotal-amount"},[t._v("\n                                                        "+t._s(parseFloat(t.total).toFixed(2))+"\n                                                        "),r("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])])])]),t._v(" "),r("tr",[t._m(8),t._v(" "),r("td",{staticClass:"shipping-price"},[t.personDetails.province?r("span",[t._v(t._s((t.personDetails.province.price||0).toFixed(2))+" "),r("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])]):r("span",[t._v("0.00 "),r("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])])])]),t._v(" "),r("tr",[t._m(9),t._v(" "),r("td",{staticClass:"product-subtotal"},[r("span",{staticClass:"subtotal-amount"},[t._v("\n                                                        "+t._s(parseFloat(t.cartTotal+0).toFixed(2))+"\n                                                        "),r("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])])])])],2)])]),t._v(" "),t._m(10),t._v(" "),r("a",{staticClass:"btn btn-primary order-btn",class:{"btn-disabled":t.ordered},attrs:{href:"javascript:void(0)"},on:{click:t.add}},[t._v("Passer la commande")])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"user-actions"},[e("i",{staticClass:"fas fa-info"}),this._v(" "),e("span",{staticClass:"mx-2"},[this._v("Veuillez vérifier vos données avant de passer la commande")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Nom Complet "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Téléphone "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Adresse "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Wilaya "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Ville "),e("span",{staticClass:"required"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("Produit")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Total")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"order-subtotal"},[e("span",[this._v("Sous-total")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"order-shipping"},[e("span",[this._v("Livraison")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"total-price"},[e("span",[this._v("Total de la commande")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"payment-method"},[r("p",[r("input",{attrs:{type:"radio",id:"eddahabia",name:"radio-group",disabled:""}}),t._v(" "),r("label",{attrs:{for:"eddahabia"}},[r("span",[t._v("Carte Eddahabia")])])]),t._v(" "),r("p",[r("input",{attrs:{type:"radio",id:"cib",name:"radio-group",disabled:""}}),t._v(" "),r("label",{attrs:{for:"cib"}},[r("span",[t._v("Carte CIB")])])]),t._v(" "),r("p",[r("input",{attrs:{type:"radio",id:"cash-on-delivery",name:"radio-group",checked:""}}),t._v(" "),r("label",{attrs:{for:"cash-on-delivery"}},[t._v("En espèces (Cash)")])])])}],!1,null,null,null).exports,v={name:"checkout-one-item",data:function(){return{personDetails:{fullName:"",address:"",email:"",phone:"",province:null,town:null},provinces:[],towns:[],ordered:!1}},computed:{product:function(){return this.$store.getters.productCheckout}},mounted:function(){this.loadProvinces()},methods:{loadProvinces:function(){var t=this;this.$axios.$get("/provinces").then((function(e){t.provinces=e.provinces})).catch((function(t){console.log(t)}))},loadTowns:function(){var t=this;this.personDetails.province&&this.$axios.$get("/province/"+this.personDetails.province.id).then((function(e){t.towns=e.towns})).catch((function(t){console.log(t)}))},add:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.personDetails.fullName.length<4)){e.next=5;break}return t.$toast.error("Veuillez vérifier votre nom (4 caractère au minimum)."),e.abrupt("return");case 5:if(/^0(5|6|7)[0-9]{8}$/.test(t.personDetails.phone)){e.next=10;break}return t.$toast.error("Numéro de téléphone invalide."),e.abrupt("return");case 10:if(!(t.personDetails.address.length<4)){e.next=15;break}return t.$toast.error("Veuillez vérifier votre adresse (4 caractère au minimum)."),e.abrupt("return");case 15:if(!(t.personDetails.address.length<3)){e.next=20;break}return t.$toast.error("Veuillez vérifier votre wilaya (3 caractère au minimum)."),e.abrupt("return");case 20:if(t.personDetails.province){e.next=23;break}return t.$toast.error("Veuillez sélectionner votre wilaya"),e.abrupt("return");case 23:return r={details:t.personDetails,items:t.product},e.next=26,t.passOrder(r);case 26:case"end":return e.stop()}}),e)})))()},passOrder:function(data){var t=this;this.product?1!=this.ordered&&(this.ordered=!0,this.$axios.$post("/order",data).then((function(e){t.$toast.success("Votre commande a été envoyée avec succés.",{icon:"fas fa-cart-plus"}),t.$store.dispatch("cartEmpty"),t.$router.push("/")})).catch((function(e){t.$toast.error("Erreur lors de la creation de la commande.")}))):this.$toast.error("pas de produit séléctioné.")}}},d={components:{CheckoutOneItem:Object(l.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-title-area"},[r("div",{staticClass:"container"},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("Accueil")])],1),t._v(" "),r("li",[t._v("Check-out")])])])]),t._v(" "),r("section",{staticClass:"checkout-area ptb-60"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("form",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 col-md-12"},[r("div",{staticClass:"billing-details"},[r("h3",{staticClass:"title"},[t._v("Détails de la facturation")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 col-md-6"},[r("div",{staticClass:"form-group"},[t._m(1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.fullName,expression:"personDetails.fullName"}],staticClass:"form-control",attrs:{type:"text",id:"fullName"},domProps:{value:t.personDetails.fullName},on:{input:function(e){e.target.composing||t.$set(t.personDetails,"fullName",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"form-group"},[t._m(2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.phone,expression:"personDetails.phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone"},domProps:{value:t.personDetails.phone},on:{input:function(e){e.target.composing||t.$set(t.personDetails,"phone",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Addresse Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.email,expression:"personDetails.email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.personDetails.email},on:{input:function(e){e.target.composing||t.$set(t.personDetails,"email",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-12 col-md-6"},[r("div",{staticClass:"form-group"},[t._m(3),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.address,expression:"personDetails.address"}],staticClass:"form-control",attrs:{type:"text",id:"address"},domProps:{value:t.personDetails.address},on:{input:function(e){e.target.composing||t.$set(t.personDetails,"address",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-lg-12 col-md-6"},[r("div",{staticClass:"form-group"},[t._m(4),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.province,expression:"personDetails.province"}],staticClass:"form-control",attrs:{type:"text",id:"province"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.personDetails,"province",e.target.multiple?r:r[0])},t.loadTowns]}},[r("option",{attrs:{selected:""},domProps:{value:null}},[t._v("Sélécionner une wilaya")]),t._v(" "),t._l(t.provinces,(function(p,e){return r("option",{key:e,domProps:{value:p}},[t._v("\n                                                    "+t._s(p.name)+"\n                                                ")])}))],2)])]),t._v(" "),t.towns.length?r("div",{staticClass:"col-lg-12 col-md-6"},[r("div",{staticClass:"form-group"},[t._m(5),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.personDetails.town,expression:"personDetails.town"}],staticClass:"form-control",attrs:{type:"text",id:"town"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.personDetails,"town",e.target.multiple?r:r[0])}}},[r("option",{attrs:{selected:""},domProps:{value:null}},[t._v("Sélécionner une ville")]),t._v(" "),t._l(t.towns,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v("\n                                                    "+t._s(e.name)+"\n                                                ")])}))],2)])]):t._e()])])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-12"},[r("div",{staticClass:"order-details"},[r("h3",{staticClass:"title"},[t._v("Votre commande")]),t._v(" "),r("div",{staticClass:"order-table table-responsive"},[t.product&&t.product.length?r("table",{staticClass:"table table-bordered"},[t._m(6),t._v(" "),r("tbody",[r("tr",[r("td",{staticClass:"product-name"},[r("a",{attrs:{href:"#"}},[t._v(t._s(t.product[0].label))])]),t._v(" "),r("td",{staticClass:"product-total"},[r("span",{staticClass:"subtotal-amount"},[t._v("\n                                                        "+t._s(t.product[0].price*t.product[0].quantity)+"\n                                                        "),r("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])])])]),t._v(" "),r("tr",[t._m(7),t._v(" "),r("td",{staticClass:"order-subtotal-price"},[r("span",{staticClass:"order-subtotal-amount"},[t._v("\n                                                        "+t._s((t.product[0].price*t.product[0].quantity).toFixed(2))+"\n                                                        "),r("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])])])]),t._v(" "),r("tr",[t._m(8),t._v(" "),r("td",{staticClass:"shipping-price"},[t.personDetails.province?r("span",[t._v(t._s((t.personDetails.province.price||0).toFixed(2))+" "),r("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])]):r("span",[t._v("0.00 "),r("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])])])]),t._v(" "),r("tr",[t._m(9),t._v(" "),r("td",{staticClass:"product-subtotal"},[r("span",{staticClass:"subtotal-amount"},[t._v("\n                                                        "+t._s((t.product[0].price*t.product[0].quantity+(t.personDetails.province&&t.personDetails.province.price||0)).toFixed(2))+"\n                                                        "),r("span",{staticStyle:{"font-size":"11px"}},[t._v(" DZD")])])])])])]):t._e()]),t._v(" "),t._m(10),t._v(" "),r("a",{staticClass:"btn btn-primary order-btn",attrs:{href:"javascript:void(0)"},on:{click:t.add}},[t._v("Passer la commande")])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"user-actions"},[e("i",{staticClass:"fas fa-info"}),this._v(" "),e("span",{staticClass:"mx-2"},[this._v("Veuillez vérifier vos données avant de passer la commande")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Nom Complet "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Téléphone "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Adresse "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Wilaya "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("Ville "),e("span",{staticClass:"required"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("Produit")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("Total")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"order-subtotal"},[e("span",[this._v("Sous-total")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"order-shipping"},[e("span",[this._v("Livraison")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticClass:"total-price"},[e("span",[this._v("Total de la commande")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"payment-method"},[r("p",[r("input",{attrs:{type:"radio",id:"eddahabia",name:"radio-group",disabled:""}}),t._v(" "),r("label",{attrs:{for:"eddahabia"}},[r("span",[t._v("Carte Eddahabia")])])]),t._v(" "),r("p",[r("input",{attrs:{type:"radio",id:"cib",name:"radio-group",disabled:""}}),t._v(" "),r("label",{attrs:{for:"cib"}},[r("span",[t._v("Carte CIB")])])]),t._v(" "),r("p",[r("input",{attrs:{type:"radio",id:"cash-on-delivery",name:"radio-group",checked:""}}),t._v(" "),r("label",{attrs:{for:"cash-on-delivery"}},[t._v("En espèces (Cash)")])])])}],!1,null,null,null).exports,CheckoutItems:c},data:function(){return{id:this.$route.query.product}}},m=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.id?e("Checkout-one-item"):e("CheckoutItems")],1)}),[],!1,null,null,null);e.default=m.exports}}]);