<template>
  <div id="app">
    <div>
      <h1 class="text-h1">I am a heading</h1>
      <button @click="updatePageStyles">Update Styles</button>
    </div>
    <Demo />
  </div>
</template>

<script>
import Demo from '@/components/Demo'
import StyleReset from '@/assets/reset'

export default {
  name: 'App',
  components: {
    Demo
  },
  data() {
    return {
      // Font
      font_primary_url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap',
      font_secondary_url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap',
      // Colors
      color_light: '#FAFAFA',
      color_dark: '#2E282A',
      color_primary: '#2B193D',
      color_secondary: '#522F74',
      color_info: '#008DD5',
      color_success: '#81E979',
      color_warning: '#F2BB05',
      color_danger: '#EF3E36',
      // Type
      text_h1: {
        font_primary: true,
        font_size: '3rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_h2: {
        font_primary: true,
        font_size: '3rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_h3: {
        font_primary: true,
        font_size: '3rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_h4: {
        font_primary: true,
        font_size: '3rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_h5: {
        font_primary: true,
        font_size: '3rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_h6: {
        font_primary: true,
        font_size: '3rem',
        font_weight: '600',
        line_height: '1.5',
      },
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
      let font_primary = this.font_primary_url.split('family=')[1].split(':')[0]
      let font_secondary = this.font_secondary_url.split('family=')[1].split(':')[0]
      
      return `
        ${StyleReset}
        
        @import url('${this.font_primary_url}');
        @import url('${this.font_secondary_url}');

        :root {
          --font-primary: ${font_primary};
          --font-secondary: ${font_secondary};
          --color-light: ${this.color_light};
          --color-dark: ${this.color_dark};
          --color-primary: ${this.color_primary};
          --color-secondary: ${this.color_secondary};
          --color-info: ${this.color_info};
          --color-success: ${this.color_success};
          --color-warning: ${this.color_warning};
          --color-danger: ${this.color_danger};
        }

        .text-h1 {
          color: red;
          font-family: var(--font-${this.text_h1.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_h1.font_size};
          font-weight: ${this.text_h1.font_weight};
          line-height: ${this.text_h1.line_height};
        }
        .text-h2 {
          font-family: var(--font-${this.text_h2.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_h2.font_size};
          font-weight: ${this.text_h2.font_weight};
          line-height: ${this.text_h2.line_height};
        }
        .text-h3 {
          font-family: var(--font-${this.text_h3.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_h3.font_size};
          font-weight: ${this.text_h3.font_weight};
          line-height: ${this.text_h3.line_height};
        }
        .text-h4 {
          font-family: var(--font-${this.text_h4.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_h4.font_size};
          font-weight: ${this.text_h4.font_weight};
          line-height: ${this.text_h4.line_height};
        }
        .text-h5 {
          font-family: var(--font-${this.text_h5.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_h5.font_size};
          font-weight: ${this.text_h5.font_weight};
          line-height: ${this.text_h5.line_height};
        }
        .text-h6 {
          font-family: var(--font-${this.text_h6.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_h6.font_size};
          font-weight: ${this.text_h6.font_weight};
          line-height: ${this.text_h6.line_height};
        }
        .text-body { font-family: var(--font); }
        .text-overline { font-family: var(--font); }
        .text-caption { font-family: var(--font); }
      `
    },
    updatePageStyles() {
      let css = this.createStyleSheet()
      let head = document.head || document.getElementsByTagName('head')[0]
      let styles = document.getElementsByTagName('style')
      let style

      if (styles.length >= 2) {
        style = styles[1]
      } else {
        style = document.createElement('style')
        head.appendChild(style)
        style.type = 'text/css'
      }

      style.innerHTML = css
    }
  },
  mounted() {
    this.updatePageStyles()
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
