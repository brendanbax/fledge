<template>
  <div id="app">
    <button class="bg-primary text-light btn-fab" :class="fabObject.class" @click="menuOpen = !menuOpen">{{ fabObject.icon }}</button>
    <div v-if="menuOpen" id="menu" class="bg-white">
      <div class="mt-1 mb-1 flex-col">
        <h3 class="text-h3">Getting Started</h3>
        <p class="text-body mb-1">Expand each section below to customize part of your design system. Inputs are strings under the hood, so you can enter any valid CSS value for a given property <em>(ex: hex or RGB for color, px or rem for sizes)</em>. When finished, click the button to download a copy of the CSS file with all appropriate system classes.</p>
        <button class="btn-primary mt-1">Download CSS</button>
      </div>
      <Accordion label="Colors">
        <fieldset class="mb-1">
          <label v-for="(color, idx) in colorOptions" :key="'color_' + idx">
            <div class="text-label">{{ color.name }}</div>
            <div class="input-row">
              <input class="text-body text-capitalize" type="text" :value="color.val" @input="handleChange($event, color.prop)" />
              <input type="color" :value="color.val" @change="handleChange($event, color.prop)" />
            </div>
          </label>
        </fieldset>
      </Accordion>
      <Accordion label="Fonts">
        <fieldset class="mb-1">
          <label>
            <div class="text-label">Primary Font URL</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="font_primary.url" />
            </div>
          </label>
          <label>
            <div class="text-label">Primary Font Name</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="font_primary.name" />
            </div>
          </label>
          <button class="btn-secondary btn-small" @click="updatePageStyles">Update</button>
        </fieldset>
        <fieldset class="mb-1">
          <label>
            <div class="text-label">Secondary Font URL</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="font_secondary.url" />
            </div>
          </label>
          <label>
            <div class="text-label">Secondary Font Name</div>
            <div class="input-row">
              <input class="text-body" type="text" v-model="font_secondary.name" />
            </div>
          </label>
          <button class="btn-secondary btn-small" @click="updatePageStyles">Update</button>
        </fieldset>
      </Accordion>
      <Accordion label="Type Scale">
        <fieldset v-for="(type, idx) in typeOptions" :key="'type_' + idx" class="mb-1">
          <h6 :class="getTextClass(type.prop)">{{ type.name }}</h6>
          <div class="mb-1 inset">
            <p class="text-label">Font Family</p>
            <fieldset>
              <label class="text-label inline-input">
                <input
                  class="text-body"
                  type="radio"
                  value="true"
                  v-model="type.val.font_primary"
                  @change="handleChange($event, 'font_primary', type.prop)"
                />
                <span>Primary</span>
              </label>
              <label class="text-label">
                <input
                  class="text-body"
                  type="radio"
                  value="false"
                  v-model="type.val.font_primary"
                  @input="handleChange($event, 'font_primary', type.prop)"
                />
                <span>Secondary</span>
              </label>
            </fieldset>
            <label>
              <div class="text-label">Font Size</div>
              <input class="text-body" type="text" :value="type.val.font_size" @input="handleChange($event, 'font_size', type.prop)" />
            </label>
            <label>
              <div class="text-label">Font Weight</div>
              <input class="text-body" type="text" :value="type.val.font_weight" @input="handleChange($event, 'font_weight', type.prop)" />
            </label>
            <label>
              <div class="text-label">Line Height</div>
              <input class="text-body" type="text" :value="type.val.line_height" @input="handleChange($event, 'line_height', type.prop)" />
            </label>
          </div>
        </fieldset>
      </Accordion>
      <Accordion label="Shadows and Borders">
        <p>Options for shadow styling (make it able to be added to), border thickness, and global border radius.</p>
      </Accordion>
      <Accordion label="Cards">
        <p>attributes may include border radius, shadows, outlines, etc.</p>
      </Accordion>
      <Accordion label="Buttons">
        <fieldset v-for="(button, idx) in buttonOptions" :key="'btn_' + idx" class="mb-1">
          <h6 class="text-h6">{{ button.name }}</h6>
          <div class="mb-1 inset">
            <label class="inline-input">
              <input class="text-body" type="checkbox" v-model="button.val.border" @change="handleToggle('border', button.prop)" />
              <span class="text-label">Border</span>
            </label>
            <label class="inline-input">
              <input class="text-body" type="checkbox" v-model="button.val.radius" @change="handleToggle('radius', button.prop)" />
              <span class="text-label">Radius</span>
            </label>
            <label class="inline-input">
              <input class="text-body" type="checkbox" v-model="button.val.shadow" @change="handleToggle('shadow', button.prop)" />
              <span class="text-label">Shadow</span>
            </label>
          </div>
        </fieldset>
      </Accordion>
      <Accordion label="Inputs">
        <p>attributes may include... label styles?  This may not be needed.</p>
      </Accordion>
    </div>
    <Demo :class="{ 'margin-right': menuOpen }" />
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
    },
    typeOptions() {
      return [
        {val: this.text_h1, name: 'Heading 1', prop: 'text_h1'},
        {val: this.text_h2, name: 'Heading 2', prop: 'text_h2'},
        {val: this.text_h3, name: 'Heading 3', prop: 'text_h3'},
        {val: this.text_h4, name: 'Heading 4', prop: 'text_h4'},
        {val: this.text_h5, name: 'Heading 5', prop: 'text_h5'},
        {val: this.text_h6, name: 'Heading 6', prop: 'text_h6'},
        {val: this.text_body, name: 'Body', prop: 'text_body'},
        {val: this.text_overline, name: 'Overline', prop: 'text_overline'},
        {val: this.text_caption, name: 'Caption', prop: 'text_caption'},
        {val: this.text_label, name: 'Label', prop: 'text_label'},
        {val: this.text_nav, name: 'Navigation', prop: 'text_nav'},
        {val: this.text_link, name: 'Link', prop: 'text_link'},
        {val: this.text_button, name: 'Button', prop: 'text_button'},
      ]
    },
    buttonOptions() {
      return [
        {val: this.button_primary, name: 'Primary', prop: 'button_primary'},
        {val: this.button_secondary, name: 'Secondary', prop: 'button_secondary'},
        {val: this.button_tertiary, name: 'Tertiary', prop: 'button_tertiary'},
      ]
    },
    fabObject() {
      if (this.menuOpen) {
        return {icon: 'hide', class: 'right-320'}
      } else {
        return {icon: 'show', class: 'right-1'}
      }
    }
  },
  methods: {
    handleChange(event, prop, parent) {
      let newValue = event.target.value
      if (newValue === "true") {
        newValue = true
      }
      if (newValue === "false") {
        newValue = false
      }
      if (parent) {
        this[parent][prop] = newValue
      } else {
        this[prop] = newValue
      }
      this.updatePageStyles()
    },
    handleToggle(prop, parent) {
      if (parent) {
        this[parent][prop] = !!this[parent][prop]
      } else {
        this[prop] = !!this[prop]
      }
      this.updatePageStyles()
    },
    getTextClass(base) {
      return base.replace('_', '-')
    }
  },
  mounted() {
    this.updatePageStyles()
  }
}
</script>

<style>
#app {
  position: relative;
}
#menu {
  position: absolute;
  padding: 1rem;
  width: 375px;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  border-left: 1px solid var(--color-dark);
}
.margin-right {
  margin-right: 375px;
}
.right-320, .right-1 {
  position: fixed;
  bottom: 1rem;
  z-index: 999;
}
.right-320 {
  right: calc(375px + 1rem);
}
.right-1 {
  right: 1rem;
}
@media screen and (max-width: 640px) {
  #menu {
    left: 0;
    width: 100%;
    margin-bottom: 3rem;
  }
  .margin-right {
    margin-right: 0;
  }
  .right-320 {
    right: 1rem;
  }
}
/* Form Layout Styles */
.input-row {
  position: relative;
}
.inset {
  margin-left: .25rem;
  padding-left: .75rem;
  border-left: 2px solid var(--color-info);
}
input[type="text"] {
  padding: .5rem .25rem;
  border: 1px solid black;
  margin-top: .5rem;
  margin-bottom: 1rem;
  width: 100%;
}
input[type="radio"],
input[type="checkbox"] {
  margin-top: .5rem;
  margin-bottom: 1rem;
  margin-right: .5rem;
}
.inline-input {
  margin-right: 1rem;
}
input[type="color"] {
  width: 2.5rem;
  height: 1.5rem;
  background: none;
  border: none;
  position: absolute;
  right: 0;
  bottom: 1.5rem;
}
/* Utility Classes */
.flex, .flex-col {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.mt-1 {
  margin-top: 1rem;
}
.mb-1 {
  margin-bottom: 1rem;
}
</style>
