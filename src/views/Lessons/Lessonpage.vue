<template>
    <div class="grid px-3">
        <div class="col-12 mt-4">
            <div class="grid">
                <div class="col-6">
                    <Button @click="goPush('lesson-video')" icon="pi pi-video" label="Video darslar" class=" p-button-primary w-full" />
                </div>
                <div class="col-6">
                    <Button @click="goPush('lesson-audio')"  icon="pi pi-video" label="Audio darslar" class=" p-button-outline p-button-secondary w-full" />
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
<style lang="">
    
</style>