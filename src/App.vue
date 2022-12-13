<template>
  <router-view/>
  <Toast position="bottom-right" group="br" />
</template>

<script>
export default
 {
  data(){
    return{

    }
  },
  methods:{
    showBottomRight(typeToast="error", title = 'Test title', content='Test text', group='br', time='3000') {
            this.$toast.add({severity:'error' , summary:title, detail:content, group:group, life: time});
        },
  }
}
</script>

<style lang="scss">
@import url("./assets/scss/index.scss");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
