<template>
  <v-app class="main-section">
    <v-toolbar color="blue" dark>
      <v-toolbar-title>Logging</v-toolbar-title>
    </v-toolbar>

    <v-card color="black" outlined class="logging-section">
      <div class="logging-input">
        <div>
          <h2>歡迎回來</h2>
          <br />
          我們很高興見到你
        </div>
        <div>
          <div style="font-size:small">電子郵件或是電話號碼</div>
          <v-text-field label="e-mail" v-model="accountVal"></v-text-field>
        </div>
        <div style="font-size:small">密碼</div>
        <div> <v-text-field type="password" label="password" v-model="passWordVal"></v-text-field></div>
        <div>
          <v-btn color="secondary" block @click="LogginSubmit">
            登入
          </v-btn>

        </div>
      </div>

    </v-card>

  </v-app>
</template>


<script>
import router from '@/router';

export default {
  name: 'LogginPage',
  data: () => ({
    accountVal: '',
    passWordVal: '',
  }),
  components: () => {

  },
  methods: {
    LogginSubmit() {
      let emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if (emailRule.test(this.accountVal)) {
        router.push('/menu');
        // router.push('/chatroom');
      } else {
        alert("email格式不正確");
      }
      // 之後這裡要接後端api
      
    },
  },
  
}
</script>
