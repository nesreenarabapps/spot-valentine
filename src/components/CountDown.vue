<template>

  <div class="count-down d-flex"  id="count">
 <span> {{days}} </span> :
 <span> {{hours}} </span> :
 <span>  {{minutes}} </span> : 
 <span> {{seconds}} </span> 
  </div>
  
</template>
<script>
export default {
  props: ["endsAt"],
  name: "CountDown",
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      distance: 0,
    };
  },
  methods: {
    countDownTimer() {
      const endsAtTime = new Date(this.endsAt).getTime();

      const localDateCairo = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dubai",
      });
      const currentTime = new Date(localDateCairo).getTime();
      const distance = endsAtTime - currentTime;
      let day;
      let hour;
      let minute;
      let second;

      day = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
      hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toString();
      minute = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      ).toString();
      second = Math.floor((distance % (1000 * 60)) / 1000).toString();

      day = day < 10 ? "0" + day : day;
      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      this.days = day;
      this.hours = hour;
      this.minutes = minute;
      this.seconds = second;

      let d = parseInt(day);
      let h = parseInt(hour);
      let m = parseInt(minute);
      let s = parseInt(second);

      if (d === 0 && h === 0 && m === 0 && s === 0) {
        (this.days = 0),
          (this.hours = 0),
          (this.minutes = 0),
          (this.seconds = 0);
      }
    },
  },
  mounted() {
    this.countDownTimer();

    setInterval(() => {
      this.countDownTimer();
    }, 1000);
  },
};
</script>
<style lang="scss" scoped></style>
