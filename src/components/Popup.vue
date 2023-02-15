<template>
      <div class="pop-up" @click="$store.commit('REST_ALERT_MESSAGE')">
    <div class="pop-up-inner">
        {{message}}
    </div>
</div>
</template>

<script>
export default {
props:['message']
}
</script>

<style>

</style>