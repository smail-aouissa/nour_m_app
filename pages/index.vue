<template>
  <div>
    <Banner :sliders="sliders"></Banner>
    <Offer :categories="categories"></Offer>
    <LatestProducts :products="latestProducts"></LatestProducts>
    <ProductCategory :collections="collections"></ProductCategory>
    <BestSellers :products="bestSellersProducts"></BestSellers>
    <Testimonials :testimonials="testimonials"></Testimonials>
    <Facility></Facility>
  </div>
</template>

<script>
import Banner from '../components/landing-one/Banner';
import Offer from '../components/landing-one/Offer';
import LatestProducts from '../components/landing-one/LatestProducts';
import ProductCategory from '../components/landing-one/ProductCategory';
import TrendingProducts from '../components/landing-one/TrendingProducts';
import BestSellers from '../components/landing-one/BestSellers';
import Facility from '../components/landing-one/Facility';
import Testimonials from '../components/landing-one/Testimonials';
import News from '../components/landing-one/News';
import Subscribe from '../components/common/Subscribe';
import Partner from '../components/common/Partner';
import InstagramPhotos from '../components/common/InstagramPhotos';

export default {
  components: {
    Banner, Offer, LatestProducts, ProductCategory,
    BestSellers, Facility, Testimonials, Subscribe,
  },
  data(){
    return {
      sliders: [],
      categories: [],
      latestProducts : [],
      bestSellersProducts: [],
      collections: [],
      testimonials: [],
    }
  },
  mounted() {
    this.loadData()
  },
  methods:{
    loadData(){
      this.$axios.$get('/home').then(response => {
        this.sliders = response.sliders;
        this.categories = response.categories;
        this.latestProducts = response.latestProducts;
        this.bestSellersProducts = response.bestSellersProducts;
        this.collections = response.collections;
        this.testimonials = response.testimonials;
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>