<template>
    <v-app>
        <div class="main">
            <div class="left-side">
                <left-side />
            </div>
            <div class="middle-side">
                <middle-side></middle-side>
            </div>
            <div class="right-side">
                <!-- 這裡是聊天室 -->

            </div>


        </div>
</v-app>
</template>
<script>
import LeftSide from './LeftSide.vue';
import MiddleSide from './MiddleSide.vue';
import { ref } from 'vue';
export default {

    name: 'FriendStatus',
    components: { LeftSide, MiddleSide },
    setup() {
        let host = ref([]);
        let inputcontain = ref(null);
        // 當輸入enter對話框
        const CahtEnterHandler = () => {
            host.value.push(inputcontain.value);
            inputcontain.value = null;
        }
        return { host, inputcontain, CahtEnterHandler }
    }
}
</script>
<style>
.main {
    display: flex;
    width: 100%;
    height: 100vh;
}

.left-side {
    flex: 0.5;
    background-color: rgb(230, 226, 232)
}

.middle-side {
    flex: 1.5;
    background-color: rgb(189, 183, 194)
}

.right-side {
    flex: 8;
    background-color: rgb(244, 241, 237);
    display: block;
}
</style>