<template>
    <div class='range-slider'>
        <input type="range" :min="minValue" :max="maxValue" @input="changed" v-model="sliderMin">
        <input type="range" step="1" @input="changed" v-model="sliderMax">
    </div>
</template>

<script>
    export default {
        name: 'RangeSlider',
        props: {
            maxValue: {
                type: Number,
                default: 10000
            },
            minValue: {
                type: Number,
                default: 0,
            },
        },
        data() {
            return {
                minAngle: 10,
                maxAngle: 30
            }
        },
        computed: {
            sliderMin: {
                get: function() {
                    var val = parseInt(this.minAngle);
                    return val;
                },
                set: function(val) {
                    val = parseInt(val);
                    if (val > this.maxAngle) {
                        this.maxAngle = val;
                    }
                    this.minAngle = val;
                }
            },
            sliderMax: {
                get: function() {
                    var val = parseInt(this.maxAngle);
                    return val;
                },
                set: function(val) {
                    val = parseInt(val);
                    if (val < this.minAngle) {
                        this.minAngle = val;
                    }
                    this.maxAngle = val;
                }
            },
            changed(){
                this.$emit('changed', {
                    min: this.minAngle,
                    max: this.maxAngle,
                })
            }
        }
    }
</script>

<style>
    .range-slider {
        margin: auto;
        text-align: center;
        position: relative;

    }

    .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    input[type=number] {
        border: 1px solid #ddd;
        text-align: center;
        font-size: 1.6em;
        -moz-appearance: textfield;
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    input[type=number]:invalid,
    input[type=number]:out-of-range {
        border: 2px solid #ff6347;
    }

    input[type=range] {
        -webkit-appearance: none;
        width: 100%;
    }

    input[type=range]:focus {
        outline: none;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: lightslategrey;
    }

    input[type=range]:focus::-ms-fill-lower {
        background: lightslategrey;
    }

    input[type=range]:focus::-ms-fill-upper {
        background: lightslategrey;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: lightslategrey;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }

    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid lightslategrey;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: darkslategrey;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
    }

</style>