<template>
    <div class="grid px-2">
        <div class="col-12 pt-4">
            <search-component></search-component>
        </div>
        <div class="col-12 ">
            <h2 class="text-left text-primary xl:text-xl lg:text-xl md:text-xl sm:text-xl text-lg m-0">Barcha kurslar <i class="pi pi-arrow-down text-base pl-2"></i></h2>
        </div>
        <div class="col-12">
            <card-component :list_data ="courseList"></card-component>
        </div>
        
    </div>
</template>
<script>
import SearchComponent from './components/SearchComponent.vue';
import CardComponent from '@/views/Home/components/CardComponent'
import CourseService from '@/services/service/CourseService'
import meService from '@/services/service/meService';
export default {
    components:{
        SearchComponent,
        CardComponent,
    },
    data(){
        return{
            courseList:[],
        }
    },
    methods:{
        get_courseList(){
            CourseService.courseList().then((res) => {
                this.courseList = res.data.data;
            })
        },
        get_me(){
            meService.get_Me().then((res) =>{
                localStorage.setItem('user_info', JSON.stringify(res.data.data))
            })
        }
    },
    created(){
        this.get_courseList();
        this.get_me()
    }
}
</script>
<style lang="">
    
</style>