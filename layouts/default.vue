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
      this.$axios.$get('/').then(response => {
        this.topPanelItems = response.topPanelItems;
        this.categories = response.categories;
      }).catch(error => {
        console.log(error)
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
    setTimeout(() => { this.loading = false; }, 500);
    this.$store.dispatch('initStore')
  }
}
</script>