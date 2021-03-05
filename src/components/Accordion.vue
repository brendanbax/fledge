<template>
  <section class="accordion-container">
    <div class="accordion-header">
      <span class="accordion-title text-h5" @click="expanded = !expanded">{{ label }}</span>
      <button
        class="accordion-button"
        @click="expanded = !expanded"
        @keyup.enter="expanded = !expanded"
        :class="computedClass"
        :aria-label="computedLabel"
      >&#8963;</button>
    </div>
    <div v-show="expanded" class="accordion-content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    label: {
      type: String,
      default: 'Label'
    },
    expand: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      expanded: false,
    }
  },
  watch: {
    expand: function () {
      this.expanded = true
    }
  },
  computed: {
    computedClass() {
      return this.expanded ? 'arrow-up' : 'arrow-down'
    },
    computedLabel() {
      return this.expanded ? `collapse ${this.label}` : `expand ${this.label}`
    }
  },
}
</script>

<style scoped>
.accordion-container {
  margin-top: .25rem;
}
.accordion-header {
  display: flex;
  border-bottom: var(--border-width) solid var(--color-dark);
  align-items: center;
}
.accordion-title {
  display: block;
  flex-grow: 1;
  cursor: pointer;
  padding: .5rem 0;
}
.accordion-content {
  margin-top: .75rem;
}
.accordion-button {
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