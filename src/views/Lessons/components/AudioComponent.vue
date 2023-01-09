<template >
  <div class="grid">
    <div class="col-12" v-show="!loading">
      <div class="flex w-full flex-column" v-if="Audio">
       <div class="col-12">
        <audio controls  nodownload style="width:100%" class="mt-6">
          <source :src="Audio.url_path" type="audio/ogg" />
          <source :src="Audio.url_path" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
       </div>
       <span class="w-full text-left" v-html="text_content"></span>
      </div>
      <div class="flex w-full flex-column" v-if="!Audio">
        <h6 class="text-center text-400 font-medium text-base">
          Bu dars uchun audio biriktirilmagan!
        </h6>
      </div>
    </div>
    <div class="col-12" v-show="loading">
      <loading-component :loader_height="'200px'"></loading-component>
    </div>
  </div>
</template>
<script>
import LessonService from "@/services/service/LessonService";
import LoadingComponent from "@/components/Loader/LoadingComponent.vue";
export default {
  components: {
    LoadingComponent,
  },
  data() {
    return {
      loading: false,
      Audio: null,
      text_content:''
    };
  },
  methods: {
    get_Audio(id, loader) {
      this.loading = loader;
      LessonService.SHowLesson({ lesson_id: id }).then((res) => {
        console.log(res.data.data.audio);
        this.Audio = res.data.data.audio;
        this.text_content = res.data.data.content
        this.loading = false;
      });
    },
  },
  created() {
    this.get_Audio(this.$route.params.id, true);
  },
};
</script>
<style lang="">
</style>