<template>
  <div class="login_page">
    <!-- Video guide-->
    <div class="video_guide_btn" @click="open_video">
      <span
        class="
          guide_title
          w-full
          text-center
          hover:text-primary
          text-sm text-500
          p-1
        "
      >
        <i class="pi pi-video px-2"></i> Ro'yhatdan o'tish bo'yicha video
        qo'llanma</span
      >
    </div>
    <!-- Call center -->
    <div class="call_operator_btn" @click="open_call">
      <img
        class="call_operator_img"
        src="@/assets/img/call_operator.png"
        alt=""
      />
    </div>

    <!-- card content -->
    <div class="cs_card_content pt-8">
      <div class="col-12 flex justify-content-center">
        <div class="header_icon mb-2">
          <img class="logo_img" src="../../assets/img/logo_rd.png" alt="" />
        </div>
      </div>
      <div class="grid px-3 pb-2 pt-3 lg:shadow-1 xl:lg:shadow-1 md:lg:shadow-1 bg-white w-full">
        <div class="col-12">
          <h4 class="text-primary my-1 pt-4">RO'YHATDAN O'TISH</h4>
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
            <InputMask
              v-model="user.password"
              mask="999999999"
              placeholder="Telefon raqam"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-money-bill"></i>
            </span>
            <InputText
              placeholder="Proma kod"
              type="email"
              v-model="user.promo_code"
            />
          </div>
        </div>

        <div class="col-12">
          <Button
            @click="authUser"
            label="Ro'yhatdan o'tish"
            :loading="loader"
            class="w-full"
          />
        </div>
        <div class="col-12 pt-2">
          <router-link
            to="/login"
            class="
              text-500
              hover:text-primary
              cursor-pointer
              text-sm text-left
              block
            "
            >Tizimga kirish</router-link
          >
        </div>
      </div>
    </div>

    <!-- Call dialog -->
    <call-operator ref="control_rf"></call-operator>
    <video-component ref="video_rf"></video-component>
  </div>
</template>
  <script>
import Maska from "maska";
import CallOperator from "@/views/Register/components/CallOperator";
import VideoComponent from "@/views/Register/components/VideoComponent";
import auth from "@/services/service/auth";
export default {
  components: {
    CallOperator,
    VideoComponent,
    Maska,
  },
  data() {
    return {
      loader: false,
      user: {
        login: null,
        password: null,
        // promo_code:null,
        device_id: "web",
        // firebase_key: null,
      },
    };
  },
  methods: {
    authUser() {
      console.log(this.user);
      this.controlLoader(true);
      auth
        .registerUser({ data: this.user })
        .then((res) => {
          console.log(res.data.data.token);
          localStorage.setItem("token");
          his.controlLoader(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    open_call() {
      this.$refs.control_rf.control(true);
    },
    open_video() {
      this.$refs.video_rf.control(true);
    },
    controlLoader(item) {
      this.loader = item;
    },
  },
  created() {},
};
</script>
 