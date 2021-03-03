<template>
  <div class="bg-light demo-container">
    <!-- Nav -->
    <nav class="bg-primary nav-container">
      <div>Logo</div>
      <ul class="nav-link-container">
        <li><a class="text-nav text-light nav-item">Home</a></li>
        <li><a class="text-nav text-light nav-item">Products</a></li>
        <li><a class="text-nav text-light nav-item">About</a></li>
        <li><a class="text-nav text-light nav-item">Contact</a></li>
      </ul>
    </nav>
    <!-- Hero -->
    <section>
      <h1 class="text-h1">Hero Section</h1>
      <p>Some great content about this product or service.</p>
      <div>
        <button>Primary CTA</button>
      </div>
    </section>
    <!-- 3 Column Cards -->
    <section>
      <h2>Section Title For Cards</h2>
      <p>Centered descriptive text for the cards in this section.</p>
      <!-- Card -->
      <div>
        <h3>Card Title</h3>
        <p>About text...</p>
        <span>tag</span>
        <span>tag</span>
      </div>
      <!-- Card -->
      <div>
        <h3>Card Title</h3>
        <p>About text...</p>
        <span>tag</span>
        <span>tag</span>
      </div>
      <!-- Card -->
      <div>
        <h3>Card Title</h3>
        <p>About text...</p>
        <span>tag</span>
        <span>tag</span>
      </div>
    </section>
    <!-- Text Section -->
    <section>
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
  name: "Demo"
}
</script>

<style>
.demo-container {
  min-height: 100vh;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.nav-link-container {
  display: flex;
}
.nav-item {
  margin-left: 1rem;
  cursor: pointer;
}
</style>