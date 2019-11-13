<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
    <Footer />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Nav from './components/nav/index'
import Footer from './components/footer/index'
export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
</style>
