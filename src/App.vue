<template>
<Home  v-if="$store.state.info"/>
  <div class="loading-page " v-else>
    <div v-if="!errorMessage" class="spinner-border"></div>
    <div v-if="!errorMessage">... جارى التحميل</div>
    <div v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  computed:{
...mapState(['errorMessage'])
  },
  created(){
    this.$store.dispatch('getInfoApi')
    this.$store.dispatch('getInfoSenders')
    this.$store.dispatch('getInfoReceivers')
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/styles.css';
</style>
