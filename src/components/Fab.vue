<template>
  <div class="bg-primary text-light btn-fab fab">
    <svg v-if="open" class="centered" :viewBox="viewbox" xmlns="http://www.w3.org/2000/svg">
      <rect class="top-close centered" width="40" height="4" rx="2" fill="red" />
      <rect class="shrink centered" width="40" height="4" rx="2" fill="green" />
      <rect class="bottom-close centered" width="40" height="4" rx="2" fill="blue" />
    </svg>
    <svg v-else class="centered" :viewBox="viewbox" xmlns="http://www.w3.org/2000/svg">
      <rect class="top-open centered" width="40" height="4" rx="2" fill="orange" />
      <rect class="grow centered" width="40" height="4" rx="2" fill="black" />
      <rect class="bottom-open centered" width="40" height="4" rx="2" fill="purple" />
    </svg>
    <div class="text-caption">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Fab",
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      viewbox: '0 0 40 40',
    }
  },
  computed: {
    text() {
      return this.open ? 'close' : 'menu'
    }
  }
}
</script>

<style scoped>
.fab {
  width: 3rem;
  height: 3rem;
  position: relative;
}
.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
}
.shrink {
  animation: shrink 300ms forwards;
}
.grow {
  animation: grow 300ms forwards;
}
.top-open {
  animation: x-to-flat-one 300ms forwards;
}
.bottom-open {
  animation: x-to-flat-two 300ms forwards;
}
.top-close {
  animation: flat-to-x-one 300ms forwards;
}
.bottom-close {
  animation: flat-to-x-two 300ms forwards;
}
@keyframes shrink {
  0% { width: 40; }
  100% { width: 0; }
}
@keyframes grow {
  0% { width: 0; }
  100% { width: 40; }
}
@keyframes x-to-flat-one {
  0% { width: 40; }
  100% { width: 0; }
}
@keyframes x-to-flat-two {
  0% { width: 40; }
  100% { width: 0; }
}
@keyframes flat-to-x-one {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(45deg); }
}
@keyframes flat-to-x-two {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-45deg); }
}
</style>