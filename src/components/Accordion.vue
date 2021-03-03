<template>
  <div class="accordion-container">
    <div class="accordion-header" @click="expanded = !expanded">
      <span class="accordion-title text-h6">{{ label }}</span>
      <button
        @click="expanded = !expanded"
        @keyup.enter="expanded = !expanded"
        :class="computedClass"
        :aria-label="computedLabel"
      >&#8963;</button>
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
    },
    computedLabel() {
      return this.expanded ? `collapse ${this.label}` : `expand ${this.label}`
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
  cursor: pointer;
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