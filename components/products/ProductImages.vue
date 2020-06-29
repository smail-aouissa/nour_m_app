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
            if(this.photo)
                return [this.photo].concat(this.photos.map( p => p.full ))
            else
                return this.photos.map( p => p.full )
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