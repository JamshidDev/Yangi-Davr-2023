<template>
  <div class="navbar_container" v-show="!$route.meta?.isHidden">
    <div class="navbar_logo cursor-pointer" @click="$router.push('/home')">
      <img class="logo_img "   src="../assets/img/logo_rd.png" alt="" />
      <span class="animate-charcter ">Yangi davr</span>
    </div>
    <div class="navbar_items">
      <div class="nav_item">
        <!-- <button class="btn_login animate_03 cursor-pointer" @click="goPush()">
          Chiqish
        </button> -->
        <Avatar @click="toggle_profile_menu" image="https://exodim.railway.uz/storage/cadry-photos/d83fad83e045f0e3b00bb9924a9f809a.jpg" class="cursor-pointer" shape="circle" />
        <Menu  ref="profile_menu" :model="profile_menu" :popup="true" />
      </div>
    </div>
  </div>
  <div class="navbar_container" v-show="$route.meta?.isHidden">
    <div class="flex justify-content-space-between align-item-center">
      <div class="back_icon min-full">
        <i @click="goback()" class="pi pi-arrow-left text-2xl text-white cursor-pointer py-2 px-3"></i>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      profile_menu:[
                {
                    label: 'Foydalanuvchi',
                    items: [{
                        label: 'Kabinet',
                        icon: 'pi pi-user',
                        command: () => {
                          this.goPush('/profile')
                        }
                    },
                    {
                        label: 'Chiqish',
                        icon: 'pi pi-power-off',
                        command: () => {
                           this.logOut()
                        }
                    }
                ]},
               
            ]
    };
  },
  methods: {
    goPush(link) {
      this.$router.push(link);
    },
    logOut(){
      localStorage.removeItem('token');
      localStorage.removeItem('token_date');
      this.goPush('/login')

    },
    goback(){
      this.$router.go(-1)
    },
    toggle_profile_menu(event) {
            this.$refs.profile_menu.toggle(event);
        },
  },
  created(){
  }
};
</script>
<style lang="scss">
.navbar_container {
  width: 100%;
  height: 50px !important;
  padding: 5px 20px !important;
  backdrop-filter: blur(100px) !important;
  background: #7f00ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #7f00ff,
    #e100ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #7f00ff,
    #e100ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  justify-content: space-between;
  overflow: hidden !important;
  position: relative !important;
}
.navbar_logo {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 700;
}
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 100% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;
  font-size: 30px;
}
.back_icon{
background-color: transparent;
transition: all 0.2s linear;
}
.back_icon:active{
background-color: #ecf7fb69;
transform: scale(0.9);
}

@media only screen  and (max-width:600px) {
  .animate-charcter{
    display: none !important;
  }
}

// @keyframes textclip {
//   to {
//     background-position: 200% center;
//   }
// }

.logo_img {
  width: 60px !important;
  height: 50px !important;
  object-fit: cover;
}
.navbar_items {
  display: flex;
  align-items: center;
}
.btn_login {
  padding: 6px 18px;
  background-color: #e100ff;
  border: 1px solid #ffffff;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
}
.btn_login:active {
  transform: scale(0.9) !important;
}
.btn_login:hover {
  background-color: #ffffff;
  border: 1px solid #e100ff;
  color: #e100ff;
}
</style>