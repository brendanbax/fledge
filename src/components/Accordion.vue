<template>
  <div class="accordion-container">
    <div class="accordion-header">
      <span class="accordion-title text-h6">{{ label }}</span>
      <button @click="expanded = !expanded" :class="computedClass">&#8963;</button>
    </div>
    <div v-if="expanded" class="accordion-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    label: {
      type: String,
      default: 'Label'
    }
  },
  data() {
    return {
      expanded: false,
    }
  },
  computed: {
    computedClass() {
      return this.expanded ? 'arrow-up' : 'arrow-down'
    }
  }
}
</script>

<style scoped>
.accordion-container {
  margin-top: .25rem;
}
.accordion-header {
  display: flex;
  padding: .5rem 0;
  border-bottom: 1px solid gray;
  align-items: center;
}
.accordion-title {
  flex-grow: 1;
}
.accordion-content {
  margin-top: .75rem;
}
button {
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
.arrow-up {
  transform: translateY(0.125rem);
}
.arrow-down {
  transform: rotate(180deg) translateY(0.25rem);
}
</style>