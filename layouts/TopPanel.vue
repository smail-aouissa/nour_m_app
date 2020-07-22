<template>
    <!-- Start Top Panel Area -->
    <client-only>
        <transition name="fade">
            <div v-if="items && items.length" class="top-panel">
                <div class="container">
                    <div class="panel-content">
                        <div class="top-panel-slides">
                            <carousel
                                :autoplay = true
                                :autoplayTimeout = 1000
                                :paginationEnabled = false
                                :perPageCustom = "[[0, 1], [768, 1], [1024, 1]]">
                                <slide v-for="item in items" :key="item.id">
                                    <div class="single-item-box">
                                        <p>
                                            {{item.text}}
                                            <a v-if="item.link" :href="getHashedLink(item.link)">
                                                <strong class="underline font-sans text-uppercase">Voir plus!</strong>
                                            </a>
                                        </p>
                                    </div>
                                </slide>
                            </carousel>
                        </div>

                        <i @click="emitToParent" class="fas fa-times panel-close-btn"></i>
                    </div>
                </div>
            </div>
        </transition>
    </client-only>
    <!-- End Top Panel Area -->
</template>

<script>
export default {
    props: ['items'],
    data() {
        return {
            isShowing: true,
        }
    },
    methods: {
        emitToParent(){
            this.$emit('clicked', this.isShowing = !this.isShowing);
        },
        getHashedLink(url){
            if(url.includes(window.location.hostname) && !url.includes('#')){
                const protocol = location.protocol;
                const slashes = protocol.concat("//");
                let host = slashes.concat(window.location.hostname);
                if(location.port)
                    host = host.concat(':',location.port);

                let extractedUrl = url.replace(host,'');

                return host.concat('/#',extractedUrl)
            }
            return url
        }
    },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>