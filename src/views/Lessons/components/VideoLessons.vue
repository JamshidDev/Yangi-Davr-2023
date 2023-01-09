<template>
  <div class="grid" v-show="!loading">
    <div
      v-for="lesson in lessonList"
      v-show="lessonList.length > 0"
      :key="lesson.id"
      class="col-12"
    >
      <div
        @click="show_Lesson(lesson.id, lesson.free)"
        class="
          video_lesson_card
          p-2
          flex
          gap-2
          cursor-pointer
          border-1 border-round-sm border-300
        "
      >
        <div class="lesson_card_image relative">
          <img
            v-lazy="imgiocn"
            alt="video lesson picture"
          />
        </div>
        <div class="flex justify-content-between align-items-center w-full">
          <div class="lesson_title font-semibold">
            {{ lesson.title }}
          </div>
          <div class="lesson_info flex gap-1">
            <div
              v-if="lesson.free"
              class="info_time flex gap-1 align-items-center mr-2"
            >
              <Chip label="Bepul" class="text-sm text-teal-400 bg-teal-100" />
            </div>
            <div
              v-if="!lesson.free"
              class="info_time flex gap-1 align-items-center mr-2"
            >
              <Chip
                label="Pullik"
                class="text-sm text-yellow-400 bg-yellow-50"
              />
            </div>
            <div class="info_time flex gap-1 align-items-center">
              <i class="pi pi-clock text-sm"> </i>
              <span class="text-sm">{{ lesson.duration || "-:-" }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <no-data v-show="lessonList.length == 0"></no-data>
  </div>
  <div class="grid" v-show="loading">
    <div class="col-12">
      <loading-component></loading-component>
    </div>
    <Toast position="bottom-right" group="br" />
  </div>
</template>
<script>
import LessonService from "@/services/service/LessonService";
import LoadingComponent from "@/components/Loader/LoadingComponent.vue";
import NoData from "@/views/NoData/NoData.vue";
import imgiocn from '../../../assets/img/play.png'
export default {
  props: {
    video_lessons: {
      type: Array,
      default: [],
    },
  },
  components: {
    NoData,
    LoadingComponent,
  },
  data() {
    return {imgiocn,
      params: {
        course_id: null,
        type: "VIDEO",
      },
      lessonList: [],
      loaderItems: new Array(9),
      loading: true,
    };
  },
  methods: {
    get_Lessons(loader) {
      this.loading = loader;
      LessonService.LessonList(this.params).then((res) => {
        this.lessonList = res.data.data;
        this.loading = false;
      });
    },
    show_Lesson(id, free) {
      if (free) {
        this.$router.push(`/lessons/show/${id}/VIDEO/${this.$route.params.id}`);
      } else {
        this.$toast.add({
          severity: "warn",
          summary: "Ruxsat etilmagan",
          detail: "Sizda bu video dars uchun ruhsat yo'q",
          group: "br",
          life: "4000",
        });
        // this.$toast.add({severity:'warn', summary: 'Error Message', detail:'Message Content', group:'br', life: '3000'});
      }
    },
    showBottomRight(
      typeToast = "error",
      title = "Test title",
      content = "Test text",
      group = "br",
      time = "3000"
    ) {
      this.$toast.add({
        severity: "error",
        summary: title,
        detail: content,
        group: group,
        life: time,
      });
    },
  },
  created() {
    this.params.course_id = this.$route.params.id;
    this.get_Lessons(true);
  },
};
</script>
<style lang="scss" scoped>
.lesson_card_image {
  min-width: 45px;
  height: 40px;

  overflow: hidden;
  border-radius: 6px;
  & > img {
    display: block;
    width: 40px;
    height: 40px;
  }
}


</style>