<template>
  <div id="app">
    <AppHeader />
    <div class="content">
      <HomePage />
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import HomePage from "./pages/HomePage.vue";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
    HomePage,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  font-family: Montserrat, Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* background: url('../public/img/apartments/apartment-1.jpeg') center no-repeat; */
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
