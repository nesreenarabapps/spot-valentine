<template>
  <div class="home">
    <header >
      <div class="header-center-img" >
        <img  :src="senders[0].current_profile_image_url" alt="" class="user-senders"  v-if="senders && senders.length">
        <img :src="receivers[0].current_profile_image_url" alt="" class="user-receivers" v-if="receivers && receivers.length">
      </div>
    </header>

    <transition name="fade">
      <div v-if="showInfo" class="overlay" @click="showInfo = false">
        <img src="@/assets/imgs/event-rules.png" alt="" class="info-img" />
      </div>
    </transition>
    <button @click="showInfo = true" class="info-btn"></button>

    <!-- ============= count down ========== -->
    <CountDown  :endsAt="info.ends_at"/>

    <!-- ============= gift boxs ============ -->
    <div class="box-gifts">
      <div class="gift-decoration" v-for="(decoration , i) in info.decorations" :key="i">
        <div class="gift-decoration-img"> 
          <img :src="decoration.image_path" alt="" />
        </div>
        <span class="gift-decoration-name">{{decoration.name}}</span>
        <div class="gift-decoration-score">
          <img src="@/assets/imgs/heart.png" alt="" />
          <span class="name"> {{decoration.points}} </span>
        </div>
      </div>
    </div>

    <!-- ============ trending and gifts button  ============ -->
    <div class="change-section-type-btn">
      <button
        @click="changeGiftType('trending')"
        :class="{ active: giftType == 'trending' }"
      >
        المتصدرين
      </button>

      <button
        @click="changeGiftType('gifts')"
        :class="{ active: giftType == 'gifts' }"
      >
        الجوائز
      </button>
    </div>
    <!-- ============ trending-gifts-bg =========== -->
    <div class="trending-gifts-bg">
             <div class="tabs-btn">
        <button
          @click="changeType('senders')"
          :class="{ active: type === 'senders' }"
        >
          مرسلون
        </button>
        <button
          @click="changeType('receivers')"
          :class="{ active: type === 'receivers' }"
        >
          مستلمون
        </button>
      </div>

      <!-- ============== trending section ============= -->
      <section class="trending-users-w" v-if="giftType == 'trending'">
        <Trending v-if="type == 'senders'  && senders "  :users="senders"/>
        <Trending v-if="type == 'receivers' && receivers" :users="receivers" />
      </section>

      <!-- ==================== gifts section =========== -->

      <section class="gifts " v-else>
        <img src="@/assets/imgs/senders-gift.png" alt="" v-if="type == 'senders'">
        <img src="@/assets/imgs/receivers-gift.png" alt="" v-if="type == 'receivers'">
      </section>
    </div>

     <transition name="fade">
    <Popup v-if="alertMessage" :message="alertMessage" />
  </transition> 

  </div>


  <footer class="copy-right">جميع الحقوق محفوظة لتطبيق سبوت شات</footer>
</template>

<script>
import CountDown from "./CountDown.vue";
import Trending from './Trending.vue';
import Popup from './Popup.vue'
import { mapState } from 'vuex';

export default {
  data() {
    return {
      giftType: "trending",
      type: "senders",
      showInfo:false
    };
  },
  components: {
    CountDown,
    Trending,
    Popup
  },
  computed:{
...mapState(['info' , 'alertMessage' , 'senders' , 'receivers'])
  }, 
  methods: {
    changeGiftType(type) {
      this.giftType = type;
    },
    changeType(type) {
      this.type = type;
    },
  },
};
</script>

<style>
</style>