<template>
  <div id="parent">
    <div
      :class="[ 'lightning', {inactive: opacTrue}, {ani: isThree && opacTrue}]"
      :style="{ 'background-color': curColor}"
    ></div>
  </div>
</template>

<script>
export default {
  name: "light",
  props: {
    timer: {
      type: Number,
      default: 10
    },
    curColor: {
      type: String,
      default: "red"
    },
    opacTrue: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      lightning: "lightning",
      isThree: Boolean
    };
  },
  created() {
    this.isThree = false;
  },
  watch: {
    //Если осталось в таймере меньше 3 секунд, то запускаем анимацию мигания.
    timer: {
      handler: function(val) {
        if (val <= 3) {
          this.isThree = true;
        } else {
          this.isThree = false;
        }
      }
    }
  }
};
</script>

<style scoped>
.lightning {
  text-align: center;
  width: 90%;
  height: 90%;
  border-radius: 50px;
  opacity: 0.2;
}
.inactive {
  opacity: 1;
}
#parent {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100px;
  height: 100px;
  border-radius: 5px;
}
.ani {
  animation: mig 3.3s;
}
@keyframes mig {
  20% {
    opacity: 1;
  }
  40% {
    opacity: 0.2;
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>