<template>
    <div id="formVue">
        <div class="container">
            <n-button class="button" strong secondary round type="warning" size="large" @click="goHome">
                确定
            </n-button>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = function () {
    router.push({
        name: 'Home'
    })
}
</script>
    
<style lang="less" scoped>
#formVue {
    width: 100%;
    height: 100%;
    border-radius: 1.4286rem;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        width: 100%;
        background-color: #ffffff;

        .button {
            width: 100%;
            height: 5.7143rem;
        }
    }
}
</style>