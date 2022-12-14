<template >
    <div class="layout">
       
        <!-- Layout header -->

        <div class="layout_header">
            <navbar-component></navbar-component>
        </div>

        <!-- Layout main -->
        <div class="layout_main cs_container">
           <router-view></router-view>
        </div>

        <!-- Layout footer -->
        <div class="layout_footer">
            <span class="text-center text-white text-base font-normal">Yangi Davr ta'lim platformasi</span>

        </div>
    </div>
</template>
<script>
import NavbarComponent from '@/Layouts/NavbarComponent'
export default {
    components:{
        NavbarComponent,
    }
    
}
</script>