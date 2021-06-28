<template>
    <div class="store-home">
        <search-bar></search-bar>
        <scroll :top="94" @onScroll="onScroll">
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
            <div>11111111111111111</div>
        </scroll>
    </div>
</template>

<script>
import { storeHomeMixin } from '../../utils/mixin'
import SearchBar from '../../components/home/SearchBar.vue'
import Scroll from "../../components/Scroll.vue"
export default {
    mixins: [ storeHomeMixin ],
    components: {
        SearchBar,
        Scroll
    },
    methods: {
        onScroll(offsetY) {
            this.setOffsetY(offsetY)
        }
    }
}
</script>

<style  scoped>

.store-home {
    width: 100%;
    height: 100%;
}
</style>
