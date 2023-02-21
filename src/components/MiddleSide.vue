<template>
    <div class="outland">
        <div class="  ">
            <v-text-field label="搜尋或開始對話"></v-text-field>
        </div>
        <div class="frindlist">
            <div class="frindlist-item">
                <div class="friend-icon"><user-ball-vue  /></div>
                <div>aillan</div>
            </div>
            <div class="frindlist-item">
                <div class="friend-icon"><user-ball-vue  /></div>
                <div>好友1</div>
            </div>
            <div class="frindlist-item">
                <div class="friend-icon"><user-ball-vue  /></div>
                <div>好友2</div>
            </div>
            <div class="frindlist-item">
                <div class="friend-icon"><user-ball-vue  /></div>
                <div>好友3</div>
            </div>
        </div>
    </div>
</template>
<script>
import UserBallVue from './UserBall.vue';
import { ref } from 'vue'
export default {
    name: 'MiddleSide',
    components: { UserBallVue },
    async setup() {
        let Imgdata = ref(0);
        return { Imgdata }
    }
}
</script>
<style scoped>
.outland{
    width: 90%;
    height: 100%;
}
.frindlist {
    display: block
}

.frindlist-item {
    display: flex;
    padding-top: 5%;
}

.friend-icon {
    display: flex;
    flex-direction: row;
    width: 15%;
    height: 30px;
}
</style>