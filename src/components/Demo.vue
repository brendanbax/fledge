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
        <ul id="nav-items">
          <li class="nav-item"><a class="text-nav text-light">Home</a></li>
          <li class="nav-item"><a class="text-nav text-light">Blog</a></li>
          <li class="nav-item"><a class="text-nav text-light">Stats</a></li>
          <li class="nav-item"><a class="text-nav text-light">Stickers</a></li>
          <li class="nav-item"><button class="btn-primary btn-small">Sign In</button></li>
        </ul>
        <div id="hamburger">
          <div class="stripe" id="stripe-1" />
          <div class="stripe" id="stripe-2" />
          <div class="stripe" id="stripe-3" />
        </div>
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
          <svg id="demo-svg" width="100%" height="100%" viewBox="0 0 356 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
        <div class="card-row mt-3 flex-wrap" :class="{'narrow': menuOpen}">
          <div class="card demo-card">
            <h3 class="text-h4 text-secondary">Colors</h3>
            <p class="text-body text-dark">Tokens include primary, secondary, dark, light, as well as utility colors for success, info, and errors.</p>
            <div class="flex-wrap mt-1">
              <span class="demo-tag text-caption text-primary">colors</span>
              <span class="demo-tag text-caption text-primary">branding</span>
              <span class="demo-tag text-caption text-primary">themes</span>
            </div>
            <button class="block mt-1 btn-secondary btn-small" @click="emitEvent('colors')">Customize Now</button>
          </div>
          <div class="card demo-card">
            <h3 class="text-h4 text-secondary">Fonts</h3>
            <p class="text-body text-dark">Fledge supports primary and secondary font familys, simply provide a name and link to the font resource to get started.</p>
            <div class="flex-wrap mt-1">
              <span class="demo-tag text-caption text-primary">branding</span>
              <span class="demo-tag text-caption text-primary">Google Fonts</span>
              <span class="demo-tag text-caption text-primary">type</span>
            </div>
            <button class="block mt-1 btn-secondary btn-small" @click="emitEvent('fonts')">Customize Now</button>
          </div>
          <div class="card demo-card">
            <h3 class="text-h4 text-secondary">Type</h3>
            <p class="text-body text-dark">The type scale includes 14 styles, each with options for font family, size, weight, and line height.</p>
            <div class="flex-wrap mt-1">
              <span class="demo-tag text-caption text-primary">headings</span>
              <span class="demo-tag text-caption text-primary">body</span>
              <span class="demo-tag text-caption text-primary">links</span>
              <span class="demo-tag text-caption text-primary">forms</span>
            </div>
            <button class="block mt-1 btn-secondary btn-small" @click="emitEvent('type')">Customize Now</button>
          </div>
          <div class="card demo-card">
            <h3 class="text-h4 text-secondary">Buttons</h3>
            <p class="text-body text-dark">Button styles include primary, secondary, and tertiary with includes options for border, fill, shadow, and text capitalization.</p>
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
      <div class="max-1200 case-section" :class="computedClass">
        <h2 class="text-h3 text-center text-dark">Why use Fledge?</h2>
        <p class="text-body text-center text-dark mt-1">Fledge is purpose-built to improve speed to market of new ideas by simplifying early design exploration. Most user interfaces rely on colors, fonts, type sizes, and button styles.  Fledge makes it easy to explore these options in real time then export the results as CSS so developers can start building features that matter.</p>
        <p class="text-h5 text-center text-dark mt-2">Here are some ways Fledge can help get your next project off the ground!</p>
        <div class="use-case-container flex-wrap mt-2" :class="{'slim': menuOpen}">
          <div class="card use-card flex-col">
            <p class="text-quote mb-2">Our small dev team doesn't always have support from design. Fledge is awesome becasuse we can build out a great looking app without needing Sketch or Figma.</p>
            <div class="profile-row flex">
              <div class="profile-pic">
                <img src="@/assets/user_1.png">
              </div>
              <div class="ml-1">
                <p class="text-overline">Jorden Dennis</p>
                <p class="text-caption">Development Lead</p>
              </div>
            </div>
          </div>
          <div class="card use-card flex-col">
            <p class="text-quote mb-2">As an agency we're always starting new projects with clients. Fledge helps us gain consensus early in the design process so our team can focus on meaningful features.</p>
            <div class="profile-row flex">
              <div class="profile-pic">
                <img src="@/assets/user_2.png">
              </div>
              <div class="ml-1">
                <p class="text-overline">Emmie Parsons</p>
                <p class="text-caption">Project Manager</p>
              </div>
            </div>
          </div>
          <div class="card use-card flex-col">
            <p class="text-quote mb-2">I like using Fledge to experiment with different type and color choices. It makes is easy to see how small changes to your design system can impact other elements.</p>
            <div class="profile-row flex">
              <div class="profile-pic">
                <img src="@/assets/user_3.png">
              </div>
              <div class="ml-1">
                <p class="text-overline">Cory Lowry</p>
                <p class="text-caption">UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="bg-dark">
      <div class="max-1200 flex-wrap footer-section" :class="[{'nifty': menuOpen},computedClass]">
        <div class="email-container flex-col">
          <h5 class="text-h5 text-secondary mb-1">Newsletter</h5>
          <label>
            <div class="text-label text-light">Email Address</div>
            <input class="text-input" placeholder="This doesn't do anything..." type="text" />
          </label>
          <button class="btn-primary">Submit</button>
        </div>
        <div class="link-container">
          <h5 class="text-h5 text-secondary mb-1">Links</h5>
          <ul>
            <li><a class="text-nav text-light">Home</a></li>
            <li><a class="text-nav text-light">Blog</a></li>
            <li><a class="text-nav text-light">Stats</a></li>
            <li><a class="text-nav text-light">Stickers</a></li>
          </ul>
        </div>
        <div class="social-container">
          <h5 class="text-h5 text-secondary mb-1">Connect</h5>
          <ul class="flex">
            <li>
              <a href="https://dribbble.com/brendanbax" class="social-icon text-light" target="_blank">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C22.397 0 0 22.397 0 50C0 77.603 22.397 100 50 100C77.5488 100 100 77.603 100 50C100 22.397 77.5488 0 50 0ZM83.026 23.0477C88.9913 30.3145 92.5705 39.5879 92.679 49.6204C91.269 49.3492 77.1692 46.4751 62.961 48.2646C62.6356 47.5597 62.3644 46.8004 62.0391 46.0412C61.1714 43.9805 60.1952 41.8655 59.2191 39.859C74.9458 33.4599 82.1041 24.2408 83.026 23.0477ZM50 7.37527C60.846 7.37527 70.7701 11.4425 78.308 18.1128C77.5488 19.1974 71.0954 27.82 55.9111 33.5141C48.9154 20.6616 41.1605 10.141 39.9675 8.5141C43.167 7.75488 46.5293 7.37527 50 7.37527ZM31.833 11.3883C32.9718 12.9067 40.564 23.4816 47.6681 36.0629C27.7115 41.3774 10.0868 41.269 8.18872 41.269C10.9544 28.0369 19.9024 17.0282 31.833 11.3883ZM7.26681 50.0542C7.26681 49.6204 7.26681 49.1866 7.26681 48.7527C9.11063 48.8069 29.8265 49.0781 51.1388 42.679C52.3861 45.0651 53.5249 47.5054 54.6095 49.9458C54.0672 50.1085 53.4707 50.2712 52.9284 50.4338C30.9111 57.538 19.1974 76.9523 18.2213 78.5792C11.4425 71.0412 7.26681 61.0087 7.26681 50.0542ZM50 92.7332C40.1302 92.7332 31.0195 89.3709 23.8069 83.731C24.5662 82.1584 33.243 65.4555 57.321 57.0499C57.4295 56.9957 57.4837 56.9957 57.5922 56.9414C63.6117 72.5054 66.0521 85.5748 66.7028 89.3167C61.551 91.5401 55.9111 92.7332 50 92.7332ZM73.807 85.4122C73.3731 82.8091 71.0955 70.3362 65.5098 54.9892C78.9046 52.8742 90.6182 56.3449 92.0824 56.833C90.2386 68.7093 83.4056 78.9588 73.807 85.4122Z" fill="currentColor"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/brendan.bax/" class="social-icon text-light" target="_blank">
                <svg width="100%" height="100%" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zm-502-220q-7 0-76.5-.5t-105.5 0-96.5 3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/brendan-bax/" class="social-icon text-light" target="_blank">
                <svg width="100%" height="100%" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" fill="currentColor"></path>
                </svg>
              </a>
            </li>
          </ul>
          <p class="text-body text-light mt-1">Fledge was designed and built by <a href="https://www.brendanbax.com" target="_blank" class="text-link">Brendan Bax</a>.</p>
          <p class="text-body text-light">&copy; 2021, All rights reserved.</p>
        </div>
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
  z-index: 900;
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
  align-items: center;
  padding: 1rem 0;
}
.nav-item {
  display: inline-block;
  margin-left: 1rem;
  cursor: pointer;
}
#nav-items {
  display: block;
}
#hamburger {
  display: none;
}
.stripe {
  width: 100%;
  height: .125rem;
  border-radius: .125rem;
  background-color: var(--color-light);
}
@media screen and (max-width: 432px) {
  #nav-items {
    display: none;
  }
  #hamburger {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 2.5rem;
    height: 1.5rem;
    padding: .5rem;
    padding-bottom: .125rem;
  }
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
#demo-svg {
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
/* Case Section */
.case-section {
  padding-top: 6rem;
  padding-bottom: 6rem;
}
.case-section .text-body {
  max-width: 75ch;
  margin-left: auto;
  margin-right: auto;
}
.use-case-container {
  justify-content: space-around;
}
.use-card {
  flex-basis: calc(33% - 1rem);
  padding: 2rem;
}
.use-card:not(:first-child) {
  margin-left: 1rem;
}
.profile-row {
  margin-top: auto;
  align-items: center;
}
.profile-pic {
  position: relative;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
}
.profile-pic > img {
  position: relative;
  width: 100%;
  height: 100%;
  filter: grayscale(60%) contrast(120%) brightness(120%);
  opacity: 0.5;
  z-index: 1;
}
.profile-pic::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(var(--color-primary-light), var(--color-primary-dark));
  z-index: 0;
}
@media screen and (max-width: 960px) {
  .card-row {
    justify-content: space-around;
  }
  .use-card {
    flex-basis: 100%;
    margin-bottom: 1rem;
  }
  .use-card:not(:first-child) {
    margin-left: 0;
  }
}
@media screen and (max-width: 1400px) {
  .slim .use-card {
    flex-basis: 100%;
    margin-bottom: 1rem;
  }
  .slim .use-card:not(:first-child) {
    margin-left: 0;
  }
}
/* Footer style */
.footer-section {
  padding-top: 6rem;
  padding-bottom: 6rem;
}
.email-container {
  flex-basis: 30%;
  margin-right: 2rem;
}
.link-container {
  flex-basis: 15%;
}
.social-container {
  flex-basis: auto;
}
.social-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
}
@media screen and (max-width: 860px) {
  .email-container {
    flex-basis: 50%;
  }
  .social-container {
    flex-basis: 100%;
    margin-top: 2rem;
  }
}
@media screen and (max-width: 640px) {
  .link-container {
    flex-basis: 100%;
    margin-top: 2rem;
  }
}
@media screen and (max-width: 1200px) {
  .nifty .email-container {
    flex-basis: 50%;
  }
  .nifty .social-container {
    flex-basis: 100%;
    margin-top: 2rem;
  }
}
@media screen and (max-width: 780px) {
  .nifty .link-container {
    flex-basis: 100%;
    margin-top: 2rem;
  }
}
</style>