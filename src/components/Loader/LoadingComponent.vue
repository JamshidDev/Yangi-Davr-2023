<template>
    <div class="grid ">
       <div class="col-12 flex justify-content-center align-items-center w-full" :style="{'min-height': loader_height}">
        <ProgressSpinner style="width:60px;height:60px" strokeWidth="2" fill="var(--surface-ground)" animationDuration=".5s" aria-label="Custom ProgressSpinner"/>
       </div>
    </div>
</template>
<script>
export default {
    props:{
        loader_height:{
            type:String,
            default:'400px'
        }
    }
    
}
</script>
<style lang="">
    
</style>