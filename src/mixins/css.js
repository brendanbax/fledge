import StyleReset from '@/assets/reset'

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
        font_weight: '400',
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
        font_size: '1rem',
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
        font_size: '1rem',
        font_weight: '400',
        line_height: '1.5',
      },
      text_label: {
        font_primary: false,
        font_size: '0.875rem',
        font_weight: '600',
        line_height: '1.5',
      },
      text_nav: {
        font_primary: false,
        font_size: '1.25rem',
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
      // Containers
      border_radius: '',
      border_width: '',
      box_shadow: '0 .25rem .75rem rgba(0,0,0,0.3), 0 .5rem 1rem rgba(0,0,0,0.3)',
      // Buttons
      button_primary: {
        border: false,
        shadow: false,
        radius: false,
      },
      button_secondary: {
        border: false,
        shadow: false,
        radius: false,
      },
      button_tertiary: {
        border: false,
        shadow: false,
        radius: false,
      },
      button_fab: {
        radius: '4rem'
      },
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
          --color-white: #FFFFFF;
          --color-light: ${this.color_light};
          --color-dark: ${this.color_dark};
          --color-black: #000000;
          --color-primary: ${this.color_primary};
          --color-secondary: ${this.color_secondary};
          --color-info: ${this.color_info};
          --color-success: ${this.color_success};
          --color-warning: ${this.color_warning};
          --color-danger: ${this.color_danger};
        }

        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
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
          text-decoration: underline;
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
        .text-info { color: var(--color-info); color: blue; }
        .text-success { color: var(--color-success); }
        .text-warning { color: var(--color-warning); }
        .text-danger { color: var(--color-danger); }

        .text-center { text-align: center; }
        .text-capitalize { text-transform: uppercase; }

        .bg-white { background-color: var(--color-white); }
        .bg-light { background-color: var(--color-light); }
        .bg-dark { background-color: var(--color-dark); }
        .bg-black { background-color: var(--color-black); }
        .bg-primary { background-color: var(--color-primary); }
        .bg-secondary { background-color: var(--color-secondary); }
        .bg-info { background-color: var(--color-info); color: blue; }
        .bg-success { background-color: var(--color-success); }
        .bg-warning { background-color: var(--color-warning); }
        .bg-danger { background-color: var(--color-danger); }

        .btn-primary {
          cursor: pointer;
        }
        .btn-secondary {
          cursor: pointer;
        }
        .btn-tertiary {
          cursor: pointer;
        }
        .btn-fab {
          cursor: pointer;
          border-radius: ${this.button_fab.radius};
          box-shadow: ${this.box_shadow};
          width: 3.75rem;
          height: 3.75rem;
          font-size: 1rem;
          line-height: 3.75rem;
          font-weight: bold;
          text-align: center;
        }
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