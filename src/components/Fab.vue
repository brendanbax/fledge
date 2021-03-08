<template>
  <div class="bg-primary text-light btn-fab fab">
    <div class="fab-icon" :class="open ? 'open' : 'closed'">
      <div class="stripe" id="stripe-1" />
      <div class="stripe" id="stripe-2" />
      <div class="stripe" id="stripe-3" />
    </div>
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
  padding: .5rem;
  padding-bottom: .25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  --line-width: 0.125rem;
  --line-half: calc(var(--line-width) / 2);
  --line-radius: calc(var(--line-width) / 2);
  --duration: 300ms;
  --delay: 0ms;
}
.fab-icon {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
}
.stripe {
  width: 100%;
  height: var(--line-width);
  border-radius: var(--line-radius);
  background-color: var(--color-light);
}
#stripe-1,
#stripe-2,
#stripe-3 {
  position: absolute;
}

/* If open, animate from hamburger to "X" */
.open #stripe-1 {
  top: 0;
  animation: shrink var(--duration) var(--delay) forwards, shrink-top var(--duration) var(--delay) forwards;
}
.open #stripe-2 {
  top: calc(50% - var(--line-half));
  animation: shrink-mid var(--duration) var(--delay) forwards;
}
.open #stripe-3 {
  bottom: 0;
  animation: shrink var(--duration) var(--delay) forwards, shrink-bottom var(--duration) var(--delay) forwards;
}
@keyframes shrink {
  0% { width: 100%; left: 0; }
  60% { width: var(--line-width); left: calc(50% - var(--line-half)); }
  71% { width: var(--line-width); left: calc(50% - var(--line-half)); }
  100% { width: 40; left: 0; }
}
@keyframes shrink-top {
  0% { top: 0; }
  40% { top: 0; }
  60% { top: calc(50% - var(--line-half)); transform: rotate(0); }
  61% { top: calc(50% - var(--line-half)); transform: rotate(45deg); }
  100% { top: calc(50% - var(--line-half)); transform: rotate(45deg); }
}
@keyframes shrink-mid {
  0% { width: 100%; left: 0; }
  60% { width: var(--line-width); left: calc(50% - var(--line-half)); }
  100% { width: var(--line-width); left: calc(50% - var(--line-half)); }
}
@keyframes shrink-bottom {
  0% { bottom: 0; }
  40% { bottom: 0; }
  60% { bottom: calc(50% - var(--line-half)); transform: rotate(0); }
  61% { bottom: calc(50% - var(--line-half)); transform: rotate(-45deg); }
  100% { bottom: calc(50% - var(--line-half)); transform: rotate(-45deg); }
}

/* If closed, animate from X to hamburger */
.closed #stripe-1 {
  top: calc(50% - var(--line-half)); transform: rotate(45deg);
  animation: grow var(--duration) var(--delay) forwards, grow-top var(--duration) var(--delay) forwards;
}
.closed #stripe-2 {
  top: calc(50% - var(--line-half));
  width: var(--line-width); left: calc(50% - var(--line-half));
  animation: grow-mid var(--duration) var(--delay) forwards;
}
.closed #stripe-3 {
  bottom: calc(50% - var(--line-half)); transform: rotate(-45deg);
  animation: grow var(--duration) var(--delay) forwards, grow-bottom var(--duration) var(--delay) forwards;
}
@keyframes grow {
  0% { width: 100%; left: 0; }
  60% { width: var(--line-width); left: calc(50% - var(--line-half)); }
  70% { width: var(--line-width); left: calc(50% - var(--line-half)); }
  100% { width: 100%; left: 0; }
}
@keyframes grow-top {
  0% { top: calc(50% - var(--line-half)); transform: rotate(45deg); }
  60% { top: calc(50% - var(--line-half)); transform: rotate(45deg); }
  70% { top: calc(50% - var(--line-half)); transform: rotate(0); }
  100% { top: 0; transform: rotate(0); }
}
@keyframes grow-mid {
  0% { width: var(--line-width); left: calc(50% - var(--line-half)); }
  60% { width: var(--line-width); left: calc(50% - var(--line-half)); }
  100% { width: 100%; left: 0; }
}
@keyframes grow-bottom {
  0% { bottom: calc(50% - var(--line-half)); transform: rotate(-45deg); }
  60% { bottom: calc(50% - var(--line-half)); transform: rotate(-45deg); }
  70% { bottom: calc(50% - var(--line-half)); transform: rotate(0); }
  100% { bottom: 0; transform: rotate(0); }
}
</style>