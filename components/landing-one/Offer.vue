<template>
    <!-- Start Offer Area -->
    <section class="offer-area ptb-60">
        <div class="container">
            <div class="row">
                <div v-for="(category, key) in categories" :key="key" class="col-lg-4 col-md-6">
                    <div class="offer-box">
                        <img v-if="category.photo" :src="category.photo" alt="image" style="height: 400px">
                        <img v-else src="../../assets/images/category-no-image.jpg" alt="image" style="max-height: 400px">

                        <nuxt-link :to="`/category/${category.id}`"  class="category" style="color: #6c757d">
                            <h4>{{ category.label }}</h4>
                        </nuxt-link>

                        <div class="box-inner">
                            <div class="inner-content">
                                <h3 class="text-truncate">
                                    <nuxt-link :to="`/category/${category.id}`">{{category.label}}</nuxt-link>
                                </h3>

                                <ul>
                                    <li v-for="(subcategory, key) in category.children" :key="key">
                                        <nuxt-link :to="`/category/${subcategory.id}`">{{ subcategory.label }}</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- End Offer Area -->
</template>

<script>
    export default {
        props : {
            categories : {
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    }
</script>