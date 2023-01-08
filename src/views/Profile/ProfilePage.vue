<template >
   <div class="grid flex justify-content-center">
    <div class="xl:col-3 lg:col-3 md:col-3 sm:col-6 col-12 mb-6">
        <div class="grid pt-4 px-4 xl:px-0 lg:px-0 md:px-0 sm:px-0">
        <div class="col-12 flex justify-content-center">
         <div class="avatar_box">
            <img src="https://exodim.railway.uz/storage/cadry-photos/d83fad83e045f0e3b00bb9924a9f809a.jpg" alt="">
         </div>
        </div>
        <div class="col-12">
            <h6 class="my-0 pl-2 pb-1 text-sm font-normal text-500 text-left">Ismi</h6>
            <InputText class="w-full p-inputtext-sm mb-4" type="text" v-model="user.firstName"  />

            <h6 class="my-0 pl-2 pb-1 text-sm font-normal text-500 text-left">Familiyasi</h6>
            <InputText class="w-full p-inputtext-sm mb-4" type="text" v-model="user.lastName"  />

            
        </div>
        
        <div class="col-12">

            <h6 class="my-0 pl-2 pb-1 text-sm font-normal text-500 text-left">Login</h6>
            <InputText class="w-full p-inputtext-sm mb-4" type="text" v-model="user.email"  />

            <h6 class="my-0 pl-2 pb-1 text-sm font-normal text-500 text-left">Parol</h6>
            <InputText class="w-full p-inputtext-sm mb-4" type="text" v-model="user.passw"  />


        </div>
        <div class="col-12 flex justify-content-end pt-0">
            <Button class="p-button-sm p-button-secondary " label="Saqlash"/>
        </div>
    </div>
    </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            user:{
                email:'raximovj@mail.com',
                passw:'user123456',
                firstName:'Jamshid',
                lastName:'Raximov'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .avatar_box{
        width: 120px;
        height: 160px;
        &> img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>