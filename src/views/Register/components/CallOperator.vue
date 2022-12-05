<template>
  <div>
    <Dialog
      v-model:visible="call_dialog"
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
        <h6 class="text-primary text-lg my-0 text-center uppercase">
          Qo'llab quvvatlash markazi
        </h6>
      </template>
      <div class="grid">
        <div class="col-12">
          <h5 class="text-base text-500 font-medium">
            Sizda qandaydir tushunmovchilik va muammolar bo'lsa bizga telefon va
            telegram orqali bo'g'lanishingiz mumkin.
          </h5>
        </div>
        <div class="col-12 flex justify-content-center gap-2">
          <Button
            label="Telegram"
            icon="pi pi-send"
            @click="goTelegram()"
            class="p-button-sm p-button-info p-button-rounded"
          >
          </Button>
          <Button
            label="Telefon"
            icon="pi pi-phone"
            @click="goCall()"
            class="p-button-sm p-button-secondary p-button-rounded"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      call_dialog: false,
    };
  },
  methods: {
    control(item) {
      this.call_dialog = item;
    },
    goTelegram() {
      var a = document.createElement("a");
      a.target = "_blank";
      a.href = "https://t.me/saidovUmidbek";
      a.click();
    },
    goCall(){
        var a = document.createElement("a");
      a.target = "_blank";
      a.href = "tel:907884547";
      a.click();
    }
  },
};
</script>