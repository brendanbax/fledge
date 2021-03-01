<template>
  <div id="app">
    <Accordion />
    <h1 class="text-hero">I am a heading</h1>
    <button @click="createStyleSheet">Update Styles</button>
  </div>
</template>

<script>
import Accordion from '@/components/Accordion'

export default {
  name: 'App',
  components: {
    Accordion
  },
  data() {
    return {
      // Font
      font_url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap',
      // Colors
      color_light: '#FAFAFA',
      color_dark: '#2E282A',
      color_primary: '#2B193D',
      color_secondary: '#522F74',
      color_info: '#008DD5',
      color_success: '#81E979',
      color_warning: '#F2BB05',
      color_danger: '#EF3E36',
      // Buttons
      button_primary: '',
      button_secondary: '',
      button_tertiary: '',
      // Containers
      container: '',
      border_radius: '',
    }
  },
  methods: {
    createStyleSheet() {
      let fontFamily = this.font_url.split('family=')[1].split(':')[0]
      
      let css = `
        @import url('${this.font_url}');

        :root {
          --font: ${fontFamily};
          --color-light: ${this.color_light};
          --color-dark: ${this.color_dark};
          --color-primary: ${this.color_primary};
          --color-secondary: ${this.color_secondary};
          --color-info: ${this.color_info};
          --color-success: ${this.color_success};
          --color-warning: ${this.color_warning};
          --color-danger: ${this.color_danger};
        }

        .text-hero { font-family: var(--font); }
        .text-title { font-family: var(--font); }
        .text-h1 { font-family: var(--font); }
        .text-h2 { font-family: var(--font); }
        .text-h3 { font-family: var(--font); }
        .text-h4 { font-family: var(--font); }
        .text-h5 { font-family: var(--font); }
        .text-h6 { font-family: var(--font); }
        .text-subtitle { font-family: var(--font); }
        .text-body { font-family: var(--font); }
        .text-overline { font-family: var(--font); }
        .text-caption { font-family: var(--font); }


      `
      let head = document.head || document.getElementsByTagName('head')[0]
      let style = document.createElement('style')

      head.appendChild(style)

      style.type = 'text/css'
      if (style.styleSheet) {
        style.styleSheet.cssText = css
      } else {
        style.appendChild(document.createTextNode(css))
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
