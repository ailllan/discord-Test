<template>
    <!-- 使用者球外框(大小) -->
    <!-- 使用者球 -->
    <Transition @mouseover="useranimation" @mouseout="useranimationEnd" @click="ClickHandler">
        <div :class="userballStyle" v-bind:style="{
            'backgroundImage': 'url(' + UserBallImg + ')'
        }">
        </div>
    </Transition>
</template>
<script>
import { ref } from 'vue';
import router from '@/router';
// import ChatRoom from './ChatRoom.vue';
export default {
    name: 'UserBall',
    props: ['UserBallImg', 'UserChatRoom'],
    setup(props) {
        const userid = ref();
        const userballStyle = ref([]);
        userballStyle.value.push('userball');
      
        console.log(userballStyle);
        const useranimation = () => {

            userballStyle.value.push('userball-animation');
        }
        const useranimationEnd = () => {
            userballStyle.value.pop('userball-animation');
        }
        const ClickHandler = () => {
            // router.addRoute(`/chatroom/${props.UserChatRoom}`);
            console.log(`觸發`);
            router.push({ path: `/chatroom/${props.UserChatRoom}`})
            // router.addRoute({ path: `/chatroom/${props.UserChatRoom}`, component: ChatRoom });
        }
        return {
            useranimation,
            useranimationEnd,
            ClickHandler,
            userballStyle,
            userid,

        }
    }
}
</script>

<style  scoped>
.userball {
    width: 90%;
    height: 100%;
    border-radius: 50%;
    background-size: cover;
    transition-duration: 0.14s;
    transition-timing-function: linear;
}

.userball-animation {
    border-radius: 25%;
}
</style>