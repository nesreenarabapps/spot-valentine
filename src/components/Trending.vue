<template>
<!-- ============ top users ============ -->
  <div class="top-user" v-if="users" >
    <div class="top-user-img" v-for="(topUser , i) in users.slice(0,3)" :key="i">
      <img src="@/assets/imgs/top1.png" v-if="i == 0" alt="" class="user-frame" />
      <img src="@/assets/imgs/top2.png" v-if="i == 1" alt="" class="user-frame" />
      <img src="@/assets/imgs/top3.png" v-if="i == 2" alt="" class="user-frame" />
      <img :src="topUser.current_profile_image_url"  v-if="users" alt="" class="user-img" />
      <img src="@/assets/imgs/user.png" v-else alt="" class="user-img" />
      <span class="top-user-name" v-if="users">{{topUser.name}}</span>
      <span class="top-user-name" v-else>*****</span>
      <div class="top-user-score">
        <img src="@/assets/imgs/heart.png" alt="" />
        <span class="score" v-if="users">{{topUser.score}}</span>
        <span class="score" v-else>0000</span>
      </div>
    </div>
  </div>
<!-- ============= users ============== -->
  <div class="user-trend" v-for="(user , i) in users.slice(3)" :key="i">
      <span class="user-number">{{i + 4}}</span>
      <div class="user-img">
       <img :src="user.current_profile_image_url" alt="" />
      </div>
    <div class="user-desc">
      <div class="user-name">
        <span class="name">{{user.name}}</span>
        <span class="uid">{{user.uid}}</span>
      </div>
    </div>
    <div class="user-score">
      <span class="score">{{user.score}}</span>
      <img src="@/assets/imgs/heart.png" alt="" />
    </div>
  </div>


</template>

<script>
export default {
  props:['users']
};
</script>

<style>
</style>