<template>
    <client-only>
        <div class="col-lg-6 col-md-6">
            <div class="products-page-gallery">
                <div class="product-page-gallery-main">
                    <vueper-slides
                        ref="slider"
                        :bullets = "false">
                        <vueper-slide
                            v-for="(img, i) in images"
                            :key="i"
                            :image="img" />
                    </vueper-slides>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
export default {
    props: {
        photos:{
            type: Array,
            default: () => []
        },
        photo:{
            type: String,
        }
    },
    computed:{
        images(){
            return this.photos.map( p => p.full )
        }
    },
    watch:{
        photo(newVal){
            let index = this.photos.findIndex(p => p.full === newVal)
            if(index > -1) this.$refs['slider'].goToSlide(index);
        }
    }
}
</script>

<style>
    .vueperslide{
        background-size: contain;
        background-repeat: no-repeat;
    }
    .products-page-gallery .vueperslide, .products-page-gallery .vueperslide__image {
        background-position: center center;
    }
</style>