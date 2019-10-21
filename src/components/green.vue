<template>
  <div id="green">
        <lights :isGreen="true" :timer = timerSec />
    <div id="timer">Таймер: {{timer}}</div>
  </div>
</template>

<script>
import lights from "./lights";
export default {
  name: "green",
  components: {
    lights
  },
  data: () => ({
    timerSec: Number,
    timer: String,
    timerInt: Number
  }),
  created() {
    //Если в query есть значение, то ставим таймер на это время(перезагрузка страницы)
    //По окончанию timerSec переходим на следующий цвет.
   this.$route.query.timerSec ? this.timerSec = +this.$route.query.timerSec : this.timerSec = 15;
  this.timerSec <= 10
        ? (this.timer = `00:0${this.timerSec}`)
        : (this.timer = `00:${this.timerSec}`);
  let timerInt = setInterval(()=>{ 
    this.timerSec <= 10
        ? (this.timer = `00:0${--this.timerSec}`)
        : (this.timer = `00:${--this.timerSec}`);
      this.$router.push({ path: '/green', query: { timerSec: this.timerSec }})
      }, 1000);
    setTimeout(() => {
      clearInterval(timerInt);
      this.$router.push({ path: '/yellow', query: { fromColor: 'green' }}).catch(() => {});
    }, this.timerSec*1020);
  }
};
</script>

<style scoped>
.green{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>