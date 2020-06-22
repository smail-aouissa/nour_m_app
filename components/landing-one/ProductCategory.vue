<template>
    <!-- Start Category Products Area -->
    <section class="category-products-area pb-60">
        <div class="container">
            <div class="row">
                
                <div v-if="collections[0]" class="col-lg-4 col-md-12">
                    <div class="single-category-box">
                        <img :src="collections[0].photo" alt="photo">

                        <div class="category-content">
                            <h3>{{ collections[0].label }}</h3>
                            <a href="#" class="btn btn-light">View More</a>
                        </div>

                        <a :href="`/collections/${collections[0].id}`" class="link-btn"></a>
                    </div>
                </div>

                <div class="col-lg-8 col-md-12">
                    <div class="row">
                        <div v-if="collections[1]" class="col-lg-6 col-md-6">
                            <div class="single-category-box">
                                <img :src="collections[1].photo" alt="photo">

                                <div class="category-content">
                                    <h3>{{ collections[1].label }}</h3>
                                </div>

                                <a :href="`/collections/${collections[1].id}`" class="link-btn"></a>
                            </div>
                        </div>

                        <div v-if="collections[2]" class="col-lg-6 col-md-6">
                            <div class="single-category-box">
                                <img :src="collections[2].photo" alt="photo">

                                <div class="category-content">
                                    <h3>{{ collections[2].label }}</h3>
                                </div>

                                <a :href="`/collections/${collections[2].id}`" class="link-btn"></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div v-if="collections[3]" class="col-lg-12 col-md-12">
                            <div class="single-category-box">
                                <img :src="collections[3].photo" alt="photo" style="object-fit: cover">

                                <div class="category-content">
                                    <h3>{{ collections[3].label }}</h3>
                                </div>

                                <a :href="`/collections/${collections[3].id}`" class="link-btn"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Category Products Area -->
</template>

<script>
    export default {
        props : {
            collections: {
                type: Array,
                default : () => {
                    return []
                }
            }
        }
    }
</script>