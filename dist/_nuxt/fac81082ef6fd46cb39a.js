(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{295:function(t,e,o){var content=o(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("36b04d10",content,!0,{sourceMap:!1})},296:function(t,e,o){var content=o(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("15333cd7",content,!0,{sourceMap:!1})},297:function(t,e,o){t.exports=o.p+"img/8ea774c.jpg"},298:function(t,e,o){"use strict";var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pre-loader"},[e("img",{attrs:{src:o(162),alt:"Loading"}})])}],c={name:"loader"},n=(o(303),o(11)),component=Object(n.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,"1c009466",null);e.a=component.exports},299:function(t,e,o){"use strict";o(90),o(161);var r=o(52),c={name:"QuckView",data:function(){return{quantity:1,selectedColor:null,selectedSize:null,product:null}},methods:{closeQuickView:function(){this.quantity=1,this.selectedColor=null,this.selectedSize=null,r.a.toggleQuickView()},addToCart:function(t){var e=this;if(this.selectedColor||this.selectedSize||!this.cantBuy)if(this.cantBuy)this.$toast.error("Rupture de stock",{icon:"fas fa-exclamation-triangle"});else{var o=[{id:t.id,label:t.label,price:t.price-(t.offerPrice||0),image:this.getImage(t.photos),quantity:this.quantity,color:this.selectedColor,size:this.selectedSize,category:t.category,stock:this.stock}];if(this.cart.length>0){var r=t.id;this.getExistPId=r,-1==this.cart.findIndex((function(t){return t.id==r&&t.color&&t.color.id==e.selectedColor.id&&t.size&&t.size.id==e.selectedSize.id}))?(this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au panier")}else this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"});this.closeQuickView()}else this.$toast.error("Vous devez d'abord sélectionner la taille et la couleur",{icon:"fas fa-exclamation-triangle"})},increaseQuantity:function(){0===this.stock?this.$toast.error("Rupture de stock",{icon:"fas fa-cart-plus"}):this.quantity>=this.stock?this.$toast.error("Vous ne pouvez pas ajouter plus de "+this.stock,{icon:"fas fa-cart-plus"}):this.quantity++},decreaseQuantity:function(){this.quantity<2?this.$toast.error("Vous ne pouvez pas ajouter moins de 1",{icon:"fas fa-cart-plus"}):this.quantity--},getImage:function(t){return Array.isArray(t)&&t.hasOwnProperty(0)?t[0].full:null},selectSize:function(t){this.selectedSize=t},selectColor:function(t){this.selectedColor=t},showProduct:function(){this.closeQuickView(),this.$router.push("/product/".concat(this.item.id))}},computed:{isQuickViewOpen:function(){return r.b.isQuickViewOpen},cart:function(){return this.$store.getters.cart},item:function(){return r.b.item},stock:function(){var t=this;if(this.selectedColor&&this.selectedSize){var e=this.item.variations.find((function(i){return i.color_product_id==t.selectedColor.id&&i.product_size_id==t.selectedSize.id}));return e?e.quantity:0}return 0},cantBuy:function(){return 0===this.stock&&this.item.sizes&&this.item.sizes.length>0&&this.item.colors&&this.item.colors.length>0}}},n=(o(301),o(11)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isQuickViewOpen?r("div",{staticClass:"modal-backdrop"}):t._e(),t._v(" "),r("transition",{attrs:{name:"slide-fade"}},[t.isQuickViewOpen&&t.item?r("div",{staticClass:"modal fade productQuickView",attrs:{id:"productQuickView",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[r("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeQuickView}},[r("span",{attrs:{"aria-hidden":"true"}},[r("i",{staticClass:"fas fa-times"})])]),t._v(" "),r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"productQuickView-image"},[t.getImage(t.item.photos)?r("img",{attrs:{src:t.getImage(t.item.photos),alt:"image"}}):r("img",{attrs:{src:o(297),alt:"image"}})])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"product-content"},[r("h3",[r("a",{attrs:{href:"#"}},[t._v(t._s(t.item.label))])]),t._v(" "),r("div",{staticClass:"price"},[r("span",[t._v(t._s(t.item.price-(t.item.offerPrice||0))+" DZD")])]),t._v(" "),r("div",{staticClass:"product-review"},[r("div",{staticClass:"rating"},t._l(Math.floor(t.item.rating||5),(function(t){return r("i",{staticClass:"fas fa-star"})})),0),t._v(" "),r("a",{staticClass:"rating-count"},[t._v("Avis: "+t._s(Math.floor(t.item.rating||5))+" / 5")])]),t._v(" "),r("ul",{staticClass:"product-info"},[r("li",[r("span",[t._v("Disponibilité:")]),t._v(" "),r("a",[t._v("en stock ( "+t._s(t.stock||0)+" produits )")])]),t._v(" "),r("li",[r("span",[t._v("Type de produit:")]),t._v(" "),r("a",[t._v(t._s(t.item.category?t.item.category.label:"-"))])])]),t._v(" "),t.item.colors.length?r("div",{staticClass:"product-color-switch"},[r("h4",[t._v("Couleurs:")]),t._v(" "),r("ul",t._l(t.item.colors,(function(e,o){return r("li",{key:o,class:{active:t.selectedColor&&t.selectedColor.id===e.id},on:{click:function(o){return t.selectColor(e)}}},[r("a",{attrs:{title:"Couleur"}},[r("span",{style:"background-color: "+e.code})])])})),0)]):r("div",{staticStyle:{height:"60px"}}),t._v(" "),t.item.sizes.length?r("div",{staticClass:"product-size-wrapper"},[r("h4",[t._v("Taille:")]),t._v(" "),r("ul",t._l(t.item.sizes,(function(e,o){return r("li",{key:o,class:{active:t.selectedSize&&t.selectedSize.id===e.id},on:{click:function(o){return t.selectSize(e)}}},[r("a",[t._v(t._s(e.label))])])})),0)]):r("div",{staticStyle:{height:"60px"}}),t._v(" "),r("div",{staticClass:"product-add-to-cart"},[r("div",{staticClass:"input-counter"},[r("span",{staticClass:"minus-btn",on:{click:function(e){return t.decreaseQuantity()}}},[r("i",{staticClass:"fas fa-minus"})]),t._v("\n                                            "+t._s(t.quantity)+"\n                                        "),r("span",{staticClass:"plus-btn",on:{click:function(e){return t.increaseQuantity()}}},[r("i",{staticClass:"fas fa-plus"})])]),t._v(" "),r("button",{staticClass:"btn btn-primary",class:{"btn-disabled":t.cantBuy},attrs:{type:"submit"},on:{click:function(e){return t.addToCart(t.item)}}},[r("i",{staticClass:"fas fa-cart-plus"}),t._v(" Ajouter au panier\n                                    ")])]),t._v(" "),r("a",{staticClass:"view-full-info",attrs:{href:"javascript:void(0)"},on:{click:t.showProduct}},[t._v("Afficher toutes les informations")])])])])])])]):t._e()])],1)}),[],!1,null,"7145ce48",null);e.a=component.exports},300:function(t,e,o){"use strict";o(161);var r={name:"ProductItem",data:function(){return{getExistPId:null}},props:["product","className"],computed:{cart:function(){return this.$store.getters.cart},wishlist:function(){return this.$store.getters.wishlist}},methods:{quickView:function(t){this.$emit("clicked")},addToCart:function(t){if(t.promo_price>0)var e=t.promo_price;else e=t.price;var o=[{id:t.id,label:t.label,price:e,image:this.getImage(t.photos),quantity:1,color:null,size:null}];if(this.cart.length>0){var r=t.id;this.getExistPId=r,-1==this.cart.findIndex((function(t){return t.id==r}))?(this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au panier!")}else this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})},addToWishlist:function(t){-1==this.wishlist.findIndex((function(e){return e.id==t.id}))?(this.$store.dispatch("addToWishlist",t),this.$toast("Produit ajouté au favoris",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au favoris!")},getImage:function(t){return Array.isArray(t)&&t.hasOwnProperty(0)?t[0].full:null},getImageHover:function(t){return Array.isArray(t)&&t.hasOwnProperty(1)?t[1].full:null}}},c=o(11),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{class:t.className},[r("div",{staticClass:"single-product-box"},[r("div",{staticClass:"product-image"},[t.product.photos?r("nuxt-link",{attrs:{to:"/product/"+t.product.id}},[t.getImage(t.product.photos)?r("img",{attrs:{src:t.getImage(t.product.photos)}}):r("img",{attrs:{src:o(297)}}),t._v(" "),t.getImageHover(t.product.photos)?r("img",{attrs:{src:t.getImageHover(t.product.photos)}}):t._e()]):t._e(),t._v(" "),r("ul",[r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"javascript:void(0)",title:"Aperçu rapide"},on:{click:function(e){return e.preventDefault(),t.quickView(e)}}},[r("i",{staticClass:"far fa-eye"})])]),t._v(" "),r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Ajouter à la liste de souhaits"},on:{click:function(e){return e.preventDefault(),t.addToWishlist(t.product)}}},[r("i",{staticClass:"far fa-heart"})])])])],1),t._v(" "),r("div",{staticClass:"product-content"},[r("h3",[r("nuxt-link",{attrs:{to:"/product/"+t.product.id}},[t._v(t._s(t.product.label))])],1),t._v(" "),r("div",{staticClass:"product-price"},[t.product.promo_price>0?r("span",{staticClass:"old-price"},[t._v("\n                    "+t._s(t.product.price)+"\n                    "),r("span",{staticClass:"new-price"},[t._v(t._s(t.product.promo_price))])]):r("span",{staticClass:"product-price"},[t._v(t._s(t.product.price))]),t._v(" "),r("span",{staticStyle:{"font-size":"12px"}},[t._v(" DZD")])]),t._v(" "),r("div",{staticClass:"rating"},t._l(Math.floor(t.product.rating||5),(function(t){return r("i",{staticClass:"fas fa-star"})})),0),t._v(" "),t.getExistPId===t.product.id?r("a",{staticClass:"btn btn-light added-btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Déja ajouté!\n            ")]):r("a",{staticClass:"btn btn-light",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Ajouter au panier\n            ")])])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},301:function(t,e,o){"use strict";var r=o(295);o.n(r).a},302:function(t,e,o){(e=o(21)(!1)).push([t.i,".slide-fade-enter-active[data-v-7145ce48]{transition:all .3s ease}.slide-fade-leave-active[data-v-7145ce48]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-7145ce48],.slide-fade-leave-to[data-v-7145ce48]{transform:translateX(10px);opacity:0}.modal-backdrop[data-v-7145ce48]{background-color:rgba(0,0,0,.5);width:100vw;height:100vh;position:fixed;top:0;left:0;cursor:pointer;z-index:9}",""]),t.exports=e},303:function(t,e,o){"use strict";var r=o(296);o.n(r).a},304:function(t,e,o){(e=o(21)(!1)).push([t.i,".pre-loader[data-v-1c009466]{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.79);z-index:9999}.pre-loader img[data-v-1c009466]{position:absolute;left:50%;top:48%;transform:translate(-50%,-48%)}",""]),t.exports=e},306:function(t,e,o){var content=o(317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("ef1be670",content,!0,{sourceMap:!1})},316:function(t,e,o){"use strict";var r=o(306);o.n(r).a},317:function(t,e,o){(e=o(21)(!1)).push([t.i,".vueperslide{background-size:contain;background-repeat:no-repeat}.products-page-gallery .vueperslide,.products-page-gallery .vueperslide__image{background-position:50%}",""]),t.exports=e},327:function(t,e,o){"use strict";o.r(e);o(20),o(161);var r={props:{photos:{type:Array,default:function(){return[]}},photo:{type:String}},computed:{images:function(){return this.photos.map((function(p){return p.full}))}},watch:{photo:function(t){var e=this.photos.findIndex((function(p){return p.full===t}));e>-1&&this.$refs.slider.goToSlide(e)}}},c=(o(316),o(11)),n=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("div",{staticClass:"col-lg-6 col-md-6"},[e("div",{staticClass:"products-page-gallery"},[e("div",{staticClass:"product-page-gallery-main"},[e("vueper-slides",{ref:"slider",attrs:{bullets:!1}},this._l(this.images,(function(img,i){return e("vueper-slide",{key:i,attrs:{image:img}})})),1)],1)])])])}),[],!1,null,null,null).exports,l=(o(90),{data:function(){return{getExistPId:!1,quantity:1,selectedColor:null,selectedSize:null,selectedVariation:null}},props:["product"],computed:{cart:function(){return this.$store.getters.cart},wishlist:function(){return this.$store.getters.wishlist},stock:function(){var t,e,o=this;return this.selectedColor&&this.selectedSize?(this.selectedVariation=this.product.variations.find((function(p){return p.color_product_id==o.selectedColor.id&&p.product_size_id==o.selectedSize.id})),this.selectedVariation?this.selectedVariation.quantity:0):this.selectedColor?(this.selectedVariation=this.product.variations.find((function(p){return p.color_product_id==o.selectedColor.id})),this.selectedVariation?this.selectedVariation.quantity:0):this.selectedSize?(this.selectedVariation=this.product.variations.find((function(p){return p.product_size_id==o.selectedSize.id})),this.selectedVariation?this.selectedVariation.quantity:0):this.selectedColor||this.selectedSize||!this.product.variations||(null===(t=this.product.variations[0])||void 0===t?void 0:t.color_product_id)||(null===(e=this.product.variations[0])||void 0===e?void 0:e.product_size_id)?0:(this.selectedVariation=this.product.variations[0],this.selectedVariation?this.selectedVariation.quantity:0)},cantBuy:function(){return 0===this.stock&&this.product.sizes&&this.product.sizes.length>0&&this.product.colors&&this.product.colors.length>0}},methods:{addToCart:function(){var t=this;if(this.selectedColor||this.selectedSize||!this.cantBuy)if(this.cantBuy)this.$toast.error("Rupture de stock",{icon:"fas fa-exclamation-triangle"});else{if(this.product.offerPrice>0)var e=this.product.offerPrice;else e=this.product.price;var o=[{id:this.product.id,label:this.product.label,price:e,image:this.getImage(this.product.photos),quantity:this.quantity,color:this.selectedColor,size:this.selectedSize,category:this.product.category,stock:this.stock}];if(this.cart&&this.cart.length>0){var r=this.id;-1==this.cart.findIndex((function(e){return e.id==r&&e.color&&e.color.id==t.selectedColor.id&&e.size&&e.size.id==t.selectedSize.id}))?(this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})):(this.getExistPId=!0,this.$toast.info("Produit déjà ajouté au panier"))}else this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})}else this.$toast.error("Vous devez d'abord sélectionner la taille et la couleur",{icon:"fas fa-exclamation-triangle"})},addToWishlist:function(t){-1==this.wishlist.findIndex((function(e){return e.id==t.id}))?(this.$store.dispatch("addToWishlist",t),this.$toast("Produit ajouté au favoris",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au favoris!")},increaseQuantity:function(){0===this.stock?this.$toast.error("Rupture de stock",{icon:"fas fa-cart-plus"}):this.quantity>=this.stock?this.$toast.error("Vous ne pouvez pas ajouter plus de "+this.stock,{icon:"fas fa-cart-plus"}):this.quantity++},decreaseQuantity:function(){this.quantity<2?this.$toast.error("Vous ne pouvez pas ajouter moins de 1",{icon:"fas fa-cart-plus"}):this.quantity--},getImage:function(t){return Array.isArray(t)&&t.hasOwnProperty(0)?t[0].full:null},selectSize:function(t){this.selectedSize=t},selectColor:function(t){this.selectedColor=t,t.photo&&this.$emit("changed-photo",t.photo)},buyProduct:function(){if(this.cantBuy)this.$toast.error("Veuillez sélectionner la taille et la couleur!",{icon:"fas fa-cart-plus"});else{var t=[{id:this.product.id,label:this.product.label,price:this.product.price,image:this.getImage(this.product.photos),quantity:this.quantity,color:this.selectedColor,size:this.selectedSize,variation:this.selectedVariation}];this.$store.dispatch("setProduct",t),this.$router.push("/checkout?product="+this.product.id)}}}}),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-6 col-md-6"},[o("div",{staticClass:"product-details-content"},[o("h3",[t._v(t._s(t.product.label))]),t._v(" "),o("div",{staticClass:"price"},[o("span",{staticClass:"new-price"},[t.product.offerPrice>0?o("span",{staticClass:"old-price"},[t._v("\n                    "+t._s(t.product.price)+"\n                    "),o("span",{staticClass:"new-price"},[t._v(t._s(t.product.offerPrice))])]):o("span",[t._v(t._s(t.product.price))]),t._v(" "),o("span",{staticStyle:{"font-size":"12px"}},[t._v(" DZD")])])]),t._v(" "),o("div",{staticClass:"product-review"},[o("div",{staticClass:"rating"},t._l(Math.floor(t.product.rating||5),(function(t){return o("i",{staticClass:"fas fa-star"})})),0),t._v(" "),o("div",{staticClass:"rating-count"},[t._v("Avis: "+t._s(Math.floor(t.product.rating||5))+" / 5")])]),t._v(" "),o("ul",{staticClass:"product-info"},[o("li",[o("span",[t._v("Disponibilité:")]),t._v(" "),t.stock?o("a",[+t.stock>=1?o("span",{staticStyle:{color:"green"}},[t._v("en stock")]):t._e(),t._v(" "),+t.stock<1?o("span",{staticStyle:{color:"red"}},[t._v("en rupture")]):t._e()]):o("a",[t._v("Veuillez sélectionner la taille et la couleur")])]),t._v(" "),o("li",[o("span",[t._v("Type de produit:")]),t._v(" "),o("a",[t._v(t._s(t.product.category?t.product.category.label:"-"))])])]),t._v(" "),t.product.colors&&t.product.colors.length>0?o("div",{staticClass:"product-color-switch"},[o("h4",[t._v("Couleurs:")]),t._v(" "),o("ul",t._l(t.product.colors,(function(e,r){return o("li",{key:r,class:{active:t.selectedColor&&t.selectedColor.id===e.id},on:{click:function(o){return t.selectColor(e)}}},[o("a",{attrs:{title:"Couleur"}},[o("span",{style:"background-color: "+e.code})])])})),0)]):t._e(),t._v(" "),t.product.sizes&&t.product.sizes.length>0?o("div",{staticClass:"product-size-wrapper"},[o("h4",[t._v("Taille:")]),t._v(" "),o("ul",t._l(t.product.sizes,(function(e,r){return o("li",{key:r,class:{active:t.selectedSize&&t.selectedSize===e},on:{click:function(o){return t.selectSize(e)}}},[o("a",[t._v(t._s(e.label))])])})),0)]):o("div",{staticStyle:{height:"100px"}}),t._v(" "),o("div",{staticClass:"product-add-to-cart"},[o("div",{staticClass:"input-counter"},[o("span",{staticClass:"minus-btn",on:{click:function(e){return t.decreaseQuantity()}}},[o("i",{staticClass:"fas fa-minus"})]),t._v("\n                "+t._s(t.quantity)+"\n                "),o("span",{staticClass:"plus-btn",on:{click:function(e){return t.increaseQuantity()}}},[o("i",{staticClass:"fas fa-plus"})])]),t._v(" "),t.getExistPId?o("button",{staticClass:"btn btn-danger",class:{"btn-disabled":t.cantBuy},attrs:{type:"submit"},on:{click:function(e){return t.addToCart()}}},[o("i",{staticClass:"fas fa-cart-plus"}),t._v(" Déja ajouté\n            ")]):o("button",{staticClass:"btn btn-primary",class:{"btn-disabled":t.cantBuy},attrs:{type:"submit"},on:{click:function(e){return t.addToCart(t.product)}}},[o("i",{staticClass:"fas fa-cart-plus"}),t._v(" Ajouter au panier\n            ")])]),t._v(" "),o("div",{staticClass:"wishlist-compare-btn"},[o("a",{staticClass:"btn btn-light",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToWishlist(t.product)}}},[o("i",{staticClass:"far fa-heart"}),t._v(" Ajouter au favoris")])]),t._v(" "),o("div",{staticClass:"buy-checkbox-btn"},[o("div",{staticClass:"item"},[o("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:void(0)"},on:{click:t.buyProduct}},[t._v("Achetez-le maintenant!")])])])])])}),[],!1,null,null,null).exports,h={props:{description:{type:String,default:'<p class="d-flex justify-content-center font-weight-bold">Aucune déscription trouvée!</p>'}}},f=Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"tab products-details-tab"},[e("div",{staticClass:"row"},[this._m(0),this._v(" "),e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"tab_content"},[e("div",{staticClass:"tabs_item"},[e("div",{staticClass:"products-details-tab-content",domProps:{innerHTML:this._s(this.description)}})])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12 col-md-12"},[e("ul",{staticClass:"tabs"},[e("li",[e("a",{attrs:{href:"#"}},[e("div",{staticClass:"dot"}),this._v(" Description\n                    ")])])])])}],!1,null,null,null).exports,v=o(300),_=o(52),m=o(299),C={components:{ProductItem:v.a,QuckView:m.a},props:{relatedProducts:{type:Array,default:function(){return[]}}},methods:{toggle:function(t){_.a.toggleQuickView(t)}}},y=Object(c.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-12 col-md-12"},[o("div",{staticClass:"related-products-area"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},t._l(t.relatedProducts,(function(e){return o("ProductItem",{key:e.id,attrs:{product:e,className:"col-lg-3 col-md-6 col-6"},on:{clicked:function(o){return t.toggle(e)}}})})),1)])]),t._v(" "),o("QuckView")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h2",[e("span",{staticClass:"dot"}),this._v(" Produits connexes")])])}],!1,null,null,null).exports,k={components:{Loader:o(298).a,ProductImages:n,Details:d,DetailsInfo:f,RelatedProducts:y},data:function(){return{loading:!0,product:{id:this.$route.hash.substring(1)},relatedProducts:[],photo:null}},computed:{id:function(){var path=this.$route.path.split("/");return/^\d+$/.test(path[path.length-1])?path[path.length-1]:null}},mounted:function(){this.loadProduct(),window.scrollTo(0,0)},methods:{loadProduct:function(){var t=this;this.id||this.$router.push("/"),this.$axios.$get("/product/"+this.id).then((function(e){t.product=e.product,t.relatedProducts=e.relatedProducts,t.loading=!1})).catch((function(e){t.loading=!1}))},changedPhoto:function(t){this.photo=t},reloadProduct:function(t){}}},z=Object(c.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"page-title-area"},[o("div",{staticClass:"container"},[o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/"}},[t._v("Accueil")])],1),t._v(" "),o("li",[t._v(t._s(t.product.label))])])])]),t._v(" "),o("section",{staticClass:"products-details-area ptb-60"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[t.product.photos?o("ProductImages",{attrs:{photo:t.photo,photos:t.product.photos}}):t._e(),t._v(" "),o("Details",{attrs:{product:t.product},on:{"changed-photo":t.changedPhoto}}),t._v(" "),o("DetailsInfo",{attrs:{description:t.product.description}}),t._v(" "),o("RelatedProducts",{attrs:{"related-products":t.relatedProducts},on:{reload:t.reloadProduct}})],1)])]),t._v(" "),t.loading?o("loader"):t._e()],1)}),[],!1,null,null,null);e.default=z.exports}}]);