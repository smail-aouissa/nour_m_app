<template>
  <div>
    <TopPanel :items="topPanelItems" v-if="isShowing" @clicked="onTopPanelClose"></TopPanel>
    <Menubar :categories="categories"></Menubar>
    <nuxt />
    <Footer></Footer>
    <SiteLoader  v-if="loading" />
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import TopPanel from './TopPanel';
import Menubar from './Menubar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import SiteLoader from './SiteLoder';
export default {
  components: {
    TopPanel, Menubar, Footer, BackToTop, SiteLoader
  },
  data() {
    return {
      loading: true,
      isShowing: true,
      topPanelItems : [],
      categories: []
    }
  },
  methods: {
    onTopPanelClose (value) {
      this.isShowing = value;
    },
    loadData(){
      this.$axios.$get('/layout').then(response => {
        this.topPanelItems = response.topPanelItems;
        this.categories = response.categories;
        setTimeout(() => { this.loading = false; }, 500);
      }).catch(error => {
        console.log(error)
        this.loading = false;
      })
    }
  },
  watch: {
    '$route' (pathUrl){
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 500);
    }
  },
  mounted(){
    this.loadData();
    this.$store.dispatch('initStore')
  }
}
Array.from(document.getElementsByClassName("product-image")).forEach(
    function(element, index, array) {
        // do stuff
    }
);
</script>