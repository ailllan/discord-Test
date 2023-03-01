<template>
    <div class="discord-icon" style="" @click="ClickHandler">

    </div>
    <div class="userball-outland" v-for="item in Imgdata" :key="item.username">
        <user-ball-vue :UserBallImg='item.usericon' :UserChatRoom="item.userurl" />
</div>
</template>
<script>
import UserBallVue from './UserBall.vue';
import { ref } from 'vue';
import router from '@/router';
export default {

    name: 'LeftSide',
    components: { UserBallVue },
    setup() {
        console.log(`右側`);
        const Imgdata = ref([])
        const load = async () => {
            try {
                let data = await fetch('http://localhost:8080/frontenddata.json')
                Imgdata.value = await data.json()
                if (!data.ok) {
                    throw Error(`資料獲取失敗`)
                }
            } catch (err) {
                console.log(err)
            }
        }
        const ClickHandler = () => {
            router.push({ path: `/menu` })
        }
        load()
        console.log(Imgdata.value);
        Imgdata.value.forEach(element => {
            console.log(element);
        });

        return { Imgdata, load ,ClickHandler}
    },
    onBeforeUpdate() {
        // load();

    },
}
</script>
<style >
.userball-outland {
    margin-top: 15px;
    width: 90%;
    height: 65px;
}

.discord-icon {
    margin-top: 15px;
    width: 90%;
    height: 65px;
    background-color: rgb(227, 219, 234)
}
</style>