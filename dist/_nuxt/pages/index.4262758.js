(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{300:function(t,e,o){var content=o(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("10cf1702",content,!0,{sourceMap:!1})},301:function(t,e,o){var content=o(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("15333cd7",content,!0,{sourceMap:!1})},302:function(t,e,o){t.exports=o.p+"img/category-no-image.8ea774c.jpg"},303:function(t,e,o){"use strict";var c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pre-loader"},[e("img",{attrs:{src:o(168),alt:"Loading"}})])}],l={name:"loader"},r=(o(308),o(12)),component=Object(r.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),c,!1,null,"1c009466",null);e.a=component.exports},304:function(t,e,o){"use strict";o(167);var c=o(54),l={name:"QuckView",data:function(){return{quantity:1,stock:1,selectedColor:null,selectedSize:null,product:null}},methods:{closeQuickView:function(){this.quantity=1,this.selectedColor=null,this.selectedSize=null,c.a.toggleQuickView()},addToCart:function(t){var e=this,o=[{id:t.id,label:t.label,price:t.price-(t.offerPrice||0),image:this.getImage(t.photos),quantity:this.quantity,color:this.selectedColor,size:this.selectedSize}];if(this.cart.length>0){var c=t.id;this.getExistPId=c,-1==this.cart.findIndex((function(t){return t.id==c&&t.color&&t.color.id==e.selectedColor.id&&t.size&&t.size.id==e.selectedSize.id}))?(this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au panier")}else this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"});this.closeQuickView()},increaseQuantity:function(){this.quantity>=this.stock?this.$toast.error("Vous ne pouvez pas ajouter plus de "+this.item.stock,{icon:"fas fa-cart-plus"}):this.quantity++},decreaseQuantity:function(){this.quantity<2?this.$toast.error("Vous ne pouvez pas ajouter moins de 1",{icon:"fas fa-cart-plus"}):this.quantity--},getImage:function(t){return Array.isArray(t)&&t.hasOwnProperty(0)?t[0].full:null},selectSize:function(t){this.selectedSize=t,t.quantity&&(this.stock=t.quantity)},selectColor:function(t){this.selectedColor=t,t.quantity&&(this.stock=t.quantity)},showProduct:function(){this.closeQuickView(),this.$router.push("/product/".concat(this.item.id))}},computed:{isQuickViewOpen:function(){return c.b.isQuickViewOpen},cart:function(){return this.$store.getters.cart},item:function(){var t;return(null===(t=c.b.item)||void 0===t?void 0:t.colors)&&(this.stock=c.b.item.colors.reduce((function(a,b){return a+(b.quantity||0)}),0)),c.b.item}}},r=(o(306),o(12)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t.isQuickViewOpen?c("div",{staticClass:"modal-backdrop"}):t._e(),t._v(" "),c("transition",{attrs:{name:"slide-fade"}},[t.isQuickViewOpen&&t.item?c("div",{staticClass:"modal fade productQuickView",attrs:{id:"productQuickView",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[c("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[c("div",{staticClass:"modal-content"},[c("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeQuickView}},[c("span",{attrs:{"aria-hidden":"true"}},[c("i",{staticClass:"fas fa-times"})])]),t._v(" "),c("div",{staticClass:"row align-items-center"},[c("div",{staticClass:"col-lg-6 col-md-6"},[c("div",{staticClass:"productQuickView-image"},[t.getImage(t.item.photos)?c("img",{attrs:{src:t.getImage(t.item.photos),alt:"image"}}):c("img",{attrs:{src:o(302),alt:"image"}})])]),t._v(" "),c("div",{staticClass:"col-lg-6 col-md-6"},[c("div",{staticClass:"product-content"},[c("h3",[c("a",{attrs:{href:"#"}},[t._v(t._s(t.item.label))])]),t._v(" "),c("div",{staticClass:"price"},[c("span",[t._v(t._s(t.item.price-(t.item.offerPrice||0))+" DZD")])]),t._v(" "),c("div",{staticClass:"product-review"},[c("div",{staticClass:"rating"},t._l(Math.floor(t.item.rating||5),(function(t){return c("i",{staticClass:"fas fa-star"})})),0),t._v(" "),c("a",{staticClass:"rating-count"},[t._v("Avis: "+t._s(Math.floor(t.item.rating||5))+" / 5")])]),t._v(" "),c("ul",{staticClass:"product-info"},[c("li",[c("span",[t._v("Disponibilité:")]),t._v(" "),c("a",[t._v("en stock ("+t._s(t.stock||1)+" produits)")])]),t._v(" "),c("li",[c("span",[t._v("Type de produit:")]),t._v(" "),c("a",[t._v(t._s(t.item.category?t.item.category.label:"-"))])])]),t._v(" "),t.item.colors.length?c("div",{staticClass:"product-color-switch"},[c("h4",[t._v("Couleurs:")]),t._v(" "),c("ul",t._l(t.item.colors,(function(e,o){return c("li",{key:o,class:{active:t.selectedColor&&t.selectedColor.id===e.id},on:{click:function(o){return t.selectColor(e)}}},[c("a",{attrs:{title:"Couleur"}},[c("span",{style:"background-color: "+e.code})])])})),0)]):c("div",{staticStyle:{height:"60px"}}),t._v(" "),t.item.sizes.length?c("div",{staticClass:"product-size-wrapper"},[c("h4",[t._v("Taille:")]),t._v(" "),c("ul",t._l(t.item.sizes,(function(e,o){return c("li",{key:o,class:{active:t.selectedSize&&t.selectedSize.id===e.id},on:{click:function(o){return t.selectSize(e)}}},[c("a",[t._v(t._s(e.label))])])})),0)]):c("div",{staticStyle:{height:"60px"}}),t._v(" "),c("div",{staticClass:"product-add-to-cart"},[c("div",{staticClass:"input-counter"},[c("span",{staticClass:"minus-btn",on:{click:function(e){return t.decreaseQuantity()}}},[c("i",{staticClass:"fas fa-minus"})]),t._v("\n                                            "+t._s(t.quantity)+"\n                                        "),c("span",{staticClass:"plus-btn",on:{click:function(e){return t.increaseQuantity()}}},[c("i",{staticClass:"fas fa-plus"})])]),t._v(" "),c("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.addToCart(t.item)}}},[c("i",{staticClass:"fas fa-cart-plus"}),t._v(" Ajouter au panier\n                                    ")])]),t._v(" "),c("a",{staticClass:"view-full-info",attrs:{href:"javascript:void(0)"},on:{click:t.showProduct}},[t._v("Afficher toutes les informations")])])])])])])]):t._e()])],1)}),[],!1,null,"1aa91fd7",null);e.a=component.exports},305:function(t,e,o){"use strict";o(167);var c={name:"ProductItem",data:function(){return{getExistPId:null}},props:["product","className"],computed:{cart:function(){return this.$store.getters.cart},wishlist:function(){return this.$store.getters.wishlist}},methods:{quickView:function(t){this.$emit("clicked")},addToCart:function(t){var e=[{id:t.id,label:t.label,price:t.price-(t.offerPrice||0),image:this.getImage(t.photos),quantity:1,color:null,size:null}];if(this.cart.length>0){var o=t.id;this.getExistPId=o,-1==this.cart.findIndex((function(t){return t.id==o}))?(this.$store.dispatch("addToCart",e),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au panier!")}else this.$store.dispatch("addToCart",e),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})},addToWishlist:function(t){-1==this.wishlist.findIndex((function(e){return e.id==t.id}))?(this.$store.dispatch("addToWishlist",t),this.$toast("Produit ajouté au favoris",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au favoris!")},getImage:function(t){return Array.isArray(t)&&t.hasOwnProperty(0)?t[0].full:null},getImageHover:function(t){return Array.isArray(t)&&t.hasOwnProperty(1)?t[1].full:null}}},l=o(12),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.product?c("div",{class:t.className},[c("div",{staticClass:"single-product-box"},[c("div",{staticClass:"product-image"},[t.product.photos?c("nuxt-link",{attrs:{to:"/product/"+t.product.id}},[t.getImage(t.product.photos)?c("img",{attrs:{src:t.getImage(t.product.photos)}}):c("img",{attrs:{src:o(302)}}),t._v(" "),t.getImageHover(t.product.photos)?c("img",{attrs:{src:t.getImageHover(t.product.photos)}}):t._e()]):t._e(),t._v(" "),c("ul",[c("li",[c("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"javascript:void(0)",title:"Aperçu rapide"},on:{click:function(e){return e.preventDefault(),t.quickView(e)}}},[c("i",{staticClass:"far fa-eye"})])]),t._v(" "),c("li",[c("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Ajouter à la liste de souhaits"},on:{click:function(e){return e.preventDefault(),t.addToWishlist(t.product)}}},[c("i",{staticClass:"far fa-heart"})])])])],1),t._v(" "),c("div",{staticClass:"product-content"},[c("h3",[c("nuxt-link",{attrs:{to:"/product/"+t.product.id}},[t._v(t._s(t.product.label))])],1),t._v(" "),c("div",{staticClass:"product-price"},[t.product.offerPrice?c("span",{staticClass:"old-price"},[t._v("\n                    "+t._s(t.product.price-(t.product.offerPrice||0))+" "),c("span",{staticStyle:{"font-size":"10px"}},[t._v("DZD")])]):t._e(),t._v(" "),c("span",{staticClass:"new-price"},[t._v(t._s(t.product.price)+" "),c("span",{staticStyle:{"font-size":"12px"}},[t._v("DZD")])])]),t._v(" "),c("div",{staticClass:"rating"},t._l(Math.floor(t.product.rating||5),(function(t){return c("i",{staticClass:"fas fa-star"})})),0),t._v(" "),t.getExistPId===t.product.id?c("a",{staticClass:"btn btn-light added-btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Déja ajouté!\n            ")]):c("a",{staticClass:"btn btn-light",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Ajouter au panier\n            ")])])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},306:function(t,e,o){"use strict";var c=o(300);o.n(c).a},307:function(t,e,o){(e=o(24)(!1)).push([t.i,".slide-fade-enter-active[data-v-1aa91fd7]{transition:all .3s ease}.slide-fade-leave-active[data-v-1aa91fd7]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-1aa91fd7],.slide-fade-leave-to[data-v-1aa91fd7]{transform:translateX(10px);opacity:0}.modal-backdrop[data-v-1aa91fd7]{background-color:rgba(0,0,0,.5);width:100vw;height:100vh;position:fixed;top:0;left:0;cursor:pointer;z-index:9}",""]),t.exports=e},308:function(t,e,o){"use strict";var c=o(301);o.n(c).a},309:function(t,e,o){(e=o(24)(!1)).push([t.i,".pre-loader[data-v-1c009466]{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.79);z-index:9999}.pre-loader img[data-v-1c009466]{position:absolute;left:50%;top:48%;transform:translate(-50%,-48%)}",""]),t.exports=e},312:function(t,e,o){var content=o(325);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("483593cc",content,!0,{sourceMap:!1})},313:function(t,e,o){var content=o(331);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("6759f5ab",content,!0,{sourceMap:!1})},324:function(t,e,o){"use strict";var c=o(312);o.n(c).a},325:function(t,e,o){(e=o(24)(!1)).push([t.i,"@media only screen and (max-width:600px){.slider-height[data-v-5e87b046]{height:200px}}@media only screen and (min-width:600px){.slider-height[data-v-5e87b046]{height:600px;width:100%}}",""]),t.exports=e},326:function(t,e,o){t.exports=o.p+"img/no-collection-1.04ced86.jpg"},327:function(t,e,o){t.exports=o.p+"img/no-collection-2.d99e314.jpg"},328:function(t,e,o){t.exports=o.p+"img/no-collection-3.d99e314.jpg"},329:function(t,e,o){t.exports=o.p+"img/no-collection-4.aa9d50d.jpg"},330:function(t,e,o){"use strict";var c=o(313);o.n(c).a},331:function(t,e,o){(e=o(24)(!1)).push([t.i,"@media only screen and (max-width:767px){.navbar-area{padding-bottom:0}}",""]),t.exports=e},332:function(t,e,o){"use strict";o.r(e);var c={name:"Banner",props:{sliders:{type:Array,default:function(){return[]}}}},l=(o(324),o(12)),r=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("client-only",[o("carousel",{attrs:{autoplay:!0,loop:!0,"autoplay-timeout":3e3,paginationEnabled:!1,"per-page":1}},t._l(t.sliders,(function(e,c){return o("slide",{key:c},[o("div",{staticClass:"d-table mt-5",staticStyle:{position:"absolute","z-index":"2"}},[o("div",{staticClass:"d-table-cell"},[o("div",{staticClass:"container"},[o("div",{staticClass:"main-banner-content"},[o("h1",{staticClass:"text-truncate"},[t._v(t._s(e.title))]),t._v(" "),o("p",[t._v(t._s(e.content))]),t._v(" "),e.link?o("a",{staticClass:"btn btn-primary",attrs:{href:e.link}},[t._v("Voir plus")]):t._e()])])])]),t._v(" "),o("div",{},[e.photo?o("img",{staticClass:"slider-height",staticStyle:{"object-fit":"cover"},attrs:{src:e.photo}}):t._e()])])})),1)],1)}),[],!1,null,"5e87b046",null).exports,n={props:{categories:{type:Array,default:function(){return[]}}}},d=Object(l.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"offer-area ptb-60"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},t._l(t.categories,(function(e,l){return c("div",{key:l,staticClass:"col-lg-4 col-md-6"},[c("div",{staticClass:"offer-box"},[e.photo?c("img",{staticStyle:{height:"400px"},attrs:{src:e.photo,alt:"image"}}):c("img",{staticStyle:{"max-height":"400px"},attrs:{src:o(302),alt:"image"}}),t._v(" "),c("nuxt-link",{staticClass:"category",staticStyle:{color:"#6c757d"},attrs:{to:"/category/"+e.id}},[c("h4",[t._v(t._s(e.label))])]),t._v(" "),c("div",{staticClass:"box-inner"},[c("div",{staticClass:"inner-content"},[c("h3",{staticClass:"text-truncate"},[c("nuxt-link",{attrs:{to:"/category/"+e.id}},[t._v(t._s(e.label))])],1),t._v(" "),c("ul",t._l(e.children,(function(e,o){return c("li",{key:o},[c("nuxt-link",{attrs:{to:"/category/"+e.id}},[t._v(t._s(e.label))])],1)})),0)])])],1)])})),0)])])}),[],!1,null,null,null).exports,v=o(304),f=o(54),h=o(305),m={components:{QuckView:v.a,ProductItem:h.a},props:{products:{type:Array,default:function(){return[]}}},methods:{toggle:function(t){f.a.toggleQuickView(t)}}},_=Object(l.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"all-products-area pb-60"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},t._l(t.products,(function(e,c){return o("ProductItem",{key:c,attrs:{product:e,className:"col-lg-3 col-md-6 col-sm-6"},on:{clicked:function(o){return t.toggle(e)}}})})),1)])]),t._v(" "),o("QuckView")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h2",[e("span",{staticClass:"dot"}),this._v("Derniers produits")])])}],!1,null,null,null).exports,C={props:{collections:{type:Array,default:function(){return[]}}}},y=Object(l.a)(C,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"category-products-area pb-60"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[t.collections[0]?c("div",{staticClass:"col-lg-4 col-md-12"},[c("div",{staticClass:"single-category-box"},[t.collections[0].photo?c("img",{attrs:{src:t.collections[0].photo,alt:"photo"}}):c("img",{attrs:{src:o(326),alt:"photo"}}),t._v(" "),c("div",{staticClass:"category-content"},[c("h3",[t._v(t._s(t.collections[0].label))]),t._v(" "),c("nuxt-link",{staticClass:"btn btn-light",attrs:{to:"/collection/"+t.collections[0].id}},[t._v("Voir plus")])],1),t._v(" "),c("nuxt-link",{staticClass:"link-btn",attrs:{to:"/collection/"+t.collections[0].id}})],1)]):t._e(),t._v(" "),c("div",{staticClass:"col-lg-8 col-md-12"},[c("div",{staticClass:"row"},[t.collections[1]?c("div",{staticClass:"col-lg-6 col-md-6"},[c("div",{staticClass:"single-category-box"},[t.collections[1].photo?c("img",{attrs:{src:t.collections[1].photo,alt:"photo"}}):c("img",{attrs:{src:o(327),alt:"photo"}}),t._v(" "),c("div",{staticClass:"category-content"},[c("h3",[t._v(t._s(t.collections[1].label))])]),t._v(" "),c("nuxt-link",{staticClass:"link-btn",attrs:{to:"/collection/"+t.collections[1].id}})],1)]):t._e(),t._v(" "),t.collections[2]?c("div",{staticClass:"col-lg-6 col-md-6"},[c("div",{staticClass:"single-category-box"},[t.collections[2].photo?c("img",{attrs:{src:t.collections[2].photo,alt:"photo"}}):c("img",{attrs:{src:o(328),alt:"photo"}}),t._v(" "),c("div",{staticClass:"category-content"},[c("h3",[t._v(t._s(t.collections[2].label))])]),t._v(" "),c("nuxt-link",{staticClass:"link-btn",attrs:{to:"/collection/"+t.collections[2].id}})],1)]):t._e()]),t._v(" "),c("div",{staticClass:"row"},[t.collections[3]?c("div",{staticClass:"col-lg-12 col-md-12"},[c("div",{staticClass:"single-category-box"},[t.collections[3].photo?c("img",{staticStyle:{"object-fit":"cover"},attrs:{src:t.collections[3].photo,alt:"photo"}}):c("img",{attrs:{src:o(329),alt:"photo"}}),t._v(" "),c("div",{staticClass:"category-content"},[c("h3",[t._v(t._s(t.collections[3].label))])]),t._v(" "),c("nuxt-link",{staticClass:"link-btn",attrs:{to:"/collection/"+t.collections[3].id}})],1)]):t._e()])])])])])}),[],!1,null,null,null).exports,k={components:{QuckView:v.a,ProductItem:h.a},props:{products:{type:Array,default:function(){return[]}}},methods:{toggle:function(t){f.a.toggleQuickView(t)}}},x=Object(l.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"best-sellers-area pb-60"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},t._l(t.products,(function(e){return o("ProductItem",{key:e.id,attrs:{product:e,className:"col-lg-3 col-md-6 col-sm-6"},on:{clicked:function(o){return t.toggle(e)}}})})),1)])]),t._v(" "),o("QuckView")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h2",[e("span",{staticClass:"dot"}),this._v(" Produits tendance")])])}],!1,null,null,null).exports,w=Object(l.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"facility-area"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-4 col-md-4 col-sm-6"},[o("div",{staticClass:"facility-box"},[o("div",{staticClass:"icon"},[o("i",{staticClass:"fas fa-truck"})]),t._v(" "),o("h3",[t._v("Livraison disponible")])])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-4 col-sm-6"},[o("div",{staticClass:"facility-box"},[o("div",{staticClass:"icon"},[o("i",{staticClass:"far fa-credit-card"})]),t._v(" "),o("h3",[t._v("Paiement a la livraison")])])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-4 col-sm-6"},[o("div",{staticClass:"facility-box"},[o("div",{staticClass:"icon"},[o("i",{staticClass:"fas fa-headset"})]),t._v(" "),o("h3",[t._v("Support technique")])])])])])])}],!1,null,null,null).exports,j={props:{testimonials:{type:Array,default:function(){return[]}}}},$=Object(l.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("client-only",[o("div",[t.testimonials&&t.testimonials.length?o("section",{staticClass:"testimonials-area ptb-60 jarallax",attrs:{"data-jarallax":'{"speed": 0.3}'}},[o("div",{staticClass:"container"},[o("div",{staticClass:"testimonials-slides owl-carousel owl-theme"},[o("carousel",{attrs:{autoplay:!0,autoplayTimeout:1e3,perPageCustom:[[0,1],[768,1],[1024,1]]}},t._l(t.testimonials,(function(e){return o("slide",{key:e.id},[o("div",{staticClass:"single-testimonials"},[o("div",{staticClass:"client-image"},[o("img",{attrs:{src:e.photo,alt:e.name}})]),t._v(" "),o("p",[t._v(t._s(e.feedback))]),t._v(" "),o("div",{staticClass:"client-info"},[o("h4",[t._v(t._s(e.name))]),t._v(" "),o("span",[t._v(t._s(e.position))])])])])})),1)],1)])]):t._e()])])}),[],!1,null,null,null).exports,P={data:function(){return{subscriptions:{email:"",createdAt:new Date}}},methods:{subscribe:function(){""!=this.subscriptions.email&&this.validateEmail(this.subscriptions.email)?(firebase.firestore().collection("subscriptions").add(this.subscriptions),this.$toast.success("Thanks for your subscriptions",{icon:"fas fa-user-check"}),this.subscriptions.email=""):this.$toast.error("Please fillup with a valid email",{icon:"fas fa-times"})},validateEmail:function(t){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)}}},S=Object(l.a)(P,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"subscribe-area ptb-60"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),o("div",{staticClass:"col-lg-6"},[o("form",{staticClass:"newsletter-form",on:{submit:function(t){t.preventDefault()}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.subscriptions.email,expression:"subscriptions.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your email address",id:"email",autocomplete:"off"},domProps:{value:t.subscriptions.email},on:{input:function(e){e.target.composing||t.$set(t.subscriptions,"email",e.target.value)}}}),t._v(" "),o("button",{attrs:{type:"submit"},on:{click:t.subscribe}},[t._v("Subscribe!")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"newsletter-content"},[e("h3",[this._v("Subscribe to our newsletter")]),this._v(" "),e("p",[this._v("A short sentence describing what someone will receive by subscribing")])])])}],!1,null,null,null).exports,E={components:{Loader:o(303).a,Banner:r,Offer:d,LatestProducts:_,ProductCategory:y,BestSellers:x,Facility:w,Testimonials:$,Subscribe:S},data:function(){return{loading:!0,sliders:[],categories:[],latestProducts:[],bestSellersProducts:[],collections:[],testimonials:[]}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$axios.$get("/home").then((function(e){t.sliders=e.sliders,t.categories=e.categories,t.latestProducts=e.latestProducts,t.bestSellersProducts=e.bestSellersProducts,t.collections=e.collections,t.testimonials=e.testimonials,t.loading=!1})).catch((function(e){t.loading=!1}))}}},V=(o(330),Object(l.a)(E,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Banner",{attrs:{sliders:t.sliders}}),t._v(" "),o("Offer",{attrs:{categories:t.categories}}),t._v(" "),o("LatestProducts",{attrs:{products:t.latestProducts}}),t._v(" "),o("ProductCategory",{attrs:{collections:t.collections}}),t._v(" "),o("BestSellers",{attrs:{products:t.bestSellersProducts}}),t._v(" "),o("Testimonials",{attrs:{testimonials:t.testimonials}}),t._v(" "),o("Facility"),t._v(" "),t.loading?o("loader"):t._e()],1)}),[],!1,null,null,null));e.default=V.exports}}]);