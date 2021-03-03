<template>
  <div id="app">
    <div id="menu">
      <Accordion label="Colors">
        <fieldset>
          <label>
            <div class="text-label">Light</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="color_light" @change="updatePageStyles" />
              <input type="color" v-model="color_light" @change="updatePageStyles" />
            </div>
          </label>
          <label>
            <div class="text-label">Dark</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="color_dark" @change="updatePageStyles">
              <input type="color" v-model="color_dark" @change="updatePageStyles">
            </div>
          </label>
          <label>
            <div class="text-label">Primary</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="color_primary" @change="updatePageStyles">
              <input type="color" v-model="color_primary" @change="updatePageStyles">
            </div>
          </label>
          <label>
            <div class="text-label">Secondary</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="color_secondary" @change="updatePageStyles">
              <input type="color" v-model="color_secondary" @change="updatePageStyles">
            </div>
          </label>
          <label>
            <div class="text-label">Info</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="color_info" @change="updatePageStyles">
              <input type="color" v-model="color_info" @change="updatePageStyles">
            </div>
          </label>
          <label>
            <div class="text-label">Success</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="color_success" @change="updatePageStyles">
              <input type="color" v-model="color_success" @change="updatePageStyles">
            </div>
          </label>
          <label>
            <div class="text-label">Warning</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="color_warning" @change="updatePageStyles">
              <input type="color" v-model="color_warning" @change="updatePageStyles">
            </div>
          </label>
          <label>
            <div class="text-label">Danger</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="color_danger" @change="updatePageStyles">
              <input type="color" v-model="color_danger" @change="updatePageStyles">
            </div>
          </label>
        </fieldset>
      </Accordion>
      <Accordion label="Fonts"></Accordion>
      <Accordion label="Type Scale"></Accordion>
      <Accordion label="Shadows and Borders"></Accordion>
      <Accordion label="Buttons"></Accordion>
    </div>
    <Demo id="demo" />
  </div>
</template>

<script>
import CSS from '@/mixins/css.js'
import Accordion from '@/components/Accordion'
import Demo from '@/components/Demo'

export default {
  name: 'App',
  mixins: [
    CSS
  ],
  components: {
    Accordion,
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
  min-width: 320px;
}
#demo {
  flex-grow: 1;
}
.input-row {
  position: relative;
}
.input-row > input[type="text"] {
  padding: .5rem .25rem;
  border: 1px solid black;
  margin-top: .5rem;
  margin-bottom: 1rem;
  width: 100%;
  text-transform: uppercase;
}
.input-row > input[type="color"] {
  width: 2.5rem;
  height: 1.5rem;
  background: none;
  border: none;
  position: absolute;
  right: 0;
  bottom: 1.5rem;
}

</style>
