<template>
    <div id="app">
        <Header />
        <router-view id="mainpage" />
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
@font-face
  font-family: 'Hanken'
  src: url("./assets/font/Hanken-Light.ttf") format("truetype")

*
  font-family: 'Hanken'
  box-sizing: border-box
  // background: #3D3A3A
  // color: white

#mainpage
  text-align: center
  padding: 1em 4em

html, body
  width: 100%
  height: 100%
  margin: 0
  padding: 0
</style>
