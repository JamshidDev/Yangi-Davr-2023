<template >
    <div class="grid">
      <div class="col-12" v-show="!loading">
        <div class="flex w-full flex-column" v-if="List.length>0">
          <h6 class="text-center text-400 font-medium text-base">Bilimingizni test yordamida mustahkamlang!</h6>
          <Button label="Test yechish" class="border-round-lg p-button-info px-4 mx-auto" />
        </div>
        <div class="flex w-full flex-column" v-if="List.length==0">
          <h6 class="text-center text-400 font-medium text-base">Bu dars uchun test mashqlari biriktirilmagan!</h6>
        </div>
        
      </div>  
      <div class="col-12" v-show="loading">
        <loading-component :loader_height="'200px'"></loading-component>
      </div>
    </div>
</template>
<script>
import TestService from '@/services/service/TestService';
import LoadingComponent from '@/components/Loader/LoadingComponent.vue';
export default {
  components:{
    LoadingComponent,
  },
    data(){
      return{
        loading:false,
        List:[]
      }
    },
    methods:{
      get_Quiz(id, loader){
        this.loading = loader
        TestService.get_Lesson_Test({lesson_id:id}).then((res) =>{
          this.List = res.data.data;
          this.loading = false;
        })
      }
    },
    created(){
      this.get_Quiz(this.$route.params.id, true)
    }
}
</script>
<style lang="">
    
</style>