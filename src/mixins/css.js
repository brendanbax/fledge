import StyleReset from '@/utils/reset'
import tinycolor from 'tinycolor2'

export default {
  data() {
    return {
      // Font
      font_primary: {
        url: 'https://fonts.googleapis.com/css2?family=Aleo:wght@300;400;700&display=swap',
        name: 'Aleo'
      },
      font_secondary: {
        url: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap',
        name: 'Lato'
      },
      // Colors
      color_light: '#FAFAFA',
      color_dark: '#2E282A',
      color_primary: '#008ed2',
      color_secondary: '#1e77bd',
      color_info: '#008DD5',
      color_success: '#81E979',
      color_warning: '#F2BB05',
      color_danger: '#EF3E36',
      // Type
      text_h1: {
        font_primary: true,
        font_size: '3rem',
        font_weight: '600',
        line_height: '1.25',
      },
      text_h2: {
        font_primary: true,
        font_size: '2.5rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_h3: {
        font_primary: true,
        font_size: '2rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_h4: {
        font_primary: true,
        font_size: '1.75rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_h5: {
        font_primary: true,
        font_size: '1.25rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_h6: {
        font_primary: true,
        font_size: '1rem',
        font_weight: '600',
        line_height: '1',
      },
      text_body: {
        font_primary: false,
        font_size: '1.125rem',
        font_weight: '400',
        line_height: '1.5',
      },
      text_overline: {
        font_primary: false,
        font_size: '0.75rem',
        font_weight: '400',
        line_height: '1.5',
      },
      text_caption: {
        font_primary: false,
        font_size: '.75rem',
        font_weight: '400',
        line_height: '1.5',
      },
      text_label: {
        font_primary: false,
        font_size: '0.875rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_input: {
        font_primary: false,
        font_size: '0.875rem',
        font_weight: '400',
        line_height: '1.25',
      },
      text_nav: {
        font_primary: false,
        font_size: '1rem',
        font_weight: '400',
        line_height: '1.5',
      },
      text_link: {
        font_primary: false,
        font_size: '1rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_button: {
        font_primary: false,
        font_size: '1rem',
        font_weight: '600',
        line_height: '1.5',
      },
      // Buttons
      button_radius: '.25rem',
      button_primary: {
        fill: true,
        border: false,
        shadow: true,
        uppercase: false,
      },
      button_secondary: {
        fill: false,
        border: true,
        shadow: false,
        uppercase: false,
      },
      button_tertiary: {
        fill: false,
        border: false,
        shadow: false,
        uppercase: true,
      },
      // Containers
      border_width: '.0625rem',
      box_shadow: {
        base: '0 .375rem .5rem -.25rem rgba(0,0,0,0.5)',
        hover: '0 .5rem 1rem -.25rem rgba(0,0,0,0.5)'
      },
      card: {
        border: false,
        shadow: true,
        radius: '.25rem'
      },
      input: {
        border: true,
        border_bottom: false,
        radius: '.25rem'
      }
    }
  },
  methods: {
    createStyleSheet() {
      return `
        @import url('${this.font_primary.url}');
        @import url('${this.font_secondary.url}');
        
        ${StyleReset}

        :root {
          --font-primary: ${this.font_primary.name};
          --font-secondary: ${this.font_secondary.name};

          --border-width: ${this.border_width};
          --shadow-base: ${this.box_shadow.base};
          --shadow-hover: ${this.box_shadow.hover};

          --color-white: #FFFFFF;
          --color-light: ${this.color_light};
          --color-dark: ${this.color_dark};
          --color-black: #000000;

          --color-primary-light: ${tinycolor(this.color_primary).lighten(12).toString()};
          --color-primary: ${this.color_primary};
          --color-primary-dark: ${tinycolor(this.color_primary).darken(5).toString()};
          
          --color-secondary-light: ${tinycolor(this.color_secondary).lighten(12).toString()};
          --color-secondary: ${this.color_secondary};
          --color-secondary-dark: ${tinycolor(this.color_secondary).darken(5).toString()};
          
          --color-info-light: ${tinycolor(this.color_info).lighten(12).toString()};
          --color-info: ${this.color_info};
          --color-info-dark: ${tinycolor(this.color_info).darken(5).toString()};
          
          --color-success-light: ${tinycolor(this.color_success).lighten(12).toString()};
          --color-success: ${this.color_success};
          --color-success-dark: ${tinycolor(this.color_success).darken(5).toString()};
          
          --color-warning-light: ${tinycolor(this.color_warning).lighten(12).toString()};
          --color-warning: ${this.color_warning};
          --color-warning-dark: ${tinycolor(this.color_warning).darken(5).toString()};
          
          --color-danger-light: ${tinycolor(this.color_danger).lighten(12).toString()};
          --color-danger: ${this.color_danger};
          --color-danger-dark: ${tinycolor(this.color_danger).darken(5).toString()};

          --global-radius: ${this.button_radius};
        }

        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-size: 16px;
        }

        .btn-primary {
          background-color: ${this.button_primary.fill ? 'var(--color-primary)' : 'transparent'};
          border: ${this.button_primary.border ? this.border_width + ' solid var(--color-primary)' : this.border_width + ' solid transparent'};
          box-shadow: ${this.button_primary.shadow ? this.box_shadow.base : 'none'};
          border-radius: ${this.button_radius};
          color: ${this.button_primary.fill ? 'var(--color-light)' : this.button_primary.border ? 'var(--color-primary)' : 'var(--color-primary)'};
          text-transform: ${this.button_primary.uppercase ? 'uppercase' : 'none'};
          font-family: var(--font-${this.text_button.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_button.font_size};
          font-weight: ${this.text_button.font_weight};
          line-height: ${this.text_button.line_height};
          cursor: pointer;
          padding: .5rem 1rem;
          transition: background-color 300ms, color 300ms, box-shadow 300ms;
        }
        .btn-primary:hover {
          background-color: ${this.button_primary.fill ? 'var(--color-primary-light)' : this.button_primary.border ? tinycolor(this.color_primary).setAlpha(0.1).toString() : 'none'};
          border: ${this.button_primary.border ? this.border_width + ' solid var(--color-primary-light)' : this.border_width + ' solid transparent'};
          color: ${this.button_primary.fill ? 'var(--color-light)' : this.button_primary.border ? 'var(--color-primary-light)' : 'var(--color-primary-light)'};
          box-shadow: ${this.button_primary.shadow ? this.box_shadow.hover : 'none'};
          transition: background-color 300ms, color 300ms, box-shadow 300ms;
        }
        .btn-secondary {
          background-color: ${this.button_secondary.fill ? 'var(--color-primary)' : 'transparent'};
          border: ${this.button_secondary.border ? this.border_width + ' solid var(--color-primary)' : this.border_width + ' solid transparent'};
          box-shadow: ${this.button_secondary.shadow ? this.box_shadow.base : 'none'};
          border-radius: ${this.button_radius};
          color: ${this.button_secondary.fill ? 'var(--color-light)' : this.button_secondary.border ? 'var(--color-primary)' : 'var(--color-primary)'};
          text-transform: ${this.button_secondary.uppercase ? 'uppercase' : 'none'};
          font-family: var(--font-${this.text_button.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_button.font_size};
          font-weight: ${this.text_button.font_weight};
          line-height: ${this.text_button.line_height};
          cursor: pointer;
          padding: .5rem 1rem;
          transition: background-color 300ms, color 300ms, box-shadow 300ms;
        }
        .btn-secondary:hover {
          background-color: ${this.button_secondary.fill ? 'var(--color-primary-light)' : this.button_secondary.border ? tinycolor(this.color_primary).setAlpha(0.1).toString() : 'none'};
          border: ${this.button_secondary.border ? this.border_width + ' solid var(--color-primary-light)' : this.border_width + ' solid transparent'};
          box-shadow: ${this.button_secondary.shadow ? this.box_shadow.hover : 'none'};
          color: ${this.button_secondary.fill ? 'var(--color-light)' : this.button_secondary.border ? 'var(--color-primary-light)' : 'var(--color-primary-light)'};
          transition: background-color 300ms, color 300ms, box-shadow 300ms;
        }
        .btn-tertiary {
          background-color: ${this.button_tertiary.fill ? 'var(--color-primary)' : 'transparent'};
          border: ${this.button_tertiary.border ? this.border_width + ' solid var(--color-primary)' : this.border_width + ' solid transparent'};
          box-shadow: ${this.button_tertiary.shadow ? this.box_shadow.base : 'none'};
          border-radius: ${this.button_radius};
          color: ${this.button_tertiary.fill ? 'var(--color-light)' : this.button_tertiary.border ? 'var(--color-primary)' : 'var(--color-primary)'};
          text-transform: ${this.button_tertiary.uppercase ? 'uppercase' : 'none'};
          font-family: var(--font-${this.text_button.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_button.font_size};
          font-weight: ${this.text_button.font_weight};
          line-height: ${this.text_button.line_height};
          cursor: pointer;
          padding: .5rem 1rem;
          transition: background-color 300ms, color 300ms, box-shadow 300ms;
        }
        .btn-tertiary:hover {
          background-color: ${this.button_tertiary.fill ? 'var(--color-primary-light)' : this.button_tertiary.border ? tinycolor(this.color_primary).setAlpha(0.1).toString() : 'none'};
          border: ${this.button_tertiary.border ? this.border_width + ' solid var(--color-primary-light)' : this.border_width + ' solid transparent'};
          box-shadow: ${this.button_tertiary.shadow ? this.box_shadow.hover : 'none'};
          color: ${this.button_tertiary.fill ? 'var(--color-light)' : this.button_tertiary.border ? 'var(--color-primary-light)' : 'var(--color-primary-light)'};
          transition: background-color 300ms, color 300ms, box-shadow 300ms;
        }
        .btn-small {
          padding: .25rem .5rem;
          font-size: calc(${this.text_button.font_size} * 0.875);
        }
        .btn-fab {
          cursor: pointer;
          border-radius: ${this.button_radius};
          background-color: var(--color-primary);
          box-shadow: ${this.box_shadow.base};
          width: 3.75rem;
          height: 3.75rem;
          font-size: 1rem;
          line-height: 3.75rem;
          font-weight: bold;
          text-align: center;
          transition: background-color 300ms, box-shadow 300ms;
        }
        .btn-fab:hover {
          box-shadow: ${this.box_shadow.hover};
          background-color: var(--color-primary-light);
          transition: background-color 300ms, box-shadow 300ms;
        }
        .card {
          background-color: var(--color-white);
          border: ${this.card.border ? this.border_width + ' solid var(--color-primary)' : 'none'};
          border-radius: ${this.card.radius};
          box-shadow: ${this.card.shadow ? 'var(--shadow-base)' : 'none'};
          transition: box-shadow 300ms;
        }
        .card:hover {
          box-shadow: ${this.card.shadow ? 'var(--shadow-hover)' : 'none'};
          transition: box-shadow 300ms;
        }

        input[type="text"],
        textarea,
        .form-input {
          padding: .5rem;
          border-top: ${this.input.border ? this.border_width + ' solid var(--color-primary)' : 'none'};
          border-left: ${this.input.border ? this.border_width + ' solid var(--color-primary)' : 'none'};
          border-right: ${this.input.border ? this.border_width + ' solid var(--color-primary)' : 'none'};
          border-bottom: ${this.input.border || this.input.border_bottom ? this.border_width + ' solid var(--color-primary)' : 'none'};
          border: ;
          border-radius: ${this.input.radius};
        }

        .text-h1 {
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
        .text-body {
          font-family: var(--font-${this.text_body.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_body.font_size};
          font-weight: ${this.text_body.font_weight};
          line-height: ${this.text_body.line_height};
        }
        .text-overline {
          font-family: var(--font-${this.text_overline.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_overline.font_size};
          font-weight: ${this.text_overline.font_weight};
          line-height: ${this.text_overline.line_height};
        }
        .text-caption {
          font-family: var(--font-${this.text_caption.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_caption.font_size};
          font-weight: ${this.text_caption.font_weight};
          line-height: ${this.text_caption.line_height};
        }
        .text-label {
          font-family: var(--font-${this.text_label.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_label.font_size};
          font-weight: ${this.text_label.font_weight};
          line-height: ${this.text_label.line_height};
        }
        .text-input {
          font-family: var(--font-${this.text_input.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_input.font_size};
          font-weight: ${this.text_input.font_weight};
          line-height: ${this.text_input.line_height};
        }
        .text-nav {
          font-family: var(--font-${this.text_nav.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_nav.font_size};
          font-weight: ${this.text_nav.font_weight};
          line-height: ${this.text_nav.line_height};
        }
        .text-link {
          font-family: var(--font-${this.text_link.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_link.font_size};
          font-weight: ${this.text_link.font_weight};
          line-height: ${this.text_link.line_height};
          color: ${this.color_primary};
          text-decoration: underline;
        }
        .text-link:visited {
          color: ${this.color_primary};
        }
        .text-button {
          font-family: var(--font-${this.text_button.font_primary ? 'primary' : 'secondary'});
          font-size: ${this.text_button.font_size};
          font-weight: ${this.text_button.font_weight};
          line-height: ${this.text_button.line_height};
        }

        .text-white { color: var(--color-white); }
        .text-light { color: var(--color-light); }
        .text-dark { color: var(--color-dark); }
        .text-black { color: var(--color-black); }
        .text-primary { color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }
        .text-info { color: var(--color-info); }
        .text-success { color: var(--color-success); }
        .text-warning { color: var(--color-warning); }
        .text-danger { color: var(--color-danger); }

        .text-center { text-align: center; }
        .text-capitalize { text-transform: capitalize; }
        .text-uppercase { text-transform: uppercase; }

        .bg-white { background-color: var(--color-white); }
        .bg-light { background-color: var(--color-light); }
        .bg-dark { background-color: var(--color-dark); }
        .bg-black { background-color: var(--color-black); }
        .bg-primary { background-color: var(--color-primary); }
        .bg-secondary { background-color: var(--color-secondary); }
        .bg-info { background-color: var(--color-info); }
        .bg-success { background-color: var(--color-success); }
        .bg-warning { background-color: var(--color-warning); }
        .bg-danger { background-color: var(--color-danger); }
      `
    },
    updatePageStyles() {
      let css = this.createStyleSheet()
      let head = document.head || document.getElementsByTagName('head')[0]
      let styles = document.getElementsByTagName('style')
      let style

      for (let i = 0; i < styles.length; i++) {
        if (styles[i].title === 'custom') {
          style = styles[i]
        }
      }

      if (!style) {
        style = document.createElement('style')
        head.appendChild(style)
        style.type = 'text/css'
        style.title = 'custom'
      }
      
      style.innerHTML = css
    },
  }
}