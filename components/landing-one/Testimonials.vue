<template>
    <client-only>
        <!-- Start Testimonials Area -->
        <div>
            <section v-if="testimonials && testimonials.length" class="testimonials-area ptb-60 jarallax" data-jarallax='{"speed": 0.3}'>
                <div class="container">
                    <div class="testimonials-slides owl-carousel owl-theme">
                        <carousel
                                :autoplay = true
                                :autoplayTimeout = 1000
                                :perPageCustom = "[[0, 1], [768, 1], [1024, 1]]"
                        >
                            <slide v-for="item in testimonials" :key="item.id">
                                <div class="single-testimonials">
                                    <div class="client-image">
                                        <img :src="item.photo" :alt="item.name">
                                    </div>

                                    <p>{{item.feedback}}</p>

                                    <div class="client-info">
                                        <h4>{{item.name}}</h4>
                                        <span>{{item.position}}</span>
                                    </div>
                                </div>
                            </slide>
                        </carousel>

                    </div>
                </div>
            </section>
        </div>
        <!-- End Testimonials Area -->
    </client-only>
</template>

<script>
export default {
    props:{
        testimonials: {
            type: Array,
            default: () => []
        }
    },
}
</script>