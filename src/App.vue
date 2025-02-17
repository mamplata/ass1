<template>
  <div id="app" class="dark-theme">
    <!-- Twitter-Style Dark Navbar -->
    <nav class="navbar shadow-sm">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- Twitter-style logo -->
        <a class="navbar-brand fw-bold text-uppercase" href="/">
          <i class="fas fa-briefcase"></i> Portfolio
        </a>

        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact-active-class="active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/skills" exact-active-class="active">Skills</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" exact-active-class="active">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Content Section -->
    <div class="container mt-5 mb-5">
      <router-view></router-view>
    </div>

    <!-- Fixed Footer -->
    <footer class="footer">
      <div class="container">
        <p>© 2025 Portfolio | <a href="https://twitter.com" target="_blank">Twitter</a> | <a href="https://github.com" target="_blank">GitHub</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* 🌙 Ensure Dark Theme Covers Full Page */
html, body, #app {
  height: 100%;
  background-color: #15202b; /* Ensure full dark background */
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

/* 🌙 Make Content Fill Remaining Space */
.container {
  flex: 1; /* Pushes footer to the bottom */
  max-width: 600px;
  margin-top: 80px;
  margin-bottom: 60px; /* Ensure space above footer */
}


/* ✨ Twitter-Styled Dark Navbar */
.navbar {
  background-color: #192734;
  border-bottom: 1px solid #38444d;
  padding: 12px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}

/* Logo & Branding */
.navbar-brand {
  font-size: 20px;
  font-weight: bold;
  color: #1da1f2 !important;
  display: flex;
  align-items: center;
}

.navbar-brand i {
  margin-right: 8px;
}

/* Twitter-like Navigation (Dark Mode) */
.nav .nav-link {
  color: #e1e8ed;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  transition: all 0.3s ease-in-out;
  border-radius: 50px;
}

.nav .nav-link:hover {
  background: rgba(29, 161, 242, 0.2);
  color: #1da1f2;
}

/* Active Link Styling */
.nav .active {
  font-weight: bold;
  color: #1da1f2;
}

/* Page Content Styling */
.container {
  max-width: 600px;
  margin-top: 80px;
  margin-bottom: 60px; /* Ensure space above footer */
}

/* 🌙 Fixed Footer (Dark) */
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #192734;
  border-top: 1px solid #38444d;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  color: #8899a6;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.3);
}

.footer a {
  color: #1da1f2;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
