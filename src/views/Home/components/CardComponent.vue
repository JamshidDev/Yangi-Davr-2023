<template>
    <div class="grid pt-6 xl:px-2 lg:px-2 px-2">
       
        <div  v-for="course in list_data" :key="course.id" class="col-12 xl:col-4 lg:col-4 md:col-6 sm:col-12 px-2 pb-4">
            <div class="card_container cursor-pointer bg-primary-500 relative w-full shadow-2 border-1 border-300 overflow-hidden">

                <span class="free_title bg-primary p-1" v-show="course.price == 0">Bepul</span>
                <div class="card_image w-full relative">
                    <span class="card_overal absolute w-full h-full bg-200"></span>
                    <img class="course_card" :src="course.image.url_path" alt="">
                </div>
                <div class="card_body px-2">
                    <div class="card_body_content bg-primary">
                        <div class="card_title py-1 px-3 text-left xl:text-xl lg:text-xl md:text-lg sm:text-base text-base font-bold ">
                            {{course.title}}
                    </div>
                    <div class="card_details flex justify-content-between px-2 mb-3">
                        <div class="box flex gap-2 align-items-center text-sm font-medium">
                            <img class="img_icon" src="../../../assets/img/audio.png" alt=""> {{course.audio}}
                        </div>
                        <div class="box flex gap-2 align-items-center text-sm font-medium">
                            <img class="img_icon" src="../../../assets/img/video.png" alt=""> {{course.video}}
                        </div>
                    </div>
                    <div class="card_price font-semibold text-white text-base mb-3">
                        {{course.price}}  <span class="font-normal text-500">so'm</span>
                    </div>
                    </div>
                   
                </div>
                
                
            </div>
        </div>

        
    </div>
</template>
<script>
export default {
    props:{
        list_data:{
            type:Array,
            default:[],
        }
    }
}
</script>
<style lang="scss">
    .card_container{
        position: relative !important;
        border-radius: 10px;
        max-height: 240px;
    }
    .course_card{
        width: 100%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
    }
    .card_container:hover .course_card{
        transform: scale(1.2);
    }
    .card_container:hover .card_body{
        bottom: 0px;
    }

    .card_body{
        z-index: 8;
        position: absolute;
        bottom: -34px;
        width: 100%;
        left: 0px;
        transition: all 0.3s ease-in-out;
    }
    .card_body_content{
        border:1px solid transparent;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;

    }
    .img_icon{
        width: 30px;
        height: 30px;
        object-fit: cover;
    }
    .free_title{
        position:absolute;
        width: 200px;
        top: 13px;
        right: -70px;
        z-index: 20;
        text-align: center;
        transform: rotate(45deg);


    }
</style>