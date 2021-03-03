<template>
  <div id="app">
    <div id="menu">
      <Accordion label="Colors">
        <fieldset>
          <label v-for="(color, idx) in colorOptions" :key="'color_' + idx">
            <div class="text-label">{{ color.name }}</div>
            <div class="input-row">
              <input class="text-body" type="text" :value="color.val" @input="handleChange($event, color.prop)" />
              <input type="color" :value="color.val" @change="handleChange($event, color.prop)" />
            </div>
          </label>
        </fieldset>
      </Accordion>
      <Accordion label="Fonts">
        <p>Inputs for primary and secondary fonts.  Each would include a text input for the link as well as a "name" for use in style declarations.</p>
      </Accordion>
      <Accordion label="Type Scale">
        <p>For each type, show options for font family, size, weight, and line-height.</p>
      </Accordion>
      <Accordion label="Shadows and Borders">
        <p>Options for shadow styling (make it able to be added to), border thickness, and global border radius.</p>
      </Accordion>
      <Accordion label="Cards">
        <p>attributes may include border radius, shadows, outlines, etc.</p>
      </Accordion>
      <Accordion label="Buttons">
        <p>attributes may include border radius, shadows, outlines, etc.</p>
      </Accordion>
      <Accordion label="Inputs">
        <p>attributes may include... label styles?  This may not be needed.</p>
      </Accordion>
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
  computed: {
    colorOptions() {
      return [
        {val: this.color_light, name: 'Light', prop: 'color_light'},
        {val: this.color_dark, name: 'Dark', prop: 'color_dark'},
        {val: this.color_primary, name: 'Primary', prop: 'color_primary'},
        {val: this.color_secondary, name: 'Secondary', prop: 'color_secondary'},
        {val: this.color_info, name: 'Info', prop: 'color_info'},
        {val: this.color_success, name: 'Success', prop: 'color_success'},
        {val: this.color_warning, name: 'Warning', prop: 'color_warning'},
        {val: this.color_danger, name: 'Danger', prop: 'color_danger'},
      ]
    }
  },
  methods: {
    handleChange(event, prop) {
      let newValue = event.target.value
      this[prop] = newValue
      this.updatePageStyles()
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
  width: 320px;
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
