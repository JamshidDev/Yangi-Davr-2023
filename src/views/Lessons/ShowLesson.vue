<template>
  <div class="grid" v-if="lesson">
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
          
            <div class="col-12 pt-0">
              <div class="tab_container">
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
                  :class="[$route.meta.index == 0 && 'active_tab']"
                  @click="inserIndex(0)"
                >
                  <i class="pi pi-comments text-sm"></i>
                  <span class="text-sm uppercase">Izoh</span>
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
       
        </div>

      
      </div>
    </div>
    <div class="hidden xl:block  lg:block xl:col-3 lg:col-3 pt-0 pl-0">
      <div class="card border-400 border-round-lg border-1 p-2 mt-3">
        <h4 class=" text-blue-600 my-0 flex align-items-center gap-2"> 
          
          <img
          style="width:30px; height:30px"
            v-lazy="imgiocn"
            alt="video lesson picture"
          /> Video dars</h4>
        <h4 class="text-left font-medium mt-1 mb-1 pl-2"> {{ lesson.title}} </h4>
        <div class="flex justify-content-between">
          <div class="flex gap-2 text-sm text-teal-500 align-items-center">
            <i class="pi pi-eye "></i> <span>{{ lesson.views}}</span>
          </div>
          <div class="flex gap-2 text-sm text-teal-500 align-items-center">
            <i class="pi pi-clock "></i> <span>{{ lesson.duration}}</span>
          </div>
        </div>

        <div class="flex justify-content-center gap-3 my-2">
          <div class="cursor-pointer flex align-items-center ">
            <i class="pi pi-thumbs-up text-2xl mr-2"></i> <span class="text-sm text-300">{{ lesson.likes}}</span>
          </div>
          <div class="cursor-pointer flex align-items-center">
            <i class="pi pi-thumbs-down text-2xl mr-2"></i> <span class="text-sm text-300">{{ lesson.dislikes}}</span>
          </div>
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
import imgiocn from '../../assets/img/play.png'
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
      imgiocn,
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