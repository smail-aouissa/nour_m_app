(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{337:function(t,e,o){"use strict";o.r(e);var r=o(10),n=(o(18),o(314)),c=o(315),l={name:"category",components:{Loader:o(303).a,Sidebar:n.a,AllProducts:c.a},data:function(){return{busy:!1,loading:!1,type:{name:"Catégorie",url:"/category",id:null},sections:[],colors:[],sizes:[],prices:[],products:[],filter:{},page:1,endOfScroll:!1}},computed:{id:function(){var path=this.$route.path.split("/");return/^\d+$/.test(path[path.length-1])?(this.type.id=path[path.length-1],path[path.length-1]):null},topProduct:function(){return Object(r.a)(this.products).sort((function(){return.5-Math.random()})).slice(0,3)}},mounted:function(){this.loadCategory(),this.loadProducts(this.filter),window.scrollTo(0,0)},watch:{id:function(t){this.loadProducts(this.filter)}},methods:{loadCategory:function(){var t=this;this.$axios.$get("/categories").then((function(e){t.sections=e.sections,t.colors=e.colors,t.sizes=e.sizes})).catch((function(e){t.$router.push("/")}))},loadProducts:function(data){var t=this;this.id||this.$router.push("/"),data&&(this.page=1,this.filter=data),this.id&&this.id>=0&&(this.loading=!0,this.busy=!0,this.$axios.$post("/category/".concat(this.id,"?page=").concat(this.page),this.filter).then((function(e){var o=e.products.data;if(data)t.products=o;else for(var i=0;i<o.length;i++)t.products.push(o[i]);t.loading=!1,t.page=e.current_page+1,e.next_page_url?setTimeout((function(){t.busy=!1}),500):t.endOfScroll=!0})).catch((function(e){t.loading=!1})))}}},d=o(12),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"page-title-area"},[o("div",{staticClass:"container"},[o("ul",[o("li",[o("nuxt-link",{attrs:{to:"/"}},[t._v("Accueil")])],1),t._v(" "),o("li",[t._v("Catégorie")])])])]),t._v(" "),o("section",{staticClass:"products-collections-area ptb-60"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadProducts,expression:"loadProducts"}],attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[o("div",{staticClass:"row"},[o("Sidebar",{attrs:{type:t.type,sections:t.sections,colors:t.colors,sizes:t.sizes,"top-products":t.topProduct},on:{"changed-filter":t.loadProducts}}),t._v(" "),o("AllProducts",{attrs:{products:t.products}})],1)]),t._v(" "),t.endOfScroll?o("div",{staticClass:"section-title"},[o("h2",[t._v("Vous êtes tous rattrapés")])]):t._e()])]),t._v(" "),o("Loader",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h2",[e("span",{staticClass:"dot"}),this._v(" Produits de la catégorie")])])}],!1,null,null,null);e.default=component.exports}}]);