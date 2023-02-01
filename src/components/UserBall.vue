<template>
    <!-- 使用者球外框(大小) -->
    <!-- 使用者球 -->
    <div class="userball" v-bind:style="{
        'backgroundImage': 'url(' + UserBallImg + ')'
    }">
    </div>
</template>
<script>
// import { ref } from 'vue';
export default {
    name: 'UserBall',
    props: ['UserBallImg'],
    // setup(props) {
    //     let imgUrl = ref(null);
    //     imgUrl.value=props.UserBallImg
    //     console.log(props.UserBallImg)
    //     return{
    //         imgUrl
    //     }
    // }
}
</script>

<style  scoped>
.userball {
    width: 90%;
    height: 100%;
    border-radius: 50%;
    background-size: cover;
}
</style>