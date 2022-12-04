<template>
    <div class="login_page">
      <div class="cs_card_content lg:shadow-1 xl:lg:shadow-1 md:lg:shadow-1">
        <div class="grid">
            <div class="col-12 flex justify-content-center">
            <div class="header_icon">
              <img class="logo_img" src="../../assets/img/logo_rd.png" alt="">
            </div>
          </div>
          <div class="col-12">
            <h4 class="text-primary my-1">Ro'yhatdan o'tish</h4>
          </div>
          <div class="col-12">
            <span class=" p-fluid">
              <InputText id="login" type="email" v-model="user.login" placeholder="Login" />
            </span>
          </div>
          <div class="col-12">
            <span class="p-fluid">
              <Password
                id="password"
                v-model="user.passpord"
                toggleMask
                :feedback="false"
                placeholder="Parol"
              ></Password>
            </span>
          </div>
          <div class="col-12">
            <span class=" p-fluid">
              <Password
                id="password"
                v-model="user.passpord"
                toggleMask
                :feedback="false"
                placeholder="Parolni takrorlang"
              ></Password>
            </span>
          </div>
          <div class="col-12">
            <span class="">
              <InputText id="login" type="text" v-model="user.promo_code" placeholder="Promo kodni kiriting" />
            </span>
          </div>
          <div class="col-12">
            <Button
              @click="auth"
              label="Ro'yhatdan o'tish"
              :loading="loader"
              class="w-full"
            />
          </div>
          <div class="col-12 pt-2">
            <router-link to="/login"
              class="
                text-500
                hover:text-primary
                cursor-pointer
                text-sm text-left
                block
              "
              >Sizda allaqachon hisob bormi?</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        loader: false,
        user: {
          login: null,
          passpord: null,
          promo_code:null,
        },
      };
    },
    methods: {
      auth() {
          console.log(this.user);
        this.loader = true;
      },
    },
    created() {},
  };
  </script>
  <style lang="">
  </style>