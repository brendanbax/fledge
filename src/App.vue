<template>
  <div id="app">
    <button :class="fabClass" @click="menuOpen = !menuOpen"><Fab :open="menuOpen"/></button>
    <div v-show="menuOpen" id="menu" class="bg-white">
      <Accordion label="Getting Started" :expand="showGetStarted">
        <div class="mb-1 flex-col">
          <p class="text-body mb-1">Expand each section below to customize part of your design system. Your changes will propigate throughout the demo application(s) so you can fine-tune your design decisions with real-time feedback. When finished, download a copy of the CSS file which includes the system classes and tokens.</p>
          <h6 class="text-h6">Units</h6>
          <p class="text-body mb-1">You can enter any valid CSS unit for any given property <em>(ex: hex or RGB for colors, px or rem for sizes)</em>. Rem is the default for this app, you can learn more about it <a class="text-link" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" target="_blank">here</a>. The base document size is 16px, so here's a quick converstion chart:</p>
          <ul class="text-body mb-1">
            <li>0.25rem = 4px</li>
            <li>0.5rem = 8px</li>
            <li>1rem = 16px</li>
            <li>1.5rem = 24px</li>
            <li>2rem = 32px</li>
          </ul>
          <button class="btn-primary mt-1" @click="handleDownload">Download CSS</button>
        </div>
      </Accordion>
      <Accordion label="Colors" :expand="showColors">
        <fieldset class="mb-1">
          <label v-for="(color, idx) in colorOptions" :key="'color_' + idx">
            <div class="text-label">{{ color.name }}</div>
            <div class="input-row">
              <input class="text-input text-uppercase" type="text" :value="color.val" @input="handleChange($event, color.prop)" />
              <input type="color" :value="color.val" @change="handleChange($event, color.prop)" />
            </div>
          </label>
        </fieldset>
      </Accordion>
      <Accordion label="Fonts" :expand="showFonts">
        <fieldset class="mb-1">
          <h6 class="primary-font-sample mb-1">Primary Font</h6>
          <label>
            <div class="text-label">URL</div>
            <div class="input-row">
              <input class="text-input" type="text" v-model="font_primary.url" />
            </div>
          </label>
          <label>
            <div class="text-label">Name</div>
            <div class="input-row">
              <input class="text-input" type="text" v-model="font_primary.name" />
            </div>
          </label>
          <button class="btn-secondary btn-small" @click="updatePageStyles">Update</button>
        </fieldset>
        <fieldset class="mb-1">
          <h6 class="secondary-font-sample mb-1">Secondary Font</h6>
          <label>
            <div class="text-label">URL</div>
            <div class="input-row">
              <input class="text-input" type="text" v-model="font_secondary.url" />
            </div>
          </label>
          <label>
            <div class="text-label">Name</div>
            <div class="input-row">
              <input class="text-input" type="text" v-model="font_secondary.name" />
            </div>
          </label>
          <button class="btn-secondary btn-small" @click="updatePageStyles">Update</button>
        </fieldset>
      </Accordion>
      <Accordion label="Type Scale" :expand="showType">
        <fieldset v-for="(type, idx) in typeOptions" :key="'type_' + idx" class="mb-1">
          <h6 :class="getTextClass(type.prop)" class="mb-1">{{ type.name }}</h6>
          <div class="mb-1 inset">
            <p class="text-label">Font Family</p>
            <fieldset>
              <label class="text-label inline-input">
                <input
                  class="text-input"
                  type="radio"
                  value="true"
                  v-model="type.val.font_primary"
                  @change="handleChange($event, 'font_primary', type.prop)"
                />
                <span>Primary</span>
              </label>
              <label class="text-label">
                <input
                  class="text-input"
                  type="radio"
                  value="false"
                  v-model="type.val.font_primary"
                  @change="handleChange($event, 'font_primary', type.prop)"
                />
                <span>Secondary</span>
              </label>
            </fieldset>
            <label class="third">
              <div class="text-label">Font Size</div>
              <input class="text-input" type="text" :value="type.val.font_size" @input="handleChange($event, 'font_size', type.prop)" />
            </label>
            <label class="third">
              <div class="text-label">Font Weight</div>
              <input class="text-input" type="text" :value="type.val.font_weight" @input="handleChange($event, 'font_weight', type.prop)" />
            </label>
            <label class="third">
              <div class="text-label">Line Height</div>
              <input class="text-input" type="text" :value="type.val.line_height" @input="handleChange($event, 'line_height', type.prop)" />
            </label>
          </div>
        </fieldset>
      </Accordion>
      <Accordion label="Shadows">
        <ShadowConfig @shadow="handleShadowUpdate" />
      </Accordion>
      <Accordion label="Borders">
        <label>
          <div class="text-label">Border Thickness</div>
          <input class="text-input" type="text" v-model="border_width" @input="updatePageStyles" />
        </label>
      </Accordion>
      <Accordion label="Cards">
        <fieldset class="mb-1">
          <div class="card sample-card mb-1" />
          <div>
            <label class="inline-input mt-1">
              <input class="text-input" type="checkbox" v-model="card.border" @change="updatePageStyles" />
              <span class="text-label">Border</span>
            </label>
            <label class="inline-input mt-1">
              <input class="text-input" type="checkbox" v-model="card.shadow" @change="updatePageStyles" />
              <span class="text-label">Shadow</span>
            </label>
            <label class="inline-input mt-1">
              <input class="text-input" type="checkbox" v-model="card.hover" @change="updatePageStyles" />
              <span class="text-label">Hover</span>
            </label>
          </div>
          <label>
            <div class="text-label">Border Radius</div>
            <input class="text-input" type="text" v-model="card.radius" @input="updatePageStyles" />
          </label>
        </fieldset>
      </Accordion>
      <Accordion label="Buttons" :expand="showButtons">
        <fieldset v-for="(button, idx) in buttonOptions" :key="'btn_' + idx" class="mb-1">
          <h6 class="mb-1 text-center" :class="getBtnClass(button.prop)">{{ button.name }}</h6>
          <div class="mb-1 inset">
            <label class="inline-input">
              <input class="text-input" type="checkbox" v-model="button.val.fill" @change="handleToggle('fill', button.prop)" />
              <span class="text-label">Fill</span>
            </label>
            <label class="inline-input">
              <input class="text-input" type="checkbox" v-model="button.val.border" @change="handleToggle('border', button.prop)" />
              <span class="text-label">Border</span>
            </label>
            <label class="inline-input">
              <input class="text-input" type="checkbox" v-model="button.val.uppercase" @change="handleToggle('radius', button.prop)" />
              <span class="text-label">Caps</span>
            </label>
            <label class="inline-input">
              <input class="text-input" type="checkbox" v-model="button.val.shadow" @change="handleToggle('shadow', button.prop)" />
              <span class="text-label">Shadow</span>
            </label>
          </div>
        </fieldset>
        <label>
          <div class="text-label">Border Radius</div>
          <input class="text-input" type="text" v-model="button_radius" @input="updatePageStyles" />
        </label>
      </Accordion>
      <Accordion label="Inputs">
        <fieldset class="mb-1">
          <label class="inline-input mt-1">
            <input class="text-input" type="checkbox" v-model="input.border" @change="updatePageStyles" />
            <span class="text-label">Border</span>
          </label>
          <label class="inline-input mt-1">
            <input class="text-input" type="checkbox" v-model="input.border_bottom" @change="updatePageStyles" />
            <span class="text-label">Underline</span>
          </label>
          <label>
            <div class="text-label">Border Radius</div>
            <input class="text-input" type="text" v-model="input.radius" @input="updatePageStyles" />
          </label>
        </fieldset>
      </Accordion>
    </div>
    <Demo
      :class="{ 'margin-right': menuOpen }"
      :menu-open="menuOpen"
      @getstarted="handleAccordion('showGetStarted')"
      @colors="handleAccordion('showColors')"
      @fonts="handleAccordion('showFonts')"
      @type="handleAccordion('showType')"
      @buttons="handleAccordion('showButtons')"
      @download="handleDownload"
    />
  </div>
</template>

<script>
import { saveAs } from 'file-saver';
import CSS from '@/mixins/css.js'
import Accordion from '@/components/Accordion'
import Fab from '@/components/Fab'
import ShadowConfig from '@/components/ShadowConfig'
import Demo from '@/components/Demo'

export default {
  name: 'App',
  mixins: [
    CSS
  ],
  components: {
    Accordion,
    Fab,
    ShadowConfig,
    Demo
  },
  data() {
    return {
      menuOpen: true,
      showGetStarted: false,
      showColors: false,
      showFonts: false,
      showType: false,
      showButtons: false,
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
        {val: this.text_quote, name: 'Quote', prop: 'text_quote'},
        {val: this.text_caption, name: 'Caption', prop: 'text_caption'},
        {val: this.text_label, name: 'Label', prop: 'text_label'},
        {val: this.text_input, name: 'Input', prop: 'text_input'},
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
    fabClass() {
      return this.menuOpen ? 'right-320' : 'right-1'
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
    handleShadowUpdate(data) {
      this.box_shadow = data
      this.updatePageStyles()
    },
    getTextClass(base) {
      return base.replace('_', '-')
    },
    getBtnClass(base) {
      return base.replace('button', 'btn').replace('_', '-')
    },
    handleDownload() {
      let blob = new Blob([this.createStyleSheet()], {type: "text/plain;charset=utf-8"})
      saveAs(blob, "fledge.css")
    },
    handleAccordion(val) {
      this[val] = true
      this.menuOpen = true
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
  position: fixed;
  padding: 1rem;
  width: 375px;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  border-left: 1px solid var(--color-dark);
  z-index: 990;
}
#menu > section:last-child {
  margin-bottom: 2rem;
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
  }
  #menu > section:last-child {
    margin-bottom: 6rem;
  }
  .margin-right {
    margin-right: 0;
  }
  .right-320 {
    right: 1rem;
  }
}
.sample-card {
  width: 100%;
  height: 4rem;
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
.third {
  display: inline-block;
  max-width: calc(33% - .5rem);
}
.third:not(:first-child) {
  margin-left: .5rem;
}
input[type="text"] {
  margin-top: .5rem;
  margin-bottom: 1rem;
  width: 100%;
}
input[type="radio"],
input[type="checkbox"] {
  margin-top: .5rem;
  margin-bottom: 1rem;
  margin-right: .375rem;
  width: 1rem;
  height: 1rem;
}
.inline-input {
  margin-right: 1rem;
}
input[type="color"] {
  height: 1.5rem;
  background: none;
  border: none;
  position: absolute;
  right: 0;
  bottom: 1.375rem;
}
.primary-font-sample {
  font-family: var(--font-primary);
  font-size: 1.125rem;
}
.secondary-font-sample {
  font-family: var(--font-secondary);
  font-size: 1.125rem;
}
/* Utility Classes */
.block {
  display: block;
}
.flex, .flex-col, .flex-wrap {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-grow {
  flex-grow: 1;
}
.mt-1 {
  margin-top: 1rem;
}
.mb-1 {
  margin-bottom: 1rem;
}
.ml-1 {
  margin-left: 1rem;
}
.mt-2 {
  margin-top: 2rem;
}
.mb-2 {
  margin-bottom: 2rem;
}
.ml-2 {
  margin-left: 2rem;
}
.mt-3 {
  margin-top: 3rem;
}
.mb-3 {
  margin-bottom: 3rem;
}
.ml-3 {
  margin-left: 3rem;
}
</style>
