<template>
    <div class="no-data-container">
        <img class="no-data_icon" src="../../assets/img/no_data.png" alt="">
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.no-data-container{
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .no-data_icon{
        width: 260px;
        opacity: 0.4;
    }
}
    
</style>