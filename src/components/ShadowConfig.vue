<template>
  <div>
    <div class="shadow-sample text-caption text-center text-info" />
    <h6 class="text-h6 mb-1">Base</h6>
    <div class="mb-1 inset">
      <fieldset v-for="(shadow, index) in base" :key="'base_' + index" class="mb-1 shadow-container">
        <label v-for="(key, idx) in shadowKeys" :key="'prop_' + index + '_' + idx" :class="{'inline' : idx < 4}">
          <div class="text-label text-capitalize">{{ key }}</div>
          <input class="text-input" type="text" v-model="base[index][key]" @input="handleChange"/>
        </label>
        <button v-if="base.length > 1" class="btn-tertiary btn-small mb-1 btn-danger" @click="removeShadow('base', index)">Remove Shadow</button>
      </fieldset>
      <button class="btn-secondary btn-small" @click="addShadow('base')">Add Shadow</button>
    </div>
    <h6 class="text-h6 mt-1 mb-1">Hover</h6>
    <div class="mb-1 inset">
      <fieldset v-for="(shadow, index) in hover" :key="'hover_' + index" class="mb-1 shadow-container">
        <label v-for="(key, idx) in shadowKeys" :key="'prop_' + index + '_' + idx" :class="{'inline' : idx < 4}">
          <div class="text-label text-capitalize">{{ key }}</div>
          <input class="text-input" type="text" v-model="hover[index][key]" @input="handleChange"/>
        </label>
        <button v-if="hover.length > 1" class="btn-tertiary btn-small mb-1 btn-danger" @click="removeShadow('hover', index)">Remove Shadow</button>
      </fieldset>
      <button class="btn-secondary btn-small" @click="addShadow('hover')">Add Shadow</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShadowConfig",
  data() {
    return {
      template: {
        x: '0',
        y: '.375rem',
        blur: '.5rem',
        inset: '-.25rem',
        color: 'rgba(0,0,0,0.5)'
      },
      base: [],
      hover: [],
    }
  },
  computed: {
    shadowKeys() {
      return Object.keys(this.template)
    }
  },
  methods: {
    publishShadows() {
      let baseShadows = this.base.map(function(style){
        return `${style.x} ${style.y} ${style.blur} ${style.inset} ${style.color}`;
      }).join(", ");
      let hoverShadows = this.hover.map(function(style){
        return `${style.x} ${style.y} ${style.blur} ${style.inset} ${style.color}`;
      }).join(", ");
      this.$emit('shadow', {
        base: baseShadows,
        hover: hoverShadows
      })
    },
    addShadow(type) {
      let lastShadowPos = this[type].length - 1
      let lastShadow = { ...this[type][lastShadowPos] }
      this[type].push(lastShadow)
      this.publishShadows()
    },
    removeShadow(type, index) {
      this[type].splice(index, 1)
      this.publishShadows()
    },
    handleChange() {
      this.publishShadows()
    }
  },
  mounted() {
    let sampleBase = { ...this.template }
    let sampleHover = { ...this.template }
    this.base.push(sampleBase)
    this.hover.push(sampleHover)
  }
}
</script>

<style scoped>
.inline {
  display: inline-block;
  max-width: calc(25% - .5rem);
}
.inline:not(:first-child) {
  margin-left: .5rem;
}
.btn-danger {
  color: var(--color-danger);
}
.btn-danger:hover {
  color: var(--color-danger-light);
}
.shadow-sample,
.shadow-hover-sample {
  width: 100%;
  height: 4rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
}
.shadow-sample {
  margin: 1rem 0;
  box-shadow: var(--shadow-base);
  transition: box-shadow 300ms;
}
.shadow-sample:hover {
  box-shadow: var(--shadow-hover);
  transition: box-shadow 300ms;
}
</style>