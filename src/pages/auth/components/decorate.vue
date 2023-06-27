<template>
    <div id="authDecorate">
        <div class="container">
            <n-icon class="top-right" size="400">
                <ArrowBackOutline />
            </n-icon>
            <div class="center-slot">
                <slot></slot>
            </div>
            <n-icon class="bottom-left" size="400">
                <ArrowForwardOutline />
            </n-icon>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ArrowBackOutline, ArrowForwardOutline } from '@vicons/ionicons5'
</script>
    
<style lang="less" scoped>
#authDecorate {
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    .container {
        position: relative;
        width: 100%;
        height: 100%;

        .top-right {
            position: absolute;
            top: 0;
            right: 0;
        }

        .center-slot {
            position: absolute;
            z-index: 999;
            width: 30.2857rem;
            height: 31.2143rem;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        @media (max-width: 642px) {
            .center-slot {
                width: 26rem;
            }
        }

        .bottom-left {
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
}
</style>