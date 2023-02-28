<template>
    <div class="  ">
            <v-text-field label="搜尋或開始對話"></v-text-field>
        </div>
    <div class="frindlist" v-for="item in Imgdata" :key="item.username">
      
        <user-ball-vue :UserBallImg='item.usericon' :UserChatRoom="item.userurl" />
        {{ item.username }}
    
    </div>
</template>
<script>
import UserBallVue from './UserBall.vue';
import { ref } from 'vue';
export default {
    name: 'MiddleSide',
    components: { UserBallVue },
    setup() {
        console.log(`middleside`);
        let Imgdata = ref([]);
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
        load()
        return { Imgdata, load }
    }
}
</script>
<style scoped>
.outland {
    width: 90%;
    height: 100%;
}

.frindlist {
    width: 40%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-items: center;
}

</style>