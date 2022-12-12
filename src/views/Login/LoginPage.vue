<template>
    <div class="login_page">
      <div class="cs_card_content">
        <div class="col-12 flex justify-content-center mb-2">
            <div class="header_icon">
              <img class="logo_img" src="../../assets/img/logo_rd.png" alt="">
            </div>
          </div>
        <div class="grid px-4 lg:shadow-1 xl:lg:shadow-1 md:lg:shadow-1 bg-white">
          
          <div class="col-12 pt-4">
            <h4 class="text-primary my-1">TIZIMGA KIRISH</h4>
          </div>

          <div class="col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <InputText
              placeholder="@Username"
              type="email"
              v-model="user.login"
            />
          </div>
        </div>

          <div class="col-12">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon p-1">
                        <img class="flag__icon" src="@/assets/img/flag_uzb.png" />
                    </span>
                    <span class="p-inputgroup-addon text-sm text-medium px-1">
                        +998
                    </span>
                    <InputMask v-model="user.password" mask="999999" placeholder="Telefon raqam" />
                </div>
  
          </div>
         
          <div class="col-12">
            <div class="field-checkbox">
              <Checkbox
                inputId="remember"
                v-model="user.isRemember"
                :binary="true"
              />
              <label for="remember" class="text-sm">Eslab qolsinmi</label>
            </div>
          </div>
          <div class="col-12">
            <Button
              @click="loginUSer"
              label="Kirish"
              :loading="loader"
              class="w-full"
            />
          </div>
          <div class="col-12 pt-2">
            <router-link to="/register"
              class="
                text-500
                hover:text-primary
                cursor-pointer
                text-sm text-left
                block
              "
              >Ro'yhatdan o'tish</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import auth from '@/services/service/auth';
  export default {
    data() {
      return {
        loader: false,
        user: {
          login: null,
          password: null,
        //   isRemember: false,
        device_id:'dg',
        firebase_key:'web'
        },
      };
    },

    methods: {
      loginUSer() {
          auth.loginUser({data:this.user}).then((res) =>{
            localStorage.setItem('token', res.data.data.token)
            this.$router.push('/')
          }).catch((error)=>{
            console.log(error);
          })
        // this.loader = true;
      },
    },
    created() {},
  };
  </script>
  <style lang="scss" >
  </style>