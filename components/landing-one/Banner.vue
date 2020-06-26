<template>
    <!-- Start Main Banner Area -->
    <client-only>
        <carousel :autoplay="true" :loop="true" :autoplay-timeout="3000" :paginationEnabled="false" :per-page="1">
            <slide v-for="(slider, key) in sliders" :key="key">
                <div class="d-table mt-5" style="position: absolute; z-index: 2">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="main-banner-content">
                                <h1 class="text-truncate">{{slider.title}}</h1>
                                <p>{{slider.content}}</p>

                                <a v-if="slider.link" :href="slider.link" class="btn btn-primary">Voir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="">
                    <img v-if="slider.photo" :src="slider.photo" class="slider-height" style="object-fit: cover">
                </div>
            </slide>
        </carousel>
    </client-only>

    <!-- End Main Banner Area -->
</template>

<script>
export default {
    name: 'Banner',
    props: {
        sliders :{
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
    @media only screen and (max-width: 600px) {
        .slider-height{
            height: 200px;
        }
    }

    @media only screen and (min-width: 600px) {
        .slider-height{
            height: 600px;
            width: 100%;
        }
    }
</style>