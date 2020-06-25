<template>
    <div id="app">
        <Header />
        <div id="nav">
        </div>
        <router-view />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Footer from "./components/layouts/Footer.vue";
import Header from "./components/layouts/Header.vue";
import Main from "./components/Main.vue";

export default {
    name: "app",
    components: {
        Footer,
        Header,
        Main
    }
};
</script>

<style lang="sass">
*
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif
html, body
  width:100%
  height:100%
  margin:0
  padding:0

</style>
