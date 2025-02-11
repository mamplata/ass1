<template>
  <div id="app" class="container mt-4">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary rounded">
      <div class="container">
        <a class="navbar-brand" href="/">Portfolio</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/skills">Skills</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Custom Styles */
nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
