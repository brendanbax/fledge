<template>
  <div class="bg-white demo-container">
    <!-- Banner -->
    <div class="bg-primary">
      <div class="max-1200 banner" :class="computedClass">
        <div>
          <h3 class="text-light text-h4">New! Fledge Design System Generator</h3>
          <p class="text-light text-body">Kickstart your design system with this simple token and class builder.</p>
        </div>
        <div>
          <button class="btn-primary bg-light text-primary mt-1">Download CSS</button>
        </div>
      </div>
    </div>
    <!-- Nav -->
    <div class="bg-secondary sticky">
      <nav class="max-1200 nav-container" :class="computedClass">
        <div class="text-light text-h3">Fledge</div>
        <ul>
          <li class="nav-item"><a class="text-nav text-light">Home</a></li>
          <li class="nav-item"><a class="text-nav text-light">Blog</a></li>
          <li class="nav-item"><a class="text-nav text-light">Stats</a></li>
          <li class="nav-item"><a class="text-nav text-light">Stickers</a></li>
          <li class="nav-item"><button class="btn-primary btn-small">Sign In</button></li>
        </ul>
      </nav>

    </div>
    <!-- Hero -->
    <section class="bg-secondary hero-bg">
      <div class="max-1200 hero" :class="computedClass">
        <div>
          <h1 class="text-h1 text-light">Start building your design system</h1>
          <p class="text-body text-light mt-1 mb-1">Experiment and iterate through your design token ideas without expensive design software or needing to write a single line of code.</p>
          <button class="btn-primary bg-light text-primary mt-1" @click="emitEvent('getstarted')">Get Started</button>
        </div>
        <div id="demo-container" class="mt-3">
          <svg width="100%" height="100%" viewBox="0 0 356 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1">
              <g id="Group-2">
                <rect class="text-white" id="page-bg" fill="currentColor" x="0" y="0" width="356" height="200"></rect>
                <polygon class="text-secondary" id="sample-1" fill="currentColor" points="222.108272 74.9548915 222.108272 173.954892 160 160"></polygon>
                <polygon class="text-secondary" id="sample-2" fill="currentColor" points="306 101 235.179296 127 235.179296 57"></polygon>
                <polygon class="text-secondary" id="sample-3" fill="currentColor" points="329 106 235.179296 173.767655 235.179296 143"></polygon>
                <rect class="text-primary" id="nav-bg" fill="currentColor" x="0" y="0" width="357" height="20"></rect>
                <rect class="text-white" id="nav-link-1" fill="currentColor" x="27" y="7" width="52" height="6" rx="3"></rect>
                <rect class="text-white" id="nav-link-2" fill="currentColor" x="180" y="7" width="32" height="6" rx="3"></rect>
                <rect class="text-white" id="nav-link-3" fill="currentColor" x="219" y="7" width="32" height="6" rx="3"></rect>
                <rect class="text-white" id="nav-link-4" fill="currentColor" x="258" y="7" width="32" height="6" rx="3"></rect>
                <rect class="text-white" id="nav-link-5" fill="currentColor" x="297" y="7" width="32" height="6" rx="3"></rect>
                <g id="text" transform="translate(27.000000, 65.000000)">
                  <rect class="text-black" id="text-hero" fill="currentColor" x="0" y="0" width="88" height="12" rx="6"></rect>
                  <rect class="text-dark" id="text-1" fill="currentColor" x="0" y="22" width="104" height="6" rx="3"></rect>
                  <rect class="text-dark" id="text-2" fill="currentColor" x="0" y="33" width="104" height="6" rx="3"></rect>
                  <rect class="text-dark" id="text-3" fill="currentColor" x="0" y="44" width="67" height="6" rx="3"></rect>
                  <rect class="text-primary" id="button" fill="currentColor" x="0" y="60" width="52" height="10" rx="5"></rect>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
    <!-- 3 Column Cards -->
    <section class="bg-white card-section">
      <div class="max-1200" :class="computedClass">
        <h2 class="text-h2 text-center text-primary">Real Time Tokens</h2>
        <p class="text-body text-center text-primary">Customize the most common design tokens for your system and view the results in immediately.</p>
        <div class="card-row mt-3" :class="{'narrow': menuOpen}">
          <div class="card demo-card">
            <h3 class="text-h5 text-secondary">Colors</h3>
            <p class="text-body">Tokens include primary, secondary, dark, light, as well as utility colors for success, info, and errors.</p>
            <div class="flex-wrap mt-1">
              <span class="demo-tag text-caption text-primary">colors</span>
              <span class="demo-tag text-caption text-primary">branding</span>
              <span class="demo-tag text-caption text-primary">themes</span>
            </div>
            <button class="block mt-1 btn-secondary btn-small" @click="emitEvent('colors')">Customize Now</button>
          </div>
          <div class="card demo-card">
            <h3 class="text-h5 text-secondary">Fonts</h3>
            <p class="text-body">Fledge supports primary and secondary font familys, simply provide a name and link to the font resource to get started.</p>
            <div class="flex-wrap mt-1">
              <span class="demo-tag text-caption text-primary">branding</span>
              <span class="demo-tag text-caption text-primary">Google Fonts</span>
              <span class="demo-tag text-caption text-primary">type</span>
            </div>
            <button class="block mt-1 btn-secondary btn-small" @click="emitEvent('fonts')">Customize Now</button>
          </div>
          <div class="card demo-card">
            <h3 class="text-h5 text-secondary">Type</h3>
            <p class="text-body">The type scale includes 14 styles, each with options for font family, size, weight, and line height.</p>
            <div class="flex-wrap mt-1">
              <span class="demo-tag text-caption text-primary">headings</span>
              <span class="demo-tag text-caption text-primary">body</span>
              <span class="demo-tag text-caption text-primary">links</span>
              <span class="demo-tag text-caption text-primary">forms</span>
            </div>
            <button class="block mt-1 btn-secondary btn-small" @click="emitEvent('type')">Customize Now</button>
          </div>
          <div class="card demo-card">
            <h3 class="text-h5 text-secondary">Buttons</h3>
            <p class="text-body">Button styles include primary, secondary, and tertiary with includes options for border, fill, shadow, and text capitalization.</p>
            <div class="flex-wrap mt-1">
              <span class="demo-tag text-caption text-primary">primary</span>
              <span class="demo-tag text-caption text-primary">secondary</span>
              <span class="demo-tag text-caption text-primary">tertiary</span>
            </div>
            <button class="block mt-1 btn-secondary btn-small" @click="emitEvent('buttons')">Customize Now</button>
          </div>
        </div>
        <h3 class="text-center mt-3"><a class="text-h3 text-primary">Preview as a blog post &#187;</a></h3>
      </div>
    </section>
    <!-- Text Section -->
    <section class="bg-light">
      <h2>Subtitle Text</h2>
      <p>Some great content here...</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ul>
      <p>More excellent content here...</p>
      <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
      </ol>
    </section>
    <!-- Footer -->
    <footer>
      <div>
        email sign up
      </div>
      <div>
        links links links
      </div>
      <div>
        social links and company info
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Demo",
  props: {
    menuOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    computedClass() {
      if (this.menuOpen) {
        return 'add-margin'
      } else {
        return ''
      }
    }
  },
  methods: {
    emitEvent(type) {
      this.$emit(type)
    }
  }
}
</script>

<style>
/* Utilities */
.max-1200 {
  max-width: calc(1200px);
  margin: 0 auto;
}
@media screen and (max-width: calc(1200px - 2rem)) {
  .max-1200 {
    margin: 0 1rem;
  }
}
@media screen and (max-width: 1600px) {
  .add-margin {
    margin: 0 1rem;
  }
}
.sticky {
  position: sticky;
  top: 0;
}
/* Unique Elements */
.demo-container {
  min-height: 100vh;
}
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
}
@media screen and (max-width: 680px) {
  .banner {
    flex-direction: column;
    text-align: center;
  }
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 0;
}
.nav-item {
  display: inline-block;
  margin-left: 1rem;
  cursor: pointer;
}
.hero-bg {
  background: linear-gradient(var(--color-secondary), var(--color-secondary-dark));
}
.hero {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3rem;
}
.hero .text-body {
  max-width: 60ch;
}
/* SVG Illustration */
#demo-container {
  width: 100%;
  margin-left: 2rem;
}
svg {
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  box-shadow: var(--shadow-base);
}
@media screen and (max-width: 768px) {
  .hero {
    flex-direction: column;
  }
  #demo-container {
    width: auto;
    margin-left: 0;
  }
}
/* Card Section */
.card-section {
  padding-top: 6rem;
  padding-bottom: 6rem;
}
.card-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.demo-card {
  flex-basis: calc(25% - 1rem);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.demo-card:not(:first-child) {
  margin-left: 1rem;
}
.demo-card .text-body {
  flex-grow: 1;
  margin-top: .5rem;
}
.demo-tag {
  position: relative;
  border: var(--border-width) solid var(--color-primary);
  border-radius: var(--global-radius);
  padding: .125rem .5rem;
  z-index: 1;
  margin-bottom: .5rem;
}
.demo-tag::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--color-primary-light);
  border-radius: var(--global-radius);
  opacity: 0.25;
  z-index: -1;
}
.demo-tag:not(:last-child) {
  margin-right: .5rem;
}
@media screen and (max-width: 960px) {
  .card-row {
    justify-content: space-around;
  }
  .demo-card {
    flex-basis: calc(50% - 1rem);
    margin-bottom: 1rem;
  }
  .demo-card:not(:first-child) {
    margin-left: 0;
  }
}
@media screen and (max-width: 1400px) {
  .narrow {
    justify-content: space-around;
  }
  .narrow .demo-card {
    flex-basis: calc(50% - 1rem);
    margin-bottom: 1rem;
  }
  .narrow .demo-card:not(:first-child) {
    margin-left: 0;
  }
}
@media screen and (max-width: 960px) {
  .narrow .demo-card {
    flex-basis: 100%;
    margin-bottom: 1rem;
  }
}
@media screen and (max-width: 560px) {
  .demo-card {
    flex-basis: 100%;
    margin-bottom: 1rem;
  }
}
</style>