<template>
    <div class="grid px-3">
        <div class="col-12 mt-4">
            <div class="grid">
                <div class="col-12 p-0">
                    <div class="control_header cursor-pointer">
                        <div class="header_btn animate_03" @click="goPush('lesson-video')" :class="[this.$route.name == 'lesson-video' && 'active_btn']">Video darslar</div>
                        <div class="header_btn  animate_03" @click="goPush('lesson-audio')" :class="[this.$route.name == 'lesson-audio' && 'active_btn']"> Audio darslar</div>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            params:{
                course_id:null,
                type:'VIDEO',
            }
        }
    },
    methods:{
        goPush(link){
            this.$router.push({name:link})
        }
    },
    created(){
    }
}
</script>
<style lang="scss" scoped>
    .control_header{
        width: 100%;
        background-color: #EEF2F6;
        border-radius: 30px;
        padding: 6px 30px;
        display: flex;
        justify-content: space-between;
         &> .header_btn{
            width: calc(50% - 20px);
            padding: 6px 0px;
            font-weight: 600;
            font-size: 14px;
            &:hover{
                background-color: #FFFFFF;
            border-radius: 30px;
            color: #883cae;
            }
            &:active{
                transform: scale(0.9);
            }
         }
         &> .active_btn{
            background-color: #FFFFFF;
            border-radius: 30px;
            color: #883cae;
         }

    }
</style>