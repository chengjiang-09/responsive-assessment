<template>
    <div id="leftMenu">
        <div class="container">
            <Transition>
                <div class="main" v-if="changeMenu"><n-layout has-sider>
                        <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240"
                            :collapsed="app.leftMenuControl" :show-trigger="false">
                            <n-menu :collapsed="app.leftMenuControl" :collapsed-width="64" :collapsed-icon-size="22"
                                :options="menuOptions" key-field="whateverKey" label-field="whateverLabel"
                                children-field="whateverChildren" />
                        </n-layout-sider>
                    </n-layout></div>
                <div class="second" :class="[{ 'second-close': !app.leftMenuControl }, { 'second-open': app.leftMenuControl }]"
                    v-else> <n-layout has-sider>
                        <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240"
                            :collapsed="false" :show-trigger="false">
                            <n-menu :collapsed="false" :collapsed-width="64" :collapsed-icon-size="22"
                                :options="menuOptions" key-field="whateverKey" label-field="whateverLabel"
                                children-field="whateverChildren" />
                        </n-layout-sider>
                    </n-layout></div>
            </Transition>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { h, Component } from 'vue';
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon,
    HomeOutline as HomeIcon
} from '@vicons/ionicons5'
import { RouterLink } from 'vue-router'
import { useAppStore } from '@/store'
import { toRef, watch } from 'vue';


function renderIcon(icon: Component, options: Record<string, any> = {}) {
    return () => h(NIcon, options, { default: () => h(icon) })
}

const app = useAppStore()

const menuOptions: MenuOption[] = [
    {
        whateverLabel: () =>
            h(
                RouterLink,
                {
                    to: {
                        name: 'Home',
                    },
                    style: { color: 'skyBlue', 'margin-left': '15px' }
                },
                { default: () => 'OA系统' },
            ),
        whateverKey: 'go-back-home',
        icon: renderIcon(HomeIcon, {
            style: {
                'margin-left': '30px'
            }
        })
    },
    {
        whateverLabel: '且听风吟',
        whateverKey: 'hear-the-wind-sing',
        icon: renderIcon(BookIcon)
    },
    {
        whateverLabel: '1973年的弹珠玩具',
        whateverKey: 'pinball-1973',
        icon: renderIcon(BookIcon),
        disabled: true,
        whateverChildren: [
            {
                whateverLabel: '鼠',
                whateverKey: 'rat'
            }
        ]
    },
    {
        whateverLabel: '寻羊冒险记',
        whateverKey: 'a-wild-sheep-chase',
        disabled: true,
        icon: renderIcon(BookIcon)
    },
    {
        whateverLabel: '舞，舞，舞',
        whateverKey: 'dance-dance-dance',
        icon: renderIcon(BookIcon),
        whateverChildren: [
            {
                type: 'group',
                whateverLabel: '人物',
                whateverKey: 'people',
                whateverChildren: [
                    {
                        whateverLabel: '叙事者',
                        whateverKey: 'narrator',
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        whateverLabel: '羊男',
                        whateverKey: 'sheep-man',
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                whateverLabel: '饮品',
                whateverKey: 'beverage',
                icon: renderIcon(WineIcon),
                whateverChildren: [
                    {
                        whateverLabel: '威士忌',
                        whateverKey: 'whisky'
                    }
                ]
            },
            {
                whateverLabel: '食物',
                whateverKey: 'food',
                whateverChildren: [
                    {
                        whateverLabel: '三明治',
                        whateverKey: 'sandwich'
                    }
                ]
            },
            {
                whateverLabel: '过去增多，未来减少',
                whateverKey: 'the-past-increases-the-future-recedes'
            }
        ]
    }
]

const props = defineProps({
    changeMenu: Boolean
})

const changeMenu = toRef(props, 'changeMenu')

watch(changeMenu, () => {
    app.leftMenuControl = false
})
</script>
    
<style lang="less">
#leftMenu {
    height: 100%;

    .container {
        height: 100%;
        position: relative;

        @media (max-width: 640px) {
            .main {
                .n-layout-sider {
                    transition: width .4s !important;
                    width: 0 !important;
                }

            }

        }

        .second {
            position: absolute;
            z-index: 999;
            height: 100%;
            background-color: #ffffff;
            left: 0;
            top: 0;
            transition: transform .3s;
        }

        .second-close {
            transform: translateX(-100%);
        }

        .second-open {
            transform: translateX(0);
        }
    }
}
</style>