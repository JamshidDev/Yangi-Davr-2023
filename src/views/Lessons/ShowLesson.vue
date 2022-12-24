<template>
  <div class="grid" v-if="lesson">
    <div class="col-12 pb-0">
      <p
        class="
          my-0
          py-3
          font-semibold
          w-full
          uppercase
          relative
          flex
          align-items-center
          justify-content-center
        "
      >
        {{
          $route.params.typelesson == "VIDEO" ? "VIDEO DARS" : "AUDIO DARS"
        }}
        (<span class="text-sm font-normal mx-1">{{ lesson.title }}</span
        >)
      </p>
    </div>
    <div class="col-12 xl:col-9 lg:col-9">
      <div class="grid pt-0">
        <div class="col-12 lg:col-12 py-0">
          <video
            style="width: 100%"
            controls
            controlslist="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
          >
            <source :src="lesson.video.url_path" type="video/mp4" />
            <source :src="lesson.video.url_path" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div class="grid pt-0 px-2 md:px-0">
            <!-- <div class="col-6 lg:col-9 xl:col-9 md:col-9 sm:col-6">
              <span
                class="text-left w-full flex text-base pl-2 font-semibold"
                >{{ lesson.title }}</span
              >
            </div>
            <div class="col-6 lg:col-3 xl:col-3 md:col-3 sm:col-6 px-2">
              <div class="grid">
                <div
                  class="
                    like_box
                    col-6
                    flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <img
                    class="cursor-pointer like_icon_img"
                    src="../../assets/img/like_icon.png"
                    alt=""
                  />
                  <span
                    class="
                      text-blue-500
                      ml-2
                      text-lg
                      flex
                      align-items-center
                      justify-content-center
                    "
                    style="width: 20px"
                    >{{ lesson.likes }}</span
                  >
                </div>
                <div
                  class="
                    like_box
                    col-6
                    flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <img
                    class="cursor-pointer dislike_icon_img"
                    src="../../assets/img/dislike_icon.png"
                    alt=""
                  />
                  <span
                    class="
                      text-blue-500
                      ml-2
                      text-lg
                      flex
                      align-items-center
                      justify-content-center
                    "
                    style="width: 20px"
                    >{{ lesson.dislikes }}</span
                  >
                </div>
              </div>
            </div> -->
            <div class="col-12 pt-0">
              <div class="tab_container">
                <div
                  class="tab_box cursor-pointer"
                  :class="[$route.meta.index == 0 && 'active_tab']"
                  @click="inserIndex(0)"
                >
                  <i class="pi pi-comments text-sm"></i>
                  <span class="text-sm uppercase">Izoh</span>
                </div>
                <div
                  class="tab_box cursor-pointer"
                  :class="[$route.meta.index == 1 && 'active_tab']"
                  @click="inserIndex(1)"
                >
                  <i class="pi pi-question-circle text-sm"></i>
                  <span class="text-sm uppercase">Test</span>
                </div>
                <div
                  class="tab_box cursor-pointer"
                  :class="[$route.meta.index == 2 && 'active_tab']"
                  @click="inserIndex(2)"
                >
                  <i class="pi pi-file-edit text-sm"></i>
                  <span class="text-sm uppercase">Audio</span>
                </div>
              </div>
            </div>
            <div class="col-12" style="min-height: 200px">
              <router-view></router-view>
            </div>
          </div>
          <!-- <div class="grid px-2 md:px-0">
            <div class="col-12 pb-0">
              <h6 class="text-left pl-2 mb-0 text-sm text-500 font-normal">
                Darsdagi yangi so'zlarning talafuzi
              </h6>
            </div>
            <div class="col-12 ">
              <audio
                controls
                style="width: 100%"
                class="audio_player"
                controlslist=" nodownload "
              >
                <source :src="lesson.audio.url_path" type="audio/ogg" />
                <source :src="lesson.audio.url_path" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div class="col-12">
              <div class="grid py-1">
                <div class="col-12 xl:col-6 lg:col-6 md:col-6 ">
                 <Button class="p-button-primry w-full p-button-sm p-button-rounded" icon="pi pi-book" :label="lesson.title+'.pdf'" />
                 
                </div>
                <div class="col-12 xl:col-6 lg:col-6 md:col-6">
                  <Button class="p-button-success p-button-rounded  w-full p-button-sm" icon="pi pi-file-pdf" label="TEST ISHLASH" />
                </div>
              </div>
            </div>
            <div class="col-12  lg:hidden xl:hidden">
          <span class="w-full" v-html="lesson.content"></span>
        </div>
          </div> -->
        </div>

        <!-- <div class="col-12  lg:col-3 hidden lg:block xl:block">
          <span class="w-full" v-html="lesson.content"></span>
        </div> -->
      </div>
    </div>
    <div class="hidden xl:block  lg:block xl:col-3 lg:col-3 pt-0 pl-0">
      <div v-for="lesons in lessonList" :key="lesons.id" class="w-full  px-2 py-2 border-1 border-400 cursor-pointer text-primary hover:bg-primary-500 hover:text-white flex justify-content-between" :class="lesons.id== lesson.id && 'bg-primary-500 text-white'">
        <div class="my-0 font-medium text-left text-base ">{{ lesons.title}}</div>
        <div><span style="font-size:12px" class="test-sm block py-1 px-2"><i style="font-size:12px" class="pi pi-stopwatch mr-1"></i> 4:34</span></div>
      </div>
    </div>
  </div>
  <div class="grid" v-if="!lesson">
    <div class="col-12">
      <loading-component></loading-component>
    </div>
  </div>
</template>
<script>
import LessonService from "@/services/service/LessonService";
import CommentUser from "@/views/Lessons/components/CommentUser";
import LoadingComponent from "@/components/Loader/LoadingComponent.vue";
export default {
  components: {
    CommentUser,
    LoadingComponent,
  },
  data() {
    return {
      lesson: null,
      tabIndex: 0,
      lessonList: [],
    };
  },
  methods: {
    show_Lesson(id) {
      LessonService.SHowLesson({ lesson_id: id })
        .then((res) => {
          console.log(res.data.data);
          this.lesson = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    inserIndex(index) {
      if (index == 0) {
        this.$router.push({ name: "lessons-comment" });
      } else if (index == 1) {
        this.$router.push({ name: "lessons-test" });
      } else {
        this.$router.push({ name: "lessons-files" });
      }
    },
    goBack() {
      if (this.$route.params.typelesson == "VIDEO") {
        this.$router.push(`/lessons/${this.$route.params.lesson_id}`);
      } else {
        this.$router.push(`/lessons/${this.$route.params.lesson_id}/audio`);
      }
    },
    get_Lessons(params) {
      LessonService.LessonList(params).then((res) => {
        console.log(res.data.data);
        this.lessonList = res.data.data;
      });
    },
  },
  created() {
    this.show_Lesson(this.$route.params.id);
    this.get_Lessons({ course_id: '1',
        type: this.$route.params.typelesson=='VIDEO'? 'VIDEO':'AUDIO',})
  },
};
</script>
<style lang="scss" scoped>
.like_icon_img {
  width: 26px;
  height: 26px;
  object-fit: cover;
  transition: all 0.3s ease;
  &:active {
    transform: scale(0.7);
  }
}
.dislike_icon_img {
  width: 26px;
  height: 26px;
  transition: all 0.3s ease;
  object-fit: cover;
  &:active {
    transform: scale(0.7);
  }
}
.tab_container {
  width: 100%;
  border-bottom: 1px solid rgb(184, 183, 183);
  display: flex;
  gap: 8px;
}
.tab_box {
  margin-top: 4px;
  padding: 10px 12px;
  display: flex;
  gap: 4px;
  transition: all 0.2s linear;
}
.active_tab {
  background-color: rgb(194, 6, 232);
  color: rgb(255, 255, 255);
}
</style>