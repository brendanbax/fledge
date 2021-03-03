<template>
  <div id="app">
    <div id="menu">
      <fieldset>
        <label>
          <span>Light</span>
          <input type="text" v-model="color_light" @change="updatePageStyles" />
          <input type="color" v-model="color_light" @change="updatePageStyles" />
        </label>
        <label>
          <span>Dark</span>
          <input type="color" :value="color_dark" @change="updateColor('color_dark', $event)">
        </label>
        <label>
          <span>Primary</span>
          <input type="color" :value="color_primary" @change="updateColor('color_primary', $event)">
        </label>
        <label>
          <span>Secondary</span>
          <input type="color" :value="color_secondary" @change="updateColor('color_secondary', $event)">
        </label>
        <label>
          <span>Info</span>
          <input type="color" :value="color_info" @change="updateColor('color_info', $event)">
        </label>
        <label>
          <span>Success</span>
          <input type="color" :value="color_success" @change="updateColor('color_success', $event)">
        </label>
        <label>
          <span>Warning</span>
          <input type="color" :value="color_warning" @change="updateColor('color_warning', $event)">
        </label>
        <label>
          <span>Danger</span>
          <input type="color" :value="color_danger" @change="updateColor('color_danger', $event)">
        </label>
      </fieldset>
      <button @click="updatePageStyles">Update Styles</button>
    </div>
    <Demo id="demo" />
  </div>
</template>

<script>
import CSS from '@/mixins/css.js'
import Demo from '@/components/Demo'

export default {
  name: 'App',
  mixins: [
    CSS
  ],
  components: {
    Demo
  },
  data() {
    return {
      menuOpen: true,
    }
  },
  methods: {
    updateColor(object, event) {
      let newColor = event.target.value
      this[object] = newColor
    }
  },
  mounted() {
    this.updatePageStyles()
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row-reverse;
}
#menu {
  padding: 1rem;
}
#menu.open {
  width: 320px;
}
#demo {
  flex-grow: 1;
}
label {
  display: flex;
  justify-content: space-between;
}
label > input[type="color"] {
  width: 100px;
}
</style>
