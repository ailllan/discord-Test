<template>
    <div class="userball-outland" v-for="item in Imgdata" :key="item.username">
        <user-ball-vue :UserBallImg='item.usericon' />
    </div>
</template>
<script>
import UserBallVue from './UserBall.vue';
import { ref } from 'vue';
export default {

    name: 'LeftSide',
    components: { UserBallVue },
    setup() {
        const Imgdata = ref([])
        const load = async () => {
            try {
                let data = await fetch('frontenddata.json')
                Imgdata.value= await data.json()
                if (!data.ok) {
                    throw Error(`資料獲取失敗`)
                }
            } catch(err) {
                console.log(err)
            }
        }
        load()
        console.log(Imgdata.value);
        Imgdata.value.forEach(element => {
            console.log(element);
        });
        
        return { Imgdata }
    },
}
</script>
<style >
.userball-outland {
    margin-top: 15px;
    width: 90%;
    height: 65px;
}
</style>