<template>
    <div class="col-lg-12 col-md-12">
        <div class="tab products-details-tab">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <ul class="tabs">
                        <li><a href="#">
                            <div class="dot"></div> Description
                        </a></li>
                    </ul>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="tab_content">
                        <div class="tabs_item">
                            <div class="products-details-tab-content" v-html="description"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            description: {
                type: String,
                default: '<p class="d-flex justify-content-center font-weight-bold">Aucune déscription trouvée!</p>'
            }
        }
    }
</script>