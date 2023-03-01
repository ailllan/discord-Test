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
                <v-top-navigation :value="value" color="teal" grow>
                    <!-- <v-icon>mdi-human-greeting</v-icon>
                    <v-btn>
                        <span>線上</span>
                    </v-btn>
                    <v-btn>
                        <span>所有</span>
                    </v-btn>
                    <v-btn>
                        <span>等待中</span>
                    </v-btn>
                    <v-btn>
                        <span>已封鎖</span>
                    </v-btn> -->
                </v-top-navigation>
                <div class="chat-box">
                    <div class="chat-contain">
                        <!-- 聊天內容 -->
                        <div class="chat-left">
                            <div>User {{ $route.params.id }}</div>
                            <div v-for="(sentence, index) in host" :key="index" class="sentence-sec">
                                <div class="sentence">
                                    <!-- 人物頭像 -->
                                    <!-- <div></div> -->
                                    {{ sentence }}
                                    
                                </div>
                                <br>
                            </div>

                        </div>

                    </div>
                    <div class="input-sec">
                        <v-icon class="plus-circle">mdi-plus-circle</v-icon>
                        <input type="text" required="required" v-model="inputcontain" @keyup.enter="CahtEnterHandler"
                            class="inputFiled" />
                        <v-icon class="">mdi-gift</v-icon>
                        <v-icon class="">mdi-gif</v-icon>
                        <v-icon class="">mdi-emoticon</v-icon>
                    </div>
                </div>
            </div>


        </div>
    </v-app>
</template>
<script>
import LeftSide from './LeftSide.vue';
import MiddleSide from './MiddleSide.vue';
import { ref } from 'vue';
export default {
    name: 'ChatRoom/:id',
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
<style scoped>
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

.chat-contain {
    display: flex;
    width: 100%;
    height: 100%;
}

.chat-box {
    display: block;
    width: 100%;
    height: 87.5vh;
}

.chat-left {
    flex: 7;
    padding: 1px;
    display: block;
    background-color: rgb(154, 152, 156)
}

.input-sec {
    position: relative;
    top: 5%;
    left: 50%;
    display: flex;
    transform: translate(-50%, -50%);
    width: 99%;
    background-color: rgb(205, 200, 200);
    border-radius: 5px;
}

.inputFiled {
    width: 88%;
    padding: 10px;
    border: 1px solid rgb(205, 200, 200);
    background-color: rgb(205, 200, 200);
    outline: none;
}

.update {
    align-items: center;
    justify-content: center;
}

.sentence-sec {
    display: flex;
    flex-direction: row;
}

.sentence {
    display: flex;
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
}
</style>