<template>
    <div id="rightBottom">
        <div class="container">
            <ul class="box">
                <li v-for="(data, index) in dataArray" :key="index" :style="data.style">
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts'>
const dataArray = [
    {
        style: {
            width: '20%',
            'backgroundColor': '#ffffff'
        }
    },
    {
        style: {
            width: '50%',
            'backgroundColor': '#000000'
        }
    }, {

        style: {
            width: '60%',
            'backgroundColor': '#ffffff'
        }
    }, {

        style: {
            width: '20%',
            'backgroundColor': '#000000'
        }
    }, {

        style: {
            width: '50%',
            'backgroundColor': '#ffffff'
        }
    }, {

        style: {
            width: '40%',
            'backgroundColor': '#000000'
        }
    }, {
        style: {
            width: '80%',
            'backgroundColor': '#ffffff'
        }
    }
]
</script>
    
<style lang="less" scoped>
#rightBottom {
    width: 100%;
    flex: 1;
    overflow: hidden;

    .container {
        width: 100%;
        height: 100%;

        .box {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            overflow-y: auto;

            li {
                width: 50%;
                height: 200px;
                border-radius: 10px;
                border: 1px solid #000000;
                margin: 5px;
            }
        }

        @media (max-width: 1180px) {
            .box {
                justify-content: center;
                align-items: center;

                li {
                    width: 95% !important;
                }
            }
        }
    }
}
</style>