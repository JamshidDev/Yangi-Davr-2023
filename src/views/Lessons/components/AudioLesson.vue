<template>
    <div class="grid" v-show="lessonList.length>0">
        <div v-for="lesson in lessonList"  :key="lesson.id" class="col-12 xl:col-4 lg:col-4 md:col-6 sm:col-12 p-4">
            <div class="video_lesson_card p-2 cursor-pointer">
                <div class="lesson_card_image">
                    <span class="lesson_card_image_overal" :class="[!lesson.free && 'overal_bg_premium']">
                        <img v-show="!lesson.free" class="lock_icon" src="../../../assets/img/padlock.png" alt="">
                        <span class="video_duration"> {{lesson.duration? lesson.duration : `-:-`}}</span>
                    </span>
                    <img :src="lesson.image.url_path" alt="">
                </div>
                <div class="lesson_card_details">
                    <div class="lesson_title text-center text-white font-medium text-lg p-2">
                        {{lesson.title}}
                    </div>
                    <div class="grid px-2">
                        <div class="col-6 flex justify-content-start">
                            <img @click="show_Lesson(lesson.id,!lesson.free)" class="play_icon" src="../../../assets/img/audio_icon.png" alt="">
                        </div>
                        <div class="col-6 text-sm text-white flex justify-content-end align-items-center"><i class="pi pi-eye text-sm pr-2"></i> {{lesson.views}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid" v-show="loading">
      <div
        v-for="item in loaderItems"
        :key="item"
        class="col-12 xl:col-4 lg:col-4 md:col-6 sm:col-12 p-4"
      >
        <Skeleton width="100%" height="16rem"></Skeleton>
      </div>
      <Toast position="bottom-right" group="br" />
    </div>
    <div class="grid">

        <Toast position="bottom-right" group="br" />
    </div>


</template>
<script>
import LessonService from '@/services/service/LessonService'
export default {
    props:{
        video_lessons:{
            type:Array,
            default:[],
        }
    },
    data(){
        return{
            params:{
                course_id:null,
                type:'AUDIO',
            },
            lessonList:[],
            loading:false,
            loaderItems:new Array(9),
        }
    },
    methods:{
        get_Lessons(loader){
            this.loading = loader
            LessonService.LessonList(this.params).then((res) =>{
                this.lessonList = res.data.data
                this.loading =false;
            })
        },
        show_Lesson(id, free){
            if(!free){
                console.log(free);
                // this.$router.push("")
            }else{
                console.log(this.$toast);
                this.$toast.add({severity:'warn' , summary:"Ruxsat etilmagan", detail:"Sizda bu video dars uchun ruhsat yo'q", group:'br', life: '4000'});
                // this.$toast.add({severity:'warn', summary: 'Error Message', detail:'Message Content', group:'br', life: '3000'});
            }
            
        },
        showBottomRight(typeToast="error", title = 'Test title', content='Test text', group='br', time='3000') {
            this.$toast.add({severity:'error' , summary:title, detail:content, group:group, life: time});
        },
    },
    created(){
        this.params.course_id = this.$route.params.id;
        this.get_Lessons(true)
    }
}
</script>
<style lang="scss" scoped>
.video_lesson_card{
    background-color:#883cae;
}
.lesson_card_image{
    width: 100%;
    min-height: 220px;
    max-height: 220px;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    &> img{
        width: 100%;
        height: 100% !important;
        object-fit: contain;
    }
    .lesson_card_image_overal{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(8, 8, 8, 0.173);
        .lock_icon{
            width: 120px;
            height: 120px;
        }
        .video_duration{
            position: absolute;
            bottom: 10px;
            right: 15px;
            font-size: 14px;
            padding: 4px 12px;
            color: #fff;
            border-radius: 4px;
            background-color: rgba(8, 8, 8, 0.633) !important;
        }
    }
    .overal_bg_premium{
        background-color: rgba(8, 8, 8, 0.563) !important;
    }
}
.play_icon{
    position: relative;
    left: 10px;
    bottom: 10px;
    width: 30px;
    height: 30px;
    transform: scale(1.5);
    transition: all 0.2s ease-in;
}
.play_icon:hover{
    transform: scale(1);
    transform: rotate(45deg);
}
    
</style>