<template>
    <div id="yellow">
      <lights :isYellow="true" :timer = timerSec />
    <div id="timer">Таймер: {{timer}}</div>
  </div>
</template>

<script>
import lights from './lights'
export default {
  name: 'yellow',
  components: {
    lights
  },
  data: () => ({
    timerSec: Number,
    timer: String,
    timerInt: Number,
    fromColor: String
  }),
  created() {
    //Если в query есть значение, то оставляем таймер на это время(перезагрузка страницы)
    //По окончанию timerSec переходим на следующий цвет.
    this.$route.query.timerSec ? this.timerSec = +this.$route.query.timerSec : this.timerSec = 3;
    this.fromColor = this.$route.query.fromColor;
    this.timer = `00:0${this.timerSec}`;
    let timerInt = setInterval(()=>{
      this.timer = `00:0${--this.timerSec}`;
      this.$router.push({ path: '/yellow', query: { timerSec: this.timerSec }})
      }, 1000);
    setTimeout(() => {
      clearInterval(timerInt);
      if(this.fromColor === 'green'){
        this.$router.push('/red').catch(() => {});
      } else if(this.fromColor === 'red'){
        this.$router.push('/green').catch(() => {});
      }
    }, this.timerSec*1100);
  }
}
</script>

<style scoped>
.yellow{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>