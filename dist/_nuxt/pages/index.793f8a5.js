(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{296:function(t,e,o){var content=o(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("2f59f931",content,!0,{sourceMap:!1})},297:function(t,e,o){t.exports=o.p+"img/category-no-image.8ea774c.jpg"},298:function(t,e,o){"use strict";o(166);var r=o(54),l={name:"QuckView",data:function(){return{quantity:1,stock:1,selectedColor:null,selectedSize:null}},methods:{closeQuickView:function(){this.quantity=1,this.selectedColor=null,this.selectedSize=null,r.a.toggleQuickView(null)},addToCart:function(t){var e=this,o=[{id:t.id,label:t.label,price:t.price-(t.offerPrice||0),image:this.getImage(t.photos),quantity:this.quantity,color:this.selectedColor,size:this.selectedSize}];if(this.cart.length>0){var r=t.id;this.getExistPId=r,-1==this.cart.findIndex((function(t){return t.id==r&&t.color&&t.color.id==e.selectedColor.id&&t.size&&t.size.id==e.selectedSize.id}))?(this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au panier")}else this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"});this.closeQuickView()},increaseQuantity:function(){this.quantity>=this.stock?this.$toast.error("Vous ne pouvez pas ajouter plus de "+this.item.stock,{icon:"fas fa-cart-plus"}):this.quantity++},decreaseQuantity:function(){this.quantity<2?this.$toast.error("Vous ne pouvez pas ajouter moins de 1",{icon:"fas fa-cart-plus"}):this.quantity--},getImage:function(t){return Array.isArray(t)&&t.hasOwnProperty(0)?t[0].full:null},selectSize:function(t){this.selectedSize=t,t.quantity&&(this.stock=t.quantity)},selectColor:function(t){this.selectedColor=t,t.quantity&&(this.stock=t.quantity)}},computed:{isQuickViewOpen:function(){return r.b.isQuickViewOpen},cart:function(){return this.$store.getters.cart},item:function(){return this.stock=r.b.item.colors.reduce((function(a,b){return a+(b.quantity||0)}),0),r.b.item}}},n=(o(300),o(12)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isQuickViewOpen?r("div",{staticClass:"modal-backdrop"}):t._e(),t._v(" "),r("transition",{attrs:{name:"slide-fade"}},[t.isQuickViewOpen&&t.item?r("div",{staticClass:"modal fade productQuickView",attrs:{id:"productQuickView",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[r("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeQuickView}},[r("span",{attrs:{"aria-hidden":"true"}},[r("i",{staticClass:"fas fa-times"})])]),t._v(" "),r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"productQuickView-image"},[t.getImage(t.item.photos)?r("img",{attrs:{src:t.getImage(t.item.photos),alt:"image"}}):r("img",{attrs:{src:o(297),alt:"image"}})])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"product-content"},[r("h3",[r("a",{attrs:{href:"#"}},[t._v(t._s(t.item.label))])]),t._v(" "),r("div",{staticClass:"price"},[r("span",[t._v(t._s(t.item.price-(t.item.offerPrice||0))+" DZD")])]),t._v(" "),r("div",{staticClass:"product-review"},[r("div",{staticClass:"rating"},t._l(Math.floor(t.item.rating||5),(function(t){return r("i",{staticClass:"fas fa-star"})})),0),t._v(" "),r("a",{staticClass:"rating-count"},[t._v("Avis: "+t._s(Math.floor(t.item.rating||5))+" / 5")])]),t._v(" "),r("ul",{staticClass:"product-info"},[r("li",[r("span",[t._v("Disponibilité:")]),t._v(" "),r("a",[t._v("en stock ("+t._s(t.stock||1)+" produits)")])]),t._v(" "),r("li",[r("span",[t._v("Type de produit:")]),t._v(" "),r("a",[t._v(t._s(t.item.category?t.item.category.label:"-"))])])]),t._v(" "),t.item.colors.length?r("div",{staticClass:"product-color-switch"},[r("h4",[t._v("Couleurs:")]),t._v(" "),r("ul",t._l(t.item.colors,(function(e,o){return r("li",{key:o,class:{active:t.selectedColor&&t.selectedColor.id===e.id},on:{click:function(o){return t.selectColor(e)}}},[r("a",{attrs:{title:"Couleur"}},[r("span",{style:"background-color: "+e.code})])])})),0)]):r("div",{staticStyle:{height:"60px"}}),t._v(" "),t.item.sizes.length?r("div",{staticClass:"product-size-wrapper"},[r("h4",[t._v("Taille:")]),t._v(" "),r("ul",t._l(t.item.sizes,(function(e,o){return r("li",{key:o,class:{active:t.selectedSize&&t.selectedSize.id===e.id},on:{click:function(o){return t.selectSize(e)}}},[r("a",[t._v(t._s(e.label))])])})),0)]):r("div",{staticStyle:{height:"60px"}}),t._v(" "),r("div",{staticClass:"product-add-to-cart"},[r("div",{staticClass:"input-counter"},[r("span",{staticClass:"minus-btn",on:{click:function(e){return t.decreaseQuantity()}}},[r("i",{staticClass:"fas fa-minus"})]),t._v("\n                                            "+t._s(t.quantity)+"\n                                        "),r("span",{staticClass:"plus-btn",on:{click:function(e){return t.increaseQuantity()}}},[r("i",{staticClass:"fas fa-plus"})])]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.addToCart(t.item)}}},[r("i",{staticClass:"fas fa-cart-plus"}),t._v(" Ajouter au panier\n                                    ")])]),t._v(" "),r("a",{staticClass:"view-full-info",attrs:{href:"#"}},[t._v("Afficher toutes les informations")])])])])])])]):t._e()])],1)}),[],!1,null,"3b2e66cc",null);e.a=component.exports},299:function(t,e,o){"use strict";o(166);var r={name:"ProductItem",data:function(){return{getExistPId:null}},props:["product","className"],computed:{cart:function(){return this.$store.getters.cart},wishlist:function(){return this.$store.getters.wishlist}},methods:{quickView:function(t){this.$emit("clicked")},addToCart:function(t){var e=[{id:t.id,label:t.label,price:t.price-(t.offerPrice||0),image:this.getImage(t.photos),quantity:1,color:null,size:null}];if(this.cart.length>0){var o=t.id;this.getExistPId=o,-1==this.cart.findIndex((function(t){return t.id==o}))?(this.$store.dispatch("addToCart",e),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au panier!")}else this.$store.dispatch("addToCart",e),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})},addToWishlist:function(t){-1==this.wishlist.findIndex((function(e){return e.id==t.id}))?(this.$store.dispatch("addToWishlist",t),this.$toast("Produit ajouté au favoris",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au favoris!")},getImage:function(t){return Array.isArray(t)&&t.hasOwnProperty(0)?t[0].full:null},getImageHover:function(t){return Array.isArray(t)&&t.hasOwnProperty(1)?t[1].full:null}}},l=o(12),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{class:t.className},[r("div",{staticClass:"single-product-box"},[r("div",{staticClass:"product-image"},[t.product.photos?r("nuxt-link",{attrs:{to:"/products-details/"+t.product.id}},[t.getImage(t.product.photos)?r("img",{attrs:{src:t.getImage(t.product.photos)}}):r("img",{attrs:{src:o(297)}}),t._v(" "),t.getImageHover(t.product.photos)?r("img",{attrs:{src:t.getImageHover(t.product.photos)}}):t._e()]):t._e(),t._v(" "),r("ul",[r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"javascript:void(0)",title:"Aperçu rapide"},on:{click:function(e){return e.preventDefault(),t.quickView(e)}}},[r("i",{staticClass:"far fa-eye"})])]),t._v(" "),r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Ajouter à la liste de souhaits"},on:{click:function(e){return e.preventDefault(),t.addToWishlist(t.product)}}},[r("i",{staticClass:"far fa-heart"})])])])],1),t._v(" "),r("div",{staticClass:"product-content"},[r("h3",[r("nuxt-link",{attrs:{to:"/products-details/"+t.product.id}},[t._v(t._s(t.product.label))])],1),t._v(" "),r("div",{staticClass:"product-price"},[t.product.offerPrice?r("span",{staticClass:"old-price"},[t._v("\n                    "+t._s(t.product.price-(t.product.offerPrice||0))+" "),r("span",{staticStyle:{"font-size":"10px"}},[t._v("DZD")])]):t._e(),t._v(" "),r("span",{staticClass:"new-price"},[t._v(t._s(t.product.price)+" "),r("span",{staticStyle:{"font-size":"12px"}},[t._v("DZD")])])]),t._v(" "),r("div",{staticClass:"rating"},t._l(Math.floor(t.product.rating||5),(function(t){return r("i",{staticClass:"fas fa-star"})})),0),t._v(" "),t.getExistPId===t.product.id?r("a",{staticClass:"btn btn-light added-btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Déja ajouté!\n            ")]):r("a",{staticClass:"btn btn-light",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Ajouter au panier\n            ")])])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},300:function(t,e,o){"use strict";var r=o(296);o.n(r).a},301:function(t,e,o){(e=o(26)(!1)).push([t.i,".slide-fade-enter-active[data-v-3b2e66cc]{transition:all .3s ease}.slide-fade-leave-active[data-v-3b2e66cc]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-3b2e66cc],.slide-fade-leave-to[data-v-3b2e66cc]{transform:translateX(10px);opacity:0}.modal-backdrop[data-v-3b2e66cc]{background-color:rgba(0,0,0,.5);width:100vw;height:100vh;position:fixed;top:0;left:0;cursor:pointer;z-index:9}",""]),t.exports=e},304:function(t,e,o){var content=o(330);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("6027095a",content,!0,{sourceMap:!1})},305:function(t,e,o){t.exports=o.p+"img/instagram5.0a407a6.jpg"},306:function(t,e,o){t.exports=o.p+"img/instagram9.0a407a6.jpg"},329:function(t,e,o){"use strict";var r=o(304);o.n(r).a},330:function(t,e,o){(e=o(26)(!1)).push([t.i,"@media only screen and (max-width:600px){.slider-height[data-v-819094c0]{height:200px}}",""]),t.exports=e},331:function(t,e,o){t.exports=o.p+"img/no-collection-1.04ced86.jpg"},332:function(t,e,o){t.exports=o.p+"img/no-collection-2.d99e314.jpg"},333:function(t,e,o){t.exports=o.p+"img/no-collection-3.d99e314.jpg"},334:function(t,e,o){t.exports=o.p+"img/no-collection-4.aa9d50d.jpg"},335:function(t,e,o){t.exports=o.p+"img/blog-img1.1d30fa5.jpg"},336:function(t,e,o){t.exports=o.p+"img/blog-img2.1d30fa5.jpg"},337:function(t,e,o){t.exports=o.p+"img/blog-img3.1d30fa5.jpg"},338:function(t,e,o){t.exports=o.p+"img/blog-img4.1d30fa5.jpg"},339:function(t,e,o){t.exports=o.p+"img/blog-img5.1d30fa5.jpg"},340:function(t,e,o){t.exports=o.p+"img/partner1.e9620a8.png"},341:function(t,e,o){t.exports=o.p+"img/partner2.e9620a8.png"},342:function(t,e,o){t.exports=o.p+"img/partner3.f6d5014.png"},343:function(t,e,o){t.exports=o.p+"img/partner4.f6d5014.png"},344:function(t,e,o){t.exports=o.p+"img/partner5.f6d5014.png"},345:function(t,e,o){t.exports=o.p+"img/partner6.f6d5014.png"},346:function(t,e,o){t.exports=o.p+"img/instagram1.0a407a6.jpg"},347:function(t,e,o){t.exports=o.p+"img/instagram2.0a407a6.jpg"},348:function(t,e,o){t.exports=o.p+"img/instagram3.0a407a6.jpg"},349:function(t,e,o){t.exports=o.p+"img/instagram7.0a407a6.jpg"},350:function(t,e,o){t.exports=o.p+"img/instagram4.0a407a6.jpg"},351:function(t,e,o){t.exports=o.p+"img/instagram6.0a407a6.jpg"},352:function(t,e,o){t.exports=o.p+"img/instagram8.0a407a6.jpg"},353:function(t,e,o){"use strict";o.r(e);var r={name:"Banner",props:{sliders:{type:Array,default:function(){return[]}}}},l=(o(329),o(12)),n=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("client-only",[o("carousel",{attrs:{autoplay:!0,loop:!0,"autoplay-timeout":3e3,paginationEnabled:!1,"per-page":1}},t._l(t.sliders,(function(e,r){return o("slide",{key:r},[o("div",{staticClass:"d-table mt-5",staticStyle:{position:"absolute","z-index":"2"}},[o("div",{staticClass:"d-table-cell"},[o("div",{staticClass:"container"},[o("div",{staticClass:"main-banner-content"},[o("h1",{staticClass:"text-truncate"},[t._v(t._s(e.title))]),t._v(" "),o("p",[t._v(t._s(e.content))]),t._v(" "),e.link?o("a",{staticClass:"btn btn-primary",attrs:{href:e.link}},[t._v("Voir plus")]):t._e()])])])]),t._v(" "),o("div",{},[e.photo?o("img",{staticClass:"slider-height",staticStyle:{"object-fit":"cover"},attrs:{src:e.photo}}):t._e()])])})),1)],1)}),[],!1,null,"819094c0",null).exports,c={props:{categories:{type:Array,default:function(){return[]}}}},d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"offer-area ptb-60"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.categories,(function(e,l){return r("div",{key:l,staticClass:"col-lg-4 col-md-6"},[r("div",{staticClass:"offer-box"},[e.photo?r("img",{staticStyle:{height:"400px"},attrs:{src:e.photo,alt:"image"}}):r("img",{staticStyle:{"max-height":"400px"},attrs:{src:o(297),alt:"image"}}),t._v(" "),r("a",{staticClass:"category",staticStyle:{color:"#6c757d"},attrs:{href:"/category/"+e.id}},[r("h4",[t._v(t._s(e.label))])]),t._v(" "),r("div",{staticClass:"box-inner"},[r("div",{staticClass:"inner-content"},[r("h3",{staticClass:"text-truncate"},[r("a",{attrs:{href:"/category/"+e.id}},[t._v(t._s(e.label))])]),t._v(" "),r("ul",t._l(e.children,(function(e,o){return r("li",{key:o},[r("a",{attrs:{href:"/category/"+e.id}},[t._v(t._s(e.label))])])})),0)])])])])})),0)])])}),[],!1,null,null,null).exports,m=o(298),v=o(54),f=o(299),h={components:{QuckView:m.a,ProductItem:f.a},props:{products:{type:Array,default:function(){return[]}}},methods:{toggle:function(t){v.a.toggleQuickView(t)}}},_=Object(l.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"all-products-area pb-60"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},t._l(t.products,(function(e,r){return o("ProductItem",{key:r,attrs:{product:e,className:"col-lg-3 col-md-6 col-sm-6"},on:{clicked:function(o){return t.toggle(e)}}})})),1)])]),t._v(" "),o("QuckView")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h2",[e("span",{staticClass:"dot"}),this._v("Derniers produits")])])}],!1,null,null,null).exports,C={props:{collections:{type:Array,default:function(){return[]}}}},w=Object(l.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"category-products-area pb-60"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t.collections[0]?r("div",{staticClass:"col-lg-4 col-md-12"},[r("div",{staticClass:"single-category-box"},[t.collections[0].photo?r("img",{attrs:{src:t.collections[0].photo,alt:"photo"}}):r("img",{attrs:{src:o(331),alt:"photo"}}),t._v(" "),r("div",{staticClass:"category-content"},[r("h3",[t._v(t._s(t.collections[0].label))]),t._v(" "),r("a",{staticClass:"btn btn-light",attrs:{href:"#"}},[t._v("View More")])]),t._v(" "),r("nuxt-link",{staticClass:"link-btn",attrs:{to:"/collection/"+t.collections[0].id}})],1)]):t._e(),t._v(" "),r("div",{staticClass:"col-lg-8 col-md-12"},[r("div",{staticClass:"row"},[t.collections[1]?r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"single-category-box"},[t.collections[1].photo?r("img",{attrs:{src:t.collections[1].photo,alt:"photo"}}):r("img",{attrs:{src:o(332),alt:"photo"}}),t._v(" "),r("div",{staticClass:"category-content"},[r("h3",[t._v(t._s(t.collections[1].label))])]),t._v(" "),r("nuxt-link",{staticClass:"link-btn",attrs:{to:"/collection/"+t.collections[1].id}})],1)]):t._e(),t._v(" "),t.collections[2]?r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"single-category-box"},[t.collections[2].photo?r("img",{attrs:{src:t.collections[2].photo,alt:"photo"}}):r("img",{attrs:{src:o(333),alt:"photo"}}),t._v(" "),r("div",{staticClass:"category-content"},[r("h3",[t._v(t._s(t.collections[2].label))])]),t._v(" "),r("nuxt-link",{staticClass:"link-btn",attrs:{to:"/collection/"+t.collections[2].id}})],1)]):t._e()]),t._v(" "),r("div",{staticClass:"row"},[t.collections[3]?r("div",{staticClass:"col-lg-12 col-md-12"},[r("div",{staticClass:"single-category-box"},[t.collections[3].photo?r("img",{staticStyle:{"object-fit":"cover"},attrs:{src:t.collections[3].photo,alt:"photo"}}):r("img",{attrs:{src:o(334),alt:"photo"}}),t._v(" "),r("div",{staticClass:"category-content"},[r("h3",[t._v(t._s(t.collections[3].label))])]),t._v(" "),r("nuxt-link",{staticClass:"link-btn",attrs:{to:"/collection/"+t.collections[3].id}})],1)]):t._e()])])])])])}),[],!1,null,null,null).exports,y={components:{QuckView:m.a,ProductItem:f.a},methods:{toggle:function(){v.a.toggleQuickView()}},computed:{products:function(){return this.$store.state.products.all.filter((function(t){return!0===t.trending}))}}},k=(Object(l.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"trending-products-area pb-60"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},t._l(t.products,(function(e){return o("ProductItem",{key:e.id,attrs:{product:e,className:"col-lg-3 col-md-6 col-sm-6"},on:{clicked:t.toggle}})})),1)])]),t._v(" "),o("QuckView")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h2",[e("span",{staticClass:"dot"}),this._v(" Trending Products")])])}],!1,null,null,null).exports,{components:{QuckView:m.a,ProductItem:f.a},props:{products:{type:Array,default:function(){return[]}}},methods:{toggle:function(t){v.a.toggleQuickView(t)}}}),x=Object(l.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"best-sellers-area pb-60"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},t._l(t.products,(function(e){return o("ProductItem",{key:e.id,attrs:{product:e,className:"col-lg-3 col-md-6 col-sm-6"},on:{clicked:function(o){return t.toggle(e)}}})})),1)])]),t._v(" "),o("QuckView")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h2",[e("span",{staticClass:"dot"}),this._v(" Produits tendance")])])}],!1,null,null,null).exports,j=Object(l.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"facility-area"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-4 col-md-4 col-sm-6"},[o("div",{staticClass:"facility-box"},[o("div",{staticClass:"icon"},[o("i",{staticClass:"fas fa-truck"})]),t._v(" "),o("h3",[t._v("Livraison disponible")])])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-4 col-sm-6"},[o("div",{staticClass:"facility-box"},[o("div",{staticClass:"icon"},[o("i",{staticClass:"far fa-credit-card"})]),t._v(" "),o("h3",[t._v("Paiement a la livraison")])])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-4 col-sm-6"},[o("div",{staticClass:"facility-box"},[o("div",{staticClass:"icon"},[o("i",{staticClass:"fas fa-headset"})]),t._v(" "),o("h3",[t._v("Support technique")])])])])])])}],!1,null,null,null).exports,P={props:{testimonials:{type:Array,default:function(){return[]}}}},$=Object(l.a)(P,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("client-only",[o("div",[t.testimonials&&t.testimonials.length?o("section",{staticClass:"testimonials-area ptb-60 jarallax",attrs:{"data-jarallax":'{"speed": 0.3}'}},[o("div",{staticClass:"container"},[o("div",{staticClass:"testimonials-slides owl-carousel owl-theme"},[o("carousel",{attrs:{autoplay:!0,autoplayTimeout:1e3,perPageCustom:[[0,1],[768,1],[1024,1]]}},t._l(t.testimonials,(function(e){return o("slide",{key:e.id},[o("div",{staticClass:"single-testimonials"},[o("div",{staticClass:"client-image"},[o("img",{attrs:{src:e.photo,alt:e.name}})]),t._v(" "),o("p",[t._v(t._s(e.feedback))]),t._v(" "),o("div",{staticClass:"client-info"},[o("h4",[t._v(t._s(e.name))]),t._v(" "),o("span",[t._v(t._s(e.position))])])])])})),1)],1)])]):t._e()])])}),[],!1,null,null,null).exports,S={data:function(){return{posts:[{id:1,title:"Styling White Jeans after Labor Day",link:"blog-details",author:"Admin",post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:o(335)},{id:2,title:"he Best Ecommerce Platform for Growing Sales",link:"blog-details",author:"Admin",post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:o(336)},{id:3,title:"The Evolution of the B2B Buying Process",link:"blog-details",author:"Admin",post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:o(337)},{id:4,title:"The Best eCommerce Blogs for Online Retailers",link:"blog-details",author:"Admin",post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:o(338)},{id:5,title:"How to Do Social Media Customer Service",link:"blog-details",author:"Admin",post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:o(339)}]}}},E=(Object(l.a)(S,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("client-only",[o("section",{staticClass:"news-area ptb-60"},[o("div",{staticClass:"container"},[o("div",{staticClass:"section-title"},[o("h2",[o("span",{staticClass:"dot"}),t._v(" Bolster News")])]),t._v(" "),o("div",{staticClass:"news-slides owl-carousel owl-theme"},[o("carousel",{attrs:{autoplay:!0,autoplayTimeout:1e3,perPageCustom:[[0,1],[768,2],[1024,3],[1200,3]]}},t._l(t.posts,(function(e){return o("slide",{key:e.id},[o("div",{staticClass:"single-news-post"},[o("div",{staticClass:"news-image"},[o("nuxt-link",{attrs:{to:e.link}},[o("img",{attrs:{src:e.image,alt:e.title}})])],1),t._v(" "),o("div",{staticClass:"news-content"},[o("h3",[o("nuxt-link",{attrs:{to:e.link}},[t._v(t._s(e.title))])],1),t._v(" "),o("span",{staticClass:"author"},[t._v("By "),o("a",{attrs:{href:"#"}},[t._v(t._s(e.author))])]),t._v(" "),o("p",[t._v(t._s(e.post))]),t._v(" "),o("a",{staticClass:"btn btn-light",attrs:{href:"#"}},[t._v("Read More")])])])])})),1)],1)])])])}),[],!1,null,null,null).exports,{data:function(){return{subscriptions:{email:"",createdAt:new Date}}},methods:{subscribe:function(){""!=this.subscriptions.email&&this.validateEmail(this.subscriptions.email)?(firebase.firestore().collection("subscriptions").add(this.subscriptions),this.$toast.success("Thanks for your subscriptions",{icon:"fas fa-user-check"}),this.subscriptions.email=""):this.$toast.error("Please fillup with a valid email",{icon:"fas fa-times"})},validateEmail:function(t){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)}}}),A=Object(l.a)(E,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"subscribe-area ptb-60"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),o("div",{staticClass:"col-lg-6"},[o("form",{staticClass:"newsletter-form",on:{submit:function(t){t.preventDefault()}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.subscriptions.email,expression:"subscriptions.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your email address",id:"email",autocomplete:"off"},domProps:{value:t.subscriptions.email},on:{input:function(e){e.target.composing||t.$set(t.subscriptions,"email",e.target.value)}}}),t._v(" "),o("button",{attrs:{type:"submit"},on:{click:t.subscribe}},[t._v("Subscribe!")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"newsletter-content"},[e("h3",[this._v("Subscribe to our newsletter")]),this._v(" "),e("p",[this._v("A short sentence describing what someone will receive by subscribing")])])])}],!1,null,null,null).exports,V=(Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("div",{staticClass:"partner-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"partner-slides owl-carousel owl-theme"},[e("carousel",{attrs:{loop:!0,autoplay:!0,autoplayTimeout:1e3,paginationEnabled:!1,perPageCustom:[[0,2],[768,4],[1200,6]],speed:5e3}},[e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:o(340),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:o(341),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:o(342),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:o(343),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:o(344),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:o(345),alt:"image"}})])])])],1)],1)])])])}),[],!1,null,null,null).exports,{data:function(){return{photos:[{id:1,photo:o(346),url:"https://www.instagram.com/"},{id:2,photo:o(347),url:"https://www.instagram.com/"},{id:3,photo:o(348),url:"https://www.instagram.com/"},{id:9,photo:o(349),url:"https://www.instagram.com/"},{id:6,photo:o(305),url:"https://www.instagram.com/"},{id:4,photo:o(350),url:"https://www.instagram.com/"},{id:5,photo:o(305),url:"https://www.instagram.com/"},{id:11,photo:o(306),url:"https://www.instagram.com/"},{id:8,photo:o(351),url:"https://www.instagram.com/"},{id:7,photo:o(305),url:"https://www.instagram.com/"},{id:12,photo:o(306),url:"https://www.instagram.com/"},{id:10,photo:o(352),url:"https://www.instagram.com/"},{id:13,photo:o(306),url:"https://www.instagram.com/"}]}}}),I=(Object(l.a)(V,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("client-only",[o("div",{staticClass:"instagram-area"},[o("div",{staticClass:"instagram-slides owl-carousel owl-theme"},[o("carousel",{attrs:{loop:!0,autoplay:!0,autoplayTimeout:5e3,perPageCustom:[[0,2],[768,6],[1200,9]],paginationEnabled:!1}},t._l(t.photos,(function(e){return o("slide",{key:e.id},[o("div",{staticClass:"instagram-box"},[o("img",{attrs:{src:e.photo,alt:"image"}}),t._v(" "),o("div",{staticClass:"icon"},[o("i",{staticClass:"fab fa-instagram"})]),t._v(" "),o("a",{attrs:{href:e.url,target:"_blank"}})])])})),1)],1)])])}),[],!1,null,null,null).exports,{components:{Banner:n,Offer:d,LatestProducts:_,ProductCategory:w,BestSellers:x,Facility:j,Testimonials:$,Subscribe:A},data:function(){return{sliders:[],categories:[],latestProducts:[],bestSellersProducts:[],collections:[],testimonials:[]}},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$axios.$get("/home").then((function(e){t.sliders=e.sliders,t.categories=e.categories,t.latestProducts=e.latestProducts,t.bestSellersProducts=e.bestSellersProducts,t.collections=e.collections,t.testimonials=e.testimonials})).catch((function(t){console.log(t)}))}}}),O=Object(l.a)(I,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Banner",{attrs:{sliders:t.sliders}}),t._v(" "),o("Offer",{attrs:{categories:t.categories}}),t._v(" "),o("LatestProducts",{attrs:{products:t.latestProducts}}),t._v(" "),o("ProductCategory",{attrs:{collections:t.collections}}),t._v(" "),o("BestSellers",{attrs:{products:t.bestSellersProducts}}),t._v(" "),o("Testimonials",{attrs:{testimonials:t.testimonials}}),t._v(" "),o("Facility")],1)}),[],!1,null,null,null);e.default=O.exports}}]);