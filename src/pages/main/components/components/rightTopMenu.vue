<template>
    <div id="rightTopMenu">
        <div class="container">
            <div class="left-box">
                <div>
                    <n-button type="success" @click="app.setLeftMenuControl(!app.leftMenuControl)">
                        收放
                    </n-button>
                    <span>媒体查询消失</span>
                </div>
            </div>
            <div class="right-box">
                <ul>
                    <li v-for="num in 4" :key="num">
                        {{ num }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { useAppStore } from '@/store'

const app = useAppStore()
</script>
    
<style lang="less" scoped>
#rightTopMenu {
    height: 100px;
    width: 100%;
    background-color: skyblue;

    .container {
        width: 100%;
        height: 100%;
        display: flex;

        .left-box {
            position: relative;
            display: inline-block;
            height: 100%;
            width: 150px;

            &>div {
                position: absolute;
                left: 50%;
                top: 50%;
                width: 100%;
                transform: translate(-50%, -50%);

                &>span {
                    margin-left: 5px;
                }

                @media (max-width: 640px) {
                    &>span {
                        display: none;
                    }
                }
            }
        }

        .right-box {
            display: inline-block;
            height: 100%;
            flex: 1;

            &>ul {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row-reverse;
                align-items: center;

                li {
                    height: 50px;
                    width: 40px;
                    border: 1px solid #000000;
                    margin-left: 5px;
                }
            }
        }
    }
}
</style>