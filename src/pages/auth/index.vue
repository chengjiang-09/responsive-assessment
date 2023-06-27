<template>
    <div id="pwdLogin">
        <div class="container">
            <Decorate>
                <FromVue />
            </Decorate>
        </div>
    </div>
</template>


<script setup lang="ts">
import Decorate from './components/decorate.vue'
import FromVue from './components/formVue.vue'
</script>

<style scoped lang="less">
#pwdLogin {
    width: 100%;
    height: 100%;

    .container {
        width: 100%;
        height: 100%;
    }
}
</style>
