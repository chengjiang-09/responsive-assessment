<template>
    <div id="rightBox">
        <div class="container">
            <rightTopMenu />
            <rightBottom />
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import rightTopMenu from './components/rightTopMenu.vue'
import rightBottom from './components/rightBottom.vue';
</script>
    
<style lang="less" scoped>
#rightBox {
    height: 100%;
    flex: 1;

    .container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
}
</style>