(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{296:function(t,e,o){var content=o(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("fb8efe64",content,!0,{sourceMap:!1})},297:function(t,e,o){t.exports=o.p+"img/category-no-image.8ea774c.jpg"},298:function(t,e,o){"use strict";o(166);var r=o(54),c={name:"QuckView",data:function(){return{quantity:1,stock:1,selectedColor:null,selectedSize:null}},methods:{closeQuickView:function(){this.quantity=1,this.selectedColor=null,this.selectedSize=null,r.a.toggleQuickView(null)},addToCart:function(t){var e=this,o=[{id:t.id,label:t.label,price:t.price-(t.offerPrice||0),image:this.getImage(t.photos),quantity:this.quantity,color:this.selectedColor,size:this.selectedSize}];if(this.cart.length>0){var r=t.id;this.getExistPId=r,-1==this.cart.findIndex((function(t){return t.id==r&&t.color&&t.color.id==e.selectedColor.id&&t.size&&t.size.id==e.selectedSize.id}))?(this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au panier")}else this.$store.dispatch("addToCart",o),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"});this.closeQuickView()},increaseQuantity:function(){this.quantity>=this.stock?this.$toast.error("Vous ne pouvez pas ajouter plus de "+this.item.stock,{icon:"fas fa-cart-plus"}):this.quantity++},decreaseQuantity:function(){this.quantity<2?this.$toast.error("Vous ne pouvez pas ajouter moins de 1",{icon:"fas fa-cart-plus"}):this.quantity--},getImage:function(t){return Array.isArray(t)&&t.hasOwnProperty(0)?t[0].full:null},selectSize:function(t){this.selectedSize=t,t.quantity&&(this.stock=t.quantity)},selectColor:function(t){this.selectedColor=t,t.quantity&&(this.stock=t.quantity)}},computed:{isQuickViewOpen:function(){return r.b.isQuickViewOpen},cart:function(){return this.$store.getters.cart},item:function(){return this.stock=r.b.item.colors.reduce((function(a,b){return a+(b.quantity||0)}),0),r.b.item}}},n=(o(300),o(12)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isQuickViewOpen?r("div",{staticClass:"modal-backdrop"}):t._e(),t._v(" "),r("transition",{attrs:{name:"slide-fade"}},[t.isQuickViewOpen&&t.item?r("div",{staticClass:"modal fade productQuickView",attrs:{id:"productQuickView",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[r("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeQuickView}},[r("span",{attrs:{"aria-hidden":"true"}},[r("i",{staticClass:"fas fa-times"})])]),t._v(" "),r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"productQuickView-image"},[t.getImage(t.item.photos)?r("img",{attrs:{src:t.getImage(t.item.photos),alt:"image"}}):r("img",{attrs:{src:o(297),alt:"image"}})])]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-6"},[r("div",{staticClass:"product-content"},[r("h3",[r("a",{attrs:{href:"#"}},[t._v(t._s(t.item.label))])]),t._v(" "),r("div",{staticClass:"price"},[r("span",[t._v(t._s(t.item.price-(t.item.offerPrice||0))+" DZD")])]),t._v(" "),r("div",{staticClass:"product-review"},[r("div",{staticClass:"rating"},t._l(Math.floor(t.item.rating||5),(function(t){return r("i",{staticClass:"fas fa-star"})})),0),t._v(" "),r("a",{staticClass:"rating-count"},[t._v("Avis: "+t._s(Math.floor(t.item.rating||5))+" / 5")])]),t._v(" "),r("ul",{staticClass:"product-info"},[r("li",[r("span",[t._v("Disponibilité:")]),t._v(" "),r("a",[t._v("en stock ("+t._s(t.stock||1)+" produits)")])]),t._v(" "),r("li",[r("span",[t._v("Type de produit:")]),t._v(" "),r("a",[t._v(t._s(t.item.category?t.item.category.label:"-"))])])]),t._v(" "),t.item.colors.length?r("div",{staticClass:"product-color-switch"},[r("h4",[t._v("Couleurs:")]),t._v(" "),r("ul",t._l(t.item.colors,(function(e,o){return r("li",{key:o,class:{active:t.selectedColor&&t.selectedColor.id===e.id},on:{click:function(o){return t.selectColor(e)}}},[r("a",{attrs:{title:"Couleur"}},[r("span",{style:"background-color: "+e.code})])])})),0)]):r("div",{staticStyle:{height:"60px"}}),t._v(" "),t.item.sizes.length?r("div",{staticClass:"product-size-wrapper"},[r("h4",[t._v("Taille:")]),t._v(" "),r("ul",t._l(t.item.sizes,(function(e,o){return r("li",{key:o,class:{active:t.selectedSize&&t.selectedSize.id===e.id},on:{click:function(o){return t.selectSize(e)}}},[r("a",[t._v(t._s(e.label))])])})),0)]):r("div",{staticStyle:{height:"60px"}}),t._v(" "),r("div",{staticClass:"product-add-to-cart"},[r("div",{staticClass:"input-counter"},[r("span",{staticClass:"minus-btn",on:{click:function(e){return t.decreaseQuantity()}}},[r("i",{staticClass:"fas fa-minus"})]),t._v("\n                                            "+t._s(t.quantity)+"\n                                        "),r("span",{staticClass:"plus-btn",on:{click:function(e){return t.increaseQuantity()}}},[r("i",{staticClass:"fas fa-plus"})])]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.addToCart(t.item)}}},[r("i",{staticClass:"fas fa-cart-plus"}),t._v(" Ajouter au panier\n                                    ")])]),t._v(" "),r("nuxt-link",{staticClass:"view-full-info",attrs:{to:"/products-details/"+t.item.id}},[t._v("Afficher toutes les informations")])],1)])])])])]):t._e()])],1)}),[],!1,null,"22d1dec4",null);e.a=component.exports},299:function(t,e,o){"use strict";o(166);var r={name:"ProductItem",data:function(){return{getExistPId:null}},props:["product","className"],computed:{cart:function(){return this.$store.getters.cart},wishlist:function(){return this.$store.getters.wishlist}},methods:{quickView:function(t){this.$emit("clicked")},addToCart:function(t){var e=[{id:t.id,label:t.label,price:t.price-(t.offerPrice||0),image:this.getImage(t.photos),quantity:1,color:null,size:null}];if(this.cart.length>0){var o=t.id;this.getExistPId=o,-1==this.cart.findIndex((function(t){return t.id==o}))?(this.$store.dispatch("addToCart",e),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au panier!")}else this.$store.dispatch("addToCart",e),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})},addToWishlist:function(t){-1==this.wishlist.findIndex((function(e){return e.id==t.id}))?(this.$store.dispatch("addToWishlist",t),this.$toast("Produit ajouté au favoris",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au favoris!")},getImage:function(t){return Array.isArray(t)&&t.hasOwnProperty(0)?t[0].full:null},getImageHover:function(t){return Array.isArray(t)&&t.hasOwnProperty(1)?t[1].full:null}}},c=o(12),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{class:t.className},[r("div",{staticClass:"single-product-box"},[r("div",{staticClass:"product-image"},[t.product.photos?r("nuxt-link",{attrs:{to:"/products-details/"+t.product.id}},[t.getImage(t.product.photos)?r("img",{attrs:{src:t.getImage(t.product.photos)}}):r("img",{attrs:{src:o(297)}}),t._v(" "),t.getImageHover(t.product.photos)?r("img",{attrs:{src:t.getImageHover(t.product.photos)}}):t._e()]):t._e(),t._v(" "),r("ul",[r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"javascript:void(0)",title:"Aperçu rapide"},on:{click:function(e){return e.preventDefault(),t.quickView(e)}}},[r("i",{staticClass:"far fa-eye"})])]),t._v(" "),r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Ajouter à la liste de souhaits"},on:{click:function(e){return e.preventDefault(),t.addToWishlist(t.product)}}},[r("i",{staticClass:"far fa-heart"})])])])],1),t._v(" "),r("div",{staticClass:"product-content"},[r("h3",[r("nuxt-link",{attrs:{to:"/products-details/"+t.product.id}},[t._v(t._s(t.product.label))])],1),t._v(" "),r("div",{staticClass:"product-price"},[t.product.offerPrice?r("span",{staticClass:"old-price"},[t._v("\n                    "+t._s(t.product.price-(t.product.offerPrice||0))+" "),r("span",{staticStyle:{"font-size":"10px"}},[t._v("DZD")])]):t._e(),t._v(" "),r("span",{staticClass:"new-price"},[t._v(t._s(t.product.price)+" "),r("span",{staticStyle:{"font-size":"12px"}},[t._v("DZD")])])]),t._v(" "),r("div",{staticClass:"rating"},t._l(Math.floor(t.product.rating||5),(function(t){return r("i",{staticClass:"fas fa-star"})})),0),t._v(" "),t.getExistPId===t.product.id?r("a",{staticClass:"btn btn-light added-btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Déja ajouté!\n            ")]):r("a",{staticClass:"btn btn-light",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Ajouter au panier\n            ")])])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},300:function(t,e,o){"use strict";var r=o(296);o.n(r).a},301:function(t,e,o){(e=o(26)(!1)).push([t.i,".slide-fade-enter-active[data-v-22d1dec4]{transition:all .3s ease}.slide-fade-leave-active[data-v-22d1dec4]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-22d1dec4],.slide-fade-leave-to[data-v-22d1dec4]{transform:translateX(10px);opacity:0}.modal-backdrop[data-v-22d1dec4]{background-color:rgba(0,0,0,.5);width:100vw;height:100vh;position:fixed;top:0;left:0;cursor:pointer;z-index:9}",""]),t.exports=e},354:function(t,e,o){"use strict";o.r(e);var r={props:{photos:{type:Array,default:function(){return[]}},photo:{type:String}},watch:{photo:function(t){this.photos.indexOf((function(p){return p}))&&console.log(t)}},computed:{images:function(){return this.photo?[this.photo].concat(this.photos.map((function(p){return p.full}))):this.photos.map((function(p){return p.full}))}}},c=o(12),n=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("div",{staticClass:"col-lg-6 col-md-6"},[e("div",{staticClass:"products-page-gallery"},[e("div",{staticClass:"product-page-gallery-main"},[e("vueper-slides",{ref:"slider",attrs:{bullets:!1}},this._l(this.images,(function(img,i){return e("vueper-slide",{key:i,attrs:{image:img}})})),1)],1)])])])}),[],!1,null,null,null).exports,l=(o(166),{data:function(){return{getExistPId:!1,stock:1,quantity:1,selectedColor:null,selectedSize:null}},props:["product"],computed:{cart:function(){return this.$store.getters.cart},wishlist:function(){return this.$store.getters.wishlist}},methods:{addToCart:function(){var t=this,e=[{id:this.product.id,label:this.product.label,price:this.product.price,image:this.getImage(this.product.photos),quantity:this.quantity,color:this.selectedColor,size:this.selectedSize}];if(this.cart&&this.cart.length>0){var o=this.id;-1==this.cart.findIndex((function(e){return e.id==o&&e.color&&e.color.id==t.selectedColor.id&&e.size&&e.size.id==t.selectedSize.id}))?(this.$store.dispatch("addToCart",e),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})):(this.getExistPId=!0,this.$toast.info("Produit déjà ajouté au panier"))}else this.$store.dispatch("addToCart",e),this.$toast("Ajouté au panier",{icon:"fas fa-cart-plus"})},addToWishlist:function(t){-1==this.wishlist.findIndex((function(e){return e.id==t.id}))?(this.$store.dispatch("addToWishlist",t),this.$toast("Produit ajouté au favoris",{icon:"fas fa-cart-plus"})):this.$toast.info("Produit déjà ajouté au favoris!")},increaseQuantity:function(){this.quantity>this.product.stock?this.$toast.error("Vous ne pouvez pas ajouter plus de "+this.item.stock,{icon:"fas fa-cart-plus"}):this.quantity++},decreaseQuantity:function(){this.quantity<2?this.$toast.error("Vous ne pouvez pas ajouter moins de 1",{icon:"fas fa-cart-plus"}):this.quantity--},getImage:function(t){return Array.isArray(t)&&t.hasOwnProperty(0)?t[0].full:null},selectSize:function(t){this.selectedSize=t,t.quantity&&(this.stock=t.quantity)},selectColor:function(t){this.selectedColor=t,t.quantity&&(this.stock=t.quantity),t.photo&&this.$emit("changed-photo",t.photo)},buyProduct:function(){var t=[{id:this.product.id,label:this.product.label,price:this.product.price,image:this.getImage(this.product.photos),quantity:this.quantity,color:this.selectedColor,size:this.selectedSize}];this.$store.dispatch("setProduct",t),this.$router.push("/checkout?product="+this.product.id)}}}),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-6 col-md-6"},[o("div",{staticClass:"product-details-content"},[o("h3",[t._v(t._s(t.product.label))]),t._v(" "),o("div",{staticClass:"price"},[o("span",{staticClass:"new-price"},[t._v(t._s(t.product.price-(t.product.offerPrice||0))+"\n                "),o("span",{staticStyle:{"font-size":"12px"}},[t._v(" DZD")])])]),t._v(" "),o("div",{staticClass:"product-review"},[o("div",{staticClass:"rating"},t._l(Math.floor(t.product.rating||5),(function(t){return o("i",{staticClass:"fas fa-star"})})),0),t._v(" "),o("div",{staticClass:"rating-count"},[t._v("Avis: "+t._s(Math.floor(t.product.rating||5))+" / 5")])]),t._v(" "),o("ul",{staticClass:"product-info"},[o("li",[o("span",[t._v("Disponibilité:")]),t._v(" "),o("a",[t._v("en stock ("+t._s(t.stock||1)+" produits)")])]),t._v(" "),o("li",[o("span",[t._v("Type de produit:")]),t._v(" "),o("a",[t._v(t._s(t.product.category?t.product.category.label:"-"))])])]),t._v(" "),t.product.colors&&t.product.colors.length>0?o("div",{staticClass:"product-color-switch"},[o("h4",[t._v("Couleurs:")]),t._v(" "),o("ul",t._l(t.product.colors,(function(e,r){return o("li",{key:r,class:{active:t.selectedColor&&t.selectedColor.id===e.id},on:{click:function(o){return t.selectColor(e)}}},[o("a",{attrs:{title:"Couleur"}},[o("span",{style:"background-color: "+e.code})])])})),0)]):t._e(),t._v(" "),t.product.sizes&&t.product.sizes.length>0?o("div",{staticClass:"product-size-wrapper"},[o("h4",[t._v("Taille:")]),t._v(" "),o("ul",t._l(t.product.sizes,(function(e,r){return o("li",{key:r,class:{active:t.selectedSize&&t.selectedSize===e},on:{click:function(o){return t.selectSize(e)}}},[o("a",[t._v(t._s(e.label))])])})),0)]):o("div",{staticStyle:{height:"100px"}}),t._v(" "),o("div",{staticClass:"product-add-to-cart"},[o("div",{staticClass:"input-counter"},[o("span",{staticClass:"minus-btn",on:{click:function(e){return t.decreaseQuantity()}}},[o("i",{staticClass:"fas fa-minus"})]),t._v("\n                "+t._s(t.quantity)+"\n                "),o("span",{staticClass:"plus-btn",on:{click:function(e){return t.increaseQuantity()}}},[o("i",{staticClass:"fas fa-plus"})])]),t._v(" "),t.getExistPId?o("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:function(e){return t.addToCart()}}},[o("i",{staticClass:"fas fa-cart-plus"}),t._v(" Déja ajouté\n            ")]):o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.addToCart(t.product)}}},[o("i",{staticClass:"fas fa-cart-plus"}),t._v(" Ajouter au panier\n            ")])]),t._v(" "),o("div",{staticClass:"wishlist-compare-btn"},[o("a",{staticClass:"btn btn-light",attrs:{href:"#"},on:{click:function(e){return t.addToWishlist(t.product)}}},[o("i",{staticClass:"far fa-heart"}),t._v(" Ajouter au favoris")])]),t._v(" "),o("div",{staticClass:"buy-checkbox-btn"},[o("div",{staticClass:"item"},[o("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:t.buyProduct}},[t._v("Achetez-le maintenant!")])])])])])}),[],!1,null,null,null).exports,h={props:{description:{type:String,default:'<p class="d-flex justify-content-center font-weight-bold">Aucune déscription trouvée!</p>'}}},f=Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"tab products-details-tab"},[e("div",{staticClass:"row"},[this._m(0),this._v(" "),e("div",{staticClass:"col-lg-12 col-md-12"},[e("div",{staticClass:"tab_content"},[e("div",{staticClass:"tabs_item text-center"},[e("div",{staticClass:"products-details-tab-content",domProps:{innerHTML:this._s(this.description)}})])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12 col-md-12"},[e("ul",{staticClass:"tabs"},[e("li",[e("a",{attrs:{href:"#"}},[e("div",{staticClass:"dot"}),this._v(" Description\n                    ")])])])])}],!1,null,null,null).exports,v=o(299),_=o(54),m=o(298),C={components:{ProductItem:v.a,QuckView:m.a},props:{relatedProducts:{type:Array,default:function(){return[]}}},methods:{toggle:function(t){_.a.toggleQuickView(t)}}},y={components:{ProductImages:n,Details:d,DetailsInfo:f,RelatedProducts:Object(c.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"related-products-area"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},t._l(t.relatedProducts,(function(e){return o("ProductItem",{key:e.id,attrs:{product:e,className:"col-lg-3 col-md-6 col-6"},on:{clicked:function(o){return t.toggle(e)}}})})),1)])]),t._v(" "),o("QuckView")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h2",[e("span",{staticClass:"dot"}),this._v(" Produits connexes")])])}],!1,null,null,null).exports},data:function(){return{product:{id:this.$route.params.id},relatedProducts:[],photo:null}},mounted:function(){this.loadProduct()},methods:{loadProduct:function(){var t=this;this.product.id||this.$router.push("/"),this.$axios.$get("/product/"+this.product.id).then((function(e){t.product=e.product,t.relatedProducts=e.relatedProducts})).catch((function(t){console.log(t)}))},changedPhoto:function(t){this.photo=t}}},k=Object(c.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"page-title-area"},[o("div",{staticClass:"container"},[o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/"}},[t._v("Accueil")])],1),t._v(" "),o("li",[t._v(t._s(t.product.label))])])])]),t._v(" "),o("section",{staticClass:"products-details-area ptb-60"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[t.product.photos?o("ProductImages",{attrs:{photo:t.photo,photos:t.product.photos}}):t._e(),t._v(" "),o("Details",{attrs:{product:t.product},on:{"changed-photo":t.changedPhoto}}),t._v(" "),o("DetailsInfo",{attrs:{description:t.product.description}}),t._v(" "),o("RelatedProducts",{attrs:{"related-products":t.relatedProducts}})],1)])])])}),[],!1,null,null,null);e.default=k.exports}}]);