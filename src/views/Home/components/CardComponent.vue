<template>
  <div class="grid pt-6 xl:px-2 lg:px-2 px-2" v-show="list_data.length>0">
    <div
      v-for="course in list_data"
      :key="course.id"
      class="col-12 xl:col-4 lg:col-4 md:col-6 sm:col-12 px-3 pb-4"
    >
      <div
        class="
          card_container
          cursor-pointer
          relative
          w-full
          shadow-2
          border-1 border-300
          overflow-hidden
          p-0
        "
      >
        <div class="card_image w-full relative">
          <span class="card_overal absolute"></span>
          <img class="course_card" :src="'https://mohirdev.uz/wp-content/uploads/Javascript-toliq-kursi-540x330.jpg'" alt="" />
        </div>
        <div class="card_body px-2 pb-4">
        <div class="w-full pt-2">
          <Rating :modelValue="4" :readonly="true" :stars="5" :cancel="false"  class="cursor-pointer"/>
        </div>
        <span class="text-700 font-semibold text-base block py-2">{{ course.title }}</span>
        <div class="grid">
          <div class="col-6 flex justify-content-start">
            <Chip :label="course.price.toString()+' so\'m'" class="text-sm text-blue-400 bg-blue-100" />
          </div>
          <div class="col-6 flex justify-content-end pr-4">
           <i @click="goPush(course.id)" class="pi pi-arrow-right text-2xl text-yellow-600"></i>
          </div>

        </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid pt-6 xl:px-2 lg:px-2 px-2" v-show="list_data.length==0" >
   <div class="col-12">
    <loading-component></loading-component>
   </div>
  </div>
</template>
<script>
import LoadingComponent from '@/components/Loader/LoadingComponent.vue';
export default {
  components:{
    LoadingComponent,
  },
  props: {
    list_data: {
      type: Array,
      default: [],
    },
  },
  data(){
    return{
        itemLoader:new Array(9)
    }
  },
  methods:{
    goPush(id){
        this.$router.push(`/lessons/${id}`)
    }
  }
};
</script>
<style lang="scss">
.card_container {
  position: relative !important;
  // max-height: 240px;
}
.course_card {
  width: 100%;
  max-height: 250px !important;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
}
// .card_container:hover .course_card {
//   transform: scale(1.2);
// }
.card_container:hover .card_overal {
 background-color: rgba(97, 6, 138, 0.924);
}
.card_image{
  max-height: 250px !important;
}
.card_body {
  width: 100%;
}
.card_overal{
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: all 0.3s linear;

}

</style>