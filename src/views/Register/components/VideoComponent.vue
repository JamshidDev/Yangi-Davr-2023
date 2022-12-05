<template>
  <div>
    <Dialog
      v-model:visible="dialog"
      :breakpoints="{
        '1960px': '30vw',
        '1600px': '40vw',
        '1200px': '70vw',
        '960px': '80vw',
        '640px': '90vw',
      }"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <template #header>
        <h6 class="text-primary text-base my-0 text-center uppercase">
          Ro'yhatdan o'tish bo'yicha video qo'llanma
        </h6>
      </template>
      <div class="grid">
        <div class="col-12 flex justify-content-center">
          <video controls style="width:100%">
            <source src="@/assets/video/Test.mp4" type="video/webm" />
            <source src="@/assets/video/Test.mp4" type="video/mp4" />

          </video>
        </div>
      </div>
    </Dialog>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    control(item) {
      this.dialog = item;
    },
  },
};
</script>
  <style lang="">
</style>