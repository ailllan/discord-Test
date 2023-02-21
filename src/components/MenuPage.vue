<template>
  <v-app>
    <div class="main">
      <!-- 左側縮圖欄 -->
      <div class="left-side">
        <left-side/>
      </div>
      <!-- 中間好友 -->
      <div class="middle-side">
        <middle-side></middle-side>
      </div>
      <!-- 右邊主畫面 -->
      <div class="right-side">
        <!-- 上欄 -->
        <v-top-navigation :value="value" color="teal" grow>
          <v-icon>mdi-human-greeting</v-icon>
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
          </v-btn>
        </v-top-navigation>
        <div class="chat-contain">
          <!-- 左側 -->
          <div class="chat-left"></div>
          <!-- 右側 -->
          <div class="chat-right"></div>
        </div>
      </div>
    </div>
  </v-app>

</template>
  
<script>
import LeftSide from './LeftSide.vue';
import MiddleSide from './MiddleSide.vue';
export default {
  name: 'MenuPage',
  data() {
    return {
      imgUrl: [],
      userDataProps: [],
    }
  },
  components: { LeftSide, MiddleSide },
  methods: {


  }
  , created() {

  }

}
</script>
<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100vh;
}

.middle-side {
  flex: 1.5;
  background-color: rgb(230, 226, 232)
}

.left-side {
  flex: 0.5;
  background-color: rgb(189, 183, 194)
}

.right-side {
  flex: 8;
  background-color: rgb(244, 241, 237);
  display: block;
  border:solid 0.5px;
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

.search_field {
  margin: 10px;
}

.chat-contain {
  display: flex;
  width: 100%;
  height: 90vh;
}

.chat-left {
  flex: 7;
  background-color: rgb(251, 249, 253)
}

.chat-right {
  flex: 3;
  background-color: rgb(254, 255, 252);
}
</style>