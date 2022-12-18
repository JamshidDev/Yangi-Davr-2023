<template>
  <div class="grid" v-if="lesson">
    <div class="col-12 pb-0">
      <p class="bg-primary my-0 p-2 font-semibold w-full uppercase relative flex align-items-center justify-content-center">
        <i @click="goBack()" class="pi pi-arrow-circle-left  text-white absolute text-2xl cursor-pointer" style="top:5px; left:10px"></i>
        {{$route.params.typelesson == 'VIDEO'? 'VIDEO DARS' : 'AUDIO DARS'}} (<span class="text-sm font-normal mx-1" >{{ lesson.title }}</span>)
      </p>
    </div>
    <div class="col-12">
      <div class="grid pt-0">
        <div class="col-12 lg:col-9 py-0">
          <video
            style="width: 100%"
            controls
            controlslist="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
          >
            <source :src="lesson.video.url_path" type="video/mp4" />
            <source :src="lesson.video.url_path" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <div class="grid pt-2 px-2 md:px-0">
            <div class="col-6 lg:col-9 xl:col-9 md:col-9 sm:col-6">
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
            </div>
          </div>
          <div class="grid px-2 md:px-0">
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
            <div class="col-12 mt-8 pt-8">
              <comment-user :Lesson_ID="$route.params.id"></comment-user>
            </div>
          </div>
        </div>

        <div class="col-12  lg:col-3 hidden lg:block xl:block">
          <span class="w-full" v-html="lesson.content"></span>
        </div>
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
import CommentUser from '@/views/Lessons/components/CommentUser'
import LoadingComponent from "@/components/Loader/LoadingComponent.vue";
export default {
  components:{
    CommentUser,
    LoadingComponent,
  },
  data() {
    return {
      lesson: null,
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
    goBack(){
      if(this.$route.params.typelesson == 'VIDEO'){
        this.$router.push(`/lessons/${this.$route.params.lesson_id}`)
      }else{
        this.$router.push(`/lessons/${this.$route.params.lesson_id}/audio`)
      }
      
    }
  },
  created() {
    
    this.show_Lesson(this.$route.params.id);
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
</style>