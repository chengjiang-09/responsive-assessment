<template>
    <div id="home">
        <div class="container">
            <leftMenu :changeMenu="changeMenu" />
            <rightBox />
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import leftMenu from './components/leftMenu.vue';
import rightBox from './components/rightBox.vue'
import { onMounted, ref, onUnmounted } from 'vue'

const changeMenu = ref(true)

function checkScreenWidth() {
    var screenWidth = window.innerWidth;

    if (screenWidth < 640) {
        changeMenu.value = false
    } else {
        changeMenu.value = true
    }
}

onMounted(() => {
    window.addEventListener('resize', checkScreenWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkScreenWidth)
})


</script>
    
<style scoped lang="less">
#home {
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    .container {
        width: 100%;
        height: 100%;
        display: flex;
    }
}
</style>