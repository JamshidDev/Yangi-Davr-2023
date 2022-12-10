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
        <!-- <div class="layout_footer">
            footer

        </div> -->
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